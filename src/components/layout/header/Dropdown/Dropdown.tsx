'use client';

import { ICONS } from '@/constants/icons/icons';
import { useState } from 'react';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <button
        className="flex cursor-pointer font-medium text-m leading-[19.5px] text-light-background laptop:font-semibold laptop:text-sm laptop:leading-[21.94px] laptop:text-body-text items-center uppercase"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        UA
        <ICONS.ARROW
          className={`fill-light-background laptop:fill-body-text h-[16px] duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          aria-label="arrow"
        />
      </button>
  );
};

export default Dropdown;
