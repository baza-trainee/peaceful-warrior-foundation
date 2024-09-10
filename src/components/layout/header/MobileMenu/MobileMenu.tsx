'use client';

import { ICONS } from '@/constants/icons/icons';
import { useEffect } from 'react';
import { NAV_LINKS } from '@/constants/navlinks/navlinks';
import { MobileNav } from '../MobileNav/MobileNav';
import clsx from 'clsx';

interface MobileMenuProps {
  openMobileMenu: boolean;
  setOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  openMobileMenu,
  setOpenMobileMenu,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: { code: string }) => {
      if (e.code === 'Escape') {
        setOpenMobileMenu(false);
      }
    };

    // Додаємо слухача подій на клавіатуру
    window.addEventListener('keydown', handleKeyDown);

    // Змінюємо overflow тільки якщо меню відкрите
    if (openMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Очищення слухача подій та overflow при демонтажі
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [openMobileMenu, setOpenMobileMenu]);

  return (
    <div className="laptop:hidden">
      <button
        onClick={() => setOpenMobileMenu(!openMobileMenu)}
        className="flex cursor-pointer transition-all duration-300 laptop:hidden"
        type="button"
      >
        {openMobileMenu ? (
          <ICONS.CROSS className="h-[32px] fill-body-text" />
        ) : (
          <ICONS.BURGER_MENU className="w-[32px] fill-body-text" />
        )}
      </button>

      {openMobileMenu && (
        <div
          onClick={() => setOpenMobileMenu(false)}
          className={clsx(
            'fixed left-0 top-0 z-50 w-full',
            openMobileMenu ? 'mobile-menu-enter' : 'mobile-menu-exit'
          )}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute left-0 top-[126px] flex h-screen w-full flex-col overflow-y-hidden bg-swiper-card-background px-[16px] pt-[48px] text-body-text"
          >
            <MobileNav
              setOpenMobileMenu={setOpenMobileMenu}
              mobileNav={NAV_LINKS}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
