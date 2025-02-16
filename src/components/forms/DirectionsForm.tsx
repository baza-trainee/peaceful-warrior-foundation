'use client';
import React from 'react';
import toast from 'react-hot-toast';
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

import ErrorMessage from './ErrorMessage';
import { Dir } from 'fs';

type DirectionsFormProps = {
  modal?: boolean;
  className?: string;
};
type DirectionsForm = {
  name: string;
  phone: string;
  message: string;
  agreement: boolean;
};
const DirectionsForm: React.FC<DirectionsFormProps> = ({
  modal = false,
  className,
}) => {
  const t = useTranslations('Forms.Form');

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DirectionsForm>({
    defaultValues: {
      name: '',
      phone: '',
      message: '',
      agreement: false,
    },
    mode: 'onChange',
  });

  const submit: SubmitHandler<DirectionsForm> = async (data) => {
    try {
      console.log(data);
      //----------
      toast.success(`${t('toast')} ${data.name} !`, {
        duration: 4000,
        icon: '👏',
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
  const errorForm: SubmitErrorHandler<DirectionsForm> = (er) => {
    console.log('er-', er);
  };

  return (
    <form
      className={clsx(
        'flex w-full flex-col items-start tablet:mx-auto',
        modal
          ? 'mx-auto tablet:w-[461px]'
          : 'tablet:w-[506px] desktop:w-[674px]',
        className
      )}
      onSubmit={handleSubmit(submit, errorForm)}
    >
      {/*---- name ----*/}
      <label className="relative mb-6 w-full">
        <input
          type="text"
          {...register('name', {
            required: t('required-long'),
            minLength: {
              value: 2,
              message: t('invalid-name'),
            },
          })}
          aria-invalid={errors.name ? 'true' : 'false'}
          //
          className={clsx(
            'block w-full border-b border-gray-devider bg-[transparent] pb-2 text-m leading-[19.5px] text-body-text placeholder:text-m placeholder:leading-[19.5px] placeholder:text-gray-devider hover:border-form-hover hover:placeholder:text-form-hover focus:outline-none active:border-body-text tablet:pb-3 tablet:text-sm tablet:font-medium tablet:leading-[22px] tablet:placeholder:text-sm tablet:placeholder:leading-[22px]',
            { 'border-red-error placeholder:text-red-error': errors.name }
          )}
          placeholder={t('name-placeholder')}
        />
        {errors.name && (
          <ErrorMessage className="absolute -bottom-5 text-s leading-4">
            {errors.name.message}
          </ErrorMessage>
        )}
      </label>

      {/*---- phone ----*/}
      <label className="relative mb-6 block w-full">
        <Controller
          name="phone"
          control={control}
          rules={{
            required: t('required-shot'),
            pattern: {
              value: /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
              message: t('invalid-phone'),
            },
          }}
          render={({ field }) => (
            <InputMask
              {...field}
              mask="+380 (99) 999-99-99"
              placeholder={t('phone-placeholder')}
              type="text"
              aria-invalid={errors.phone ? 'true' : 'false'}
              className={clsx(
                'block w-full border-b border-gray-devider bg-[transparent] pb-2 text-m leading-[19.5px] text-body-text placeholder:text-m placeholder:leading-[19.5px] placeholder:text-gray-devider hover:border-form-hover hover:placeholder:text-form-hover focus:outline-none active:border-body-text tablet:pb-3 tablet:text-sm tablet:font-medium tablet:leading-[22px] tablet:placeholder:text-sm tablet:placeholder:leading-[22px]',
                {
                  'border-red-error placeholder:text-red-error': errors.phone,
                }
              )}
            />
          )}
        />
        {errors.phone && (
          <ErrorMessage className="absolute -bottom-5 text-s leading-4">
            {errors.phone.message}
          </ErrorMessage>
        )}
      </label>

      {/*---- message ----*/}
      <label className="mb-6 w-full">
        <span
          className={clsx(
            'mb-4 block text-md font-medium leading-[20px] text-body-text tablet:text-l tablet:leading-[26.82px]',
            { 'mb-2': modal }
          )}
        >
          {t('message-label')}
        </span>
        <textarea
          {...register('message')}
          placeholder={t('message-placeholder')}
          rows={1}
          //   bg-light-background
          className={clsx(
            'block w-full resize-none overflow-hidden border-b bg-[transparent] pb-2 text-m leading-[19.5px] text-body-text placeholder:text-m placeholder:leading-[19.5px] placeholder:text-gray-devider hover:border-form-hover hover:placeholder:text-form-hover focus:outline-none active:border-body-text tablet:pb-3 tablet:text-sm tablet:font-medium tablet:leading-[22px] tablet:placeholder:text-sm tablet:placeholder:leading-[22px]'
          )}
          onInput={(e) => {
            e.currentTarget.style.height = 'auto';
            e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
          }}
        />
      </label>
      {/* Чекбокс для підтвердження */}
      <div className="relative mb-6 w-full tablet:mb-8">
        <Controller
          name="agreement"
          control={control}
          rules={{ required: t('required-chесkbox') }}
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
                className="text-s font-regular leading-4 text-gray-text"
              >
                {t('confirm-text')}
              </label>
            </div>
          )}
        />
        {errors.agreement && (
          // <p className="text-red-error absolute -bottom-5 text-s leading-4">
          //   {errors.agreement.message}
          // </p>
          <ErrorMessage className="absolute -bottom-5 text-s leading-4">
            {errors.agreement.message}
          </ErrorMessage>
        )}
      </div>
      <Button
        type="submit"
        modal
        aria-label="Подати заявку"
        className="z-10 m-auto h-[44px] w-[298px] py-[11px] tablet:h-[52px] tablet:w-[326px]"
      >
        <div>
          <span className="text-center text-sm font-medium leading-[22px]">
            {t('btnDirections-text')}
          </span>
        </div>
      </Button>
    </form>
  );
};
export default DirectionsForm;
