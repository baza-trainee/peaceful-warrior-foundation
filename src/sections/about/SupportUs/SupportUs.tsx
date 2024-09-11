'use client';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import clsx from 'clsx';

import React, { useState } from 'react';

type SupportUsProps = {};

const subscriptionOptions = [
  {
    labelMob: 'Один платіж',
    labelDesktop: 'Одноразовий платіж',
    value: 'one_time',
  },
  {
    labelMob: 'Щомісячно',
    labelDesktop: 'Щомісячний внесок',
    value: 'monthly',
  },
];
const paymentAmountData = ['20', '50', '100'];

// const currencyOptions = [
//   { value: 'UAH', label: 'UAH', symbol: '₴' },
//   { value: 'USD', label: 'USD', symbol: '$' },

//   { value: 'EUR', label: 'EUR', symbol: '€' },
// ];

const SupportUs = ({}: SupportUsProps) => {
  const [activeButton, setActiveButton] = useState<string>('one_time');
  // const [selectedCurrency, setSelectedCurrency] = useState<string>(
  //   currencyOptions[0].value
  // );
  const [donationAmount, setDonationAmount] = useState<number | ''>('');
  const [errorDonationAmount, setErrorDonationAmount] =
    useState<boolean>(false);

  // const handlecurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedCurrency(e.target.value);
  // };
  // const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setDonationAmount(value === '' ? '' : parseFloat(value));
  // };
  const handleAmountChange = (value: string) => {
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
  };

  return (
    <section id="support" className="pb-[60px] laptop:pb-[100px]">
      <div className="m-auto laptop:w-[908px]">
        <SectionTitle className="mb-3 laptop:hidden">підтримка</SectionTitle>
        <SectionTitle className="hidden laptop:mb-12 laptop:block">
          підтримайте нас
        </SectionTitle>
        <p className="mb-6 text-center text-md leading-[24.38px] laptop:hidden">
          Якщо вас надихнув проект, будь ласка, підтримайте наш фонд.
        </p>
        <p className="hidden laptop:mb-10 laptop:block laptop:text-center laptop:text-lg laptop:leading-[31.69px]">
          Якщо вас надихнув проект і ви бажаєте стати нашим донором, будь ласка,
          пожертвуйте зручну для вас суму.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-7 flex w-full flex-col gap-y-8 laptop:gap-y-12"
        >
          {/* Choose subscriptionOption */}
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
                    `flex h-[46px] w-full items-center justify-center border text-sm laptop:h-[61px] laptop:text-2xl laptop:leading-[36.57px]`,
                    activeButton === option.value
                      ? 'border-accent bg-[#E7E7E7] font-semibold leading-[21.94px] text-accent shadow-btn-shadow'
                      : 'border-gray-devider bg-[transparent] font-medium leading-[22px] text-gray-devider',
                    option.value === 'one_time'
                      ? 'rounded-bl-btn-radius rounded-tl-btn-radius'
                      : 'rounded-br-btn-radius rounded-tr-btn-radius'
                  )}
                >
                  <p className="laptop:hidden">{option.labelMob}</p>
                  <p className="hidden laptop:block">{option.labelDesktop}</p>
                </div>
              </label>
            ))}
          </div>
          {/* Donate amount */}
          <div className="flex flex-col justify-center text-l font-medium leading-8">
            <div className="mb-[20px] flex gap-x-4">
              {paymentAmountData.map((el, index) => (
                <div
                  className={clsx(
                    'flex h-11 flex-1 items-center justify-center rounded-xl border-2 border-accent py-2 leading-8'
                  )}
                  key={index + el}
                  onClick={() => handleAmountChange(el)}
                >
                  {el}&nbsp;<span className="pb-[2px] text-sm">₴</span>
                </div>
              ))}
            </div>

            <input
              className="m-auto flex h-11 w-[147px] cursor-pointer rounded-xl border-2 border-accent bg-[transparent] text-center leading-8 outline-[transparent]"
              type="number"
              // pattern="[0-9]"
              // className={`${donateStyle} col-span-2`}
              placeholder="інша сума"
              onChange={(e) => handleAmountChange(e.target.value)}
              value={donationAmount}
            ></input>
          </div>
          {/* <div className="relative mx-auto w-full laptop:w-[442px]">
            <input
              type="number"
              value={donationAmount}
              onChange={handleAmountChange}
              placeholder="Сума внеску"
              className={clsx(
                'block w-full border-b border-solid bg-[transparent] pb-3 text-md leading-[17.07px] placeholder:text-s placeholder:leading-[19.5px] placeholder:text-[#565656] focus:border-accent focus:outline-none laptop:pb-4 laptop:placeholder:text-md laptop:placeholder:font-medium laptop:placeholder:leading-[24.38px]',
                errorDonationAmount ? 'border-[#FF0000]' : 'border-body-text'
              )}
            />
            {errorDonationAmount && (
              <p className="absolute text-xs leading-[19.5px] text-[#FF0000] laptop:text-s laptop:leading-[24.38px]">
                Введіть, будь ласка, суму
              </p>
            )}

            <div className="absolute bottom-4 right-0 flex font-medium text-body-text">
              <select
                value={selectedCurrency}
                onChange={handlecurrencyChange}
                className="block w-full appearance-none bg-[transparent] px-4 pr-8 text-sm leading-[19.5px] focus:outline-none laptop:text-md laptop:leading-[21.94px]"
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
          </div> */}

          <Button type="submit" className="m-auto">
            ПІДТРИМАТИ
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SupportUs;

// const [isOpen, setIsOpen] = useState(false);
// <ButtonDonate /> call modal
// <h2 className="laptop:hidden mb-3 text-center font-noteworthy text-5xl font-bold uppercase leading-[58.14px] text-accent">
//         підтримка
//       </h2>
//       <h2 className="laptop:block mb-12 hidden text-center font-noteworthy text-8xl font-light uppercase leading-[90.44px] text-accent">
//         підтримайте нас
//       </h2>
