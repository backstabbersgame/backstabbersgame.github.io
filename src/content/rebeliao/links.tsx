import React from 'react';
import Image from 'next/image';
import { HouseIcon } from '@phosphor-icons/react/dist/ssr';
import {
  FooterItemsArray,
  LinksArray,
  MenuItemsArray,
} from '../../types/links';

export const links: LinksArray = [
  { id: 'inicio', name: 'Início', href: '/jogos/rebeliao-dos-gatos' },
  {
    id: 'como-jogar',
    name: 'Como jogar',
    href: '/jogos/rebeliao-dos-gatos/como-jogar',
  },
  { id: 'armada', name: 'Armada dos Cães', href: '/jogos/armada-dos-caes' },
  { id: 'ordem', name: 'Ordem ao Caos', href: '/jogos/ordem-ao-caos' },
];

export const menuItems: MenuItemsArray = [
  {
    id: 'inicio',
    label: 'Rebelião dos Gatos',
    icon: {
      svgActive: (
        <Image
          width={24}
          height={24}
          alt={'Gato com gradiente em azul e lilás'}
          src={'/images/icons/cat.svg'}
        />
      ),
      svgInactive: (
        <Image
          width={24}
          height={24}
          alt={'Gato com gradiente em cinza e branco'}
          src={'/images/icons/cat-inactive.svg'}
        />
      ),
    },
    href: '/jogos/rebeliao-dos-gatos',
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
    href: '/jogos/rebeliao-dos-gatos/como-jogar',
  },
  {
    id: 'armada',
    label: 'Armada dos Cães',
    icon: {
      svgActive: (
        <Image
          width={24}
          height={24}
          alt={'Cachorro com gradiente em azul e lilás'}
          src={'/images/icons/dog.svg'}
        />
      ),
      svgInactive: (
        <Image
          width={24}
          height={24}
          alt={'Cachorro com gradiente em cinza e branco'}
          src={'/images/icons/dog-inactive.svg'}
        />
      ),
    },
    href: '/jogos/armada-dos-caes',
  },
  {
    id: 'ordem',
    label: 'Ordem ao Caos',
    icon: {
      svgActive: (
        <Image
          width={24}
          height={24}
          alt={'Pegada com gradiente em azul e lilás'}
          src={'/images/icons/paw-print.svg'}
        />
      ),
      svgInactive: (
        <Image
          width={24}
          height={24}
          alt={'Pegada com gradiente em cinza e branco'}
          src={'/images/icons/paw-print-inactive.svg'}
        />
      ),
    },
    href: '/jogos/ordem-ao-caos',
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
