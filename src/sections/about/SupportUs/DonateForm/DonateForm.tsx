'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import {
  SUBSCRIPTION_OPTIONS,
  PAYMENT_AMOUNT_DATA,
} from '@/constants/donateForm/donateForm';
import Button from '@/components/ui/Button';
import DonateFormContent from './DonateFormContent';

export interface DonateFormProps {
  isOpen?: boolean;
  className?: string;
  modal?: boolean;
}

export default function DonateForm({
  isOpen = false,
  modal = false,
  className,
}: DonateFormProps) {
  const [activeButton, setActiveButton] = useState<string>('one_time');
  const [donationAmount, setDonationAmount] = useState<number | ''>('');
  const [errorDonationAmount, setErrorDonationAmount] =
    useState<boolean>(false);

  const handleAmountChange = (value: string) => {
    setErrorDonationAmount(false);
    setDonationAmount(value === '' ? '' : parseFloat(value));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // donationAmount validation
    if (donationAmount === '' || donationAmount <= 0 || isNaN(donationAmount)) {
      setErrorDonationAmount(true);
      return;
    }
    //new order
    const newOrder = {
      order_id: `id-${Date.now()}`,
      amount: donationAmount,
      // currency: selectedCurrency,
      regularMode: activeButton,
    };
    console.log('donation: ', newOrder);
    setDonationAmount('');

    setErrorDonationAmount(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        'm-auto flex flex-col gap-y-8 tablet:gap-y-10',
        modal
          ? 'mobile:w-[298px] tablet:w-[646px] desktop:w-[800px]'
          : 'mobile:w-[343px] tablet:w-[680px] desktop:w-[907px]',
        className
      )}
    >
      {/* Choose subscriptionOption */}
      <DonateFormContent
        paymentAmountData={PAYMENT_AMOUNT_DATA}
        subscriptionOptions={SUBSCRIPTION_OPTIONS}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        donationAmount={donationAmount}
        handleAmountChange={handleAmountChange}
        errorDonationAmount={errorDonationAmount}
        modal={modal}
      />
      <Button
        type="submit"
        className="mx-auto desktop:mt-4"
        aria-label="Перейти до сторінки платежу"
        modal={isOpen}
      >
        ПІДТРИМАТИ
      </Button>
    </form>
  );
}
