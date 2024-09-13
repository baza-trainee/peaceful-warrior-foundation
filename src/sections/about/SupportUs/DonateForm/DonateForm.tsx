import React, { useState } from 'react';
import clsx from 'clsx';
import {
  SUBSCRIPTION_OPTIONS,
  PAYMENT_AMOUNT_DATA,
} from '@/constants/donateForm/donateForm';
import Button from '@/components/ui/Button';

export interface DonateFormProps {}

export default function DonateForm({ }: DonateFormProps) {
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
      if (
        donationAmount === '' ||
        donationAmount <= 0 ||
        isNaN(donationAmount)
      ) {
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
      <div className="flex text-center">
        {SUBSCRIPTION_OPTIONS.map((option) => (
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
                `flex h-[46px] w-full items-center justify-center border text-sm leading-[22px] tablet:h-[53px] tablet:text-[24px] tablet:leading-[29.26px] desktop:h-[61px] desktop:text-2xl desktop:leading-[36.57px]`,
                activeButton === option.value
                  ? 'border-accent bg-[#E7E7E7] font-semibold text-accent shadow-btn-shadow tablet:font-medium'
                  : 'border-gray-devider bg-[transparent] font-medium text-gray-devider tablet:font-regular',
                option.value === 'one_time'
                  ? 'rounded-bl-btn-radius rounded-tl-btn-radius'
                  : 'rounded-br-btn-radius rounded-tr-btn-radius'
              )}
            >
              <p className="tablet:hidden">{option.labelMob}</p>
              <p className="hidden tablet:block">{option.labelDesktop}</p>
            </div>
          </label>
        ))}
      </div>
      {/* Donate amount */}

      <div className="relative flex flex-col justify-center gap-y-[20px] text-l font-medium leading-8 tablet:flex-row tablet:gap-x-6 tablet:px-12 tablet:text-xl desktop:px-[161px]">
        <div className="flex w-full flex-1 gap-x-4 tablet:gap-x-6">
          {PAYMENT_AMOUNT_DATA.map((el, index) => (
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
          className="m-auto flex h-11 w-[147px] cursor-pointer rounded-xl border-2 border-accent bg-[transparent] text-center leading-8 outline-[transparent] focus:bg-accent focus:text-light-background tablet:m-0 tablet:h-14 tablet:w-[184px]"
          type="number"
          min="1"
          // pattern="[0-9]"
          // className={`${donateStyle} col-span-2`}
          placeholder="інша сума"
          onChange={(e) => handleAmountChange(e.target.value)}
          value={donationAmount}
        />
        {errorDonationAmount && (
          <p className="absolute bottom-[-24px] self-center text-s font-regular leading-4 text-[#F76666] tablet:bottom-[-30px]">
            Введіть, будь ласка, суму
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="m-auto"
        aria-label="Перейти до сторінки платежу"
        directionBtn
      >
        ПІДТРИМАТИ
      </Button>
    </form>
  );
}
