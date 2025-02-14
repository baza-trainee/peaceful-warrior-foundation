'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

import SectionTitle from '@/components/ui/SectionTitle';

type BePartnerProps = {};

const BePartner: React.FC<BePartnerProps> = () => {
  // const t = useTranslations('HelpPage.Join');

  return (
    <section className="relative mx-auto pb-[60px] tablet:pb-[130px] laptop:max-w-[744px] desktop:max-w-[1440px] desktop:pb-[180px]">
      {/* {t('title')} */}
      <SectionTitle className="mx-auto mb-3 tablet:mb-6 desktop:mb-12">
        стати партнером
      </SectionTitle>
      <div className="mb-6 w-full tablet:mx-auto tablet:w-[674px] desktop:mb-10 desktop:w-[859px]">
        <p className="text-center text-sm leading-[22px] text-gray-text tablet:text-l tablet:leading-[26px] desktop:text-lg desktop:leading-8">
          {/* {t('text')} */}
          Доєднуйтесь, якщо хочете підтримати наших підопічних. Разом завжди
          краще, ніж поодинці!
        </p>
      </div>
    </section>
  );
};

export default BePartner;
