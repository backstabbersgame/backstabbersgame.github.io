'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import styles from './page.module.scss';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import { LevelKey, levels } from '../../../../content/backstabbers/levels';
import data from '../../../../content/backstabbers/backstabbers.json';
import cardsData from '../../../../content/backstabbers/cards.json';
import { Button, InputSelect } from '@backstabbersgame/design-system';
import ImageList from '../../../../components/ImageList/ImageList';
import { XIcon } from '@phosphor-icons/react/dist/ssr';

const CasosEspeciais = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';

  const [selectedLevel, setSelectedLevel] = useState<LevelKey | ''>('');
  const [card, setCard] = useState<string>('');
  const [showSection, setShowSection] = useState(false);

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLevel = e.target.value as LevelKey;
    setSelectedLevel(newLevel);

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
    const data = cardsData as any;

    return (
      <div className={styles.renderedSection}>
        <div className={styles.listHeader}>
          <div className={styles.headerContainer}>
            <p className={styles.headerText}>Combinações com</p>&nbsp;
            <p className={styles.selected}>{data[cardName].title}</p>&nbsp;
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
        {data[cardName]?.item1 && (
          <ImageList
            data={cardsData}
            section={card}
            color='white'
            size='20'
            removePaddingContainer={true}
          />
        )}
        {data[cardName]?.isDuoMode && (
          <div className={styles.duoMode}>
            <div className={styles.headerDuo}>
              <Image
                width={20}
                height={20}
                src={`/images/icons/star.svg`}
                alt={'Estrela com gradiente azul e lilás'}
              />
              <h2 className={styles.h2}>{data[cardName].duoMode.title}</h2>
            </div>
            <ImageList
              data={data[cardName]}
              section={'duoMode'}
              color='white'
              size='20'
              removePaddingContainer={true}
            />
          </div>
        )}
        {data[cardName]?.isExpMode && (
          <div className={styles.duoMode}>
            <div className={styles.headerDuo}>
              <Image
                width={20}
                height={20}
                src={`/images/icons/star.svg`}
                alt={'Estrela com gradiente azul e lilás'}
              />
              <h2 className={styles.h2}>{data[cardName].expMode.title}</h2>
            </div>
            <ImageList
              data={data[cardName]}
              section={'expMode'}
              color='white'
              size='20'
              removePaddingContainer={true}
            />
          </div>
        )}
        {data[cardName]?.isRulesOpt && (
          <div className={styles.duoMode}>
            <div className={styles.headerDuo}>
              <Image
                width={20}
                height={20}
                src={`/images/icons/star.svg`}
                alt={'Estrela com gradiente azul e lilás'}
              />
              <h2 className={styles.h2}>{data[cardName].rulesOpt.title}</h2>
            </div>
            <ImageList
              data={data[cardName]}
              section={'rulesOpt'}
              color='white'
              size='20'
              removePaddingContainer={true}
            />
          </div>
        )}
        {data[cardName]?.isInfMode && (
          <div className={styles.duoMode}>
            <div className={styles.headerDuo}>
              <Image
                width={20}
                height={20}
                src={`/images/icons/star.svg`}
                alt={'Estrela com gradiente azul e lilás'}
              />
              <h2 className={styles.h2}>{data[cardName].infMode.title}</h2>
            </div>
            <ImageList
              data={data[cardName]}
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

  return (
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
            <h1 className={styles.h1}>Casos especiais</h1>
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
  );

};

export default CasosEspeciais;
