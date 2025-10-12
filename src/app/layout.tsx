import { ReactNode } from 'react';
import './globals.scss';
import 'dotenv/config';
import ClientProvider from './ClientProvider';
import '@backstabbersgame/design-system/styles/index.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html>
      <body suppressHydrationWarning>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
