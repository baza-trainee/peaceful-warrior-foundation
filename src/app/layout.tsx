import type { Metadata } from 'next';
import { montserrat } from '@/styles/fonts';
import '../styles/globals.css';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Мирний воїн',
  description: 'Благодійний фонд',
};

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ua">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
      </head>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
