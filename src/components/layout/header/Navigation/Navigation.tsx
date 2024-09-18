'use client';

import { Link, usePathname } from '@/navigation';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

type NavLink = {
  name: string;
  href: string;
};

interface NavigationProps {
  listClass?: string;
  headerNav: NavLink[];
  renderAfterItem?: (index: number, headerNav: NavLink[]) => React.ReactNode;
  onClickLink?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  headerNav,
  renderAfterItem,
  onClickLink,
  listClass = 'flex items-center',
}) => {
  const pathname = usePathname();
  const t = useTranslations('Layout.Navigation');

  return (
    <>
      {headerNav.map(({ name, href }, idx) => {
        const isActiveLink = pathname === href || pathname === `/${href}`;
        return (
          <li className={`${listClass}`} key={name}>
            <Link
              aria-label={t(name)}
              href={href}
              onClick={onClickLink}
              className={clsx(
                'text-m font-medium uppercase leading-[1.25] transition-all duration-300 hover:text-hover',
                {
                  'text-accent': isActiveLink,
                }
              )}
            >
              {t(name)}
            </Link>
            {renderAfterItem && renderAfterItem(idx, headerNav)}
          </li>
        );
      })}
    </>
  );
};
