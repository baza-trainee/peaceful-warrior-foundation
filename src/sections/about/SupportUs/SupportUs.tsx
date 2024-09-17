'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import {
  SUBSCRIPTION_OPTIONS,
  PAYMENT_AMOUNT_DATA,
} from '@/constants/donateForm/donateForm';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import DonateForm from './DonateForm/DonateForm';
import ButtonDonate from '@/components/buttonDonate/buttonDonate';
import ModalDonate from './DonateForm/ModalDonate';

type SupportUsProps = {};

const SupportUs = ({}: SupportUsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section id="support" className="pb-[60px] tablet:pb-20 desktop:pb-[100px]">
      <div className="m-auto desktop:w-[908px]">
        <SectionTitle className="mb-3 tablet:hidden">підтримка</SectionTitle>
        <SectionTitle className="hidden tablet:mb-6 tablet:block desktop:mb-12">
          підтримайте нас
        </SectionTitle>
        <p className="mb-6 text-center text-md leading-[24.38px] tablet:hidden">
          Якщо вас надихнув проект, будь ласка, підтримайте наш фонд.
        </p>
        <p className="hidden text-center tablet:mb-10 tablet:block tablet:text-l tablet:leading-[26px] desktop:text-lg desktop:leading-[31.69px]">
          Якщо вас надихнув проект і ви бажаєте стати нашим донором, будь ласка,
          пожертвуйте зручну для вас суму.
        </p>

        <DonateForm />
        <Button className="mt-2" modal onClick={() => setIsOpen(true)}>
          Check Modal
        </Button>
        {isOpen && (
          <ModalDonate isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </div>
    </section>
  );
};

export default SupportUs;

//
// for modal
//const [isOpen, setIsOpen] = useState(false);
// {
//   isOpen && <ButtonDonate isOpen={isOpen} onClose={() => setIsOpen(false)} />;
// }

//my just for case
//// const [selectedCurrency, setSelectedCurrency] = useState<string>(
//   currencyOptions[0].value
//// );
// const handlecurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//   setSelectedCurrency(e.target.value);
// };
// const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const value = e.target.value;
//   setDonationAmount(value === '' ? '' : parseFloat(value));
// };
