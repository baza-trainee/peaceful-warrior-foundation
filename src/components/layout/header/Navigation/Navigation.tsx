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
        </li>
      ))}
    </>
  );
};
