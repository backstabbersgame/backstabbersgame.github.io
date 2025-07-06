import Header from '../../../components/Header/Header';
import { footerItems, links, menuItems } from '../../../content/armada/links';

export default function OrdemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header
        variant={'armada'}
        links={links}
        menuItems={menuItems}
        isGame={true}
        gameTitle={'ARMADA DOS CÃES'}
        isSubpage={true}
        subpageLink={links[0].href}
        footerItems={footerItems}
      />
      <main style={{ backgroundColor: 'white' }}>{children}</main>
    </>
  );
}
