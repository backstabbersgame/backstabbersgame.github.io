'use client';

import React, { useRef, useState, useEffect } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import styles from './VideoGallery.module.scss';
import Image from 'next/image';
import useBreakpoint from 'src/hooks/useBreakpoint';
import { Button } from '@backstabbersgame/design-system';
import { YoutubeLogoIcon } from '@phosphor-icons/react/dist/ssr';

interface VideoGalleryProps {
  data: any;
  // videos: {
  //   videoId: string;
  //   title: string;
  //   isMain?: boolean;
  //   thumbnail?: string;
  // }[];
}

export const VideoGallery = ({ data }: VideoGalleryProps) => {
  const game = { ...data };

  const [mainIndex, setMainIndex] = useState(0);
  const { currentBreakpoint } = useBreakpoint();
  const isMobileOrTablet =
    currentBreakpoint === 'mobile' || currentBreakpoint === 'tablet';
  const formsSrc = isMobileOrTablet
    ? '/images/mobile/game-section-forms.svg'
    : '/images/desktop/game-section-forms.svg';
  const formsWidth = isMobileOrTablet ? 611 : 1440;
  const formsHeight = isMobileOrTablet ? 60.13 : 112.38;

  const carouselRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMainVideoEnd = () => {
    setMainIndex((prev) => (prev + 1) % game.videoGallery.videos.length);
  };

  const handleThumbnailClick = (idx: number) => {
    setMainIndex(idx);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const thumb = thumbRefs.current[mainIndex];
    if (!carousel || !thumb) return;

    const carouselWidth = carousel.offsetWidth;
    const thumbWidth = thumb.offsetWidth;
    const thumbLeft = thumb.offsetLeft;

    const scrollTo = thumbLeft - carouselWidth / 2 + thumbWidth / 2;

    carousel.scrollTo({
      left: scrollTo,
      behavior: 'smooth',
    });
    // const carouselRect = carousel.getBoundingClientRect();
    // const thumbRect = thumb.getBoundingClientRect();

    // if (thumbRect.right > carouselRect.right - 300) {
    //   carousel.scrollBy({
    //     left: thumbRect.right - carouselRect.right + 300,
    //     behavior: 'smooth',
    //   });
    // } else if (thumbRect.left < carouselRect.left + 300) {
    //   carousel.scrollBy({
    //     left: thumbRect.left - carouselRect.left - 300,
    //     behavior: 'smooth',
    //   });
    // }
  }, [mainIndex]);

  return (
    <section className={styles.videoGallerySection}>
      <div className={styles.videoGalleryContainer}>
        <div className={styles.header}>
          <Image
            width={isMobileOrTablet ? 24 : 32}
            height={isMobileOrTablet ? 24 : 32}
            src={`/images/icons/play-circle.svg`}
            alt={'Símbolo de Play com gradiente verde e azul'}
          />
          <h2 className={styles.h2}>
            <span className={styles.highlight}>Nossas</span> gameplays
          </h2>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet consectetur. Sit aliquet\\nelementum enim
            sed sed tristique fringilla.
          </p>
        </div>

        <div className={styles.videoGrid}>
          {/* Main Video */}
          <div className={styles.mainVideoWrapper}>
            <VideoPlayer
              videoId={game.videoGallery.videos[mainIndex].videoId}
              title={game.videoGallery.videos[mainIndex].title}
              isMain
              startMuted
              onEnded={handleMainVideoEnd}
            />
          </div>
        </div>
      </div>

      {/* Carrossel */}
      <div className={styles.carouselOverflowWrapper}>
        <div
          className={styles.thumbnailList}
          ref={carouselRef}
        >
          {game.videoGallery.videos.map(
            (
              video: { videoId: string; title: string; thumbnail: string },
              idx: number
            ) => {
              const isPlaying = idx === mainIndex;
              return (
                <div
                  key={video.videoId}
                  ref={(el) => {
                    thumbRefs.current[idx] = el;
                  }}
                  className={[
                    styles.thumbnailItem,
                    isPlaying ? styles.playingTitle : '',
                  ].join(' ')}
                  onClick={() => handleThumbnailClick(idx)}
                  tabIndex={0}
                  role='button'
                  aria-label={`Assistir: ${video.title}`}
                >
                  <div
                    className={[
                      styles.thumbImage,
                      isPlaying ? styles.playing : '',
                    ].join(' ')}
                  >
                    <img
                      src={video.thumbnail || ''}
                      alt={video.title}
                    />
                  </div>
                  <div
                    className={[
                      styles.thumbTitle,
                      isPlaying ? styles.playingTitle : '',
                    ].join(' ')}
                  >
                    {isPlaying ? 'Assistindo' : video.title}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <Button
        variant='tertiary'
        className={styles.btn}
        href={'https://www.youtube.com/@BackstabbersGame'}
      >
        Acessar o canal
        <YoutubeLogoIcon
          size={isMobileOrTablet ? 24 : 32}
          className={styles.icon}
        />
      </Button>
      <Image
        width={formsWidth}
        height={formsHeight}
        src={`${formsSrc}`}
        alt={'Ondas em degradê'}
        style={{ width: '100%', height: 'auto' }}
      />
    </section>
  );
};
