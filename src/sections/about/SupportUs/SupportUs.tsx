'use client';
import ButtonDonate from '@/components/buttonDonate/buttonDonate';
import Modal from '@/components/layout/Modal';
import React, { useState } from 'react';

type SupportUsProps = {};

const SupportUs = ({}: SupportUsProps) => {
  const [activeButton, setActiveButton] = useState<string>('one_time');
  // const [isOpen, setIsOpen] = useState(false);
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
  return (
    <section>
      <h2 className="uppercase">підтримка</h2>
      <p>
        Якщо вас надихнув проект і ви бажаєте стати нашим донором, будь ласка,
        пожертвуйте зручну для вас суму.
      </p>
      <form className="mt-7 flex w-full flex-col gap-y-8">
        <div className="lg:flex-row lg:gap-x-10 flex flex-col justify-between gap-y-3 text-center uppercase">
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
                className={`hover:border-accent-primary w-full rounded-2xl border-2 py-[14px] capitalize focus:border-accent-primary${
                  activeButton === option.value
                    ? 'border-accent-primary'
                    : 'border-grey-60'
                }`}
              >
                {option.label}
              </div>
            </label>
          ))}
        </div>
      </form>
      <ButtonDonate />
    </section>
  );
};

export default SupportUs;
