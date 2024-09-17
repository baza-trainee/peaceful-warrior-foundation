import { ICONS } from '@/constants/icons/icons';
import Link from 'next/link';
import Email from '../../header/Email/Email';
import { useTranslations } from 'next-intl';

const Contacts: React.FC = () => {
  const t = useTranslations('Home.Footer.Contacts');

  return (
    <ul className="mb-[20px] flex flex-wrap justify-between gap-y-[20px] text-light-background laptop:m-0 laptop:flex-col-reverse laptop:flex-nowrap laptop:gap-y-[16px]">
      <li className="flex max-w-[176px] flex-col tablet:max-w-full">
        <div className="flex items-center gap-[2px]">
          <ICONS.ADRESS className="h-[20px] fill-light-background" />
          <h3 className="text-md font-medium leading-[24.38px]">
            {t('address')}
          </h3>
        </div>
        <Link
          aria-label="address"
          href="https://www.google.com/maps/search/?api=1&query=м.+Харків,+вул.+92-ої+Бригади,+29"
          rel="nofollow noreferrer"
          target="_blank"
          className="mt-[4px] text-m font-light leading-[19.5px] transition-all duration-200 hover:text-gray-border hover:underline"
        >
          {t('address-text')}
        </Link>
      </li>
      <li className="flex max-w-[176px] flex-col tablet:max-w-full">
        <div className="flex items-center gap-[2px]">
          <ICONS.PHONE className="h-[20px] fill-light-background" />
          <h3 className="text-md font-medium leading-[24.38px]">
            {t('phone')}
          </h3>
        </div>
        <a
          aria-label="phone"
          href="tel:+38 (050) 502 75 29"
          className="mt-[4px] block text-m font-light leading-[19.5px] transition-all duration-200 hover:text-gray-border hover:underline"
        >
          +38 050 502 75 29
        </a>
        <a
          aria-label="phone"
          href="tel:+38 (050) 502 75 29"
          className="mt-[4px] block text-m font-light leading-[19.5px] transition-all duration-200 hover:text-gray-border hover:underline"
        >
          +38 050 502 75 29
        </a>
      </li>
      <li className="flex max-w-[176px] flex-col tablet:max-w-full">
        <div className="flex items-center gap-[2px]">
          <ICONS.EMAIL className="h-[20px] fill-light-background" />
          <h3 className="text-md font-medium leading-[24.38px]">E-mail</h3>
        </div>
        <div className="mt-[4px] w-full text-m font-light leading-[19.5px]">
          <Email />
        </div>
      </li>
    </ul>
  );
};

export default Contacts;
