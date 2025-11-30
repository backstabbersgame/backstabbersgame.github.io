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

export async function getDragLinks(locale: Locale) {
  const { links, footer, menuLabels } = await import(`./drag.${locale}.json`);

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
      href: `/${locale}/jogos/drag-slay`,
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
      href: `/${locale}/jogos/drag-slay/como-jogar`,
    },
    {
      id: 'diversidade',
      label: menuLabels.diversidade,
      icon: {
        svgActive: (
          <Image
            width={24}
            height={24}
            alt={'Arco-íris com gradiente em azul e lilás'}
            src={'/images/icons/rainbow.svg'}
          />
        ),
        svgInactive: (
          <Image
            width={24}
            height={24}
            alt={'Arco-íris com gradiente em cinza e branco'}
            src={'/images/icons/rainbow-inactive.svg'}
          />
        ),
      },
      href: `/${locale}/jogos/drag-slay/modo-diversidade`,
    },
    {
      id: 'drags',
      label: menuLabels.drags,
      icon: {
        svgActive: (
          <Image
            width={24}
            height={24}
            alt={'Coroa com gradiente em azul e lilás'}
            src={'/images/icons/crown.svg'}
          />
        ),
        svgInactive: (
          <Image
            width={24}
            height={24}
            alt={'Coroa com gradiente em cinza e branco'}
            src={'/images/icons/crown-inactive.svg'}
          />
        ),
      },
      href: `/${locale}/jogos/drag-slay/nossas-drags`,
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
