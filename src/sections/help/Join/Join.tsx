'use client';
import React from 'react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import InputMask from 'react-input-mask';

type JoinProps = {};
type JoinForm = {
  name: string;

  phone: string;
  email: string;
};
const Join: React.FC<JoinProps> = () => {
  const t = useTranslations('HelpPage.Join');

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    watch,
    formState: { errors },

    formState: { isSubmitSuccessful },
    clearErrors,
  } = useForm<JoinForm>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });
  const submit: SubmitHandler<JoinForm> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error('error-', error);
    }
  };
  const errorForm: SubmitErrorHandler<JoinForm> = (er) => {
    console.log('er-', er);
  };
  return (
    <section className="pb-[60px] pt-6">
      <SectionTitle className="mb-3">{t('title')}</SectionTitle>
      <p className="text-gray-text leading-lh-20 text-center text-sm">
        Ваші дії можуть змінити долі. Долучайтесь до нашої ініціативи як
        волонтер
      </p>
      <form
        className="flex w-full flex-col items-start tablet:w-[461px]"
        onSubmit={handleSubmit(submit, errorForm)}
      >
        <label className="flex w-full flex-wrap gap-5 pb-[24px] tablet:flex-nowrap">
          <input
            type="text"
            name="name"
            className="block w-full border-b bg-light-background pb-2 text-body-text placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:pb-3 tablet:font-medium tablet:placeholder:text-sm tablet:placeholder:leading-[22px]"
            // placeholder={t('name-placeholder')}Ім’я *
            placeholder="Ім’я *"
          />
        </label>
        <label className="block w-full pb-6">
          <InputMask mask="+380 (99) 999-99-99">
            {(inputProps) => (
              <input
                {...inputProps}
                type="tel"
                name="phone"
                className="block w-full border-b bg-light-background pb-2 text-body-text placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:pb-3 tablet:font-medium tablet:placeholder:text-sm tablet:placeholder:leading-[22px]"
                // placeholder={t('phone-placeholder')}
                placeholder="Телефон *"
              />
            )}
          </InputMask>
        </label>
        <label className="block w-full pb-6">
          <input
            type="text"
            name="email"
            className="block w-full border-b bg-light-background pb-2 text-body-text placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:pb-3 tablet:font-medium tablet:placeholder:text-sm tablet:placeholder:leading-[22px]"
            // placeholder={t('position-placeholder')}
            placeholder="E-mail *"
          />
        </label>
        {/* Виведення помилки
        {error && <p className="pb-4 text-[#F76666]">{error}</p>} */}

        {/* Чекбокс для підтвердження */}
        {/* <div className="z-10 flex items-start gap-3 pb-8">
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
        </div> */}
        <Button
          type="submit"
          modal
          aria-label="Подати заявку"
          className="z-[999] m-auto h-[44px] w-[298px] py-[11px] tablet:h-[52px] tablet:w-[326px]"
        >
          <div>
            <span className="text-center text-sm font-medium leading-[22px]">
              {/* {t('btn-text')} */}
              ПРИЄДНАТИСЬ
            </span>
          </div>
        </Button>
      </form>
    </section>
  );
};

export default Join;
