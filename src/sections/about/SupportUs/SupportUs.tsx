'use client';
import Button from '@/components/ui/Button';
import clsx from 'clsx';

import React, { useState } from 'react';

type SupportUsProps = {};

const subscriptionOptions = [
  {
    label: 'Один платіж',
    value: 'one_time',
  },
  {
    label: 'Щомісячно',
    value: 'monthly',
  },
];
const currencyOptions = [
  { value: 'UAH', label: 'UAH', symbol: '₴' },
  { value: 'USD', label: 'USD', symbol: '$' },

  { value: 'EUR', label: 'EUR', symbol: '€' },
];

const SupportUs = ({}: SupportUsProps) => {
  const [activeButton, setActiveButton] = useState<string>('one_time');
  const [selectedCurrency, setSelectedCurrency] = useState<string>(
    currencyOptions[0].value
  );
  const [donationAmount, setDonationAmount] = useState<number | ''>('');
  // const [isOpen, setIsOpen] = useState(false);
  const handlecurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(e.target.value);
  };
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDonationAmount(value === '' ? '' : parseFloat(value));
  };
  const selectedCurrencySymbol =
    currencyOptions.find((option) => option.value === selectedCurrency)
      ?.symbol || '';
  return (
    <section className="laptop:pb-[100px] pb-[60px]">
      <h2 className="laptop:hidden mb-3 text-center font-noteworthy text-5xl font-bold uppercase leading-[58.14px] text-accent">
        підтримка
      </h2>
      <h2 className="laptop:block mb-12 hidden text-center font-noteworthy text-8xl font-light uppercase leading-[90.44px] text-accent">
        підтримайте нас
      </h2>
      <p className="laptop:mb-10 laptop:text-lg laptop:leading-[31.69px] mb-6 text-md leading-[24.38px]">
        Якщо вас надихнув проект і ви бажаєте стати нашим донором, будь ласка,
        пожертвуйте зручну для вас суму.
      </p>
      <form className="mt-7 flex w-full flex-col gap-y-8">
        {/* Choose subscriptionOption */}
        <div className="flex h-11 text-center">
          {subscriptionOptions.map((option) => (
            <label
              className="flex flex-1 cursor-pointer items-center gap-x-2"
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
                  `flex h-11 w-full items-center justify-center border text-m font-medium leading-[19.5px]`,
                  activeButton === option.value
                    ? 'border-accent text-accent shadow-btn-shadow'
                    : 'border-gray-form',
                  option.value === 'one_time'
                    ? 'rounded-bl-btn-radius rounded-tl-btn-radius'
                    : 'rounded-br-btn-radius rounded-tr-btn-radius'
                )}
              >
                <p>{option.label}</p>
              </div>
            </label>
          ))}
        </div>

        <div className="relative w-full">
          <input
            type="number"
            value={donationAmount}
            onChange={handleAmountChange}
            placeholder="Сума внеску"
            className="block w-full border-b border-solid bg-[transparent] pb-3 text-md leading-[17.07px] placeholder:text-s placeholder:text-[#565656] focus:border-accent focus:outline-none"
          />
          {/* Currency */}
          <div className="absolute bottom-3 right-0 flex font-medium text-body-text">
            <select
              value={selectedCurrency}
              onChange={handlecurrencyChange}
              className="block w-full appearance-none bg-[transparent] px-4 py-2 pr-8 text-sm leading-[19.5px] focus:outline-none"
            >
              {currencyOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-[transparent]"
                >
                  {option.label}
                </option>
              ))}
            </select>
            <div className="text-gray-700 pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-5-5h10l-5 5z" />
              </svg>
            </div>
          </div>
        </div>
        <Button>ПІДТРИМАТИ</Button>
      </form>
    </section>
  );
};

export default SupportUs;

// <ButtonDonate /> call modal
//  <div
//                 className={`flex h-11 w-full items-center justify-center rounded-bl-btn-radius rounded-tl-btn-radius border text-m font-medium hover:border focus:border-accent ${
//                   activeButton === option.value
//                     ? 'border-accent text-accent'
//                     : 'border-gray-form'
//                 }`}
// hover:border-accent focus:border-accent
//text-[#565656]
