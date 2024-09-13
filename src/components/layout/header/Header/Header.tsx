'use client';

import { Logo } from '@/components/ui/Logo/Logo';
import { NAV_LINKS } from '@/constants/navlinks/navlinks';
import { Navigation } from '../Navigation/Navigation';
import Socials from '../Socials/Socials';
import Email from '../Email/Email';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useState } from 'react';
import clsx from 'clsx';
import LanguageToogler from '../LanguageToogler/LanguageToogler';

const Header: React.FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  return (
    <header>
      {/* Mobile-dark-element before 1024px */}
      <div className="flex w-full bg-footer-background transition-all duration-300 ease-in-out tablet:hidden">
        <ul className="container flex cursor-pointer items-end justify-between pb-[8px] pt-[4px] tablet:hidden">
          <div className="flex gap-[16px]">
            <Socials />
          </div>
          <div className="flex tablet:hidden">
            <LanguageToogler />
          </div>
        </ul>
      </div>
      {/* Mobile-logo-and-text-block before 1024px */}
      <div
        className={clsx(
          'bg-transition container flex items-center pb-[12px] pt-[16px] tablet:gap-[12px] tablet:pb-[48px] tablet:pt-[40px]',
          { 'bg-swiper-card-background': openMobileMenu || isExiting }
        )}
      >
        <div>
          <Logo type="dark" />
        </div>

        <div className="flex w-full items-center justify-between tablet:flex-col tablet:items-stretch tablet:gap-y-[12px] tablet:pl-[56px]">
          {/* Mobile-logo-text before 1024px */}
          <div className="flex flex-col pl-[4px] tablet:hidden">
            <h3 className="mb-[2px] text-m font-medium uppercase leading-[19.5px] text-body-text">
              МИРНИЙ ВОЇН
            </h3>
            <p className="mb-[2px] text-xs font-normal leading-[14.63px] text-body-text">
              Благодійний фонд
            </p>
          </div>
          {/* Desktop after 1024px */}
          <div className="flex items-center justify-end">
            <div className="mr-[32px] hidden text-sm font-normal leading-[21.94px] laptop:flex">
              <Email />
            </div>
            <ul className="mr-[32px] hidden cursor-pointer gap-[16px] tablet:flex tablet:flex-row">
              <Socials />
            </ul>
            <button
              type="button"
              className="btn-support mr-[24px] hidden max-w-[237px] animate-bounce rounded-btn-radius bg-accent px-[24px] py-[12px] text-center text-m font-medium uppercase text-white shadow-btn-shadow transition-all duration-300 hover:bg-hover tablet:flex"
            >
              ПІДТРИМАТИ
            </button>
            <div className="hidden tablet:flex">
              <LanguageToogler />
            </div>
          </div>
          <hr className="hidden tablet:flex tablet:w-full tablet:border-[1px] tablet:border-gray-devider" />

          {/* Desktop-navlinks after 1024px */}
          <nav className="hidden tablet:flex">
            <ul className="flex flex-col items-center justify-center gap-y-[8px] text-light-background tablet:flex tablet:w-full tablet:flex-row tablet:justify-between tablet:text-black">
              <Navigation headerNav={NAV_LINKS} />
            </ul>
          </nav>

          {/* Mobile-burger-menu before 1024px */}
          <MobileMenu
            openMobileMenu={openMobileMenu}
            setOpenMobileMenu={setOpenMobileMenu}
            isExiting={isExiting}
            setIsExiting={setIsExiting}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
