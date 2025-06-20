import type { Metadata } from 'next';
import './globals.scss';
import 'dotenv/config';
import ClientProvider from './ClientProvider';
import '@backstabbersgame/design-system/styles/index.css';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Solara Studios',
  description:
    'A Solara é seu novo destino para diversão entre amigos! Um estúdio brasileiro, cheio de personalidade e representatividade',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='pt-BR'
      suppressHydrationWarning
    >
      <body>
        <ClientProvider>{children}</ClientProvider>
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
