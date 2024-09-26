'use client';

import { useRouter, usePathname } from '@/i18n/routing';
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
        className="flex cursor-pointer items-center text-m font-medium uppercase leading-[19.5px] text-light-background transition-all duration-300 hover:text-accent tablet:text-sm tablet:font-semibold tablet:leading-[21.94px] tablet:text-body-text"
        style={{ color: currentLocale === 'ua' ? '#115ccd' : '#f0f0f0' }}
      >
        UA
      </button>
      <span className="h-[20px] border-[1px] border-stroke-quotes"></span>
      <button
        onClick={() => changeLanguage('en')}
        type="button"
        className="flex cursor-pointer items-center text-m font-medium uppercase leading-[19.5px] text-light-background transition-all duration-300 hover:text-accent tablet:text-sm tablet:font-semibold tablet:leading-[21.94px] tablet:text-body-text"
        style={{ color: currentLocale === 'en' ? '#115ccd' : '#f0f0f0' }}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToogler;
