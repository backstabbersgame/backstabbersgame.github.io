import React from 'react';
import Image from 'next/image';
import { HouseIcon } from '@phosphor-icons/react/dist/ssr';
import {
  FooterItemsArray,
  LinksArray,
  MenuItemsArray,
} from '../../types/links';

export const links: LinksArray = [
  { id: 'inicio', name: 'Início', href: '/jogos/decodica' },
  {
    id: 'como-jogar',
    name: 'Como jogar',
    href: '/jogos/decodica/como-jogar',
  },
];

export const menuItems: MenuItemsArray = [
  {
    id: 'inicio',
    label: 'Decodica',
    icon: {
      svgActive: (
        <Image
          width={24}
          height={24}
          alt={'Binóculos com gradiente em azul e lilás'}
          src={'/images/icons/binoculars.svg'}
        />
      ),
      svgInactive: (
        <Image
          width={24}
          height={24}
          alt={'Binóculos com gradiente em cinza e branco'}
          src={'/images/icons/binoculars-inactive.svg'}
        />
      ),
    },
    href: '/jogos/decodica',
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
    href: '/jogos/decodica/como-jogar',
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
