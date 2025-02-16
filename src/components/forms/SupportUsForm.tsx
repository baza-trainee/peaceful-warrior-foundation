'use client';
//5375 4141 0489 1915
import React, { useEffect } from 'react';
import { useLocale } from 'next-intl';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import {
  SUBSCRIPTION_OPTIONS,
  PAYMENT_AMOUNT_DATA,
} from '@/constants/donateForm/donateForm';
import Button from '@/components/ui/Button';
import axios from 'axios';
import Script from 'next/script';
import useModalDonateStore from '@/state/stateModalDonate';
import useTransactionStore from '@/state/TransactionState';
import ErrorMessage from '@/components/forms/ErrorMessage';

declare const Wayforpay: any;

const isMobile = () => {
  return (
    typeof window !== 'undefined' &&
    /(Mobi|Android|iPhone|iPad|iPod)/i.test(navigator.userAgent)
  );
};

export interface SupportUsFormProps {
  isOpen?: boolean;
  className?: string;
  modal?: boolean;
}

export default function SupportUsForm({
  isOpen = false,
  modal = false,
  className,
}: SupportUsFormProps) {
  const t = useTranslations('Home.DonateForm');
  const currentLocale = useLocale();
  const { isModalOpen, closeModal, openModal } = useModalDonateStore();
  const { transactionStatus, setTransactionStatus } = useTransactionStore();

  const {
    control,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      subscriptionType: 'once',
      donationAmount: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    const handleEvent = (event: MessageEvent) => {
      let status = '';
      //change to WfpWidgetEventApproved !!!!!!!
      //and in ModalDonate also!

      //add smth for WfpWidgetEventDeclined
      // if (event.data === 'WfpWidgetEventApproved') {
      //   console.log('Платеж успешен');
      // } else if (event.data === 'WfpWidgetEventDeclined') {
      //   console.log('Платеж отклонен');
      // } else if (event.data === 'WfpWidgetEventPending') {
      //   console.log('Платеж в обработке');
      // } else if (event.data === 'WfpWidgetEventClose') {
      //   console.log('Виджет закрыт');
      // }

      if (event.data === 'WfpWidgetEventApproved') {
        status = 'Approved';
        setTransactionStatus(status);
      }

      if (event.data === 'WfpWidgetEventDeclined') {
        status = 'Declined';
        setTransactionStatus(status);
      }
      if (event.data === 'WfpWidgetEventClose') {
        if (transactionStatus === 'Declined') {
          //!!!!! Then change to "Approved", and in ModalDonate also!
          openModal();
        }
      }
    };

    window.addEventListener('message', handleEvent);
    return () => {
      window.removeEventListener('message', handleEvent);
    };
  }, [openModal, setTransactionStatus, transactionStatus]);

  const onSubmit = async (data: any) => {
    setTransactionStatus('');

    if (!data.donationAmount || data.donationAmount <= 0) {
      return;
    }

    const paymentObj = {
      merchantDomainName: window.location.hostname,
      amount: data.donationAmount,
      language: currentLocale,
      currency: 'UAH',
      productName: ['Peacefull Warrior support'],
      productCount: [1],
      productPrice: [data.donationAmount],
      regularMode: data.subscriptionType,
    };

    try {
      const response = await axios.post(
        `/${currentLocale}/api/payment`,
        paymentObj
      );

      const paymentData = response.data;

      if (isModalOpen) {
        closeModal();
      }
      const wayforpay = new Wayforpay();

      wayforpay.run(
        {
          ...paymentData,
          straightWidget: isMobile(),
        },
        function (response: any) {
          setTransactionStatus(response.transactionStatus);
        },
        function (response: any) {
          setTransactionStatus(response.transactionStatus);
        },
        function (response: any) {
          setTransactionStatus(response.transactionStatus);
        }
      );
    } catch (error) {
      console.error('Error processing widget:', error);
    }

    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(
          'm-auto flex flex-col gap-y-8 tablet:gap-y-10',
          modal
            ? 'mobile:w-[298px] tablet:w-[646px] desktop:w-[800px]'
            : 'mobile:w-[343px] tablet:w-[680px] desktop:w-[907px]',
          className
        )}
      >
        {/* Donation subscriptionType Start */}
        <Controller
          name="subscriptionType"
          control={control}
          render={({ field }) => (
            <div className="flex text-center">
              {SUBSCRIPTION_OPTIONS.map((option) => (
                <label
                  className="flex flex-1 cursor-pointer items-center"
                  key={option.value}
                >
                  <input
                    type="radio"
                    value={option.value}
                    checked={field.value === option.value}
                    onChange={() => field.onChange(option.value)}
                    className="hidden"
                  />
                  <div
                    className={clsx(
                      `flex h-[46px] w-full items-center justify-center border text-sm leading-[22px] tablet:h-[53px] tablet:text-[24px] tablet:leading-[29.26px]`,
                      field.value === option.value
                        ? 'border-accent bg-[#E7E7E7] font-semibold text-accent shadow-btn-shadow tablet:font-medium'
                        : 'border-gray-devider bg-[transparent] font-medium text-gray-devider tablet:font-regular',
                      option.value === 'once'
                        ? 'rounded-bl-btn-radius rounded-tl-btn-radius'
                        : 'rounded-br-btn-radius rounded-tr-btn-radius'
                    )}
                  >
                    <p className="tablet:hidden">
                      {t(
                        option.value === 'once'
                          ? 'type-first-mobile'
                          : 'type-second-mobile'
                      )}
                    </p>
                    <p className="hidden tablet:block">
                      {t(
                        option.value === 'once'
                          ? 'type-first-tablet'
                          : 'type-second-tablet'
                      )}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          )}
        />
        {/* Donation Amount Start */}
        <Controller
          name="donationAmount"
          control={control}
          rules={{
            required: t('error-message'),
            validate: (value) => Number(value) > 0 || t('error-minimum-amount'),
          }}
          render={({ field }) => (
            <div
              className={clsx(
                'relative flex flex-col justify-center gap-y-[20px] text-l font-medium leading-8 tablet:flex-row tablet:gap-x-6 tablet:text-xl',
                modal
                  ? 'tablet:px-[31px] desktop:px-[108px]'
                  : 'tablet:px-12 desktop:px-[161px]'
              )}
            >
              <div className="flex w-full gap-x-4 tablet:gap-x-6">
                {PAYMENT_AMOUNT_DATA.map((el, index) => (
                  <button
                    type="button"
                    className={clsx(
                      'flex h-11 flex-1 cursor-pointer items-center justify-center rounded-xl border-2 border-accent py-2 leading-8 text-body-text tablet:h-14',
                      field.value.toString() === el &&
                        'bg-accent text-light-background'
                    )}
                    key={index + el}
                    onClick={() => field.onChange(el)}
                  >
                    {el}&nbsp;
                    <span className="text-sm tablet:text-[24px]">₴</span>
                  </button>
                ))}
              </div>
              <input
                className="m-auto flex h-11 w-[147px] cursor-pointer rounded-xl border-2 border-accent bg-[transparent] text-center leading-8 outline-[transparent] placeholder:text-sm focus:bg-accent focus:text-light-background tablet:m-0 tablet:h-14 tablet:w-[184px] tablet:placeholder:text-l desktop:placeholder:text-l"
                type="number"
                // min="1"
                placeholder={t('placeholder')}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                aria-label={t('aria-label-input')}
              />
              {errors.donationAmount && (
                <ErrorMessage className="absolute -bottom-6 self-center text-s leading-4 tablet:bottom-[-30px]">
                  {errors.donationAmount.message}
                </ErrorMessage>
              )}
            </div>
          )}
        />
        {/* Donation Amount End */}

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
        strategy="afterInteractive"
        nonce="6a9ad3c7e5f255967f93368a43ba5d1b11e2cd89" ///??????
      />
    </>
  );
}
//5375 4141 0489 1915
