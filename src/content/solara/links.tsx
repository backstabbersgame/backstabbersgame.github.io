import React from 'react';
import {
  ChatsIcon,
  HouseIcon,
  RocketIcon,
  NewspaperIcon,
  UsersThreeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from '@phosphor-icons/react/dist/ssr';
import {
  FooterItemsArray,
  LinksArray,
  MenuItemsArray,
  LinkItem,
} from '../../types/links';
import { Locale } from '../../lib/i18n';

export async function getSolaraLinks(locale: Locale) {
  const { links, menuLabels } = await import(
    `./solara.${locale}.json`
  );

  const localizedLinks: LinksArray = links.map((link: LinkItem) => ({
    ...link,
    href: `/${locale}${link.href}`,
  }));

  const menuItems: MenuItemsArray = [
    {
      id: 'inicio',
      label: menuLabels.inicio,
      icon: <HouseIcon size={24} />,
      href: `/${locale}`,
    },
    {
      id: 'jogos',
      label: menuLabels.jogos,
      icon: <RocketIcon size={24} />,
      href: `/${locale}#jogos`,
      hasSubMenu: true,
      subItems: [
        {
          id: 'backstabbers',
          label: 'Backstabbers',
          href: `/${locale}/jogos/backstabbers`,
        },
        {
          id: 'armada',
          label: 'Armada dos Cães',
          href: `/${locale}/jogos/armada-dos-caes`,
        },
        {
          id: 'rebeliao',
          label: 'Rebelião dos Gatos',
          href: `/${locale}/jogos/rebeliao-dos-gatos`,
        },
        {
          id: 'ordem',
          label: 'Ordem ao Caos',
          href: `/${locale}/jogos/ordem-ao-caos`,
        },
        {
          id: 'decodica',
          label: 'Decodica',
          href: `/${locale}/jogos/decodica`,
        },
        {
          id: 'drag',
          label: 'Drag Slay',
          href: `/${locale}/jogos/drag-slay`,
        },
      ],
    },
    {
      id: 'lojinha',
      label: menuLabels.lojinha,
      icon: <ShoppingBagIcon size={24} />,
      href: `/${locale}#lojinha`,
    },
    {
      id: 'contato',
      label: menuLabels.contato,
      icon: <ChatsIcon size={24} />,
      href: `/${locale}#contato`,
    },
    {
      id: 'newsletter',
      label: menuLabels.newsletter,
      icon: <NewspaperIcon size={24} />,
      href: `/${locale}#newsletter`,
    },
  ];

  return { links: localizedLinks, menuItems };
}
