import '../../styles/globals.css';
import Footer from '@/components/layout/footer/Footer/Footer';
import Header from '@/components/layout/header/Header/Header';
import { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <main id="main-content" className="container min-h-screen">
        {children}
      </main>
      <div id="modal-container" />
      <Footer />
    </NextIntlClientProvider>
  );
}
