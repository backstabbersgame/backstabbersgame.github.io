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

export async function getGalhosLinks(locale: Locale) {
  const { links, footer, menuLabels } = await import(`./galhos.${locale}.json`);

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
            alt={'Brilhos com gradiente em azul e lilás'}
            src={'/images/icons/sparkle.svg'}
          />
        ),
        svgInactive: (
          <Image
            width={24}
            height={24}
            alt={'Brilhos com gradiente em cinza e branco'}
            src={'/images/icons/sparkle-inactive.svg'}
          />
        ),
      },
      href: `/${locale}/jogos/galhos`,
    },
    {
      id: 'como-jogar',
      label: menuLabels['como-jogar'],
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
      href: `/${locale}/jogos/galhos/como-jogar`,
    },
    {
      id: 'componentes',
      label: menuLabels.componentes,
      icon: {
        svgActive: (
          <Image
            width={24}
            height={24}
            alt={'Inseto com gradiente em azul e lilás'}
            src={'/images/icons/bug.svg'}
          />
        ),
        svgInactive: (
          <Image
            width={24}
            height={24}
            alt={'Inseto com gradiente em cinza e branco'}
            src={'/images/icons/bug-inactive.svg'}
          />
        ),
      },
      href: `/${locale}/jogos/galhos/componentes`,
    },
    {
      id: 'modo-noturno',
      label: menuLabels['modo-noturno'],
      icon: {
        svgActive: (
          <Image
            width={24}
            height={24}
            alt={'Lua com gradiente em azul e lilás'}
            src={'/images/icons/moon-stars.svg'}
          />
        ),
        svgInactive: (
          <Image
            width={24}
            height={24}
            alt={'Lua com gradiente em cinza e branco'}
            src={'/images/icons/moon-stars-inactive.svg'}
          />
        ),
      },
      href: `/${locale}/jogos/galhos/modo-noturno`,
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
