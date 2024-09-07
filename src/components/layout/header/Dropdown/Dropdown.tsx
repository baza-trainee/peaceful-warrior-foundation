'use client';

import { ICONS } from '@/constants/icons/icons';
import { useState } from 'react';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="hover:text-hover flex cursor-pointer items-center text-m font-medium uppercase leading-[19.5px] text-light-background transition-all duration-300 laptop:text-sm laptop:font-semibold laptop:leading-[21.94px] laptop:text-body-text"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      UA
      <ICONS.ARROW
        className={`hover:fill-hover h-[16px] fill-light-background transition-all duration-300 laptop:fill-body-text ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        aria-label="arrow"
      />
    </button>
  );
};

export default Dropdown;
