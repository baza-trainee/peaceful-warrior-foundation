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
    <>
      {headerNav.map(({ name, href }) => (
        <li className="flex items-center" key={name}>
          <Link
            href={href}
            className={clsx(
              'text-md font-medium uppercase transition-all duration-300 hover:text-hover laptop:text-m laptop:leading-[20px]',
              {
                'text-accent': pathname === href,
              }
            )}
          >
            {name}
          </Link>
        </li>
      ))}
    </>
  );
};
