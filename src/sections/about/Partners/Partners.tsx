'use client';
import { HTMLAttributes } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

type PartnersProps = {};

const Partners = ({}: PartnersProps) => {
  return (
    <section className="tablet:transparent mb-[60px] text-center laptop:mb-[100px]">
      <h2 className="pb-3 pt-10 font-noteworthy text-5xl font-normal uppercase tracking-[1.44px] text-accent desktop:pb-12 desktop:text-8xl desktop:tracking-[2.24px]">
        НАШІ ПАРТНЕРИ
      </h2>
      <div className="row-gap container relative mx-auto mb-[56px] grid grid-cols-1 gap-6 tablet:grid-cols-3 laptop:gap-y-11">
        <span className="absolute left-[-23%] -z-10 h-[180%] tablet:w-[60%] w-[120%] bg-[url('/assets/images/Partners/partnersDecor-1.png')] bg-contain bg-center bg-no-repeat tablet:block laptop:bottom-[-70%] laptop:left-[-43%] laptop:w-[90%]" />
        <div className="border-gray-200">
          <a
            href=""
            className="flex h-16 items-center justify-center rounded-lg border bg-[#f1faff] shadow-md"
          >
            <div className="text-gray-700 text-lg font-semibold">
              <span className="font-bold">softserve</span>
            </div>
          </a>
        </div>
        <div className="border-gray-200">
          <a
            href=""
            className="flex h-16 items-center justify-center rounded-lg border bg-[#f1faff] shadow-md"
          >
            <div className="text-gray-700 text-lg font-semibold">
              <span className="font-bold">softserve</span>
            </div>
          </a>
        </div>
        <div className="border-gray-200">
          <a
            href=""
            className="flex h-16 items-center justify-center rounded-lg border bg-[#f1faff] shadow-md"
          >
            <div className="text-gray-700 text-lg font-semibold">
              <span className="font-bold">softserve</span>
            </div>
          </a>
        </div>
        <div className="border-gray-200">
          <a
            href=""
            className="flex h-16 items-center justify-center rounded-lg border bg-[#f1faff] shadow-md"
          >
            <div className="text-gray-700 text-lg font-semibold">
              <span className="font-bold">softserve</span>
            </div>
          </a>
        </div>
        <div className="border-gray-200">
          <a
            href=""
            className="flex h-16 items-center justify-center rounded-lg border bg-[#f1faff] shadow-md"
          >
            <div className="text-gray-700 text-lg font-semibold">
              <span className="font-bold">softserve</span>
            </div>
          </a>
        </div>
        <div className="border-gray-200">
          <a
            href=""
            className="flex h-16 items-center justify-center rounded-lg border bg-[#f1faff] shadow-md"
          >
            <div className="text-gray-700 text-lg font-semibold">
              <span className="font-bold">softserve</span>
            </div>
          </a>
        </div>
        <span className="-z-10 absolute top-[-14%] hidden desktop:right-[-9%] tablet:right-[-3%] h-[180%] laptop:w-[30%] w-[55%] tablet:rotate-0 rotate-[40deg] bg-[url('/assets/images/Partners/partnersDecor-2.png')] bg-contain bg-center bg-no-repeat laptop:block" />
        <span className="-z-10 absolute top-[-14%] right-[-6%] h-[130%] w-[39%] bg-[url('/assets/images/Partners/partnersDecorMob.png')] bg-contain bg-center bg-no-repeat md:hidden tablet:block laptop:block mobile:hidden" />   
      </div>
      <Button className="w-[343px] text-center tablet:w-[326px]">
        Стати партнером
      </Button>
    </section>
  );
};

export default Partners;
