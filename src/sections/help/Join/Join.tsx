'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

import SectionTitle from '@/components/ui/SectionTitle';
import JoinForm from '@/components/forms/JoinForm';

type JoinProps = {};

const Join: React.FC<JoinProps> = () => {
  const t = useTranslations('HelpPage.Join');

  return (
    <section className="relative pb-[60px] pt-6 tablet:pb-[130px] tablet:pt-8 desktop:pb-[180px] desktop:pt-8">
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
      <div className="-right-5 hidden tablet:absolute tablet:bottom-[90px] tablet:block tablet:h-[82px] tablet:w-[182px] tablet:bg-[url('/assets/images/Help/Join/Vector1.png')] tablet:bg-cover tablet:bg-center tablet:bg-no-repeat desktop:bottom-[120px] desktop:right-[100px] desktop:h-[108px] desktop:w-[225px]" />
      <div className="-right-8 hidden tablet:absolute tablet:bottom-[120px] tablet:block tablet:h-[206px] tablet:w-[192px] tablet:bg-[url('/assets/images/Help/Join/Vector2.png')] tablet:bg-cover tablet:bg-center tablet:bg-no-repeat desktop:bottom-[133px] desktop:right-12 desktop:h-[210px] desktop:w-[442px]" />
      <div className="left-0 hidden tablet:absolute tablet:bottom-[90px] tablet:block tablet:h-[202px] tablet:w-[492px] tablet:bg-[url('/assets/icons/help/join/vect6.svg')] tablet:bg-cover tablet:bg-center tablet:bg-no-repeat desktop:bottom-14 desktop:h-[192px] desktop:w-[1032px]" />
    </section>
  );
};

export default Join;
