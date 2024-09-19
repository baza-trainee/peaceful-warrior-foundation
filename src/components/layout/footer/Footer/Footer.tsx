'use client';

import TextLogo from '@/components/ui/Logo/TextLogo';
import { Navigation } from '../../header/Navigation/Navigation';
import { NAV_LINKS } from '@/constants/navlinks/navlinks';
import { ICONS } from '@/constants/icons/icons';
import Link from 'next/link';
import Contacts from '../Contacts/Contacts';
import RuleLinks from '../RuleLinks/RuleLinks';
import Socials from '../../header/Socials/Socials';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const t = useTranslations('Layout.Footer');

  return (
    <footer
      id="footer"
      className="flex flex-col bg-footer-background pt-[22px] text-light-background laptop:pt-[56px]"
    >
      <div className="container">
        <div className="mb-[20px] flex items-center justify-between text-light-background laptop:mb-[40px]">
          {/* Mobile-logo before 1024px */}
          <div className="flex items-center gap-x-[4px] laptop:hidden">
            <Link href="/" aria-label={t('logo')}>
              <ICONS.LOGO_LIGHT className="h-[74px] laptop:h-[196px]" />
            </Link>
            {/* Mobile-logo-text before 1024px */}
            <div className="flex flex-col">
              <TextLogo />
            </div>
          </div>

          <h2 className="hidden text-4xl font-normal leading-[41.45px] laptop:flex">
            {t('title')}
          </h2>

          {/* Socials */}
          <ul className="flex cursor-pointer items-center gap-[16px]">
            <Socials
              instagramClass={
                'w-[28px] fill-gray-border transition-all duration-300 hover:scale-125 hover:fill-light-background laptop:w-[34px] laptop:fill-gray-background'
              }
              facebookClass={
                'w-[28px] fill-gray-border transition-all duration-300 hover:scale-125 hover:fill-light-background laptop:w-[34px] laptop:fill-gray-background'
              }
            />
          </ul>
        </div>
        {/* Info block */}
        <div className="flex flex-col laptop:mb-[32px] laptop:flex-row laptop:justify-between">
          <div className="hidden items-start laptop:flex">
            <Link href="/" aria-label={t('logo')}>
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

          <div className="laptop:flex laptop:flex-row-reverse laptop:gap-[25px] desktop:gap-[90px]">
            <Contacts />
            <ICONS.DASHED_BORDER className="laptop:hidden" />
            <RuleLinks />
          </div>
        </div>

        <p className="mb-[32px] text-center font-helvetica text-xs font-normal leading-[14.32px] text-footer-text laptop:mb-[56px] laptop:text-s laptop:font-normal laptop:leading-[16.7px]">
          {t('development')}
          <a
            aria-label={t('baza')}
            href="https://baza-trainee.tech/ua"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-accent hover:underline"
          >
            {' '}
            Baza Trainee Ukraine{' '}
          </a>
          2024 © {t('rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
