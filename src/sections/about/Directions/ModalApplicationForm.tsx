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
        <div className='w-[346px] h-[523px] flex flex-col items-center px-6'>
          <SectionTitle modal className="mt-[60px] mb-6">звернутись за допомогою</SectionTitle>
          <form className="flex flex-col items-start w-full">
            <label className="block w-full pb-[24px]">
              <input type="text" name="name" className="text-body-text border-b pb-2 bg-light-background block w-full placeholder:text-m placeholder:leading-[19.5px] focus:outline-none" placeholder="Імʼя *" />
            </label>
            <label className="block w-full pb-[22.5px]">
              <input type="tel" name="email" className="text-body-text border-b pb-2 bg-light-background block w-full placeholder:text-m placeholder:leading-[19.5px] focus:outline-none" placeholder="Телефон *" />
            </label>
            <p className='pb-4'><span className='text-m leading-[20px]'>Залиште повідомлення</span></p>
            <label className="block w-full pb-6">
              <input type="text" name="application_message" className="text-body-text border-b pb-2 bg-light-background block w-full placeholder:text-m placeholder:leading-[19.5px] focus:outline-none" placeholder="Повідомлення" />
            </label>
            <div className="flex items-start gap-3 pb-8">
              <input id="application_agreement" type="checkbox" value="" className="bg-light-background checkbox w-4 h-4 cursor-pointer rounded"/>
              <label htmlFor="application_agreement" className="text-s leading-4 text-body-text">Я надаю згоду на обробку інформації згідно Закону України “Про захист персональних даних”.</label>
            </div>
            <Button 
              type="submit"
              modal
              aria-label="Подати заявку"
              className="m-auto py-[11px] max-w-[298px] max-h-[44px]"
            >
              <div><span className="text-center text-sm leading-[22px]">ПОДАТИ ЗАЯВКУ</span></div>
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}