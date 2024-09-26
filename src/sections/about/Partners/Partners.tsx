'use client';
import { HTMLAttributes } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import Home from '@/app/[locale]/page';

type PartnersProps = {};

const Partners = ({}: PartnersProps) => {
  const t = useTranslations('Home.Partners');
  return (
    <section className="tablet:transparent mb-[60px] text-center laptop:mb-[100px]">
      <h2 className="pb-3 pt-10 font-noteworthy text-5xl font-normal uppercase tracking-[1.44px] text-accent desktop:pb-12 desktop:text-8xl desktop:tracking-[2.24px]">
        {t('title')}
      </h2>
      <div className="row-gap container relative mx-auto mb-[56px] grid grid-cols-1 gap-6 tablet:grid-cols-3 laptop:gap-y-11">
        <span className="absolute left-[-23%] -z-10 h-[180%] w-[120%] bg-[url('/assets/images/Partners/partnersDecor-1.png')] bg-contain bg-center bg-no-repeat tablet:block tablet:w-[60%] laptop:bottom-[-70%] laptop:left-[-43%] laptop:w-[90%]" />
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
        <span className="absolute top-[-14%] -z-10 hidden h-[180%] w-[55%] rotate-[40deg] bg-[url('/assets/images/Partners/partnersDecor-2.png')] bg-contain bg-center bg-no-repeat tablet:right-[-3%] tablet:rotate-0 laptop:block laptop:w-[30%] desktop:right-[-9%]" />
        <span className="md:hidden absolute right-[-6.5%] top-[-14%] -z-10 h-[130%] w-[39%] bg-[url('/assets/images/Partners/partnersDecorMob.png')] bg-contain bg-center bg-no-repeat mobile:hidden tablet:block laptop:hidden" />
      </div>
      <Button className="w-[343px] text-center tablet:w-[326px]">
        {t('partners-btn')}
      </Button>
    </section>
  );
};

export default Partners;
