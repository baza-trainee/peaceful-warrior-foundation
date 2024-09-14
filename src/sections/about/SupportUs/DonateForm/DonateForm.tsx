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
}

export default function DonateForm({ isOpen = false }: DonateFormProps) {
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
      className="mt-7 flex w-full flex-col gap-y-8 tablet:gap-y-10 desktop:gap-y-12"
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
      />

      <Button
        type="submit"
        className="m-auto"
        aria-label="Перейти до сторінки платежу"
        modal={isOpen}
      >
        ПІДТРИМАТИ
      </Button>
    </form>
  );
}
