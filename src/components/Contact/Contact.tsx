'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Contact.module.scss';
import useBreakpoint from '../../hooks/useBreakpoint';
import {
  Button,
  InputSelect,
  InputText,
  InputTextArea,
  Upload,
} from '@backstabbersgame/design-system';
import {
  AtIcon,
  HeartIcon,
  InstagramLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
} from '@phosphor-icons/react/dist/ssr';
import contactContent from '../../content/contact.json';
import ContactForm from '../ContactForm/ContactForm';

const contact = contactContent;

const Contact = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isMobileOrTablet = isMobile || currentBreakpoint === 'tablet';
  const [value, setValue] = useState('');
  const options = contact.selectOptions;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section className={styles.contact}>
      <div className={styles['contact-container']}>
        <header className={styles['contact-header']}>
          <Image
            width={isMobileOrTablet ? 24 : 32}
            height={isMobileOrTablet ? 24 : 32}
            src={`${contact.icon}`}
            alt={contact.iconAlt}
          />
          <div className={styles['section-title']}>
            <h2 className={styles.header}>
              {contact.title.replace(/\\n/g, '\n')}
            </h2>
            <p className={styles.p}>
              {contact.description.replace(/\\n/g, '\n')}
            </p>
          </div>
        </header>
        <section className={styles['contact-form']}>
          <ContactForm />
        </section>
        <section className={styles.community}>
          <div>
            <HeartIcon
              size={24}
              className={styles.heart}
            />
            <h4 className={styles.h4}>{contact.communityTitle}</h4>
          </div>
          <Button
            variant='secondary'
            className={styles['community-btn']}
            href={contact.communityLink}
          >
            {contact.communityButton}
          </Button>
        </section>
        <section className={styles.socials}>
          <div className={styles['socials-header']}>
            <AtIcon
              size={24}
              className={styles.at}
            />
            <h4 className={styles.h4}>{contact.socialsTitle}</h4>
          </div>
          <div className={styles.links}>
            {contact.socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className={styles['social-link']}
              >
                {social.icon === 'InstagramLogo' && (
                  <InstagramLogoIcon
                    size={24}
                    className={styles.instagram}
                  />
                )}
                {social.icon === 'YoutubeLogo' && (
                  <YoutubeLogoIcon
                    size={24}
                    className={styles.youtube}
                  />
                )}
                {social.icon === 'TiktokLogo' && (
                  <TiktokLogoIcon
                    size={24}
                    className={styles.tiktok}
                  />
                )}
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
