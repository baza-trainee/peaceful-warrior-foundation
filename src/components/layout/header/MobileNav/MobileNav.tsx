'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ICONS } from '@/constants/icons/icons';

interface MobileNavProps {
  mobileNav: { name: string; href: string }[];
  setOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  mobileNav,
  setOpenMobileMenu,
}) => {
  const pathname = usePathname();

  return (
    <>
      {mobileNav.map(({ name, href }, index) => (
        <li className="flex flex-col" key={name}>
          <Link
            aria-label="navigation link"
            onClick={() => setOpenMobileMenu(false)}
            href={href}
            className={clsx(
              'text-md font-medium uppercase transition-all duration-300 hover:text-hover',
              {
                'text-accent': pathname === href,
              }
            )}
          >
            {name}
          </Link>
          {index !== mobileNav.length - 1 && (
            <ICONS.DASHED_LINE className="mb-[20px] mt-[20px]" />
          )}
        </li>
      ))}
    </>
  );
};
