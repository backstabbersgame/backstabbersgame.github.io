'use client';

import React from 'react';
import Image from 'next/image';
import Overview from '../../../../components/Overview/Overview';
import data from '../../../../content/decodica/decodica.json';
import styles from './page.module.scss';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import { VideoGallery } from '../../../../components/VideoGallery/VideoGallery';
import Newsletter from '../../../../components/Newsletter/Newsletter';
import Components from '../../../../components/Components/Components';
import BulletedList from '../../../../components/BulletedList/BulletedList';
import NumberedList from '../../../../components/NumberedList/NumberedList';
import MixedList from '../../../../components/MixedList/MixedList';

const componentsMap = {
  Content: (isMobile: boolean, isTablet: boolean) => (
    <section className={styles.section}>
      <div className={`${styles.background} ${styles.gradient}`}>
        {(isTablet || !isMobile) && (
          <div className={styles.name}>
            <Image
              src='/images/icons/planet.svg'
              width={32}
              height={32}
              alt='Ícone de planeta com gradiente azul e lilás'
            />
            <h1 className={styles.h1}>Como jogar</h1>
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.left}>
            <Overview data={data} />
            <BulletedList
              data={data.comoJogar}
              section='goal'
              color={
                isMobile
                  ? data.comoJogar.goal.backgroundMobile
                  : data.comoJogar.goal.background
              }
            />
          </div>
          <NumberedList
            data={data.comoJogar}
            section='mechanics'
            color={
              isMobile
                ? data.comoJogar.mechanics.backgroundMobile
                : data.comoJogar.mechanics.background
            }
          />
        </div>
      </div>
      <Components data={data} />
      {/* DECO */}
      <div className={`${styles.background2} ${styles.gray}`}>
        <div className={styles.container}>
          <h2 className={styles.h2}>{data.comoJogar.deco.title}</h2>
          <div className={styles.content2}>
            <BulletedList
              data={data.comoJogar.deco}
              section='goalD'
              color={
                isMobile || isTablet
                  ? data.comoJogar.deco.goalD.backgroundMobile
                  : data.comoJogar.deco.goalD.background
              }
            />
            <BulletedList
              data={data.comoJogar.deco}
              section='preparation'
              color={
                isMobile || isTablet
                  ? data.comoJogar.deco.preparation.backgroundMobile
                  : data.comoJogar.deco.preparation.background
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.content2}>
        <BulletedList
          data={data.comoJogar.deco}
          section='generalRules'
          color={
            isMobile || isTablet
              ? data.comoJogar.deco.generalRules.backgroundMobile
              : data.comoJogar.deco.generalRules.background
          }
        />
        <BulletedList
          data={data.comoJogar.deco}
          section='endRound'
          color={
            isMobile || isTablet
              ? data.comoJogar.deco.endRound.backgroundMobile
              : data.comoJogar.deco.endRound.background
          }
        />
      </div>
      <div className={`${styles.background2} ${styles.gray}`}>
        <div className={styles.content2}>
          <BulletedList
            data={data.comoJogar.deco}
            section='score'
            color={
              isMobile || isTablet
                ? data.comoJogar.deco.score.backgroundMobile
                : data.comoJogar.deco.score.background
            }
          />
          <BulletedList
            data={data.comoJogar.deco}
            section='endGame'
            color={
              isMobile || isTablet
                ? data.comoJogar.deco.endGame.backgroundMobile
                : data.comoJogar.deco.endGame.background
            }
          />
        </div>
      </div>
      {/* DICA */}
      <div
        className={`${styles.background2} ${isMobile || isTablet ? styles.gray : styles.white}`}
      >
        <div className={styles.container}>
          <h2 className={styles.h2}>{data.comoJogar.dica.title}</h2>
          <div className={styles.content2}>
            <BulletedList
              data={data.comoJogar.dica}
              section='goalD'
              color={
                isMobile || isTablet
                  ? data.comoJogar.dica.goalD.backgroundMobile
                  : data.comoJogar.dica.goalD.background
              }
            />
            <BulletedList
              data={data.comoJogar.dica}
              section='preparation'
              color={
                isMobile || isTablet
                  ? data.comoJogar.dica.preparation.backgroundMobile
                  : data.comoJogar.dica.preparation.background
              }
            />
          </div>
        </div>
      </div>
      <div className={`${styles.background2} ${styles.gray}`}>
        <div className={styles.content2}>
          <MixedList
            data={data.comoJogar.dica}
            section='generalRules'
            color={
              isMobile || isTablet
                ? data.comoJogar.dica.generalRules.backgroundMobile
                : data.comoJogar.dica.generalRules.background
            }
          />
          <BulletedList
            data={data.comoJogar.dica}
            section='endRound'
            color={
              isMobile || isTablet
                ? data.comoJogar.dica.endRound.backgroundMobile
                : data.comoJogar.dica.endRound.background
            }
          />
        </div>
      </div>
      <div className={`${styles.background2} ${styles.white}`}>
        <div className={styles.content2}>
          <BulletedList
            data={data.comoJogar.dica}
            section='score'
            color={
              isMobile || isTablet
                ? data.comoJogar.dica.score.backgroundMobile
                : data.comoJogar.dica.score.background
            }
          />
          <BulletedList
            data={data.comoJogar.dica}
            section='endGame'
            color={
              isMobile || isTablet
                ? data.comoJogar.dica.endGame.backgroundMobile
                : data.comoJogar.dica.endGame.background
            }
          />
        </div>
      </div>
      {/* DOCA */}
      <div className={`${styles.background2} ${styles.gray}`}>
        <div className={styles.container}>
          <h2 className={styles.h2}>{data.comoJogar.doca.title}</h2>
          <div className={styles.content2}>
            <BulletedList
              data={data.comoJogar.doca}
              section='goalD'
              color={
                isMobile || isTablet
                  ? data.comoJogar.doca.goalD.backgroundMobile
                  : data.comoJogar.doca.goalD.background
              }
            />
            <BulletedList
              data={data.comoJogar.doca}
              section='preparation'
              color={
                isMobile || isTablet
                  ? data.comoJogar.doca.preparation.backgroundMobile
                  : data.comoJogar.doca.preparation.background
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.content2}>
        <BulletedList
          data={data.comoJogar.doca}
          section='generalRules'
          color={
            isMobile || isTablet
              ? data.comoJogar.doca.generalRules.backgroundMobile
              : data.comoJogar.doca.generalRules.background
          }
        />
        <BulletedList
          data={data.comoJogar.doca}
          section='endRound'
          color={
            isMobile || isTablet
              ? data.comoJogar.doca.endRound.backgroundMobile
              : data.comoJogar.doca.endRound.background
          }
        />
      </div>
      <div className={`${styles.background2} ${styles.gray}`}>
        <div className={styles.content2}>
          <BulletedList
            data={data.comoJogar.doca}
            section='score'
            color={
              isMobile || isTablet
                ? data.comoJogar.doca.score.backgroundMobile
                : data.comoJogar.doca.score.background
            }
          />
          <BulletedList
            data={data.comoJogar.doca}
            section='endGame'
            color={
              isMobile || isTablet
                ? data.comoJogar.doca.endGame.backgroundMobile
                : data.comoJogar.doca.endGame.background
            }
          />
        </div>
      </div>
      {/* CACO */}
      <div
        className={`${styles.background2} ${isMobile || isTablet ? styles.gray : styles.white}`}
      >
        <div className={styles.container}>
          <h2 className={styles.h2}>{data.comoJogar.caco.title}</h2>
          <div className={styles.content2}>
            <BulletedList
              data={data.comoJogar.caco}
              section='goalD'
              color={
                isMobile || isTablet
                  ? data.comoJogar.caco.goalD.backgroundMobile
                  : data.comoJogar.caco.goalD.background
              }
            />
            <BulletedList
              data={data.comoJogar.caco}
              section='preparation'
              color={
                isMobile || isTablet
                  ? data.comoJogar.caco.preparation.backgroundMobile
                  : data.comoJogar.caco.preparation.background
              }
            />
          </div>
        </div>
      </div>
      <div className={`${styles.background2} ${styles.gray}`}>
        <div className={styles.content2}>
          <MixedList
            data={data.comoJogar.caco}
            section='generalRules'
            color={
              isMobile || isTablet
                ? data.comoJogar.caco.generalRules.backgroundMobile
                : data.comoJogar.caco.generalRules.background
            }
          />
          <BulletedList
            data={data.comoJogar.caco}
            section='endGame'
            color={
              isMobile || isTablet
                ? data.comoJogar.caco.endGame.backgroundMobile
                : data.comoJogar.caco.endGame.background
            }
          />
        </div>
      </div>
      {/* CADE */}
      <div
        className={`${styles.background2} ${isMobile || isTablet ? styles.gray : styles.white}`}
      >
        <div className={styles.container}>
          <h2 className={styles.h2}>{data.comoJogar.cade.title}</h2>
          <div className={styles.content2}>
            <BulletedList
              data={data.comoJogar.cade}
              section='goalD'
              color={
                isMobile || isTablet
                  ? data.comoJogar.cade.goalD.backgroundMobile
                  : data.comoJogar.cade.goalD.background
              }
            />
            <BulletedList
              data={data.comoJogar.cade}
              section='preparation'
              color={
                isMobile || isTablet
                  ? data.comoJogar.cade.preparation.backgroundMobile
                  : data.comoJogar.cade.preparation.background
              }
            />
          </div>
        </div>
      </div>
      <div className={`${styles.background2} ${styles.gray}`}>
        <div className={styles.content2}>
          <BulletedList
            data={data.comoJogar.cade}
            section='generalRules'
            color={
              isMobile || isTablet
                ? data.comoJogar.cade.generalRules.backgroundMobile
                : data.comoJogar.cade.generalRules.background
            }
          />
          <BulletedList
            data={data.comoJogar.cade}
            section='endRound'
            color={
              isMobile || isTablet
                ? data.comoJogar.cade.endRound.backgroundMobile
                : data.comoJogar.cade.endRound.background
            }
          />
        </div>
      </div>
      <div className={`${styles.background2} ${styles.white}`}>
        <div className={styles.content2}>
          <BulletedList
            data={data.comoJogar.cade}
            section='score'
            color={
              isMobile || isTablet
                ? data.comoJogar.cade.score.backgroundMobile
                : data.comoJogar.cade.score.background
            }
          />
          <BulletedList
            data={data.comoJogar.cade}
            section='table'
            color={
              isMobile || isTablet
                ? data.comoJogar.cade.table.backgroundMobile
                : data.comoJogar.cade.table.background
            }
          />
        </div>
      </div>
      <div className={`${styles.background2} ${styles.gray}`}>
        <div className={styles.content2}>
          <BulletedList
            data={data.comoJogar.cade}
            section='endGame'
            color={
              isMobile || isTablet
                ? data.comoJogar.cade.endGame.backgroundMobile
                : data.comoJogar.cade.endGame.background
            }
          />
        </div>
      </div>
    </section>
  ),
  VideoGallery: () => <VideoGallery data={data} />,
  Newsletter: () => (
    <Newsletter
      variant='decodica'
      data={data}
    />
  ),
};

const ComoJogar = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';

  return (
    <>
      {data.comoJogar.sections
        .filter((section) => section.visible)
        .map((section) => {
          const Component = (componentsMap as any)[section.component];
          return Component ? (
            <React.Fragment key={section.component}>
              {Component(isMobile, isTablet)}
            </React.Fragment>
          ) : null;
        })}
    </>
  );
};

export default ComoJogar;
