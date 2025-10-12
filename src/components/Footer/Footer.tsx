'use client';

import React, { useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import { Button } from '@backstabbersgame/design-system';
import {
  BagIcon,
  ChatsIcon,
  HourglassLowIcon,
  InstagramLogoIcon,
  QuestionIcon,
  ShoppingCartIcon,
  SwordIcon,
  ThumbsUpIcon,
  TiktokLogoIcon,
  TruckIcon,
  UsersThreeIcon,
  YoutubeLogoIcon,
} from '@phosphor-icons/react/dist/ssr';
import useBreakpoint from '../../hooks/useBreakpoint';

const Footer = ({ footer }: { footer: any }) => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isMobileOrTablet = isMobile || currentBreakpoint === 'tablet';

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  if (!footer) return null;

  return (
    <section className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-content']}>
          <div className={styles.logo}>
            {isMobileOrTablet ? (
              <Image
                src={`${footer.logo.mobile}`}
                alt={footer.logo.alt}
                width={172.7}
                height={48}
              />
            ) : (
              <Image
                src={`${footer.logo.desktop}`}
                alt={footer.logo.alt}
                width={158.82}
                height={169}
              />
            )}
          </div>
          <div className={styles.right}>
            {footer.sections.map((section: any) => (
              <section
                key={section.title}
                className={styles[section.className]}
              >
                <h4 className={styles.h4}>{section.title}</h4>
                <div className={styles.links}>
                  {section.links.map((link: any, idx: any) => (
                    <Button
                      key={idx}
                      variant='link'
                      className={styles.button}
                      href={link.href}
                    >
                      {link.icon === 'Chats' && <ChatsIcon size={24} />}
                      {link.icon === 'Bag' && <BagIcon size={24} />}
                      {link.icon === 'Truck' && <TruckIcon size={24} />}
                      {link.icon === 'Sword' && <SwordIcon size={24} />}
                      {link.icon === 'HourglassLow' && (
                        <HourglassLowIcon size={24} />
                      )}
                      {link.icon === 'ShoppingCart' && (
                        <ShoppingCartIcon size={24} />
                      )}
                      {link.icon === 'UsersThree' && (
                        <UsersThreeIcon size={24} />
                      )}
                      {link.icon === 'ThumbsUp' && <ThumbsUpIcon size={24} />}
                      {link.icon === 'Question' && <QuestionIcon size={24} />}
                      {link.icon === 'InstagramLogo' && (
                        <InstagramLogoIcon size={24} />
                      )}
                      {link.icon === 'YoutubeLogo' && (
                        <YoutubeLogoIcon size={24} />
                      )}
                      {link.icon === 'TiktokLogo' && (
                        <TiktokLogoIcon size={24} />
                      )}
                      {link.label}
                    </Button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
        <section className={styles.brand}>
          <div className={styles['brand-buttons']}>
            {footer.legal.map((item: any, idx: any) => (
              <Button
                key={idx}
                className={styles['brand-btn']}
                variant='link'
                href={item.href}
              >
                {item.label}
              </Button>
            ))}
          </div>
          <span className={styles.copyright}>{footer.copyright}</span>
        </section>
      </div>
    </section>
  );
};

export default Footer;
