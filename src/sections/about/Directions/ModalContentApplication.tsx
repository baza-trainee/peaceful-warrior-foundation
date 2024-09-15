import React from 'react';

export interface ModalContentDonateProps {
  isOpen: boolean;
}

export default function ModalContentDonate({
  isOpen,
}: ModalContentDonateProps) {
  return (
    <div className="px-6 pb-12 pt-[60px] desktop:px-[77px] desktop:py-14">
      <SectionTitle modal className="mb-8">
        ПІДТРИМАТИ ФОНД!
      </SectionTitle>

      <DonateForm isOpen={isOpen} />
    </div>
  );
}