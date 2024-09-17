import React from 'react';
import clsx from 'clsx';
import SectionTitle from '@/components/ui/SectionTitle';
import DonateForm from './DonateForm';

export interface ModalContentDonateProps {
  isOpen: boolean;
}

export default function ModalContentDonate({
  isOpen,
}: ModalContentDonateProps) {
  return (
    <div className="px-3 pb-12 pt-[60px] mobile:px-6 tablet:pb-14 tablet:pt-[72px] desktop:px-[77px] desktop:py-14">
      <SectionTitle modal className="mb-8 tablet:mb-12 desktop:mb-10">
        ПІДТРИМАТИ ФОНД
      </SectionTitle>

      <DonateForm isOpen={isOpen} modal />
    </div>
  );
}
