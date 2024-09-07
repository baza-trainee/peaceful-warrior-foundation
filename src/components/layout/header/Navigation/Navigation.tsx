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
              'hover:text-hover text-m font-medium uppercase leading-[20px] transition-all duration-300',
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
