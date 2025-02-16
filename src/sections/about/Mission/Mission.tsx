import { HTMLAttributes } from 'react';
import { useTranslations } from 'next-intl';
import SectionTitle from '@/components/ui/SectionTitle';

type MissionProps = {};

const Mission = ({}: MissionProps) => {
  const t = useTranslations('Home.Mission');

  return (
    <section className="mb-[240px] desktop:mb-[300px]">
      <SectionTitle className="pb-3 pt-10 text-center desktop:pb-12">
        {t('title')}
      </SectionTitle>
      <p className="text-1 relative mx-auto mb-16 max-w-[908px] text-center mobile:text-[22px] desktop:text-[26px]">
        <span className="sm:top-5 sm:left-6 md:top-8 md:left-8 lg:top[-9px] lg:left-10 absolute bottom-[-45px] left-0 h-8 w-8 bg-[url('/assets/images/Mission/icon_quote.svg')] bg-contain bg-center bg-no-repeat leading-loose desktop:left-[-30px]" />
        {t('first-text')}
        <span className="md:right-[-20px] lg:right-[-30px] absolute right-[-10px] top-[-40px] h-8 w-8 bg-[url('/assets/images/Mission/icon_quote.svg')] bg-contain bg-center bg-no-repeat" />
      </p>
      <div className="relative items-start justify-between text-center tablet:flex">
        <span className="lg:top[-9px] absolute bottom-[-65%] left-[-3%] hidden h-[100%] w-[50%] bg-[url('/assets/images/Mission/decor.svg')] bg-contain bg-center bg-no-repeat tablet:block laptop:left-[-6%] desktop:left-[-7%]" />
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
        <div className="-translate-x-10 transform tablet:mt-[8%] tablet:translate-x-0">
          <div className="p-4 desktop:w-[395px]">
            <h3 className="font-normal leading-loose mobile:text-[20px] desktop:text-[30px]">
              {t('employment')}
            </h3>
            <p className="font-light leading-snug mobile:text-[14px] desktop:text-[16px]">
              {t('employment-text')}
            </p>
          </div>
        </div>
        <div className="md:translate-x-0 translate-x-2 transform">
          <div className="tablet:bg-gray-200 p-4">
            <h3 className="font-normal leading-loose mobile:text-[20px] desktop:text-[30px]">
              {t('socialization')}
            </h3>
            <p className="font-light leading-snug mobile:text-[14px] desktop:text-[16px]">
              {t('socialization-text')}
            </p>
          </div>
        </div>
        <span className="absolute bottom-[-67%] right-[-3%] hidden h-[102%] w-[45%] scale-x-[-1] bg-[url('/assets/images/Mission/decor.svg')] bg-contain bg-center bg-no-repeat tablet:block desktop:right-[-4%]" />
        <span className="absolute bottom-[-40%] left-[-4%] -z-10 h-[100%] w-[100%] bg-[url('/assets/images/Mission/decor-mob.png')] bg-contain bg-left bg-no-repeat leading-loose tablet:hidden" />
      </div>
    </section>
  );
};

export default Mission;
