import SectionTitle from '@/components/ui/SectionTitle';
import { useTranslations } from 'next-intl';
import React from 'react';

export interface ThanksModalProps {}

export default function ThanksModal({}: ThanksModalProps) {
  const t = useTranslations('Home.ThanksCard');
  return (
    <div className="px-3 pb-12 pt-[60px] mobile:px-6 tablet:pb-14 tablet:pt-[72px] desktop:px-[77px] desktop:py-14">
      <SectionTitle modal className="mb-8 tablet:hidden">
        {t('title-mobil')}
      </SectionTitle>

      <SectionTitle
        modal
        className="hidden tablet:mb-12 tablet:block desktop:mb-10"
      >
        {t('title')}
      </SectionTitle>
      <p className="text-center text-l leading-[41.99px]">{t('text')}</p>
    </div>
  );
}
