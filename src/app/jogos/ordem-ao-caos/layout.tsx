import Header from '../../../components/Header/Header';
import { footerItems, links, menuItems } from '../../../content/ordem/links';

export default function OrdemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header
        variant={'ordem'}
        links={links}
        menuItems={menuItems}
        isGame={true}
        gameTitle={'ORDEM AO CAOS'}
        isSubpage={true}
        subpageLink={links[0].href}
        footerItems={footerItems}
      />
      <main style={{ backgroundColor: 'white' }}>{children}</main>
    </>
  );
}
