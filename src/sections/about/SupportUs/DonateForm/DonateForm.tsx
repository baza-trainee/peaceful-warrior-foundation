'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import {
  SUBSCRIPTION_OPTIONS,
  PAYMENT_AMOUNT_DATA,
} from '@/constants/donateForm/donateForm';
import Button from '@/components/ui/Button';
import DonateFormContent from './DonateFormContent';
import axios from 'axios';
import Script from 'next/script'; //New W

declare const Wayforpay: any; //New W
const isMobile = () => {
  return (
    typeof window !== 'undefined' &&
    /(Mobi|Android|iPhone|iPad|iPod)/i.test(navigator.userAgent)
  );
}; // New N

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
  const t = useTranslations('Home.DonateForm');
  const currentLocale = useLocale();

  const [activeButton, setActiveButton] = useState<string>('once');
  const [donationAmount, setDonationAmount] = useState<number | ''>('');
  const [errorDonationAmount, setErrorDonationAmount] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false); //New W

  const handleAmountChange = (value: string) => {
    setErrorDonationAmount(false);
    setDonationAmount(value === '' ? '' : parseFloat(value));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // donationAmount validation
    if (donationAmount === '' || donationAmount <= 0 || isNaN(donationAmount)) {
      setErrorDonationAmount(true);
      return;
    }
    //---------------
    const paymentData = {
      transactionType: 'CREATE_INVOICE',
      merchantDomainName: window.location.hostname, //????
      apiVersion: 1,
      orderReference: `id-${Date.now()}`,
      orderDate: Date.now(),
      amount: donationAmount,
      language: currentLocale,
      currency: 'UAH',
      productName: ['Peacefull Warrior support'],
      productCount: [1],
      productPrice: [donationAmount],
      regularMode: activeButton,
      //regularAmount,
      //paymentSystems: 'card;googlePay;applePay;privat24', for later

      defaultPaymentSystem: 'card',
      serviceUrl: `${window.location.origin}/${currentLocale}/api/payment/complete`,
    };

    //https://secure.wayforpay.com/pay?behavior=offline

    try {
      const response = await axios.post(
        `/${currentLocale}/api/payment`,
        paymentData
      ); // to our API

      //const checkoutUrl = response.data?.invoiceUrl; New W
      const { merchantSignature } = response.data; //New W
      const wayforpay = new Wayforpay(); //New W
      console.log('isMobile', isMobile);
      wayforpay.run(
        //New W
        {
          ...paymentData,
          merchantAccount: 'test_merch_n1',
          merchantSignature: merchantSignature,
          authorizationType: 'SimpleSignature',
          straightWidget: isMobile(),
        },
        function (response: any) {
          console.log('Payment approved', response);
        },
        function (response: any) {
          console.log('Payment declined', response);
        },
        function (response: any) {
          console.log('Payment processing', response);
        }
      );

      // if (checkoutUrl) {New W
      //   window.open(checkoutUrl, '_blank'); // in new window
      //   // window.location.href = checkoutUrl; // To payment page, works
      //   //window.location.href = `${checkoutUrl}?behavior=true`; variant
      // }
    } catch (error) {
      // New W
      console.error('Ошибка при запуске виджета:', error);
    } finally {
      setIsLoading(false);
    }
    // } catch (error) { New W
    //   setErrorDonationAmount(true); // Think about later
    //   console.error('Error processing payment:', error);
    // }

    setDonationAmount('');

    setErrorDonationAmount(false);
  };
  return (
    <>
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
          aria-label={t('aria-label-btn')}
          modal={isOpen}
        >
          {t('support-btn')}
        </Button>
      </form>
      <Script
        id="wayforpay-script"
        src="https://secure.wayforpay.com/server/pay-widget.js"
        strategy="afterInteractive" // загружаем скрипт после рендеринга страницы
      />
    </>
  );
}
