'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type NavLink = {
  name: string;
  href: string;
};

interface NavigationProps {
  listClass?: string;
  headerNav: NavLink[];
  renderAfterItem?: (index: number, headerNav: NavLink[]) => React.ReactNode;
}

export const Navigation: React.FC<NavigationProps> = ({
  headerNav,
  renderAfterItem,
  listClass = 'flex items-center',
}) => {
  const pathname = usePathname();

  return (
    <>
      {headerNav.map(({ name, href }, idx) => (
        <li className={`${listClass}`} key={name}>
          <Link
            aria-label="navigation link"
            href={href}
            className={clsx(
              'text-m font-medium uppercase leading-[1.25] transition-all duration-300 hover:text-hover',
              {
                'text-accent': pathname === href,
              }
            )}
          >
            {name}
          </Link>
          {renderAfterItem && renderAfterItem(idx, headerNav)}
        </li>
      ))}
    </>
  );
};
