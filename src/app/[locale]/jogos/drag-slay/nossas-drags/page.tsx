'use client';

import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import Overview from '../../../../../components/Overview/Overview';
import styles from './page.module.scss';
import useBreakpoint from '../../../../../hooks/useBreakpoint';
import { VideoGallery } from '../../../../../components/VideoGallery/VideoGallery';
import Newsletter from '../../../../../components/Newsletter/Newsletter';
import Components from '../../../../../components/Components/Components';
import BulletedList from '../../../../../components/BulletedList/BulletedList';
import NumberedList from '../../../../../components/NumberedList/NumberedList';
import MixedList from '../../../../../components/MixedList/MixedList';
import { getLocalizedContent } from '../../../../../content/getLocalizedContent';
import { Locale } from '../../../../../lib/i18n';
import ImageList from '../../../../../components/ImageList/ImageList';
import Table from '../../../../../components/Table/Table';

const NossasDrags = ({ params }: { params: Promise<{ locale: Locale }> }) => {
  const { locale } = use(params);
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';
  const [data, setData] = useState<any>(null);

  console.log(isTablet);
  useEffect(() => {
    const fetchData = async () => {
      const content = await getLocalizedContent('drag', locale);
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
                src='/images/icons/crown.svg'
                width={32}
                height={32}
                alt='Ícone de coroa'
              />
              <h1 className={styles.h1}>{data.nossasDrags.title}</h1>
            </div>
          )}
          <div className={styles.subtitle}>
            <p className={styles.p}>{data.nossasDrags.subtitle}</p>
          </div>
        </div>
        <div className={`${!isMobile ? styles.content2 : ''}`}>
          <div className={`${styles.background2} ${isMobile && styles.gray}`}>
            <div className={styles.content}>
              <div className={styles.header}>
                <Image
                  width={isMobile ? 20 : 32}
                  height={isMobile ? 20 : 32}
                  src={`/images/icons/star.svg`}
                  alt={'Estrela com gradiente azul e lilás'}
                />
                <h2>{data.nossasDrags.item1.title}</h2>
              </div>
              <Image
                src={data.nossasDrags.item1.image.src}
                width={data.nossasDrags.item1.image.width}
                height={data.nossasDrags.item1.image.height}
                alt={data.nossasDrags.item1.image.alt}
                className={styles.drag}
              />
            </div>
          </div>
          <div className={`${styles.background2} ${isMobile && styles.white}`}>
            <div className={styles.content}>
              <div className={styles.header}>
                <Image
                  width={isMobile ? 20 : 32}
                  height={isMobile ? 20 : 32}
                  src={`/images/icons/star.svg`}
                  alt={'Estrela com gradiente azul e lilás'}
                />
                <h2>{data.nossasDrags.item2.title}</h2>
              </div>
              <Image
                src={data.nossasDrags.item2.image.src}
                width={data.nossasDrags.item2.image.width}
                height={data.nossasDrags.item2.image.height}
                alt={data.nossasDrags.item2.image.alt}
                className={styles.drag}
              />
            </div>
          </div>
        </div>
        <div
          className={`${!isMobile && styles.content2} ${!isMobile && styles.gray}`}
        >
          <div className={`${styles.background2} ${isMobile && styles.gray}`}>
            <div className={styles.content}>
              <div className={styles.header}>
                <Image
                  width={isMobile ? 20 : 32}
                  height={isMobile ? 20 : 32}
                  src={`/images/icons/star.svg`}
                  alt={'Estrela com gradiente azul e lilás'}
                />
                <h2>{data.nossasDrags.item3.title}</h2>
              </div>
              <Image
                src={data.nossasDrags.item3.image.src}
                width={data.nossasDrags.item3.image.width}
                height={data.nossasDrags.item3.image.height}
                alt={data.nossasDrags.item3.image.alt}
                className={styles.drag}
              />
            </div>
          </div>
          <div className={`${styles.background2} ${isMobile && styles.white}`}>
            <div className={styles.content}>
              <div className={styles.header}>
                <Image
                  width={isMobile ? 20 : 32}
                  height={isMobile ? 20 : 32}
                  src={`/images/icons/star.svg`}
                  alt={'Estrela com gradiente azul e lilás'}
                />
                <h2>{data.nossasDrags.item4.title}</h2>
              </div>
              <Image
                src={data.nossasDrags.item4.image.src}
                width={data.nossasDrags.item4.image.width}
                height={data.nossasDrags.item4.image.height}
                alt={data.nossasDrags.item4.image.alt}
                className={styles.drag}
              />
            </div>
          </div>
        </div>
        <div className={`${!isMobile && styles.content2}`}>
          <div className={`${styles.background2} ${isMobile && styles.gray}`}>
            <div className={styles.content}>
              <div className={styles.header}>
                <Image
                  width={isMobile ? 20 : 32}
                  height={isMobile ? 20 : 32}
                  src={`/images/icons/star.svg`}
                  alt={'Estrela com gradiente azul e lilás'}
                />
                <h2>{data.nossasDrags.item5.title}</h2>
              </div>
              <Image
                src={data.nossasDrags.item5.image.src}
                width={data.nossasDrags.item5.image.width}
                height={data.nossasDrags.item5.image.height}
                alt={data.nossasDrags.item5.image.alt}
                className={styles.drag}
              />
            </div>
          </div>
          <div className={`${styles.background2} ${isMobile && styles.white}`}>
            <div className={styles.content}>
              <div className={styles.header}>
                <Image
                  width={isMobile ? 20 : 32}
                  height={isMobile ? 20 : 32}
                  src={`/images/icons/star.svg`}
                  alt={'Estrela com gradiente azul e lilás'}
                />
                <h2>{data.nossasDrags.item6.title}</h2>
              </div>
              <Image
                src={data.nossasDrags.item6.image.src}
                width={data.nossasDrags.item6.image.width}
                height={data.nossasDrags.item6.image.height}
                alt={data.nossasDrags.item6.image.alt}
                className={styles.drag}
              />
            </div>
          </div>
        </div>
        <div
          className={`${!isMobile && styles.content2} ${!isMobile && styles.gray}`}
        >
          <div className={`${styles.background2} ${isMobile && styles.gray}`}>
            <div className={styles.content}>
              <div className={styles.header}>
                <Image
                  width={isMobile ? 20 : 32}
                  height={isMobile ? 20 : 32}
                  src={`/images/icons/star.svg`}
                  alt={'Estrela com gradiente azul e lilás'}
                />
                <h2>{data.nossasDrags.item7.title}</h2>
              </div>
              <Image
                src={data.nossasDrags.item7.image.src}
                width={data.nossasDrags.item7.image.width}
                height={data.nossasDrags.item7.image.height}
                alt={data.nossasDrags.item7.image.alt}
                className={styles.drag}
              />
            </div>
          </div>
        </div>
      </section>
    ),
    Newsletter: () => (
      <Newsletter
        variant='drag'
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
      {data.comoJogar.sections
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

export default NossasDrags;
