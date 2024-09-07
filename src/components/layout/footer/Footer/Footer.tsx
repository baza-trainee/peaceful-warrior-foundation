import { Logo } from '@/components/ui/Logo/Logo';
import Socials from '../../header/Socials/Socials';
import TextLogo from '@/components/ui/Logo/TextLogo';
import { Navigation } from '../../header/Navigation/Navigation';
import { NAV_LINKS } from '@/constants/navlinks/navlinks';
import { ICONS } from '@/constants/icons/icons';
import Email from '../../header/Email/Email';
import Link from 'next/link';
import RuleLinks from '../RuleLinks/ruleLinks';

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <footer className="flex flex-col bg-footer-background pt-[22px] text-light-background">
      <div className="container">
        <div className="mb-[12px] flex items-center justify-between">
          <div className="flex items-center">
            <Logo type="light" />

            {/* Mobile-logo-text before 1024px */}
            <div className="flex flex-col pl-[4px]">
              <TextLogo />
            </div>
          </div>

          {/* Mobile-socials before 1024px */}
          <ul className="flex cursor-pointer items-center gap-[16px]">
            <Socials />
          </ul>
        </div>
        <nav className="mx-auto mb-[24px] flex items-center justify-center">
          <Navigation headerNav={NAV_LINKS} />
        </nav>
        <ul className="mb-[20px] flex flex-wrap justify-between gap-y-[20px] text-btn-background">
          <li className="flex max-w-[176px] flex-col">
            <div className="flex items-center gap-[2px]">
              <ICONS.ADRESS className="h-[20px] fill-btn-background" />
              <h3 className="text-md font-medium leading-[24.38px]">Адреса</h3>
            </div>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=м.+Харків,+вул.+Сергія+Грицевця,+29"
              rel="nofollow noreferrer"
              target="_blank"
              className="mt-[4px] text-m font-light leading-[19.5px] hover:underline"
            >
              м. Харків, вул. Сергія Грицевця, 29
            </Link>
          </li>
          <li className="fle max-w-[176px] flex-col">
            <div className="flex items-center gap-[2px]">
              <ICONS.PHONE className="h-[20px] fill-btn-background" />
              <h3 className="text-md font-medium leading-[24.38px]">Телефон</h3>
            </div>
            <a
              href="tel:+38 (050) 502 75 29"
              className="mt-[4px] block text-m font-light leading-[19.5px] hover:underline"
            >
              +38 (050) 502 75 29
            </a>
            <a
              href="tel:+38 (050) 502 75 29"
              className="mt-[4px] block text-m font-light leading-[19.5px] hover:underline"
            >
              +38 (050) 502 75 29
            </a>
          </li>
          <li className="flex max-w-[176px] flex-col">
            <div className="flex items-center gap-[2px]">
              <ICONS.EMAIL className="h-[20px] fill-btn-background" />
              <h3 className="text-md font-medium leading-[24.38px]">E-mail</h3>
            </div>
            <div className="mt-[4px] text-m font-light leading-[19.5px]">
              <Email />
            </div>
          </li>
        </ul>
        <ICONS.DASHED_BORDER />
        <RuleLinks />
        <p className="text-footer-text mb-[32px] text-center font-helvetica text-xs font-normal leading-[14.32px]">
          Розробка
          <a
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
