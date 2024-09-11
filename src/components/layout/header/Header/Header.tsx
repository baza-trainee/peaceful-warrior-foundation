'use client';

import { Logo } from '@/components/ui/Logo/Logo';
import { NAV_LINKS } from '@/constants/navlinks/navlinks';
import { Navigation } from '../Navigation/Navigation';
import Dropdown from '../LanguageToogler/LanguageToogler';
import Socials from '../Socials/Socials';
import Email from '../Email/Email';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useState } from 'react';
import clsx from 'clsx';

const Header: React.FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  return (
    <header>
      {/* Mobile-dark-element before 1024px */}
      <div className="flex w-full bg-footer-background transition-all duration-300 ease-in-out laptop:hidden">
        <ul className="container flex cursor-pointer items-end justify-between pb-[8px] pt-[4px] laptop:hidden">
          <div className="flex gap-[16px]">
            <Socials />
          </div>
          <div className="flex laptop:hidden">
            <Dropdown />
          </div>
        </ul>
      </div>
      {/* Mobile-logo-and-text-block before 1024px */}
      <div
        className={clsx(
          'bg-transition container flex items-center pb-[12px] pt-[16px] laptop:gap-[12px] laptop:pb-[48px] laptop:pt-[40px]',
          { 'bg-swiper-card-background': openMobileMenu || isExiting }
        )}
      >
        <div>
          <Logo type="dark" />
        </div>

        <div className="flex w-full items-center justify-between laptop:flex-col laptop:items-stretch laptop:gap-y-[12px] laptop:pl-[56px]">
          {/* Mobile-logo-text before 1024px */}
          <div className="flex flex-col pl-[4px] laptop:hidden">
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
            <ul className="mr-[32px] hidden cursor-pointer gap-[16px] laptop:flex laptop:flex-row">
              <Socials />
            </ul>
            <a
              href="#support"
              type="button"
              className="mr-[24px] hidden max-w-[237px] rounded-btn-radius bg-accent px-[24px] py-[12px] text-center text-m font-medium uppercase text-white shadow-btn-shadow transition-all duration-300 hover:bg-hover laptop:flex"
            >
              ПІДТРИМАТИ
            </a>
            <div className="hidden laptop:flex">
              <Dropdown />
            </div>
          </div>
          <hr className="hidden laptop:flex laptop:w-full laptop:border-[1px] laptop:border-gray-devider" />

          {/* Desktop-navlinks after 1024px */}
          <nav className="hidden laptop:flex">
            <ul className="flex flex-col items-center justify-center gap-y-[8px] text-light-background laptop:flex laptop:w-full laptop:flex-row laptop:justify-between laptop:text-black">
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
