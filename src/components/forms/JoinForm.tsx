'use client';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  Controller,
} from 'react-hook-form';
import Button from '@/components/ui/Button';

import InputMask from 'react-input-mask-next';

type JoinFormProps = {
  modal?: boolean;
};
type JoinForm = {
  name: string;
  phone: string;
  email: string;
  agreement: boolean;
};

const JoinForm: React.FC<JoinFormProps> = ({ modal = false }) => {
  const t = useTranslations('HelpPage.Join');

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JoinForm>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      agreement: false,
    },
    mode: 'onChange',
  });
  const submit: SubmitHandler<JoinForm> = async (data) => {
    try {
      console.log(data);
      //----------
      toast.success(`Ваша заявка успішно надіслана! Дякуємо, ${data.name} !`, {
        duration: 4000,
        // icon: '👏',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      //----------
      reset();
    } catch (error) {
      console.error('error-', error);
    }
  };
  const errorForm: SubmitErrorHandler<JoinForm> = (er) => {
    console.log('er-', er);
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{ style: { minWidth: '200px', padding: '16px' } }}
      />
      <form
        className={clsx(
          'flex w-full flex-col items-start tablet:mx-auto',
          modal
            ? 'mx-auto tablet:w-[461px]'
            : 'tablet:w-[506px] desktop:w-[674px]'
        )}
        onSubmit={handleSubmit(submit, errorForm)}
      >
        {/* //------------- name */}
        <label className="relative mb-6 w-full">
          <input
            type="text"
            {...register('name', {
              required: 'Поле обов’язкове для заповнення',
              minLength: {
                value: 2,
                message: 'Ім’я занадто коротке',
              },
            })}
            aria-invalid={errors.name ? 'true' : 'false'}
            //
            className={clsx(
              'hover:border-form-hover hover:placeholder:text-form-hover block w-full border-b border-gray-devider bg-[transparent] pb-2 text-m leading-[19.5px] text-body-text placeholder:text-m placeholder:leading-[19.5px] placeholder:text-gray-devider focus:outline-none active:border-body-text tablet:pb-3 tablet:text-sm tablet:font-medium tablet:leading-[22px] tablet:placeholder:text-sm tablet:placeholder:leading-[22px]',
              { 'border-red-error placeholder:text-red-error': errors.name }
            )}
            // placeholder={t('name-placeholder')}Ім’я *
            placeholder="Ім’я *"
          />

          {errors.name && (
            <p className="text-red-error absolute -bottom-5 text-s leading-4">
              {errors.name.message}
            </p>
          )}
        </label>
        {/* //-------------tablet:mb-4  */}
        <div className="mb-6 flex w-full flex-wrap tablet:flex-nowrap tablet:gap-6">
          {/* //------------- phone */}
          <label className="relative mb-6 block w-full tablet:mb-0">
            <Controller
              name="phone"
              control={control} //
              rules={{
                required: 'Обов’язкове поле',
                pattern: {
                  value: /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
                  message: 'Некоректний номер телефону',
                },
              }}
              render={({ field }) => (
                <InputMask
                  {...field}
                  mask="+380 (99) 999-99-99"
                  placeholder="Телефон *"
                  type="text"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  className={clsx(
                    'hover:border-form-hover hover:placeholder:text-form-hover block w-full border-b border-gray-devider bg-[transparent] pb-2 text-m leading-[19.5px] text-body-text placeholder:text-m placeholder:leading-[19.5px] placeholder:text-gray-devider focus:outline-none active:border-body-text tablet:pb-3 tablet:text-sm tablet:font-medium tablet:leading-[22px] tablet:placeholder:text-sm tablet:placeholder:leading-[22px]',
                    {
                      'border-red-error placeholder:text-red-error':
                        errors.phone,
                    }
                  )}
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-error absolute -bottom-5 text-s leading-4">
                {errors.phone.message}
              </p>
            )}
          </label>
          {/* //------------- email mask */}
          <label className="relative block w-full">
            <input
              {...register('email', {
                required: 'Обов’язкове поле',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: 'Некоректний email',
                },
              })}
              aria-invalid={errors.email ? 'true' : 'false'}
              className={clsx(
                'hover:border-form-hover hover:placeholder:text-form-hover block w-full border-b border-gray-devider bg-[transparent] pb-2 text-m leading-[19.5px] text-body-text placeholder:text-m placeholder:leading-[19.5px] placeholder:text-gray-devider focus:outline-none active:border-body-text tablet:pb-3 tablet:text-sm tablet:font-medium tablet:leading-[22px] tablet:placeholder:text-sm tablet:placeholder:leading-[22px]',
                {
                  'border-red-error placeholder:text-red-error': errors.email,
                }
              )}
              // placeholder={t('position-placeholder')}
              placeholder="E-mail *"
            />
            {errors.email && (
              <p
                role="alert"
                className="text-red-error absolute -bottom-5 text-s leading-4"
              >
                {errors.email.message}
              </p>
            )}
          </label>
        </div>
        {/* //------------- */}

        {/* Чекбокс для підтвердження */}
        <div className="relative mb-6 w-full tablet:mb-8">
          <Controller
            name="agreement"
            control={control}
            rules={{ required: 'Ви повинні погодитися з умовами' }}
            render={({ field }) => (
              <div className="z-10 flex items-start gap-3">
                <input
                  id="application_agreement"
                  type="checkbox"
                  className="checkbox h-4 w-4 cursor-pointer rounded bg-light-background tablet:h-5 tablet:w-5"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
                <label
                  htmlFor="application_agreement"
                  className="text-gray-text text-s font-regular leading-4"
                >
                  {/* {t('confirm-text')} */}
                  Я надаю згоду на обробку інформації згідно Закону України “Про
                  захист персональних даних”.
                </label>
              </div>
            )}
          />
          {errors.agreement && (
            //   -bottom-5
            <p className="text-red-error absolute -bottom-5 text-s leading-4">
              {errors.agreement.message}
            </p>
          )}
        </div>

        {/* //------------ */}
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
    </>
  );
};

export default JoinForm;
