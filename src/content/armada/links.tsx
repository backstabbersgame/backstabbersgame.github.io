import React from 'react';
import Image from 'next/image';
import { HouseIcon } from '@phosphor-icons/react/dist/ssr';
import {
  FooterItemsArray,
  LinkItem,
  LinksArray,
  MenuItemsArray,
} from '../../types/links';
import { Locale } from '../../lib/i18n';

export async function getArmadaLinks(locale: Locale) {
  const { links, footer, menuLabels } = await import(`./armada.${locale}.json`);

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
            alt={'Dog with blue and lilac gradient'}
            src={'/images/icons/dog.svg'}
          />
        ),
        svgInactive: (
          <Image
            width={24}
            height={24}
            alt={'Dog with gray and white gradient'}
            src={'/images/icons/dog-inactive.svg'}
          />
        ),
      },
      href: `/${locale}/jogos/armada-dos-caes`,
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
      href: `/${locale}/jogos/armada-dos-caes/como-jogar`,
    },
    {
      id: 'rebeliao',
      label: menuLabels.rebeliao,
      icon: {
        svgActive: (
          <Image
            width={24}
            height={24}
            alt={'Cat with blue and lilac gradient'}
            src={'/images/icons/cat.svg'}
          />
        ),
        svgInactive: (
          <Image
            width={24}
            height={24}
            alt={'Cat with gray and white gradient'}
            src={'/images/icons/cat-inactive.svg'}
          />
        ),
      },
      href: `/${locale}/jogos/rebeliao-dos-gatos`,
    },
    {
      id: 'ordem',
      label: menuLabels.ordem,
      icon: {
        svgActive: (
          <Image
            width={24}
            height={24}
            alt={'Paw with blue and lilac gradient'}
            src={'/images/icons/paw-print.svg'}
          />
        ),
        svgInactive: (
          <Image
            width={24}
            height={24}
            alt={'Paw with gray and white gradient'}
            src={'/images/icons/paw-print-inactive.svg'}
          />
        ),
      },
      href: `/${locale}/jogos/ordem-ao-caos`,
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