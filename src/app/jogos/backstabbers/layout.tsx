import Header from '../../../components/Header/Header';
import {
  footerItems,
  links,
  menuItems,
} from '../../../content/backstabbers/links';

export default function BackstabbersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header
        variant={'backstabbers'}
        links={links}
        menuItems={menuItems}
        isGame={true}
        gameTitle={'BACKSTABBERS'}
        isSubpage={true}
        subpageLink={links[0].href}
        footerItems={footerItems}
      />
      <main style={{ backgroundColor: 'white' }}>{children}</main>
    </>
  );
}
