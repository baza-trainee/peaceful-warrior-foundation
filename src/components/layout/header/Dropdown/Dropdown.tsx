'use client';

import { ICONS } from '@/constants/icons/icons';
import { useState } from 'react';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='hidden laptop:flex'>
      <button
        className="flex cursor-pointer font-semibold text-sm leading-[21.94px] text-body-text items-center uppercase"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        UA
        <ICONS.ARROW
          className={`h-[16px] duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
          aria-label="arrow"
        />
      </button>
    </div>
  );
};

export default Dropdown;
