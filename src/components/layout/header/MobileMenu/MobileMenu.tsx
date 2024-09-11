'use client';

import { useEffect } from 'react';
import { NAV_LINKS } from '@/constants/navlinks/navlinks';
import { MobileNav } from '../MobileNav/MobileNav';
import clsx from 'clsx';

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
      }, 600); // Відповідає тривалості анімації
    };

    window.addEventListener('keydown', handleKeyDown);

    if (openMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
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
    <div className="laptop:hidden">
      <button
        onClick={handleMenuClick}
        className={clsx('menu-btn', { active: openMobileMenu && !isExiting })}
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
            'fixed right-0 top-0 z-50 w-full',
            openMobileMenu && !isExiting
              ? 'mobile-menu-enter'
              : 'mobile-menu-exit'
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
