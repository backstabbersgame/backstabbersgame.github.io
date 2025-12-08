'use client';

import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import useBreakpoint from '../../../../../hooks/useBreakpoint';
import Components from '../../../../../components/Components/Components';
import { getLocalizedContent } from 'src/content/getLocalizedContent';
import { Locale } from '../../../../../lib/i18n';
import { VideoGallery } from '../../../../../components/VideoGallery/VideoGallery';
import Newsletter from '../../../../../components/Newsletter/Newsletter';

const Componentes = ({ params }: { params: Promise<{ locale: Locale }> }) => {
  const { locale } = use(params);
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const content = await getLocalizedContent('galhos', locale);
      setData(content);
    };
    fetchData();
  }, [locale]);

  if (!data) return;

  const componentsMap = {
    Content: (isMobile: boolean, isTablet: boolean) => (
      <section className={styles.section}>
        <div className={`${styles.background} ${styles.gradient}`}>
          {(isTablet || !isMobile) && (
            <div className={styles.name}>
              <Image
                src='/images/icons/bug.svg'
                width={32}
                height={32}
                alt='Ícone de inseto'
              />
              <h1 className={styles.h1}>{data.components.title}</h1>
            </div>
          )}
        </div>
        <Components data={data.components[1]} />
      </section>
    ),
    VideoGallery: () => <VideoGallery data={data} />,
    Newsletter: () => (
      <Newsletter
        variant='galhos'
        data={data}
      />
    ),
  };

  interface Section {
    visible: boolean;
    component: keyof typeof componentsMap;
  }

  return (
    <>
      {data.components.sections
        .filter((section: Section) => section.visible)
        .map((section: Section) => {
          const Component = componentsMap[section.component];
          return Component ? (
            <React.Fragment key={section.component}>
              {Component(isMobile, isTablet)}
            </React.Fragment>
          ) : null;
        })}
    </>
  );
};

export default Componentes;
