'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

import SectionTitle from '@/components/ui/SectionTitle';
import BePartnerForm from '@/components/forms/BePartnerForm';

type BePartnerProps = {};

const BePartner: React.FC<BePartnerProps> = () => {
  const t = useTranslations('HelpPage.BePartner');

  return (
    <section className="relative mx-auto pb-[60px] tablet:pb-[130px] laptop:max-w-[744px] desktop:max-w-[1440px] desktop:pb-[180px]">
      <SectionTitle className="mx-auto mb-3 tablet:mb-6 desktop:mb-12">
        {t('title')}
      </SectionTitle>
      <div className="mb-6 w-full tablet:mx-auto tablet:w-[674px] desktop:mb-10 desktop:w-[859px]">
        <p className="text-center text-sm leading-[22px] text-gray-text tablet:text-l tablet:leading-[26px] desktop:text-lg desktop:leading-8">
          {t('text')}
        </p>
      </div>
      <BePartnerForm />
    </section>
  );
};

export default BePartner;
