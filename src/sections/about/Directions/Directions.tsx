'use client';
import Image from 'next/image';
import { ICONS } from '@/constants/icons/icons';

const Directions = () => {
  return (
    <section className="relative pb-[60px] desktop:pb-[100px]">
      <h2 className="pb-3 text-center font-noteworthy text-5xl font-bold leading-[58px] tracking-[1.44px] text-accent desktop:pb-12 desktop:text-8xl desktop:font-light desktop:leading-[90px]">
        НАПРЯМИ<span className="hidden desktop:inline"> РОБОТИ</span>
      </h2>
      <section>
        <div className="flex flex-col items-center justify-center desktop:flex-row desktop:justify-end desktop:pb-[140px]">
          <Image
            src="/assets/images/prosthesis_help.png"
            alt="prosthesis"
            width={331}
            height={220}
            className="mb-3.5 max-h-[206px] w-[321px] rounded-t-2xl object-none outline outline-2 outline-offset-4 outline-gray-border grayscale desktop:mb-0 desktop:max-h-[185px] desktop:w-[227px] desktop:rounded-l-3xl desktop:rounded-tr-[0px]"
          />
          <div className="rounded-b-2xl bg-card-background px-8 py-4 shadow-card-shadow desktop:h-[196px] desktop:w-[675px] desktop:rounded-b-[0px] desktop:rounded-r-3xl desktop:px-12 desktop:py-9">
            <h5 className="pb-2 text-center text-md font-medium leading-6 desktop:pb-4 desktop:text-2xl desktop:font-regular desktop:leading-[36px]">
              Протезування
            </h5>
            <p className="text-center text-s font-normal leading-[17px] desktop:text-md desktop:leading-[24px]">
              Забезпечуємо доступ до кращих лікарів і новітніх медичних
              розробок, консультації з протезування, допомогу з реабілітацією
            </p>
          </div>
        </div>

        <div className="mb-3.5 mt-2 h-[142px] bg-[url('/assets/images/directions_bg1_xs.svg')] bg-contain bg-center bg-no-repeat desktop:absolute desktop:left-[180px] desktop:top-[230px] desktop:h-[376px] desktop:w-[891px] desktop:bg-[url('/assets/images/directions_bg1_xl.svg')]" />

        <div className="flex flex-col items-center justify-center desktop:flex-row-reverse desktop:justify-end desktop:pb-[140px]">
          <Image
            src="/assets/images/lawyer_help.png"
            alt="prosthesis"
            width={331}
            height={220}
            className="mb-3.5 max-h-[206px] w-[321px] rounded-t-2xl object-none outline outline-2 outline-offset-4 outline-gray-border grayscale desktop:mb-0 desktop:h-[185px] desktop:w-[227px] desktop:rounded-r-3xl desktop:rounded-tl-[0px]"
          />
          <div className="rounded-b-2xl bg-card-background px-8 py-4 shadow-card-shadow desktop:h-[196px] desktop:w-[675px] desktop:rounded-[0px] desktop:rounded-bl-3xl desktop:rounded-tl-3xl desktop:px-12 desktop:py-9">
            <h5 className="pb-2 text-center text-md font-medium leading-6 desktop:pb-4 desktop:text-2xl desktop:font-regular desktop:leading-[36px]">
              Правова допомога
            </h5>
            <p className="text-center text-s font-normal leading-[17px] desktop:text-md desktop:leading-[24px]">
              Безоплатна первинна правнича допомога з будь-яких правових питань
            </p>
          </div>
        </div>

        <div className="z-10 mb-3.5 mt-2 h-[142px] bg-[url('/assets/images/directions_bg2_xs.svg')] bg-contain bg-center bg-no-repeat desktop:absolute desktop:left-[-103px] desktop:top-[580px] desktop:h-[202px] desktop:w-[363px] desktop:bg-[url('/assets/images/directions_bg2_xl.svg')]" />

        <div className="flex flex-col items-center justify-center desktop:flex-row desktop:justify-end desktop:pb-[140px]">
          <Image
            src="/assets/images/psycological_help.png"
            alt="prosthesis"
            width={331}
            height={220}
            className="mb-3.5 max-h-[206px] w-[321px] rounded-t-2xl object-none object-top outline outline-2 outline-offset-4 outline-gray-border grayscale desktop:mb-0 desktop:max-h-[185px] desktop:w-[227px] desktop:rounded-l-3xl desktop:rounded-tr-[0px]"
          />
          <div className="rounded-b-2xl bg-card-background px-8 py-4 shadow-card-shadow desktop:h-[196px] desktop:w-[675px] desktop:rounded-b-[0px] desktop:rounded-r-3xl desktop:px-12 desktop:py-9">
            <h5 className="pb-2 text-center text-md font-medium leading-6 desktop:pb-4 desktop:text-2xl desktop:font-regular desktop:leading-[36px]">
              Психологічна допомога
            </h5>
            <p className="text-center text-s font-normal leading-[17px] desktop:text-md desktop:leading-[24px]">
              Забезпечуємо психологічну підтримку для допомоги в подоланні
              стресу після досвіду бойових дій та адаптації до мирного життя
            </p>
          </div>
        </div>
        <div className="mb-3.5 mt-2 h-[142px] bg-[url('/assets/images/directions_bg3_xs.svg')] bg-contain bg-center bg-no-repeat desktop:absolute desktop:right-[-107px] desktop:top-[915px] desktop:h-[253px] desktop:w-[599px] desktop:bg-[url('/assets/images/directions_bg3_xl.svg')]" />
      </section>
      <button
        type="button"
        title="applying"
        // onClick={() => {clickHandler}}
        className="absolute bottom-[146px] left-0 right-0 mx-auto flex w-[343px] flex-row items-center justify-center rounded-3xl bg-accent py-[11px] text-sm font-medium leading-[22px] text-white desktop:bottom-[106px] desktop:w-[326px]"
      >
        <div>
          <span className="inline desktop:hidden">ПОДАТИ ЗАЯВКУ</span>
          <span className="hidden desktop:inline">ЗВЕРНУТИСЬ ЗА ДОПОМОГОЮ</span>
        </div>
        <div>
          <span className="inline-flex">
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
      </button>
    </section>
  );
};

export default Directions;
