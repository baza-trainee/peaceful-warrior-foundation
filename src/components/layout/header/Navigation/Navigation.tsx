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
      <ul className="flex flex-col justify-center gap-y-[8px] text-btn-background laptop:text-black laptop:flex-row laptop:flex items-center laptop:w-full laptop:justify-between">
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
  );
};
