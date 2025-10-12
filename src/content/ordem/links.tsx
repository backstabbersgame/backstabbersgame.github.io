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

export async function getOrdemLinks(locale: Locale) {
  const { links, footer, menuLabels } = await import(`./ordem.${locale}.json`);

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
      href: `/${locale}/jogos/ordem-ao-caos`,
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
      href: `/${locale}/jogos/ordem-ao-caos/como-jogar`,
    },
    {
      id: 'rebeliao',
      label: menuLabels.rebeliao,
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
      href: `/${locale}/jogos/rebeliao-dos-gatos`,
    },
    {
      id: 'armada',
      label: menuLabels.armada,
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
      href: `/${locale}/jogos/armada-dos-caes`,
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
