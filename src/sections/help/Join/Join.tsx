'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

import SectionTitle from '@/components/ui/SectionTitle';
import JoinForm from '@/components/forms/JoinForm';

type JoinProps = {};

const Join: React.FC<JoinProps> = () => {
  const t = useTranslations('HelpPage.Join');

  return (
    <section className="pb-[60px] pt-6 tablet:pb-[130px] tablet:pt-8 desktop:pb-[100px] desktop:pt-8">
      <div className="mx-auto mb-3 w-[330px] tablet:mb-6 tablet:w-full desktop:mb-12">
        {' '}
        <SectionTitle className="">{t('title')}</SectionTitle>
      </div>

      <div className="mb-6 w-full tablet:mx-auto tablet:w-[674px] desktop:mb-10">
        <p className="text-gray-text text-center text-sm leading-[22px] tablet:text-l tablet:leading-[26px] desktop:text-lg desktop:leading-8">
          {t('text')}
        </p>
      </div>

      <JoinForm />
    </section>
  );
};

export default Join;
