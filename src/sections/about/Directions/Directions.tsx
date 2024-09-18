'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './directions.module.css';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import ModalApplicationForm from './ModalApplicationForm/ModalApplicationForm';
import { useTranslations } from 'next-intl';

type DirectionsProps = {};

const Directions = ({}: DirectionsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Home.Directions');
  return (
    <>
      <section className="relative pb-[126px] tablet:pb-[157px] laptop:pb-[156px]">
        <SectionTitle className="pb-4 text-center font-noteworthy text-5xl font-bold leading-[58px] tracking-[1.44px] text-accent tablet:pb-6 tablet:text-[48px] tablet:font-light tablet:leading-[90px] desktop:pb-12 desktop:text-8xl">
          {t('title-first')}
          <span className="hidden desktop:inline"> {t('title-second')}</span>
        </SectionTitle>

        <section className={styles.animationBlock}>
          <article className="flex flex-col items-center justify-center tablet:flex-row desktop:justify-end desktop:pb-[140px]">
            <Image
              src="/assets/images/prosthesis_help.png"
              alt="prosthesis"
              width={331}
              height={220}
              className="mb-3.5 max-h-[206px] w-[321px] rounded-t-2xl object-none outline outline-2 outline-offset-4 outline-gray-border grayscale tablet:mb-0 tablet:max-h-[156px] tablet:w-[188px] tablet:rounded-l-3xl tablet:rounded-tr-[0px] desktop:max-h-[185px] desktop:w-[227px]"
            />
            <div className="rounded-b-2xl bg-card-background px-8 py-4 shadow-card-shadow tablet:w-[480px] tablet:rounded-l-[0px] tablet:rounded-r-3xl tablet:px-12 tablet:py-8 desktop:h-[196px] desktop:w-[675px] desktop:py-9">
              <h5 className="pb-2 text-center text-md font-medium leading-6 tablet:pb-3 tablet:text-left tablet:text-lg tablet:leading-[32px] desktop:pb-4 desktop:text-2xl desktop:font-regular desktop:leading-[36px]">
                {t('prosthesis')}
              </h5>
              <p className="text-center text-s font-normal leading-4 tablet:text-left tablet:text-m tablet:leading-[20px] desktop:text-md desktop:leading-[24px]">
                {t('prosthesis-text')}
              </p>
            </div>
          </article>

          <div className="z-[-100] mb-3.5 mt-3 h-[142px] bg-[url('/assets/icons/directions/directions_bg1_xs.svg')] bg-contain bg-center bg-no-repeat tablet:mt-3.5 tablet:h-[96px] tablet:bg-[url('/assets/icons/directions/directions_bg1_md.svg')] desktop:absolute desktop:left-[180px] desktop:top-[230px] desktop:h-[376px] desktop:w-[891px] desktop:bg-[url('/assets/icons/directions/directions_bg1_xl.svg')]" />

          <article className="flex flex-col items-center justify-center tablet:flex-row-reverse desktop:justify-end desktop:pb-[140px]">
            <Image
              src="/assets/images/lawyer_help.png"
              alt="prosthesis"
              width={331}
              height={220}
              className="mb-3.5 max-h-[206px] w-[321px] rounded-t-2xl object-none outline outline-2 outline-offset-4 outline-gray-border grayscale tablet:mb-0 tablet:h-[156px] tablet:w-[188px] tablet:rounded-r-3xl tablet:rounded-tl-[0px] desktop:h-[185px] desktop:w-[227px]"
            />
            <div className="rounded-b-2xl bg-card-background px-8 py-4 shadow-card-shadow tablet:w-[480px] tablet:rounded-l-3xl tablet:rounded-r-[0px] tablet:px-12 tablet:py-[42px] desktop:h-[196px] desktop:w-[675px] desktop:py-9">
              <h5 className="pb-2 text-center text-md font-medium leading-6 tablet:pb-3 tablet:text-left tablet:text-lg tablet:leading-[32px] desktop:pb-4 desktop:text-2xl desktop:font-regular desktop:leading-[36px]">
                {t('legal-aid')}
              </h5>
              <p className="text-center text-s font-normal leading-4 tablet:text-left tablet:text-m tablet:leading-[20px] desktop:text-md desktop:leading-[24px]">
                {t('legal-aid-text')}
              </p>
            </div>
          </article>

          <div className="z-[-100] mb-3.5 mt-3 h-[142px] bg-[url('/assets/icons/directions/directions_bg2_xs.svg')] bg-contain bg-center bg-no-repeat tablet:mt-3.5 tablet:h-[97px] tablet:bg-[url('/assets/icons/directions/directions_bg2_md.svg')] desktop:absolute desktop:left-[-103px] desktop:top-[580px] desktop:h-[202px] desktop:w-[363px] desktop:bg-[url('/assets/icons/directions/directions_bg2_xl.svg')]" />

          <article className="flex flex-col items-center justify-center tablet:flex-row desktop:justify-end">
            <Image
              src="/assets/images/psycological_help.png"
              alt="prosthesis"
              width={331}
              height={220}
              className="mb-3.5 max-h-[206px] w-[321px] rounded-t-2xl object-none object-top outline outline-2 outline-offset-4 outline-gray-border grayscale tablet:mb-0 tablet:h-[156px] tablet:w-[188px] tablet:rounded-l-3xl tablet:rounded-tr-[0px] desktop:h-[185px] desktop:w-[227px]"
            />
            <div className="rounded-b-2xl bg-card-background px-8 py-4 shadow-card-shadow tablet:w-[480px] tablet:rounded-l-[0px] tablet:rounded-r-3xl tablet:px-12 tablet:py-8 desktop:h-[196px] desktop:w-[675px]">
              <h5 className="pb-2 text-center text-md font-medium leading-6 tablet:pb-3 tablet:text-left tablet:text-lg tablet:leading-[32px] desktop:pb-4 desktop:text-2xl desktop:font-regular desktop:leading-[36px]">
                {t('psychological-help')}
              </h5>
              <p className="text-center text-s font-normal leading-4 tablet:text-left tablet:text-m tablet:leading-[20px] desktop:text-md desktop:leading-[24px]">
                {t('psychological-help-text')}
              </p>
            </div>
          </article>
          <Button
            type="submit"
            //modal
            directionBtn
            aria-label="Подати заявку"
            onClick={() => setIsOpen(true)}
            className="m-auto mt-8 flex flex-row items-center py-3 mobile:px-5 tablet:justify-between laptop:mt-[57px]"
          >
            {/* tablet:w-[364px] laptop:w-[364px] */}
            <div>
              <span className="text-nowrap text-center">
                {t('ask-for-help')}
              </span>
            </div>
            <div>
              <span className="hidden tablet:inline-flex">
                <svg
                  data-testid="geist-icon"
                  fill="none"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  className="h-[26px] w-[26px]"
                >
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </span>
            </div>
          </Button>
          {isOpen && (
            <ModalApplicationForm
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            />
          )}

          <div className="absolute right-0 top-[1500px] z-[-100] mb-3.5 h-[111px] w-[317px] bg-[url('/assets/icons/directions/directions_bg3_xs.svg')] bg-contain bg-center bg-no-repeat tablet:right-[70px] tablet:top-[910px] tablet:h-[114px] tablet:w-[364px] tablet:bg-[url('/assets/icons/directions/directions_bg3_md.svg')] laptop:right-[120px] laptop:top-[940px] desktop:right-[-107px] desktop:top-[920px] desktop:h-[253px] desktop:w-[599px] desktop:bg-[url('/assets/icons/directions/directions_bg3_xl.svg')]" />
        </section>
      </section>
    </>
  );
};

export default Directions;
