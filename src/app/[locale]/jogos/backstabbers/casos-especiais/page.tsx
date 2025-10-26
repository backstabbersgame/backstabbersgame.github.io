'use client';

import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import useBreakpoint from '../../../../../hooks/useBreakpoint';

import { Button, InputSelect } from '@backstabbersgame/design-system';
import ImageList from '../../../../../components/ImageList/ImageList';
import { XIcon } from '@phosphor-icons/react/dist/ssr';
import {
  getLevelsContent,
  getLocalizedContent,
} from '../../../../../content/getLocalizedContent';
import { Locale } from '../../../../../lib/i18n';
import { VideoGallery } from '../../../../../components/VideoGallery/VideoGallery';
import Newsletter from '../../../../../components/Newsletter/Newsletter';
import { LevelKey } from '../../../../../content/backstabbers/levels.en';

const CasosEspeciais = ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = use(params);
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';

  const [selectedLevel, setSelectedLevel] = useState<LevelKey | ''>('');
  const [card, setCard] = useState<string>('');
  const [showSection, setShowSection] = useState(false);
  const [data, setData] = useState<any>(null);
  const [cardsData, setCardsData] = useState<any>(null);
  const [levels, setLevels] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const content = await getLocalizedContent('backstabbers', locale);
      setData(content);

      const levelsData = await getLevelsContent('levels', locale);
      setLevels(levelsData);
    };
    fetchData();

    const fetchCard = async () => {
      const content = await getLocalizedContent(
        'backstabbers',
        locale,
        'cards'
      );
      setCardsData(content);
    };
    fetchCard();
  }, [locale]);

  if (!data) return;

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLevel = e.target.value as LevelKey;
    setSelectedLevel(newLevel);

    console.log('newlevel',newLevel);
    console.log('levels',levels);
    console.log('selecionado', levels[newLevel]);

    if (newLevel && levels[newLevel]) {
      const [firstKey] = Object.keys(levels[newLevel]);
      setCard(firstKey);
    } else {
      setCard('');
    }
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCard(e.target.value);
  };

  const cards = selectedLevel ? levels[selectedLevel] : {};

  const renderSection = (card: string) => {
    const cardName = card;
    const selectedCard = data.casosEspeciais.description;

    return (
      <div className={styles.renderedSection}>
        <div className={styles.listHeader}>
          <div className={styles.headerContainer}>
            <p className={styles.headerText}>{selectedCard}</p>&nbsp;
            <p className={styles.selected}>{cardsData[cardName].title}</p>&nbsp;
            <button
              type='button'
              onClick={() => {
                setSelectedLevel('');
                setCard('');
                setShowSection(false);
              }}
              className={styles.clearButton}
              aria-label='Limpar pesquisa'
            >
              <XIcon
                size={16}
                color='#4B5563'
              />
            </button>
          </div>
        </div>
        {cardsData[cardName]?.item1 && (
          <ImageList
            data={cardsData}
            section={card}
            color='white'
            size='20'
            removePaddingContainer={true}
          />
        )}
        {cardsData[cardName]?.isDuoMode && (
          <div className={styles.duoMode}>
            <div className={styles.headerDuo}>
              <Image
                width={20}
                height={20}
                src={`/images/icons/star.svg`}
                alt={'Estrela com gradiente azul e lilás'}
              />
              <h2 className={styles.h2}>{cardsData[cardName].duoMode.title}</h2>
            </div>
            <ImageList
              data={cardsData[cardName]}
              section={'duoMode'}
              color='white'
              size='20'
              removePaddingContainer={true}
            />
          </div>
        )}
        {cardsData[cardName]?.isExpMode && (
          <div className={styles.duoMode}>
            <div className={styles.headerDuo}>
              <Image
                width={20}
                height={20}
                src={`/images/icons/star.svg`}
                alt={'Estrela com gradiente azul e lilás'}
              />
              <h2 className={styles.h2}>{cardsData[cardName].expMode.title}</h2>
            </div>
            <ImageList
              data={cardsData[cardName]}
              section={'expMode'}
              color='white'
              size='20'
              removePaddingContainer={true}
            />
          </div>
        )}
        {cardsData[cardName]?.isRulesOpt && (
          <div className={styles.duoMode}>
            <div className={styles.headerDuo}>
              <Image
                width={20}
                height={20}
                src={`/images/icons/star.svg`}
                alt={'Estrela com gradiente azul e lilás'}
              />
              <h2 className={styles.h2}>
                {cardsData[cardName].rulesOpt.title}
              </h2>
            </div>
            <ImageList
              data={cardsData[cardName]}
              section={'rulesOpt'}
              color='white'
              size='20'
              removePaddingContainer={true}
            />
          </div>
        )}
        {cardsData[cardName]?.isInfMode && (
          <div className={styles.duoMode}>
            <div className={styles.headerDuo}>
              <Image
                width={20}
                height={20}
                src={`/images/icons/star.svg`}
                alt={'Estrela com gradiente azul e lilás'}
              />
              <h2 className={styles.h2}>{cardsData[cardName].infMode.title}</h2>
            </div>
            <ImageList
              data={cardsData[cardName]}
              section={'infMode'}
              color='white'
              size='20'
              removePaddingContainer={true}
            />
          </div>
        )}
      </div>
    );
  };

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
              <h1 className={styles.h1}>{data.casosEspeciais.title}</h1>
            </div>
          )}
        </div>

        <div className={styles.verticalSections}>
          <div className={styles.cardsSection}>
            <h2 className={styles.title}>{data.casosEspeciais.menu.title}</h2>
            <div className={styles.inputs}>
              <InputSelect
                label={data.casosEspeciais.menu.niveis.title}
                options={data.casosEspeciais.menu.niveis.opcoes}
                value={selectedLevel}
                onChange={handleLevelChange}
                className={styles.niveis}
              />
              <InputSelect
                className={styles.nomes}
                label={data.casosEspeciais.menu.nomes.title}
                value={card}
                onChange={handleCardChange}
                options={[
                  data.casosEspeciais.menu.nomes.opcoes[0],
                  ...Object.entries(cards).map(([key, name]) => ({
                    value: key,
                    label: name,
                  })),
                ]}
                disabled={!selectedLevel}
              />
            </div>
            <Button
              variant='secondary'
              className={styles.button}
              arrowDown
              disabled={card && selectedLevel ? false : true}
              onClick={() => setShowSection(true)}
            >
              {data.casosEspeciais.menu.buttonLabel}
            </Button>
            <div className={styles.white}>
              {showSection && renderSection(card)}
            </div>
          </div>

          <div className={`${styles.background2} ${styles.gray}`}>
            <div className={styles.highlightCards}>
              <div className={styles.header}>
                <Image
                  width={20}
                  height={20}
                  src={`/images/icons/star.svg`}
                  alt={'Estrela com gradiente azul e lilás'}
                />
                <h2 className={styles.h2}>
                  {data.casosEspeciais.casosDestaque.title}
                </h2>
              </div>
              <ImageList
                data={data.casosEspeciais}
                section='casosDestaque'
                color='gray'
                size='20'
                removePaddingContainer={true}
              />
            </div>
          </div>
        </div>
      </section>
    ),
    VideoGallery: () => <VideoGallery data={data} />,
    Newsletter: () => (
      <Newsletter
        variant='backstabbers'
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
      {data.casosEspeciais.sections
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

export default CasosEspeciais;
