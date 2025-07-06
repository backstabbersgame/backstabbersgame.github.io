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

export const links = [
  { id: 'inicio', name: 'Início', href: '/' },
  { id: 'jogos', name: 'Jogos', href: '#jogos' },
  { id: 'sobre', name: 'Sobre', href: '#sobre' },
  // { name: 'Lojinha', href: '#lojinha' },
  { id: 'newsletter', name: 'Newsletter', href: '#newsletter' },
  // { name: 'Lojinha', href: '/lojinha' },
  // { name: 'Contato', href: '/contato' },
];

export const menuItems = [
  {
    id: 'inicio',
    label: 'Início',
    icon: <HouseIcon size={24} />,
    href: '/',
  },
  {
    id: 'jogos',
    label: 'Jogos',
    icon: <RocketIcon size={24} />,
    href: '#jogos',
    hasSubMenu: false,
    // subItems: [
    //   { id: '', label: '', href: '' },
    //   { id: '', label: '', href: '' },
    // ],
  },
  {
    id: 'sobre',
    label: 'Sobre',
    icon: <UsersThreeIcon size={24} />,
    href: '#sobre',
  },
  // {
  //   id: 'store',
  //   label: 'Lojinha',
  //   icon: <ShoppingBagIcon size={24} />,
  //   href: '#store',
  // },
  {
    id: 'newsletter',
    label: 'Newsletter',
    icon: <NewspaperIcon size={24} />,
    href: '#newsletter',
  },
  // {
  //   id: 'lojinha',
  //   label: 'Lojinha',
  //   icon: <ShoppingCartIcon size={24} />,
  //   href: '/lojinha',
  // },
  // {
  //   id: 'contato',
  //   label: 'Contato',
  //   icon: <ChatsIcon size={24} />,
  //   href: '/contato',
  // },
];
