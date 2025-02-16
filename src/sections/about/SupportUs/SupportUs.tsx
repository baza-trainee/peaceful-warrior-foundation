// 'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import SectionTitle from '@/components/ui/SectionTitle';

import SupportUsForm from '@/components/forms/SupportUs/SupportUsForm';

type SupportUsProps = {};

const SupportUs = ({}: SupportUsProps) => {
  const t = useTranslations('Home.Support');

  return (
    <section id="support" className="pb-[60px] tablet:pb-20 desktop:pb-[100px]">
      <div className="m-auto desktop:w-[908px]">
        <SectionTitle className="mb-3 tablet:hidden">
          {t('title-mobile')}
        </SectionTitle>
        <SectionTitle className="hidden tablet:mb-6 tablet:block desktop:mb-12">
          {t('title-desktop')}
        </SectionTitle>
        <p className="mb-6 text-center text-md leading-[24.38px] tablet:hidden">
          {t('text-mobile')}
        </p>
        <p className="hidden text-center tablet:mb-10 tablet:block tablet:text-l tablet:leading-[26px] desktop:text-lg desktop:leading-[31.69px]">
          {t('text-tablet')}
        </p>

        {/* <DonateForm /> */}
        <SupportUsForm />
      </div>
    </section>
  );
};

export default SupportUs;
