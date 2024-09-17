import type { Metadata } from 'next';
import { montserrat } from '@/styles/fonts';
import '../../styles/globals.css';
import Footer from '@/components/layout/footer/Footer/Footer';
import Header from '@/components/layout/header/Header/Header';
import { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

export const metadata: Metadata = {
  title: 'Мирний воїн',
  description: 'Благодійний фонд',
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main id="main-content" className="container min-h-screen">
            {children}
          </main>
          <div id="modal-container" />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
