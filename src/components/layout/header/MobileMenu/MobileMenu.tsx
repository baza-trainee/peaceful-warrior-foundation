'use client';

import { useEffect } from 'react';
import { NAV_LINKS } from '@/constants/navlinks/navlinks';
import clsx from 'clsx';
import { Navigation } from '../Navigation/Navigation';
import { ICONS } from '@/constants/icons/icons';

interface MobileMenuProps {
  openMobileMenu: boolean;
  setOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isExiting: boolean;
  setIsExiting: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  openMobileMenu,
  setOpenMobileMenu,
  isExiting,
  setIsExiting,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: { code: string }) => {
      if (e.code === 'Escape') {
        closeMenu();
      }
    };

    const closeMenu = () => {
      setIsExiting(true);
      setTimeout(() => {
        setIsExiting(false);
        setOpenMobileMenu(false);
      }, 300); // Відповідає тривалості анімації
    };

    window.addEventListener('keydown', handleKeyDown);

    const mainElement = document.querySelector('main'); // Додаємо/видаляємо розмиття фону для <main>
    if (openMobileMenu) {
      document.body.style.overflow = 'hidden';
      if (mainElement) {
        mainElement.classList.add('backdrop-blur');
      }
    } else {
      document.body.style.overflow = 'auto';
      if (mainElement) {
        mainElement.classList.remove('backdrop-blur');
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
      if (mainElement) {
        mainElement.classList.remove('backdrop-blur');
      }
    };
  }, [openMobileMenu, setIsExiting, setOpenMobileMenu]);

  const handleMenuClick = () => {
    if (openMobileMenu) {
      setIsExiting(true);
      setTimeout(() => {
        setIsExiting(false);
        setOpenMobileMenu(false);
      }, 300);
    } else {
      setOpenMobileMenu(true);
    }
  };

  return (
    <div className="tablet:hidden">
      <button
        onClick={handleMenuClick}
        className={clsx('menu-btn', {
          active: openMobileMenu && !isExiting,
        })}
        type="button"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {(openMobileMenu || isExiting) && (
        <div
          onClick={handleMenuClick}
          className={clsx(
            'fixed right-0 top-0 z-50 h-full w-full',
            openMobileMenu && !isExiting
              ? 'mobile-menu-enter'
              : 'mobile-menu-exit'
          )}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute left-0 top-[126px] flex w-full flex-col overflow-y-hidden bg-swiper-card-background px-[16px] pb-[24px] pt-[48px] text-body-text shadow-md"
          >
            <Navigation
              onClickLink={handleMenuClick}
              headerNav={NAV_LINKS}
              listClass="flex flex-col"
              renderAfterItem={(index, headerNav) =>
                index !== headerNav.length - 1 ? (
                  <ICONS.DASHED_LINE className="mb-[20px] mt-[20px]" />
                ) : null
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
