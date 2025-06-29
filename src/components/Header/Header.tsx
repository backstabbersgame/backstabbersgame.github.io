'use client';

import React, { useState } from 'react';
import {
  Header as HeaderComponent,
  ModalMenu,
} from '@backstabbersgame/design-system';
import { useRouter } from 'next/navigation';
import useBreakpoint from '../../hooks/useBreakpoint';
import { links, menuItems } from './headerLinks';
import { Variant } from '../../types/variant';

interface HeaderProps {
  variant: Variant;
  isGame?: boolean;
  gameTitle?: string;
}

const Header = ({ variant, isGame, gameTitle }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [openSubMenu, setOpenSubMenu] = useState<string | undefined>();
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const router = useRouter();

  const scrollToHash = (href: string) => {
    if (href.startsWith('#')) {
      const target = document.getElementById(href.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    // router.push('/');
    setActiveItem('');
    setOpenSubMenu(undefined);
    scrollToHash('');
  };

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  // const handleToggleSubMenu = (id?: string) => {
  //   if (id === 'jogos') {
  //     setOpenSubMenu((currentState) => (currentState === id ? undefined : id));
  //     setActiveItem('jogos');
  //   }
  // };

  const handleLinkClick = (href: string) => {
    // router.push(href);
    scrollToHash(href);
    const active = links.find((link) => link.href === href)?.name.toLowerCase();
    if (active) {
      setActiveItem(active);
      setOpenSubMenu(undefined);
    }
  };

  const handleAccountClick = () => {
    // router.push('/account');
    console.log('Clicou no botão do header');
  };

  const handleModalAccountClick = () => {
    // router.push('/account');
    console.log('Clicou no botão do modal');
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setOpenSubMenu(undefined);
  };

  const handleItemSelect = (id: string) => {
    if (id.startsWith('jogo')) {
      setActiveItem('jogos');
    } else {
      setActiveItem(id);
    }
  };

  const handleNavigate = (href: string) => {
    // router.push(href);
    scrollToHash(href);
    setIsMenuOpen(false);
    setOpenSubMenu(undefined);
    const menuItem = menuItems.find(
      (item) =>
        item.href === href //|| item.subItems?.some((sub) => sub.href === href)
    );

    if (menuItem) {
      setActiveItem(menuItem.id);
    }
  };

  return (
    <>
      <HeaderComponent
        links={links}
        activeLink={activeItem}
        onLogoClick={handleLogoClick}
        onMenuClick={handleMenuClick}
        onLinkClick={handleLinkClick}
        onAccountClick={handleAccountClick}
        variant={variant}
      />
      <ModalMenu
        isGame={isGame}
        gameTitle={gameTitle}
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        activeItem={activeItem}
        onItemSelect={handleItemSelect}
        customItems={menuItems}
        // openSubMenu={openSubMenu}
        // onToggleSubMenu={handleToggleSubMenu}
        onNavigate={handleNavigate}
        isSubpage={false}
        customFooterItems={undefined}
        // footerButton={
        //   isMobile
        //     ? {
        //         label: 'Minha Conta',
        //         onClick: handleModalAccountClick,
        //       }
        //     : undefined
        // }
      />
    </>
  );
};

export default Header;
