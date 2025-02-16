import Modal from '@/components/layout/Modal';
import React from 'react';
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
  const t = useTranslations('Home.Directions.modal');
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex h-[523px] w-[346px] flex-col items-center px-6 tablet:h-[633px] tablet:w-[694px] desktop:h-[659px] desktop:w-[1085px]">
          <SectionTitle
            modal
            className="mb-[22.5px] mt-[60px] tablet:mb-12 tablet:mt-[72px] desktop:mb-10 desktop:mt-[56px]"
          >
            {t('title')}
          </SectionTitle>
          <form className="flex w-full flex-col items-start tablet:w-[461px]">
            <label className="block w-full pb-[24px]">
              <input
                type="text"
                name="name"
                className="block w-full border-b bg-light-background pb-2 text-body-text placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:pb-3 tablet:font-medium tablet:placeholder:text-sm tablet:placeholder:leading-[22px]"
                placeholder={t('name-placeholder')}
              />
            </label>
            <label className="block w-full pb-6">
              <input
                type="tel"
                name="email"
                className="block w-full border-b bg-light-background pb-2 text-body-text placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:pb-3 tablet:font-medium tablet:placeholder:text-sm tablet:placeholder:leading-[22px]"
                placeholder={t('phone-placeholder')}
              />
            </label>
            <p className="pb-4">
              <span className="text-m leading-[20px] tablet:text-l tablet:leading-[26.82px]">
                {t('message')}
              </span>
            </p>
            <label className="block w-full pb-6 tablet:pb-4">
              <input
                type="text"
                name="application_message"
                className="block w-full border-b bg-light-background pb-2 text-body-text placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:pb-3 tablet:font-medium tablet:placeholder:text-sm tablet:placeholder:leading-[22px]"
                placeholder={t('message-placeholder')}
              />
            </label>
            <div className="flex items-start gap-3 pb-8">
              <input
                id="application_agreement"
                type="checkbox"
                value=""
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
