import React, { useState } from 'react';
import Modal from '@/components/layout/Modal';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { useTranslations } from 'next-intl';

export interface ModalApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalApplicationForm({
  isOpen,
  onClose,
}: ModalApplicationFormProps) {
  const t = useTranslations('Home.Partners.modal');

  // Стани для кожного інпуту
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');

  // Стан для помилок
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Перевірка чи всі поля заповнені
    if (!name || !surname || !phone || !position) {
      setError('Будь ласка, заповніть усі поля.');
      return;
    }

    // Якщо все заповнено, можна виконати додаткові дії (наприклад, відправку форми)
    setError('');
    console.log({ name, surname, phone, position });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex h-[523px] w-[346px] flex-col items-center px-6 tablet:h-[633px] tablet:w-[694px] desktop:h-[659px] desktop:w-[1085px]">
          <SectionTitle
            modal
            className="mb-[22.5px] mt-[60px] tablet:mb-12 tablet:mt-[72px] tablet:text-5xl tablet:leading-[58.14px] desktop:mb-10 desktop:mt-[56px] desktop:text-9xl desktop:leading-[90px]"
          >
            {t('title')}
          </SectionTitle>
          <form
            className="flex w-full flex-col items-start tablet:w-[461px]"
            onSubmit={handleSubmit}
          >
            <label className="flex w-full gap-5 pb-[24px]">
              <input
                type="text"
                name="name"
                className="block w-full border-b bg-light-background pb-2 text-body-text placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:pb-3 tablet:font-medium tablet:placeholder:text-sm tablet:placeholder:leading-[22px]"
                placeholder={t('name-placeholder')}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                name="surname"
                className="block w-full border-b bg-light-background pb-2 text-body-text placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:pb-3 tablet:font-medium tablet:placeholder:text-sm tablet:placeholder:leading-[22px]"
                placeholder={t('surname-placeholder')}
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </label>
            <label className="block w-full pb-6">
              <input
                type="tel"
                name="phone"
                className="block w-full border-b bg-light-background pb-2 text-body-text placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:pb-3 tablet:font-medium tablet:placeholder:text-sm tablet:placeholder:leading-[22px]"
                placeholder={t('phone-placeholder')}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <label className="block w-full pb-6">
              <input
                type="text"
                name="position"
                className="block w-full border-b bg-light-background pb-2 text-body-text placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:pb-3 tablet:font-medium tablet:placeholder:text-sm tablet:placeholder:leading-[22px]"
                placeholder={t('position-placeholder')}
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </label>

            {/* Виведення помилки */}
            {error && <p className="text-[#F76666] pb-4">{error}</p>}

            <div className="z-10 flex items-start gap-3 pb-8">
              <input
                id="application_agreement"
                type="checkbox"
                className="checkbox h-4 w-4 cursor-pointer rounded bg-light-background tablet:h-5 tablet:w-5"
              />
              <label
                htmlFor="application_agreement"
                className="text-s font-regular leading-4 text-body-text"
              >
                {t('confirm-text')}
              </label>
            </div>
            <Button
              type="submit"
              modal
              aria-label="Подати заявку"
              className="z-[999] m-auto h-[44px] w-[298px] py-[11px] tablet:h-[52px] tablet:w-[326px]"
            >
              <div>
                <span className="text-center text-sm font-medium leading-[22px]">
                  {t('btn-text')}
                </span>
              </div>
            </Button>
          </form>
          <div className="hidden tablet:absolute tablet:bottom-10 tablet:block tablet:h-[131px] tablet:w-[683px] tablet:bg-[url('/assets/icons/directions/directions_modal.svg')] tablet:bg-cover tablet:bg-center tablet:bg-no-repeat desktop:bottom-14 desktop:h-[192px] desktop:w-[1032px]" />
        </div>
      </Modal>
    </>
  );
}
