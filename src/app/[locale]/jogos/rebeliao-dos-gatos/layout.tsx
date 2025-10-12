import { ReactNode } from 'react';
import Header from '../../../../components/Header/Header';
import { getRebeliaoLinks } from '../../../../content/rebeliao/links';
import { Locale } from '../../../../lib/i18n';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getFooterContent } from '../../../../content/getLocalizedContent';
import Footer from '../../../../components/Footer/Footer';
import { notFound } from 'next/navigation';
import { locales } from '../../../../lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as any)) notFound();

  const t = await getTranslations({ locale, namespace: 'Rebeliao' });

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

export default async function RebeliaoLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!locales.includes(locale as any)) notFound();
  const { links, menuItems, footerItems } = await getRebeliaoLinks(
    locale as Locale
  );
  const footerContent = await getFooterContent('footer', locale as Locale);

  return (
    <>
      <Header
        variant={'rebeliao'}
        links={links}
        menuItems={menuItems}
        isGame={true}
        gameTitle={locale === 'en' ? "Cats' Rebellion" : 'REBELIÃO DOS GATOS'}
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
