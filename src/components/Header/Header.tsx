'use client';

import React, { useEffect, useState } from 'react';
import {
  Header as HeaderComponent,
  ModalMenu,
} from '@backstabbersgame/design-system';
import { useRouter, usePathname } from 'next/navigation';
import useBreakpoint from '../../hooks/useBreakpoint';
import { Variant } from '../../types/variant';
import {
  FooterItemsArray,
  LinksArray,
  MenuItemsArray,
} from '../../types/links';

interface HeaderProps {
  variant: Variant;
  isGame?: boolean;
  gameTitle?: string;
  links: LinksArray;
  menuItems: MenuItemsArray;
  isSubpage?: boolean;
  subpageLink?: string;
  footerItems?: FooterItemsArray;
}

const Header = ({
  variant,
  isGame,
  gameTitle,
  links,
  menuItems,
  isSubpage,
  subpageLink,
  footerItems,
}: HeaderProps) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [activeItem, setActiveItem] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(menuItems[0].id);
  const [activeLink, setActiveLink] = useState(menuItems[0].href);
  const [pageTitle, setPageTitle] = useState('');
  const [openSubMenu, setOpenSubMenu] = useState<string | undefined>();
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const router = useRouter();
  const path = usePathname();
  const colorMode = variant === 'solara' ? 'light' : 'dark';
  const pathname = path.replace(/^\/(pt-BR|en)/, '');
  const [currentLocale, setCurrentLocale] = useState<'pt-BR' | 'en'>(
    path.startsWith('/pt-BR') ? 'pt-BR' : 'en'
  );

  useEffect(() => {
    setCurrentLocale(path.startsWith('/pt-BR') ? 'pt-BR' : 'en');
  }, [path, currentLocale]);

  const pageLink = () => {
    if (footerItems) {
      if (footerItems[0].id === 'home') {
        return footerItems[0].href;
      }
    }
  };

  useEffect(() => {
    if (variant === 'solara') {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setActiveItem(menuItems[0].id);
          setActiveLink(menuItems[0].href);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [menuItems, activeLink]);

  useEffect(() => {
    const menuMatch = menuItems.find((item) => item.href.includes(path));
    const linkMatch = links.find((link) => link.href.includes(path));

    if (menuMatch) {
      setActiveItem(menuMatch.id);
      setActiveLink(menuMatch.href);
    } else if (linkMatch) {
      setActiveLink(linkMatch.href);
      const fallbackId =
        menuItems.find((item) => item.href === linkMatch.href)?.id || '';
      setActiveItem(fallbackId);
    } else {
      setActiveLink(pathname);
      setActiveItem('');
    }

    const title =
      links.find((link) => link.href.endsWith(pathname) && link.id !== 'inicio')
        ?.name || '';
    setPageTitle(title);
  }, [pathname, menuItems, links, path]);

  const scrollToHash = (href: string) => {
    if (href.startsWith(`/${currentLocale}#`)) {
      const target = document.getElementById(
        href.replace(/^\/(pt-BR|en)/, '').substring(1)
      );
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLocaleChange = (locale: 'pt-BR' | 'en') => {
    const newPath = path.replace(/^\/(pt-BR|en)/, `/${locale}`);
    window.location.href = newPath;
  };

  const handleLogoClick = () => {
    if (pathname === menuItems[0].href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push(menuItems[0].href);
    }

    setActiveItem(menuItems[0].id);
    setActiveLink(menuItems[0].href);
    setOpenSubMenu(undefined);
    scrollToHash('');
  };

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleToggleSubMenu = (id?: string) => {
    setOpenSubMenu((currentState) => (currentState === id ? undefined : id));
    if (id) {
      setActiveItem(id);
    }
  };

  const handleLinkClick = (href: string) => {
    // if (href === pathname) {
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    //   setActiveItem(menuItems[0].id);
    //   setActiveLink(menuItems[0].href);
    //   return;
    // }

    if (href.startsWith(`/${currentLocale}#`)) {
      scrollToHash(href);
    } else {
      router.push(href);
    }

    setActiveLink(href);
    const menuItem = menuItems.find((item) => item.href === href);
    if (menuItem) {
      setActiveItem(menuItem.id);
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
    setActiveItem(id);
    const menuItem = menuItems.find((item) => item.id === id);
    if (menuItem) {
      setActiveLink(menuItem.href);
    }
  };

  const handleNavigate = (href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith(`/${currentLocale}#`)) {
      scrollToHash(href);
    } else {
      router.push(href);
    }

    setActiveLink(href);
    setOpenSubMenu(undefined);
    const menuItem = menuItems.find(
      (item) =>
        item.href === href || item.subItems?.some((sub) => sub.href === href)
    );

    if (menuItem) {
      setActiveItem(menuItem.id);
    }
  };

  return (
    <>
      <HeaderComponent
        links={links}
        activeLink={activeLink}
        onLogoClick={handleLogoClick}
        onMenuClick={handleMenuClick}
        onLinkClick={(href) => handleLinkClick(href)}
        onAccountClick={handleAccountClick}
        variant={variant}
        isSubpage={isSubpage}
        subpageLink={subpageLink}
        pageLink={pageLink()}
        gameTitle={gameTitle}
        pageTitle={pageTitle}
        pathname={activeLink.replace(/^\/(pt-BR|en)/, '')}
        onBack={() => router.back()}
        currentLocale={currentLocale}
        onLocaleChange={handleLocaleChange}
        options={[
          { value: 'pt-BR', label: '🇧🇷 Português' },
          { value: 'en', label: '🇬🇧 English' },
        ]}
        colorMode={colorMode}
      />
      <ModalMenu
        isGame={isGame}
        gameTitle={gameTitle}
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        activeItem={activeItem}
        onItemSelect={handleItemSelect}
        customItems={menuItems}
        openSubMenu={openSubMenu}
        onToggleSubMenu={handleToggleSubMenu}
        onNavigate={handleNavigate}
        isSubpage={isSubpage}
        customFooterItems={footerItems}
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
