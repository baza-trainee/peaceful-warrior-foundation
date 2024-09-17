import { HTMLAttributes } from 'react';
import { useTranslations } from 'next-intl';

type MissionProps = {};

const Mission = ({}: MissionProps) => {
  const t = useTranslations('Home.Mission');

  return (
    <section className="mb-[240px] desktop:mb-[100px]">
      <h2 className="pb-3 pt-10 text-center font-noteworthy text-5xl font-normal uppercase tracking-[1.44px] text-accent desktop:pb-12 desktop:text-8xl desktop:tracking-[2.24px]">
        {t('title')}
      </h2>
      <p className="text-1 relative mx-auto mb-16 max-w-[908px] text-center mobile:text-[22px] desktop:text-[26px]">
        <span className="sm:top-5 sm:left-6 md:top-8 md:left-8 lg:top[-9px] lg:left-10 absolute bottom-[-45px] left-0 h-8 w-8 bg-[url('/assets/images/Mission/icon_quote.svg')] bg-contain bg-center bg-no-repeat leading-loose desktop:left-[-30px]" />
        {t('first-text')}
        <span className="md:right-[-20px] lg:right-[-30px] absolute right-[-10px] top-[-40px] h-8 w-8 bg-[url('/assets/images/Mission/icon_quote.svg')] bg-contain bg-center bg-no-repeat" />
      </p>
      <div className="relative items-start justify-between text-center tablet:flex">
        <span className="sm:top-5 md:top-8 lg:top[-9px] lg:left-10 absolute bottom-[-30%] left-[-33%] hidden h-[75%] w-[100%] bg-[url('/assets/images/Mission/decor.svg')] bg-contain bg-center bg-no-repeat tablet:block" />
        <div className="md:translate-x-0 translate-x-2 transform">
          <div className="bg-gray-300 p-4">
            <h3 className="font-normal leading-loose mobile:text-[20px] desktop:text-[30px]">
              {t('rehabilitation')}
            </h3>
            <p className="font-light leading-snug mobile:text-[14px] desktop:text-[16px]">
              {t('rehabilitation-text')}
            </p>
          </div>
        </div>
        <div className="-translate-x-10 transform tablet:mt-[14%] tablet:w-1/2 tablet:translate-x-0">
          <div className="bg-gray-300 p-4">
            <h3 className="font-normal leading-loose mobile:text-[20px] desktop:text-[30px]">
              {t('employment')}
            </h3>
            <p className="font-light leading-snug mobile:text-[14px] desktop:text-[16px]">
              {t('employment-text')}
            </p>
          </div>
        </div>
        <div className="md:translate-x-0 translate-x-2 transform ">
          <div className="tablet:bg-gray-200 p-4">
            <h3 className="font-normal leading-loose mobile:text-[20px] desktop:text-[30px]">
              {t('socialization')}
            </h3>
            <p className="font-light leading-snug mobile:text-[14px] desktop:text-[16px]">
              {t('socialization-text')}
            </p>
          </div>
        </div>
        <span className="sm:right-6 desktop:right-[-10%] laptop:right-[-3%] absolute tablet:bottom-[-30%]  right-[-10%] hidden h-[75%] w-[50%] scale-x-[-1] transform bg-[url('/assets/images/Mission/decor.svg')] bg-contain bg-center bg-no-repeat leading-loose tablet:block tablet:right-[-3%] w-[100%]" />
        <span className="absolute bottom-[-20%] left-[-11%] -z-10 h-[100%] w-[100%] bg-[url('/assets/images/Mission/decor-mob.svg')] bg-contain bg-left bg-no-repeat leading-loose tablet:hidden" />
      </div>
    </section>
  );
};

export default Mission;
