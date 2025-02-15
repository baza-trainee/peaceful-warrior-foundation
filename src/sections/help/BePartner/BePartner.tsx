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
      {/* decor */}
      {/* tabl pink */}
      <div className="-left-8 hidden tablet:absolute tablet:bottom-[90px] tablet:block tablet:h-[301px] tablet:w-[190px] tablet:bg-[url('/assets/images/Help/BePartner/vector2.png')] tablet:bg-cover tablet:bg-center tablet:bg-no-repeat desktop:hidden" />
      {/* desk pink */}
      <div className="hidden desktop:absolute desktop:-left-[150px] desktop:bottom-[80px] desktop:block desktop:h-[451px] desktop:w-[427px] desktop:bg-[url('/assets/images/Help/BePartner/vector21.png')] desktop:bg-cover desktop:bg-center desktop:bg-no-repeat" />

      <div className="right-0 hidden -scale-x-100 tablet:absolute tablet:bottom-[88px] tablet:block tablet:h-[202px] tablet:w-[492px] tablet:bg-[url('/assets/icons/help/join/vect6.svg')] tablet:bg-cover tablet:bg-center tablet:bg-no-repeat desktop:bottom-[116px] desktop:right-[80px] desktop:h-[239px] desktop:w-[622px]" />
      {/*end of decor */}
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
