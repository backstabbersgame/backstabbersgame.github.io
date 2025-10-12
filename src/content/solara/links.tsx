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
      ],
    },
    // {
    //   id: 'store',
    //   label: menuLabels.store,
    //   icon: <ShoppingBagIcon size={24} />,
    //   href: `/${locale}#store`,
    // },
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

// export const links = [
//   { id: 'inicio', name: 'Início', href: '/' },
//   { id: 'jogos', name: 'Jogos', href: '#jogos' },
//   { id: 'sobre', name: 'Sobre', href: '#sobre' },
//   // { name: 'Lojinha', href: '#lojinha' },
//   { id: 'newsletter', name: 'Newsletter', href: '#newsletter' },
//   // { name: 'Lojinha', href: '/lojinha' },
//   // { name: 'Contato', href: '/contato' },
// ];

// export const menuItems = [
//   {
//     id: 'inicio',
//     label: 'Início',
//     icon: <HouseIcon size={24} />,
//     href: '/',
//   },
//   {
//     id: 'jogos',
//     label: 'Jogos',
//     icon: <RocketIcon size={24} />,
//     href: '#jogos',
//     hasSubMenu: false,
//     // subItems: [
//     //   { id: '', label: '', href: '' },
//     //   { id: '', label: '', href: '' },
//     // ],
//   },
//   {
//     id: 'sobre',
//     label: 'Sobre',
//     icon: <UsersThreeIcon size={24} />,
//     href: '#sobre',
//   },
//   // {
//   //   id: 'store',
//   //   label: 'Lojinha',
//   //   icon: <ShoppingBagIcon size={24} />,
//   //   href: '#store',
//   // },
//   {
//     id: 'newsletter',
//     label: 'Newsletter',
//     icon: <NewspaperIcon size={24} />,
//     href: '#newsletter',
//   },
//   // {
//   //   id: 'lojinha',
//   //   label: 'Lojinha',
//   //   icon: <ShoppingCartIcon size={24} />,
//   //   href: '/lojinha',
//   // },
//   // {
//   //   id: 'contato',
//   //   label: 'Contato',
//   //   icon: <ChatsIcon size={24} />,
//   //   href: '/contato',
//   // },
// ];
