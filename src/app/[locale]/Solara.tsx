import React from 'react';
import styles from './Solara.module.scss';
import Hero from '../../components/Hero/Hero';
import Game from '../../components/Game/Game';
import About from '../../components/About/About';
import Store from '../../components/Store/Store';
import Header from '../../components/Header/Header';
import Newsletter from '../../components/Newsletter/Newsletter';
import Contact from '../../components/Contact/Contact';
import { getSolaraLinks } from '../../content/solara/links';
import Footer from 'src/components/Footer/Footer';
import {
  getFooterContent,
  getLocalizedContent,
} from '../../content/getLocalizedContent';
import { Locale } from '../../lib/i18n';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as any)) notFound();

  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: '/images/favicon.ico',
    },
  };
}

const Solara = async ({ params }: { params: { locale: Locale } }) => {
  const { locale } = await params;
  if (!locales.includes(locale as any)) notFound();
  const { links, menuItems } = await getSolaraLinks(locale as Locale);
  const data = await getLocalizedContent('solara', locale);
  const gamesData = await getLocalizedContent('solara', locale, 'gamesData');
  const footerContent = await getFooterContent('footer', locale as Locale);

  const componentsMap = {
    Hero: () => <Hero hero={data.hero} />,
    Game: () => (
      <Game
        game={data.game}
        gamesData={gamesData}
      />
    ),
    About: () => <About about={data.about} />,
    Store: () => <Store store={data.store} />,
    Contact: () => <Contact contact={data.contact} />,
    Newsletter: () => (
      <Newsletter
        variant='solara'
        data={data}
      />
    ),
    Footer: () => <Footer footer={footerContent} />,
  };

  interface Section {
    visible: boolean;
    component: keyof typeof componentsMap;
  }

  return (
    <main>
      {/* Hero com header */}
      <div className={styles.stars}>
        <div className={styles['hero-section']}>
          <Header
            variant={'solara'}
            links={links}
            menuItems={menuItems}
          />
          {componentsMap.Hero()}
        </div>
      </div>

      {data.sections
        .filter(
          (section: Section) => section.visible && section.component !== 'Hero'
        )
        .map((section: Section, index: number) => {
          const Component = (componentsMap as any)[section.component];

          if (!Component) return null;

          if (section.component === 'Game') {
            return <React.Fragment key={index}>{Component()}</React.Fragment>;
          }
          if (section.component === 'About') {
            return (
              <React.Fragment key={index}>
                <div
                  style={{
                    width: '100%',
                    height: '4px',
                    backgroundColor: 'white',
                    position: 'relative',
                    zIndex: 5,
                    marginTop: '-2px',
                  }}
                />
                <div className={styles.white}>{Component()}</div>
              </React.Fragment>
            );
          }
          if (section.component === 'Store') {
            return (
              <div
                className={styles.gradient}
                key={index}
              >
                {Component()}
              </div>
            );
          }
          if (section.component === 'Contact') {
            return (
              <div
                className={styles.white}
                key={index}
              >
                {Component()}
              </div>
            );
          }

          if (section.component === 'Newsletter') {
            return <React.Fragment key={index}>{Component()}</React.Fragment>;
          }

          if (section.component === 'Footer') {
            return <React.Fragment key={index}>{Component()}</React.Fragment>;
          }
          return null;
        })}
    </main>
  );
};
export default Solara;
