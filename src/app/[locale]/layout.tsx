import '../../styles/globals.css';
import Header from '@/components/layout/header/Header/Header';
import { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import ScrollBtn from '@/components/ui/ScrollBtn/ScrollBtn';
import Footer from '@/components/layout/footer/Footer/Footer';

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <main
        id="main-content"
        className="min-h-screen w-full px-[16px] tablet:container"
      >
        {children}
      </main>
      <div id="modal-container" />
      <ScrollBtn />
      <Footer />
    </NextIntlClientProvider>
  );
}
