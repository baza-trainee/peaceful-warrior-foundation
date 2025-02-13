'use client';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useTranslations } from 'next-intl';

import SectionTitle from '@/components/ui/SectionTitle';

import JoinForm from '@/components/forms/JoinForm';

type JoinProps = {};

const Join: React.FC<JoinProps> = () => {
  const t = useTranslations('HelpPage.Join');

  return (
    <section className="pb-[60px] pt-6">
      <SectionTitle className="mb-3">{t('title')}</SectionTitle>
      <p className="text-gray-text leading-lh-20 mb-6 text-center text-sm">
        Ваші дії можуть змінити долі. Долучайтесь до нашої ініціативи як
        волонтер
      </p>

      <JoinForm />
    </section>
  );
};

export default Join;
