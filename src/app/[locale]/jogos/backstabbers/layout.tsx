import { ReactNode } from 'react';
import { getFooterContent } from '../../../../content/getLocalizedContent';
import Footer from '../../../../components/Footer/Footer';
import Header from '../../../../components/Header/Header';
import { getBackstabbersLinks } from '../../../../content/backstabbers/links';
import { Locale, locales } from '../../../../lib/i18n';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as any)) notFound();
  const t = await getTranslations({ locale, namespace: 'Backstabbers' });

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: '/images/favicon.ico',
    },
    // openGraph: {
    //   title: t('title'),
    //   description: t('description'),
    //   images: [
    //     {
    //       url: '/images/armada.png',
    //       alt: t('title'),
    //     },
    //   ],
    // },
  };
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function BackstabbersLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!locales.includes(locale as any)) notFound();
  const { links, menuItems, footerItems } = await getBackstabbersLinks(
    locale as Locale
  );
  const footerContent = await getFooterContent('footer', locale as Locale);

  return (
    <>
      <Header
        variant={'backstabbers'}
        links={links}
        menuItems={menuItems}
        isGame={true}
        gameTitle={'BACKSTABBERS'}
        isSubpage={true}
        subpageLink={links[0].href}
        footerItems={footerItems}
      />
      <main style={{ backgroundColor: 'white' }}>{children}</main>
      <Footer
        footer={footerContent}
      />
    </>
  );
}
