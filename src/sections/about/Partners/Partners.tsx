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
      <div className="row-gap container relative mx-auto mb-12 grid grid-cols-1 gap-6 tablet:grid-cols-3 tablet:gap-y-11">
        <span className="sm:top-5 -z-10 lg:top[-9px] lg:left-10 absolute bottom-[-70%] left-[-43%] hidden h-[180%] w-[90%] bg-[url('/assets/images/Partners/partnersDecor-1.png')] bg-contain bg-center bg-no-repeat tablet:block" />
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
        <span className="sm:right-6 absolute -z-10 right-[0%] hidden h-[180%] w-[40%] desktop:top-[-30%] desktop:right-[-18%] transform bg-[url('/assets/images/Partners/partnersDecor-2.png')] bg-contain bg-center bg-no-repeat leading-loose tablet:bottom-[-30%] tablet:right-[-3%] tablet:block laptop:right-[-3%] " />
      </div>
      <Button className="w-[343px] text-center tablet:w-[326px]">
        Стати партнером
      </Button>
    </section>
  );
};

export default Partners;
