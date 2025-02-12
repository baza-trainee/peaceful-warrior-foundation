'use client';
import React from 'react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
//import InputMask from 'react-input-mask';
import InputMask from 'react-input-mask-next';

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
    setValue,
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

  const phoneValue = watch('phone');
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('phone', e.target.value);
  };
  return (
    <section className="pb-[60px] pt-6">
      <SectionTitle className="mb-3">{t('title')}</SectionTitle>
      <p className="text-gray-text leading-lh-20 mb-6 text-center text-sm">
        Ваші дії можуть змінити долі. Долучайтесь до нашої ініціативи як
        волонтер
      </p>
      <form
        className="flex w-full flex-col items-start"
        onSubmit={handleSubmit(submit, errorForm)}
      >
        <label className="w-full gap-5 pb-[24px]">
          <input
            type="text"
            {...register('name', { required: true, minLength: 2 })}
            aria-invalid={errors.name ? 'true' : 'false'}
            className={clsx(
              'block w-full border-b bg-light-background pb-2 text-body-text placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:pb-3 tablet:font-medium tablet:placeholder:text-sm tablet:placeholder:leading-[22px]',
              { 'border-red-error': errors.name }
            )}
            // placeholder={t('name-placeholder')}Ім’я *
            placeholder="Ім’я *"
          />
          {errors.name?.type === 'required' && (
            <p role="alert" className="text-red-error">
              Ім’я обов’язкове
            </p>
          )}
          {errors.name?.type === 'minLength' && (
            <p role="alert" className="text-red-error">
              Ім’я занадто коротке
            </p>
          )}
        </label>
        <div className="flex flex-wrap gap-4 tablet:flex-nowrap">
          <label className="block w-full tablet:pb-6">
            <InputMask
              mask="+380 (99) 999-99-99"
              //   value={phoneValue}
              //   onChange={handlePhoneChange}
              {...register('phone', {
                required: 'Телефон обов’язковий',
              })}
            >
              <input
                type="text"
                aria-invalid={errors.phone ? 'true' : 'false'}
                className={clsx(
                  'block w-full border-b bg-light-background pb-2 text-body-text placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:pb-3 tablet:font-medium tablet:placeholder:text-sm tablet:placeholder:leading-[22px]',
                  { 'border-red-500': errors.phone }
                )}
                placeholder="Телефон *"
              />
            </InputMask>
            {errors.phone && (
              <p role="alert" className="text-red-error">
                {errors.phone.message}
              </p>
            )}
          </label>
          <label className="block w-full pb-6">
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: 'Некоректна адреса електронної пошти',
                },
              })}
              aria-invalid={errors.email ? 'true' : 'false'}
              className={clsx(
                'block w-full border-b bg-light-background pb-2 text-body-text placeholder:text-m placeholder:leading-[19.5px] focus:outline-none tablet:pb-3 tablet:font-medium tablet:placeholder:text-sm tablet:placeholder:leading-[22px]',
                { 'border-red-error': errors.email }
              )}
              // placeholder={t('position-placeholder')}
              placeholder="E-mail *"
            />
            {errors.email && (
              <p role="alert" className="text-red-error">
                {errors.email.message}
              </p>
            )}
          </label>
        </div>
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
