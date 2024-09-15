'use client';

import { Logo } from '@/components/ui/Logo/Logo';
import Socials from '../../header/Socials/Socials';
import TextLogo from '@/components/ui/Logo/TextLogo';
import { Navigation } from '../../header/Navigation/Navigation';
import { NAV_LINKS } from '@/constants/navlinks/navlinks';
import { ICONS } from '@/constants/icons/icons';
import Email from '../../header/Email/Email';
import Link from 'next/link';
import RuleLinks from '../RuleLinks/ruleLinks';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col bg-footer-background pt-[22px] text-light-background laptop:pt-[56px]">
      <div className="container">
        <div className="mb-[20px] flex items-center justify-between text-light-background laptop:mb-[40px]">
          {/* Mobile-logo before 1024px */}
          <div className="flex items-center gap-x-[4px] laptop:hidden">
            <Link href="/" aria-label="logo">
              <ICONS.LOGO_LIGHT className="h-[74px] laptop:h-[196px]" />
            </Link>
            {/* Mobile-logo-text before 1024px */}
            <div className="flex flex-col">
              <TextLogo />
            </div>
          </div>

          <p className="hidden text-4xl font-normal leading-[41.45px] laptop:flex">
            Благодійний фонд “Мирний воїн”
          </p>

          {/* Socials */}
          <ul className="flex cursor-pointer items-center gap-[16px]">
            <li>
              <ICONS.INSTAGRAM
                aria-label="instagram"
                className="laptop:fill-gray-background w-[28px] fill-gray-border transition-all duration-300 hover:scale-125 hover:fill-light-background laptop:w-[34px]"
              />
            </li>
            <li>
              <ICONS.FACEBOOK
                aria-label="facebook"
                className="laptop:fill-gray-background w-[28px] fill-gray-border transition-all duration-300 hover:scale-125 hover:fill-light-background laptop:w-[34px]"
              />
            </li>
          </ul>
        </div>
        {/* Info block */}
        <div className="flex flex-col laptop:mb-[32px] laptop:flex-row laptop:justify-between">
          <div className="hidden items-start laptop:flex">
            <Link href="/" aria-label="logo">
              <ICONS.LOGO_LIGHT className="w-[196px]" />
            </Link>
          </div>

          {/* Mobile-footer-navigation before 1024px */}
          <nav className="mb-[16px] flex laptop:hidden">
            <ul className="flex flex-col gap-y-[8px] text-light-background laptop:flex laptop:w-full laptop:flex-row laptop:justify-between">
              <Navigation headerNav={NAV_LINKS} />
            </ul>
          </nav>
          {/* Desktop-footer-navigation after 1024px */}
          <nav className="hidden laptop:flex">
            <ul className="flex flex-col gap-y-[16px] text-light-background">
              <Navigation headerNav={NAV_LINKS} />
            </ul>
          </nav>

          <div className="laptop:flex laptop:flex-row-reverse laptop:gap-[25px] desktop:gap-[85px]">
            <ul className="mb-[20px] flex flex-wrap justify-between gap-y-[20px] text-light-background laptop:m-0 laptop:flex-col-reverse laptop:flex-nowrap laptop:gap-y-[16px]">
              <li className="flex max-w-[176px] flex-col tablet:max-w-full">
                <div className="flex items-center gap-[2px]">
                  <ICONS.ADRESS className="h-[20px] fill-light-background" />
                  <h3 className="text-md font-medium leading-[24.38px]">
                    Адреса
                  </h3>
                </div>
                <Link
                  aria-label="address"
                  href="https://www.google.com/maps/search/?api=1&query=м.+Харків,+вул.+92-ої+Бригади,+29"
                  rel="nofollow noreferrer"
                  target="_blank"
                  className="mt-[4px] text-m font-light leading-[19.5px] transition-all duration-200 hover:text-gray-border hover:underline"
                >
                  м. Харків, вул. 92-ої Бригади, 29
                </Link>
              </li>
              <li className="flex max-w-[176px] flex-col tablet:max-w-full">
                <div className="flex items-center gap-[2px]">
                  <ICONS.PHONE className="h-[20px] fill-light-background" />
                  <h3 className="text-md font-medium leading-[24.38px]">
                    Телефон
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
                  <h3 className="text-md font-medium leading-[24.38px]">
                    E-mail
                  </h3>
                </div>
                <div className="mt-[4px] w-full text-m font-light leading-[19.5px]">
                  <Email />
                </div>
              </li>
            </ul>
            <ICONS.DASHED_BORDER className="laptop:hidden" />
            <RuleLinks />
          </div>
        </div>

        <p className="mb-[32px] text-center font-helvetica text-xs font-normal leading-[14.32px] text-footer-text laptop:mb-[56px] laptop:text-s laptop:font-normal laptop:leading-[16.7px]">
          Розробка
          <a
            aria-label="baza traenee link"
            href="https://baza-trainee.tech/ua"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-accent hover:underline"
          >
            {' '}
            Baza Trainee Ukraine{' '}
          </a>
          2024 © Усі права захищені
        </p>
      </div>
    </footer>
  );
};

export default Footer;
