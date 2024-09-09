'use client';

import { Logo } from '@/components/ui/Logo/Logo';
import { NAV_LINKS } from '@/constants/navlinks/navlinks';
import { Navigation } from '../Navigation/Navigation';
import { ICONS } from '@/constants/icons/icons';
import Dropdown from '../Dropdown/Dropdown';
import Socials from '../Socials/Socials';
import Email from '../Email/Email';
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import clsx from 'clsx';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = throttle(() => {
    setIsScrolled(window.scrollY >= 50);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={clsx(
        'fixed top-0 z-50 w-full transition-all duration-300 ease-in-out',
        {
          'laptop:bg-header-background shadow-lg backdrop-blur-sm': isScrolled,
          'bg-transparent backdrop-blur-none': !isScrolled,
        }
      )}
    >
      {/* Mobile-dark-element before 1024px */}
      <div
        className={clsx(
          'flex w-full bg-footer-background transition-all duration-300 ease-in-out laptop:hidden',
          {
            'h-0 overflow-hidden p-0 opacity-0': isScrolled,
            'h-[36px] opacity-100': !isScrolled,
          }
        )}
      >
        <ul className="container flex cursor-pointer items-end justify-between pb-[8px] pt-[4px] laptop:hidden">
          <div className="flex gap-[16px]">
            <Socials />
          </div>
          <div className="flex laptop:hidden">
            <Dropdown />
          </div>
        </ul>
      </div>

      <div
        className={clsx(
          'container flex items-center pt-[16px] laptop:gap-[12px] laptop:pb-0',
          {
            'pb-[13px] laptop:pb-[20px] laptop:pt-[5px]': isScrolled,
            'laptop:pt-[40px]': !isScrolled,
          }
        )}
      >
        <div
          className={clsx('transition-all duration-300 ease-in-out', {
            'laptop:h-0 laptop:overflow-hidden laptop:opacity-0': isScrolled,
            'laptop:h-auto laptop:opacity-100': !isScrolled,
          })}
        >
          <Logo type="dark" />
        </div>

        {/* Desktop-sticky-logo after 1024px */}
        <div>
          <ICONS.LOGO_DARK
            className={clsx(
              'pt-[15px] transition-all duration-300 ease-in-out',
              {
                'laptop:h-[70px] laptop:opacity-100': isScrolled,
                'laptop:h-0 laptop:overflow-hidden laptop:opacity-0':
                  !isScrolled,
              }
            )}
          />
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
          <div
            className={clsx('flex items-center justify-end', {
              'h-0 overflow-hidden opacity-0': isScrolled,
              'h-auto opacity-100': !isScrolled,
            })}
          >
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
          {/* Mobile-burger-btn before 1024px */}
          <button className="flex cursor-pointer laptop:hidden" type="button">
            <ICONS.BURGER_MENU className="w-[32px] fill-body-text" />
          </button>
          <hr
            className={clsx(
              'hidden laptop:flex laptop:w-full',
              {
                'h-0 overflow-hidden opacity-0': isScrolled,
                'h-auto opacity-100': !isScrolled,
              },
              'laptop:border-[1px] laptop:border-gray-devider'
            )}
          />

          {/* Desktop-navlinks after 1024px */}
          <nav className="hidden laptop:flex">
            <ul className="flex flex-col items-center justify-center gap-y-[8px] text-light-background laptop:flex laptop:w-full laptop:flex-row laptop:justify-between laptop:text-black">
              <Navigation headerNav={NAV_LINKS} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
