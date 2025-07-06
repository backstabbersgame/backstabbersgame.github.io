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

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // useEffect(() => {
  //   const container = document.getElementById('newsletter');
  //   if (container && variant === 'solara' && isMobile) {
  //     container.style.minHeight = `${window.innerHeight * 0.85}px`;
  //   } else if (container) {
  //     container.style.minHeight = '';
  //   }
  // }, [variant, isMobile]);

  if (width === null) {
    return null; 
  }

  const handleContainer = () => {
    if (variant === 'solara') {
      if (isMobile) {
        return  width === 768 ? { height: '100vh' } : { height: '85vh' };
      } else if (isTablet) {
        return { height: '294px' };
      }
    }
    if (variant === 'backstabbers') {
      if (isMobile) {
        return width === 768
          ? { height: '75vh' }
          : { height: 'clamp(500px, 70vh, 600px)' };
      } else if (isTablet) {
        return { height: '294px' };
      }
    }
    if (variant === 'ordem') {
      if (isMobile) {
        return width === 768
          ? { height: '75vh' }
          : { height: 'clamp(365px, 55vh, 70vh)' };
      } else if (isTablet) {
        return { height: '294px', justifyContent: 'normal' };
      }
    }
    if (variant === 'rebeliao') {
      if (isMobile) {
        return width === 768
          ? { height: '70vh' }
          : { height: 'clamp(365px, 50vh, 70vh)' };
      } else if (isTablet) {
        return { height: '294px', justifyContent: 'space-between' };
      } else {
        return {
          justifyContent: 'space-evenly',
        };
      }
    }
    if (variant === 'armada') {
      if (isMobile) {
        return width === 768
          ? { height: '70vh' }
          : { height: 'clamp(365px, 45vh, 70vh)' };
      } else if (isTablet) {
        return { height: '260px', justifyContent: 'space-between' };
      } else {
        return {
          justifyContent: 'normal',
        };
      }
    }
  };

  const handleImageContainer = (): React.CSSProperties => {
    if (variant === 'solara') {
      return isMobile
        ? {
            position: 'absolute',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: '1',
            display: 'flex',
            justifyContent: 'center',
          }
        : isTablet
          ? {
              // position: 'relative',
              // left: '-40px',
            }
          : {};
    }
    if (variant === 'backstabbers') {
      return isMobile
        ? {
            position: 'absolute',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: '1',
            display: 'flex',
            justifyContent: 'center',
          }
        : isTablet
          ? {
              // position: 'relative',
              // left: '-40px',
            }
          : {};
    }
    if (variant === 'ordem') {
      return isMobile
        ? {
            position: 'absolute',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: '1',
            display: 'flex',
            justifyContent: 'center',
          }
        : isTablet
          ? {
              // position: 'relative',
              // left: '-40px',
            }
          : {};
    }
    if (variant === 'rebeliao') {
      return isMobile
        ? {
            position: 'absolute',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: '1',
            display: 'flex',
            justifyContent: 'center',
          }
        : isTablet
          ? {
              // position: 'relative',
              // left: '25px',
            }
          : {
              /*position: 'relative', left: '100px'*/
            };
    }
    if (variant === 'armada') {
      return isMobile
        ? {
            position: 'absolute',
            left: '0',
            right: '0',
            bottom: '-7px',
            zIndex: '1',
            display: 'flex',
            justifyContent: 'center',
            // height: '40%',
          }
        : isTablet
          ? {
              position: 'absolute',
              left: '0',
              bottom: '0',
              zIndex: '1',
              display: 'flex',
              justifyContent: 'center',
            }
          : {
              position: 'absolute',
              left: '0',
              bottom: '0',
              zIndex: '1',
              display: 'flex',
              justifyContent: 'center',
            };
    }
    return {};
  };

  const handleImageSize = (): React.CSSProperties => {
    if (variant === 'solara') {
      return isMobile
        ? { width: '90%', height: 'auto' }
        : isTablet
          ? {
              width: 'auto',
              height: '325px',
            }
          : {
              width: 'auto',
              height: '410px',
            };
    }
    if (variant === 'backstabbers') {
      return isMobile
        ? { width: '115%', height: 'auto' }
        : isTablet
          ? {
              width: 'auto',
              height: '310px',
            }
          : {
              width: 'auto',
              height: '380px',
            };
    }
    if (variant === 'ordem') {
      return isMobile
        ? {
            width: '105%',
            height: 'auto',
            position: 'relative',
            right: '20px',
          }
        : isTablet
          ? {
              width: 'auto',
              height: '325px',
              position: 'relative',
              left: '50px',
            }
          : {
              width: 'auto',
              height: '380px',
            };
    }
    if (variant === 'rebeliao') {
      return isMobile
        ? {
            width: '100%',
            height: 'auto',
            position: 'relative',
            left: '10px',
          }
        : isTablet
          ? {
              width: 'auto',
              height: '305px',
              position: 'relative',
              left: '-5px',
            }
          : {
              width: 'auto',
              height: '380px',
            };
    }
    if (variant === 'armada') {
      return isMobile
        ? {
            width: '100%',
            height: 'auto',
            position: 'relative',
            transform: 'translateY(15%)',
          }
        : isTablet
          ? {
              width: 'auto',
              height: '345px',
              position: 'relative',
              transform: 'translateY(12%) translateX(-7%)',
            }
          : {
              width: 'auto',
              height: '480px',
              position: 'relative',
              transform: 'translateY(12%)',
            };
    } else {
      return {};
    }
  };

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
        style={handleContainer()}
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
          style={handleImageContainer()}
        >
          <Image
            width={imageWidth}
            height={imageHeight}
            src={`${basePath}${imageSrc}`}
            alt={content.newsletter.image.alt}
            className={styles.image}
            style={handleImageSize()}
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
