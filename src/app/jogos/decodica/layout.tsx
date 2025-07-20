import Header from '../../../components/Header/Header';
import { footerItems, links, menuItems } from '../../../content/decodica/links';

export default function DecodicaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header
        variant={'decodica'}
        links={links}
        menuItems={menuItems}
        isGame={true}
        gameTitle={'Decodica'}
        isSubpage={true}
        subpageLink={links[0].href}
        footerItems={footerItems}
      />
      <main style={{ backgroundColor: 'white' }}>{children}</main>
    </>
  );
}
