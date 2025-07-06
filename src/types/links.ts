import { ReactElement } from 'react';

export type LinkItem = {
  id: string;
  name: string;
  href: string;
};

export type SubMenuItem = {
  id: string;
  label: string;
  href: string;
};

export type MenuItem = {
  id: string;
  label: string;
  icon: ReactElement | { svgActive: ReactElement; svgInactive: ReactElement };
  href: string;
  hasSubMenu?: boolean;
  subItems?: SubMenuItem[];
};

export type FooterItem = {
  id: string;
  label: string;
  icon: ReactElement;
  href: string;
};

export type LinksArray = LinkItem[];
export type MenuItemsArray = MenuItem[];
export type FooterItemsArray = FooterItem[];
