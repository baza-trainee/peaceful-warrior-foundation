'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

import SectionTitle from '@/components/ui/SectionTitle';
import JoinForm from '@/components/forms/JoinForm';

type JoinProps = {};

const Join: React.FC<JoinProps> = () => {
  const t = useTranslations('HelpPage.Join');

  return (
    <section className="relative mx-auto pb-[60px] pt-6 tablet:pb-[130px] tablet:pt-8 laptop:max-w-[744px] desktop:max-w-[1440px] desktop:pb-[180px] desktop:pt-8">
      {/* decor */}
      {/* tabl pink */}
      <div className="-right-8 hidden tablet:absolute tablet:bottom-[120px] tablet:block tablet:h-[229px] tablet:w-[197px] tablet:bg-[url('/assets/images/Help/Join/Vector2.png')] tablet:bg-cover tablet:bg-center tablet:bg-no-repeat desktop:hidden" />
      {/* desk pink */}
      <div className="hidden desktop:absolute desktop:-right-[70px] desktop:bottom-[145px] desktop:block desktop:h-[287px] desktop:w-[393px] desktop:bg-[url('/assets/images/Help/Join/Vector21.png')] desktop:bg-cover desktop:bg-center desktop:bg-no-repeat" />
      {/* blue */}{' '}
      <div className="-right-5 hidden tablet:absolute tablet:bottom-[90px] tablet:block tablet:h-[84px] tablet:w-[184px] tablet:bg-[url('/assets/images/Help/Join/Vector1.png')] tablet:bg-cover tablet:bg-center tablet:bg-no-repeat desktop:bottom-[102px] desktop:right-[95px] desktop:h-[108px] desktop:w-[225px]" />{' '}
      <div className="left-0 hidden tablet:absolute tablet:bottom-[90px] tablet:block tablet:h-[202px] tablet:w-[492px] tablet:bg-[url('/assets/icons/help/join/vect6.svg')] tablet:bg-cover tablet:bg-center tablet:bg-no-repeat desktop:bottom-[116px] desktop:left-[120px] desktop:h-[255px] desktop:w-[622px]" />
      {/*end of decor */}
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
