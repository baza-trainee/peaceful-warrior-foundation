'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

import SectionTitle from '@/components/ui/SectionTitle';
import SupportUsForm from '@/components/forms/SupportUsForm';

type SupportUsProps = {};

const SupportUs: React.FC<SupportUsProps> = () => {
  const t = useTranslations('HelpPage.SupportUs');
  return (
    <section className="relative mx-auto pb-[60px] tablet:pb-[80px] laptop:max-w-[744px] desktop:max-w-[1440px] desktop:pb-[100px]">
      <div className="mx-auto mb-3 w-[270px] tablet:mb-6 tablet:w-full desktop:mb-12">
        <SectionTitle>{t('title')}</SectionTitle>
      </div>
      <div className="mb-6 w-full tablet:mx-auto tablet:w-[680px] desktop:mb-10 desktop:w-[908px]">
        <p className="text-center text-sm leading-[22px] text-gray-text tablet:text-l tablet:leading-[26px] desktop:text-lg desktop:leading-8">
          {t('text')}
        </p>
      </div>
      <SupportUsForm />
    </section>
  );
};

export default SupportUs;
