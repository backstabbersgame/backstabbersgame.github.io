'use client';

import React, { useEffect, useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import styles from './Newsletter.module.scss';
import { Button, InputText } from '@backstabbersgame/design-system';
import Image from 'next/image';
import useBreakpoint from '../../hooks/useBreakpoint';
import newsletterContent from '../../content/solara/newsletter.json';
import { validateEmail } from '../../utils/validateEmail';
import { Variant } from '../../types/variant';
import {
  handleContainer,
  handleImageContainer,
  handleImageSize,
} from './handleStyles';

interface NewsletterProps {
  variant: Variant;
  data: any;
}

const Newsletter = ({ variant, data }: NewsletterProps) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';
  const [width, setWidth] = useState<number | null>(null);

  const content = { ...data };

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const imageSrc = isMobile
    ? content.newsletter.image.mobile
    : content.newsletter.image.desktop;
  const imageWidth = isMobile ? 320 : 620;
  const imageHeight = isMobile ? 285 : 394;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    if (!email.trim() || !validateEmail(email)) {
      setError(content.newsletter.message.invalid);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'subscribers'), {
        email,
        createdAt: Timestamp.now(),
      });

      setStatus('success');
      setEmail('');
      setError('');
    } catch (error) {
      console.error('Erro ao salvar e-mail:', error);
      setStatus('error');
    }
  };

  return (
    <section className={styles.newsletter}>
      <div
        id='newsletter'
        className={styles['newsletter-container']}
        style={handleContainer(variant)}
      >
        <div className={styles['newsletter-content']}>
          <div className={styles['newsletter-title']}>
            <h1 className={styles.header}>
              {content.newsletter.title.replace(/\\n/g, '\n')}
            </h1>
            <p className={styles.p}>
              {content.newsletter.description.replace(/\\n/g, '\n')}
            </p>
          </div>

          {/* {variant === 'solara' || variant === 'ordem' ? ( */}
          <form
            onSubmit={handleSubmit}
            noValidate
          >
            <InputText
              placeholder={content.newsletter.emailPlaceholder}
              className={styles.email}
              type='email'
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
                setStatus('idle');
              }}
              error={error ? error : ''}
            />
            <Button
              variant='secondary'
              className={styles.btn}
              type='submit'
            >
              {content.newsletter.buttonLabel}
              <Image
                width={24}
                height={24}
                src={`${content.newsletter.buttonIcon.src}`}
                alt={content.newsletter.buttonIcon.alt}
                className={styles.icon}
              />
            </Button>
            <div className={styles['status-container']}>
              <p
                className={`${styles.message} ${
                  status === 'success' ? styles.success : ''
                } ${status === 'error' ? styles.error : ''}`}
              >
                {status === 'success' && content.newsletter.message.success}
                {status === 'error' && content.newsletter.message.error}
              </p>
            </div>
          </form>
          {/* ) : (
            <Button
              variant='secondary'
              className={styles.btn}
              href={content.newsletter.href}
            >
              {content.newsletter.buttonLabel}
              <Image
                width={24}
                height={24}
                src={`${basePath}${content.newsletter.buttonIcon.src}`}
                alt={content.newsletter.buttonIcon.alt}
                className={styles.icon}
              />
            </Button>
          )} */}
        </div>
        <div
          // className={styles['image-container']}
          style={handleImageContainer(variant)}
        >
          <Image
            width={imageWidth}
            height={imageHeight}
            src={`${basePath}${imageSrc}`}
            alt={content.newsletter.image.alt}
            className={styles.image}
            style={handleImageSize(variant)}
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
