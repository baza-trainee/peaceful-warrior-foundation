import React from 'react';

import Modal from '@/components/layout/Modal';
import SectionTitle from '@/components/ui/SectionTitle';

import { useTranslations } from 'next-intl';
import BePartnerForm from '@/components/forms/BePartnerForm';

export interface ModalApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalApplicationForm({
  isOpen,
  onClose,
}: ModalApplicationFormProps) {
  const t = useTranslations('Home.Partners.modal');

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* h-[523px] */}
      <div className="flex max-h-screen w-[346px] flex-col items-center overflow-y-auto px-6 pb-12 pt-[60px] tablet:w-[694px] tablet:py-[72px] desktop:w-[1085px] desktop:pb-[90px] desktop:pt-14">
        <SectionTitle modal className="mb-6 tablet:mb-12 desktop:mb-10">
          {t('title')}
        </SectionTitle>
        <div className="hidden tablet:absolute tablet:bottom-10 tablet:block tablet:h-[131px] tablet:w-[683px] tablet:bg-[url('/assets/icons/directions/directions_modal.svg')] tablet:bg-cover tablet:bg-center tablet:bg-no-repeat desktop:bottom-14 desktop:h-[192px] desktop:w-[1032px]" />
        <BePartnerForm modal className="z-20" />
      </div>
    </Modal>
  );
}

//old one
{
  /* <form
          className="flex w-full flex-col items-start tablet:w-[461px]"
          onSubmit={handleSubmit}
        >
          <label className="flex w-full flex-wrap gap-5 pb-[24px] tablet:flex-nowrap">
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
            <InputMask
              mask="+380 (99) 999-99-99"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  type="tel"
                  name="phone"
                  className="block w-full border-b bg-light-background pb-2 text-body-text placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:pb-3 tablet:font-medium tablet:placeholder:text-sm tablet:placeholder:leading-[22px]"
                  placeholder={t('phone-placeholder')}
                />
              )}
            </InputMask>
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

          {error && <p className="pb-4 text-[#F76666]">{error}</p>}

          <div className="z-10 flex items-start gap-3 pb-8">
            <input
              id="application_agreement"
              type="checkbox"
              className="checkbox h-4 w-4 cursor-pointer rounded bg-light-background tablet:h-5 tablet:w-5"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
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
        </form> */
}
