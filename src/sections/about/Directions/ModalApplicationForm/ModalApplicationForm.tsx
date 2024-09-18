import Modal from '@/components/layout/Modal';
import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

export interface ModalApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalApplicationForm({ isOpen, onClose }: ModalApplicationFormProps) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className='w-[346px] h-[523px] flex flex-col items-center px-6 tablet:w-[694px] tablet:h-[633px] desktop:w-[1085px] desktop:h-[659px]'>
          <SectionTitle modal className="mt-[60px] mb-[22.5px] tablet:mt-[72px] tablet:text-5xl tablet:mb-12 tablet:leading-[58.14px] desktop:mt-[56px] desktop:text-9xl desktop:mb-10 desktop:leading-[90px]">звернутись за допомогою</SectionTitle>
          <form className="flex flex-col items-start w-full tablet:w-[461px]">
            <label className="block w-full pb-[24px]">
              <input type="text" name="name" className="text-body-text border-b pb-2 bg-light-background block w-full placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:placeholder:text-sm tablet:placeholder:leading-[22px] tablet:font-medium tablet:pb-3" placeholder="Імʼя *" />
            </label>
            <label className="block w-full pb-6">
              <input type="tel" name="email" className="text-body-text border-b pb-2 bg-light-background block w-full placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:placeholder:text-sm tablet:placeholder:leading-[22px] tablet:font-medium tablet:pb-3" placeholder="Телефон *" />
            </label>
            <p className='pb-4'><span className='text-m leading-[20px] tablet:text-l tablet:leading-[26.82px]'>Залиште повідомлення</span></p>
            <label className="block w-full pb-6 tablet:pb-4">
              <input type="text" name="application_message" className="text-body-text border-b pb-2 bg-light-background block w-full placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:placeholder:text-sm tablet:placeholder:leading-[22px] tablet:font-medium tablet:pb-3" placeholder="Повідомлення" />
            </label>
            <div className="flex items-start gap-3 pb-8">
              <input id="application_agreement" type="checkbox" value="" className="bg-light-background checkbox w-4 h-4 cursor-pointer rounded tablet:w-5 tablet:h-5"/>
              <label htmlFor="application_agreement" className="text-s leading-4 font-regular text-body-text">Я надаю згоду на обробку інформації згідно Закону України “Про захист персональних даних”.</label>
            </div>
            <Button 
              type="submit"
              modal
              aria-label="Подати заявку"
              className="m-auto py-[11px] w-[298px] h-[44px] tablet:w-[326px] tablet:h-[52px]"
            >
              <div><span className="text-center text-sm leading-[22px] font-medium">ПОДАТИ ЗАЯВКУ</span></div>
            </Button>
          </form>
          <div className="hidden tablet:block tablet:bg-[url('/assets/icons/directions/directions_modal.svg')] tablet:bg-cover tablet:bg-center tablet:bg-no-repeat tablet:h-[131px] tablet:w-[683px] tablet:absolute tablet:bottom-10 desktop:h-[192px] desktop:w-[1032px] desktop:bottom-14" />
        </div>
      </Modal>
    </>
  );
}