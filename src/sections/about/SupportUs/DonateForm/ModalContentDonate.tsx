import React from 'react';
import { useTranslations } from 'next-intl';
import SectionTitle from '@/components/ui/SectionTitle';
// import DonateForm from './DonateForm';
import SupportUsForm from '@/components/forms/SupportUsForm';

export interface ModalContentDonateProps {
  isOpen: boolean;
}

export default function ModalContentDonate({
  isOpen,
}: ModalContentDonateProps) {
  const t = useTranslations('Home.Support');
  return (
    <div className="px-3 pb-12 pt-[60px] mobile:px-6 tablet:pb-14 tablet:pt-[72px] desktop:px-[77px] desktop:py-14">
      <SectionTitle modal className="mb-8 tablet:hidden">
        {t('title-modal-mobile')}
      </SectionTitle>
      <SectionTitle
        modal
        className="hidden tablet:mb-12 tablet:block desktop:mb-10"
      >
        {t('title-modal-tablet')}
      </SectionTitle>
      {/* <DonateForm isOpen={isOpen} modal /> */}
      <SupportUsForm isOpen={isOpen} modal />
    </div>
  );
}
