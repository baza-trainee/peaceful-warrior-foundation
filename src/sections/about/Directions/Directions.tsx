'use client';
import Image from 'next/image';
import { ICONS } from '@/constants/icons/icons';


const Directions = () => {
  return (
    <section className="pb-[60px] desktop:pb-[100px] relative">
      <h2 className="pb-3 desktop:pb-12 text-center font-noteworthy text-5xl desktop:text-8xl font-bold desktop:font-light tracking-[1.44px] text-accent leading-[58px] desktop:leading-[90px]">НАПРЯМИ<span className='hidden desktop:inline'> РОБОТИ</span></h2>
      <section>
        <div className="flex flex-col desktop:flex-row justify-center desktop:justify-end items-center desktop:pb-[140px]">
          <Image
          src="/assets/images/prosthesis_help.png"
          alt="prosthesis"
          width={331}
          height={220}
          className="rounded-t-2xl desktop:rounded-tr-[0px] desktop:rounded-l-3xl outline outline-2 outline-gray-border outline-offset-4 max-h-[206px] desktop:max-h-[185px] w-[321px] desktop:w-[227px] object-none mb-3.5 desktop:mb-0 grayscale"
          />
          <div className="bg-card-background px-8 desktop:px-12 py-4 desktop:py-9 rounded-b-2xl desktop:rounded-b-[0px] desktop:rounded-r-3xl shadow-card-shadow desktop:w-[675px] desktop:h-[196px]">
            <h5 className='text-md desktop:text-2xl text-center leading-6 desktop:leading-[36px] font-medium desktop:font-regular pb-2 desktop:pb-4'>Протезування</h5>
            <p className='text-s desktop:text-md text-center leading-[17px] desktop:leading-[24px] font-normal'>Забезпечуємо доступ до кращих лікарів і новітніх медичних розробок, консультації з протезування, допомогу з реабілітацією</p>
          </div>
        </div>

        <div className="bg-[url('/assets/images/directions_bg1_xs.svg')] desktop:bg-[url('/assets/images/directions_bg1_xl.svg')] h-[142px] desktop:h-[376px] desktop:w-[891px] bg-contain bg-no-repeat bg-center mt-2 mb-3.5 desktop:absolute desktop:left-[180px] desktop:top-[230px]"/>

        <div className="flex flex-col desktop:flex-row-reverse justify-center desktop:justify-end items-center desktop:pb-[140px]">
          <Image
          src="/assets/images/lawyer_help.png"
          alt="prosthesis"
          width={331}
          height={220}
          className="rounded-t-2xl desktop:rounded-tl-[0px] desktop:rounded-r-3xl outline outline-2 outline-gray-border outline-offset-4 max-h-[206px] desktop:h-[185px] w-[321px] desktop:w-[227px] object-none mb-3.5 desktop:mb-0 grayscale"
          />
          <div className="bg-card-background px-8 desktop:px-12 py-4 desktop:py-9 rounded-b-2xl desktop:rounded-[0px] desktop:rounded-tl-3xl  desktop:rounded-bl-3xl shadow-card-shadow desktop:w-[675px] desktop:h-[196px]">
            <h5 className='text-md desktop:text-2xl text-center leading-6 desktop:leading-[36px] font-medium desktop:font-regular pb-2 desktop:pb-4'>Правова допомога</h5>
            <p className='text-s desktop:text-md text-center leading-[17px] desktop:leading-[24px] font-normal'>Безоплатна первинна правнича допомога з будь-яких правових питань</p>
          </div>
        </div>

        <div className="bg-[url('/assets/images/directions_bg2_xs.svg')] desktop:bg-[url('/assets/images/directions_bg2_xl.svg')] h-[142px] desktop:h-[202px] desktop:w-[363px] bg-contain bg-no-repeat bg-center mt-2 mb-3.5 desktop:absolute desktop:left-[-103px] desktop:top-[580px]"/>

        <div className="flex flex-col desktop:flex-row justify-center desktop:justify-end items-center desktop:pb-[140px]">
          <Image
          src="/assets/images/psycological_help.png"
          alt="prosthesis"
          width={331}
          height={220}
          className="rounded-t-2xl desktop:rounded-tr-[0px] desktop:rounded-l-3xl outline outline-2 outline-gray-border outline-offset-4 max-h-[206px] desktop:max-h-[185px] w-[321px] desktop:w-[227px] object-none object-top mb-3.5 desktop:mb-0 grayscale"
          />
          <div className="bg-card-background px-8 desktop:px-12 py-4 desktop:py-9 rounded-b-2xl desktop:rounded-b-[0px] desktop:rounded-r-3xl shadow-card-shadow desktop:w-[675px] desktop:h-[196px]">
            <h5 className='text-md desktop:text-2xl text-center leading-6 desktop:leading-[36px] font-medium desktop:font-regular pb-2 desktop:pb-4'>Психологічна допомога</h5>
            <p className='text-s desktop:text-md text-center leading-[17px] desktop:leading-[24px] font-normal'>Забезпечуємо психологічну підтримку для допомоги в подоланні стресу після досвіду бойових дій та адаптації до мирного життя</p>
          </div>
        </div>
        <div className="bg-[url('/assets/images/directions_bg3_xs.svg')] desktop:bg-[url('/assets/images/directions_bg3_xl.svg')] h-[142px] desktop:h-[253px] desktop:w-[599px] bg-contain bg-no-repeat bg-center mt-2 mb-3.5 desktop:absolute desktop:right-[-107px] desktop:top-[915px]"/>
      </section>
      <button
          type="button"
          title="applying"
          // onClick={() => {clickHandler}}
          className="w-[343px] desktop:w-[326px] rounded-3xl bg-accent text-sm font-medium py-[11px] text-white leading-[22px] absolute left-0 right-0 mx-auto bottom-[146px] desktop:bottom-[106px] flex flex-row justify-center items-center"
        >
          <div><span className='inline desktop:hidden'>ПОДАТИ ЗАЯВКУ</span><span className='hidden desktop:inline'>ЗВЕРНУТИСЬ ЗА ДОПОМОГОЮ</span></div>
          <div><span className="inline-flex"><svg data-testid="geist-icon" fill="none" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-[26px] h-[26px]"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></div>
        </button>
    </section>
  );
};

export default Directions;
