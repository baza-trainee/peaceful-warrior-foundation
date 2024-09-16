import type { Metadata } from 'next';
import { montserrat } from '@/styles/fonts';
import '../styles/globals.css';
import Footer from '@/components/layout/footer/Footer/Footer';
import Header from '@/components/layout/header/Header/Header';

export const metadata: Metadata = {
  title: 'Мирний воїн',
  description: 'Благодійний фонд',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <main id="main-content" className="container">
          {children}
        </main>
        <div id="modal-container" />
        <Footer />
      </body>
    </html>
  );
}
