'use client';

import { useRouter, usePathname } from '@/i18n/routing';
import clsx from 'clsx';
import { useLocale } from 'next-intl';

export const LanguageToogler = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const changeLanguage = (locale: any) => {
    router.push(pathname, { locale });
  };

  return (
    <div className="flex items-center gap-[7px]">
      <button
        onClick={() => changeLanguage('ua')}
        type="button"
        className={clsx(
          'flex cursor-pointer items-center text-m font-medium uppercase leading-[19.5px] transition-all duration-300 hover:text-accent tablet:text-sm tablet:font-semibold tablet:leading-[21.94px]',
          currentLocale === 'ua'
            ? 'text-accent'
            : 'text-light-background tablet:text-body-text'
        )}
      >
        UA
      </button>
      <span className="h-[20px] border-[1px] border-stroke-quotes"></span>
      <button
        onClick={() => changeLanguage('en')}
        type="button"
        className={clsx(
          'flex cursor-pointer items-center text-m font-medium uppercase leading-[19.5px] transition-all duration-300 hover:text-accent tablet:text-sm tablet:font-semibold tablet:leading-[21.94px]',
          currentLocale === 'en'
            ? 'text-accent'
            : 'text-light-background tablet:text-body-text'
        )}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToogler;
