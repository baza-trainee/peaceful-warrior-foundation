'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export const Navigation = ({
  headerNav,
}: {
  headerNav: { name: string; href: string }[];
}) => {
  const pathname = usePathname();

  return (
    <nav className='hidden laptop:flex'>
      <ul className="laptop:flex items-center w-full justify-between">
        {headerNav.map(({ name, href }) => (
          <li className='flex items-center' key={name}>
            <Link
              href={href}
              className={clsx('font-medium text-m uppercase', {
                'text-accent': pathname === href,
              })}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
