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

import InputMask from 'react-input-mask-next';
import { validateString, validateMessage } from './validationFunctions';
import ErrorMessage from './ErrorMessage';
import Button from '@/components/ui/Button';

type BePartnerFormProps = {
  modal?: boolean;
  className?: string;
};
type BePartnerForm = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  position: string;
  message: string;
  agreement: boolean;
};
const BePartnerForm: React.FC<BePartnerFormProps> = ({
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
  } = useForm<BePartnerForm>({
    defaultValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      position: '',
      message: '',
      agreement: false,
    },
    mode: 'onChange',
  });

  const submit: SubmitHandler<BePartnerForm> = async (data) => {
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
  const errorForm: SubmitErrorHandler<BePartnerForm> = (er) => {
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
      <div className="mb-6 flex w-full flex-wrap gap-6 tablet:flex-nowrap">
        <label className="relative w-full">
          {/* ---- name ---*/}
          <input
            type="text"
            {...register('name', {
              required: t('required-shot'),
              minLength: {
                value: 2,
                message: t('invalid-name'),
              },
              validate: validateString(t),
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
        {/* ---- surname ----*/}
        <label className="relative w-full">
          <input
            type="text"
            {...register('surname', {
              required: t('required-shot'),
              minLength: {
                value: 2,
                message: t('invalid-surname'),
              },
              validate: validateString(t),
            })}
            aria-invalid={errors.surname ? 'true' : 'false'}
            //
            className={clsx(
              'block w-full border-b border-gray-devider bg-[transparent] pb-2 text-m leading-[19.5px] text-body-text placeholder:text-m placeholder:leading-[19.5px] placeholder:text-gray-devider hover:border-form-hover hover:placeholder:text-form-hover focus:outline-none active:border-body-text tablet:pb-3 tablet:text-sm tablet:font-medium tablet:leading-[22px] tablet:placeholder:text-sm tablet:placeholder:leading-[22px]',
              { 'border-red-error placeholder:text-red-error': errors.surname }
            )}
            placeholder={t('surname-placeholder')}
          />
          {errors.surname && (
            <ErrorMessage className="absolute -bottom-5 text-s leading-4">
              {errors.surname.message}
            </ErrorMessage>
          )}
        </label>
      </div>
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
      {/* //------------- email mask */}
      <label className="relative mb-6 block w-full">
        <input
          {...register('email', {
            required: t('required-shot'),
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: t('invalid-email'),
            },
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
          className={clsx(
            'block w-full border-b border-gray-devider bg-[transparent] pb-2 text-m leading-[19.5px] text-body-text placeholder:text-m placeholder:leading-[19.5px] placeholder:text-gray-devider hover:border-form-hover hover:placeholder:text-form-hover focus:outline-none active:border-body-text tablet:pb-3 tablet:text-sm tablet:font-medium tablet:leading-[22px] tablet:placeholder:text-sm tablet:placeholder:leading-[22px]',
            {
              'border-red-error placeholder:text-red-error': errors.email,
            }
          )}
          placeholder={t('email-placeholder')}
        />
        {errors.email && (
          <ErrorMessage className="absolute -bottom-5 text-s leading-4">
            {errors.email.message}
          </ErrorMessage>
        )}
      </label>
      {/*---- position -----*/}
      <label className="relative mb-6 block w-full">
        <input
          type="text"
          {...register('position', {
            required: t('required-long'),
            validate: validateString(t),
          })}
          className={clsx(
            'block w-full border-b border-gray-devider bg-[transparent] pb-2 text-m leading-[19.5px] text-body-text placeholder:text-m placeholder:leading-[19.5px] placeholder:text-gray-devider hover:border-form-hover hover:placeholder:text-form-hover focus:outline-none active:border-body-text tablet:pb-3 tablet:text-sm tablet:font-medium tablet:leading-[22px] tablet:placeholder:text-sm tablet:placeholder:leading-[22px]',
            {
              'border-red-error placeholder:text-red-error': errors.position,
            }
          )}
          placeholder={t('position-placeholder')}
          aria-invalid={errors.position ? 'true' : 'false'}
        />
        {errors.position && (
          <ErrorMessage className="absolute -bottom-5 text-s leading-4">
            {errors.position.message}
          </ErrorMessage>
        )}
      </label>
      {/*---- message ----*/}
      <label className="relative mb-6 w-full">
        <span
          className={clsx(
            'mb-4 block text-md font-medium leading-[20px] text-body-text tablet:text-l tablet:leading-[26.82px]',
            { 'mb-2': modal }
          )}
        >
          {t('message-label')}
        </span>
        <textarea
          {...register('message', {
            maxLength: {
              value: 700,
              message: t('message-too-long'),
            },
            validate: validateMessage(t),
          })}
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
        {errors.message && (
          <ErrorMessage className="absolute -bottom-5 text-s leading-4">
            {errors.message.message}
          </ErrorMessage>
        )}
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
            {t('btnPartner-text')}
          </span>
        </div>
      </Button>
    </form>
  );
};

export default BePartnerForm;
