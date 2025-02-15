import React from 'react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import ErrorMessage from '@/components/forms/ErrorMessage';

export interface DonateFormContentProps {
  paymentAmountData: string[];

  modal?: boolean;
  subscriptionOptions: Array<{
    labelMob: string;
    labelDesktop: string;
    value: string;
  }>;
  activeButton: string;
  setActiveButton: React.Dispatch<React.SetStateAction<string>>;
  donationAmount: number | '';
  handleAmountChange: (value: string) => void;
  errorDonationAmount: boolean;
}

export default function DonateFormContent({
  paymentAmountData,
  subscriptionOptions,
  activeButton,
  setActiveButton,
  donationAmount,
  handleAmountChange,
  errorDonationAmount,
  modal = false,
}: DonateFormContentProps) {
  const t = useTranslations('Home.DonateForm');
  return (
    <>
      <div className="flex text-center">
        {subscriptionOptions.map((option) => (
          <label
            className="flex flex-1 cursor-pointer items-center"
            key={option.value}
          >
            <input
              type="checkbox"
              checked={activeButton === option.value}
              onChange={() => setActiveButton(option.value)}
              className="hidden"
            />
            <div
              className={clsx(
                `flex h-[46px] w-full items-center justify-center border text-sm leading-[22px] tablet:h-[53px] tablet:text-[24px] tablet:leading-[29.26px]`,
                activeButton === option.value
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
      {/* Donate amount */}
      <div
        className={clsx(
          'relative flex flex-col justify-center gap-y-[20px] text-l font-medium leading-8 tablet:flex-row tablet:gap-x-6 tablet:text-xl',
          modal
            ? 'tablet:px-[31px] desktop:px-[108px]'
            : 'tablet:px-12 desktop:px-[161px]'
        )}
      >
        <div
          className={clsx(
            'flex w-full gap-x-4 tablet:gap-x-6',
            modal ? '' : ''
          )}
          //  className="flex-1 "
        >
          {paymentAmountData.map((el, index) => (
            <button
              type="button"
              className={clsx(
                'flex h-11 flex-1 cursor-pointer items-center justify-center rounded-xl border-2 border-accent py-2 leading-8 text-body-text tablet:h-14',
                donationAmount.toString() === el &&
                  'bg-accent text-light-background'
              )}
              key={index + el}
              onClick={() => handleAmountChange(el)}
            >
              {el}&nbsp;
              <span className="text-sm tablet:text-[24px]">₴</span>
            </button>
          ))}
        </div>

        <input
          className="m-auto flex h-11 w-[147px] cursor-pointer rounded-xl border-2 border-accent bg-[transparent] text-center leading-8 outline-[transparent] placeholder:text-sm focus:bg-accent focus:text-light-background tablet:m-0 tablet:h-14 tablet:w-[184px] tablet:placeholder:text-l desktop:placeholder:text-l"
          type="number"
          min="1"
          placeholder={t('placeholder')}
          onChange={(e) => handleAmountChange(e.target.value)}
          aria-label={t('aria-label-input')}
          value={donationAmount}
        />
        {/* {errorDonationAmount && (
          <p className="absolute bottom-[-24px] self-center text-s font-regular leading-4 text-[#F76666] tablet:bottom-[-30px]">
            {t('error-message')}
          </p>
        )} */}
        {errorDonationAmount && (
          <ErrorMessage className="absolute -bottom-6 self-center text-s leading-4 tablet:bottom-[-30px]">
            {t('error-message')}
          </ErrorMessage>
        )}
      </div>
    </>
  );
}
