'use client';

export const LanguageToogler = () => {
  return (
    <div className="flex items-center gap-[7px]">
      <button
        type="button"
        className="flex cursor-pointer items-center text-m font-medium uppercase leading-[19.5px] text-light-background transition-all duration-300 hover:text-hover tablet:text-sm tablet:font-semibold tablet:leading-[21.94px] tablet:text-body-text"
      >
        UK
      </button>
      <span className="h-[20px] border-[1px] border-stroke-quotes"></span>
      <button className="flex cursor-pointer items-center text-m font-medium uppercase leading-[19.5px] text-light-background transition-all duration-300 hover:text-hover tablet:text-sm tablet:font-semibold tablet:leading-[21.94px] tablet:text-body-text">
        EN
      </button>
    </div>
  );
};

export default LanguageToogler;
