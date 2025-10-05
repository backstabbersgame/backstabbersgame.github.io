import React from 'react';
import Image from 'next/image';
import {
  PlanetIcon,
  PuzzlePieceIcon,
  FlyingSaucerIcon,
  SketchLogoIcon,
  HouseIcon,
} from '@phosphor-icons/react/dist/ssr';
import {
  FooterItemsArray,
  LinksArray,
  MenuItemsArray,
} from '../../types/links';

export const links: LinksArray = [
  { id: 'inicio', name: 'Início', href: '/jogos/backstabbers' },
  {
    id: 'como-jogar',
    name: 'Como jogar',
    href: '/jogos/backstabbers/como-jogar',
  },
  {
    id: 'componentes',
    name: 'Componentes',
    href: '/jogos/backstabbers/componentes',
  },
  {
    id: 'casos-especiais',
    name: 'Casos especiais',
    href: '/jogos/backstabbers/casos-especiais',
  },
  {
    id: 'regras-opcionais',
    name: 'Regras opcionais',
    href: '/jogos/backstabbers/regras-opcionais',
  },
];

export const menuItems: MenuItemsArray = [
  {
    id: 'inicio',
    label: 'Backstabbers',
    icon: {
      svgActive: (
        <Image
          width={24}
          height={24}
          alt={'Espada com gradiente em azul e lilás'}
          src={'/images/icons/sword.svg'}
        />
      ),
      svgInactive: (
        <Image
          width={24}
          height={24}
          alt={'Espada com gradiente em cinza e branco'}
          src={'/images/icons/sword-inactive.svg'}
        />
      ),
    },
    href: '/jogos/backstabbers',
  },
  {
    id: 'como-jogar',
    label: 'Como jogar',
    icon: {
      svgActive: (
        <Image
          width={24}
          height={24}
          alt={'Planeta com gradiente em azul e lilás'}
          src={'/images/icons/planet.svg'}
        />
      ),
      svgInactive: (
        <Image
          width={24}
          height={24}
          alt={'Planeta com gradiente em cinza e branco'}
          src={'/images/icons/planet-inactive.svg'}
        />
      ),
    },
    href: '/jogos/backstabbers/como-jogar',
  },
  {
    id: 'componentes',
    label: 'Componentes',
    icon: {
      svgActive: (
        <Image
          width={24}
          height={24}
          alt={'Peça de quebra-cabeça com gradiente em azul e lilás'}
          src={'/images/icons/puzzle-piece.svg'}
        />
      ),
      svgInactive: (
        <Image
          width={24}
          height={24}
          alt={'Peça de quebra-cabeça com gradiente em cinza e branco'}
          src={'/images/icons/puzzle-piece-inactive.svg'}
        />
      ),
    },
    href: '/jogos/backstabbers/componentes',
  },
  {
    id: 'casos-especiais',
    label: 'Casos especiais',
    icon: {
      svgActive: (
        <Image
          width={24}
          height={24}
          alt={'Diamante com gradiente em azul e lilás'}
          src={'/images/icons/sketch-logo.svg'}
        />
      ),
      svgInactive: (
        <Image
          width={24}
          height={24}
          alt={'Diamante com gradiente em cinza e branco'}
          src={'/images/icons/sketch-logo-inactive.svg'}
        />
      ),
    },
    href: '/jogos/backstabbers/casos-especiais',
  },
  {
    id: 'regras-opcionais',
    label: 'Regras opcionais',
    icon: {
      svgActive: (
        <Image
          width={24}
          height={24}
          alt={'Disco voador com gradiente em azul e lilás'}
          src={'/images/icons/flying-saucer.svg'}
        />
      ),
      svgInactive: (
        <Image
          width={24}
          height={24}
          alt={'Disco voador  com gradiente em cinza e branco'}
          src={'/images/icons/flying-saucer-inactive.svg'}
        />
      ),
    },
    href: '/jogos/backstabbers/regras-opcionais',
  },
];

export const footerItems: FooterItemsArray = [
  {
    id: 'home',
    icon: <HouseIcon size={24} />,
    label: 'Voltar para Solara',
    href: '/',
  },
];
