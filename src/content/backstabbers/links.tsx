import React from 'react';
import Image from 'next/image';
import { HouseIcon } from '@phosphor-icons/react/dist/ssr';
import {
  FooterItemsArray,
  LinksArray,
  MenuItemsArray,
  LinkItem,
} from '../../types/links';
import { Locale } from '../../lib/i18n';

export async function getBackstabbersLinks(locale: Locale) {
  const { links, footer, menuLabels } = await import(
    `./backstabbers.${locale}.json`
  );

  const localizedLinks: LinksArray = links.map((link: LinkItem) => ({
    ...link,
    href: `/${locale}${link.href}`,
  }));

  const menuItems: MenuItemsArray = [
    {
      id: 'inicio',
      label: menuLabels.inicio,
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
      href: `/${locale}/jogos/backstabbers`,
    },
    {
      id: 'como-jogar',
      label: menuLabels['como-jogar'],
      icon: {
        svgActive: (
          <Image
            width={24}
            height={24}
            alt={'Planet with blue and lilac gradient'}
            src={'/images/icons/planet.svg'}
          />
        ),
        svgInactive: (
          <Image
            width={24}
            height={24}
            alt={'Planet with gray and white gradient'}
            src={'/images/icons/planet-inactive.svg'}
          />
        ),
      },
      href: `/${locale}/jogos/backstabbers/como-jogar`,
    },
    {
      id: 'componentes',
      label: menuLabels.componentes,
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
      href: `/${locale}/jogos/backstabbers/componentes`,
    },
    {
      id: 'casos-especiais',
      label: menuLabels['casos-especiais'],
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
      href: `/${locale}/jogos/backstabbers/casos-especiais`,
    },
    {
      id: 'regras-opcionais',
      label: menuLabels['regras-opcionais'],
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
      href: `/${locale}/jogos/backstabbers/regras-opcionais`,
    },
  ];

  const footerItems: FooterItemsArray = [
    {
      id: 'home',
      icon: <HouseIcon size={24} />,
      label: footer.label,
      href: `/${locale}`,
    },
  ];

  return { links: localizedLinks, menuItems, footerItems };
}
