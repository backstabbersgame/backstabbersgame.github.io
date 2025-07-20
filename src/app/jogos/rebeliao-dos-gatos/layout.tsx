import Header from '../../../components/Header/Header';
import { footerItems, links, menuItems } from '../../../content/rebeliao/links';

export default function RebeliaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header
        variant={'rebeliao'}
        links={links}
        menuItems={menuItems}
        isGame={true}
        gameTitle={'REBELIÃO DOS GATOS'}
        isSubpage={true}
        subpageLink={links[0].href}
        footerItems={footerItems}
      />
      <main style={{ backgroundColor: 'white' }}>{children}</main>
    </>
  );
}
