'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import * as heroImg from '../../../../public/assets/images/HeroImages/index';
import { ICONS } from '@/constants/icons/icons';
import ButtonDonate from '@/components/buttonDonate/buttonDonate';

type HeroProps = {};

const Hero = ({}: HeroProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative pb-[60px] pt-[12px] tablet:pb-[80px] tablet:pt-[32px] desktop:pb-[100px] desktop:pt-[48px]">
      <div className="absolute top-[168px] z-10 block tablet:relative tablet:top-0 tablet:mb-[53px]">
        <h1 className="m-0 mx-auto w-[343px] text-center text-[26px] leading-[36px] text-secondaryTitile tablet:w-[680px] tablet:text-[36px] tablet:leading-[44px] tablet:text-mainTitle laptop:w-[903px] laptop:text-[44px] desktop:leading-[54px]">
          Підтримаємо наших{' '}
          <span className="font-noteworthy text-[30px] font-light tablet:text-[36px] tablet:text-accent laptop:text-[44px]">
            захисників
          </span>{' '}
          <span>—</span> зміцнимо майбутнє країни
        </h1>
        <div className="ml-[277px] hidden h-[7px] content-center items-center tablet:flex tablet:w-[316px] laptop:ml-[408px] laptop:w-[375px] desktop:ml-[500px]">
          <ICONS.WAVY_LINE aria-label="wavy line" />
        </div>

        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="btn-support mx-auto mt-[24px] flex max-w-[244px] animate-bounce rounded-btn-radius bg-accent px-[57px] py-[15px] text-center text-m font-medium uppercase text-white shadow-btn-shadow transition-all duration-300 hover:bg-hover tablet:hidden"
        >
          ПІДТРИМАТИ
        </button>

        {isOpen && (
          <ButtonDonate isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </div>
      <div className="relative tablet:hidden">
        <Image
          className="absolute"
          src={heroImg.heroMobileGradient}
          width={475}
          height={449}
          alt="Radial Gradient"
          sizes="(min-width: 320px)"
        />
        <Image
          className="ml-auto"
          src={heroImg.heroMobile}
          alt="Photographs of the results of the fund's work"
          sizes="(min-width: 320px)"
        />
      </div>

      <Image
        className="hidden tablet:block laptop:hidden"
        src={heroImg.heroTablet}
        alt="Photographs of the results of the fund's work"
        sizes="(min-width: 744px)"
      />
      <Image
        className="hidden laptop:block"
        src={heroImg.heroDesktop}
        alt="Photographs of the results of the fund's work"
        sizes="(min-width: 1024px)"
      />
    </section>
  );
};
export default Hero;
