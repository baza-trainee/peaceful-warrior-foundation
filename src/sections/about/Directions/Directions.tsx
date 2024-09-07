'use client';
import Image from 'next/image';
import { ICONS } from '@/constants/icons/icons';


const Directions = () => {
  return (
    <section className="pb-[60px] relative">
      <h2 className="pb-3 text-center font-noteworthy text-5xl font-bold tracking-[1.44px] text-accent leading-[58px]">НАПРЯМИ</h2>
      <section>
        <div className="flex flex-col justify-center items-center">
          <Image
          src="/assets/images/prosthesis_help.png"
          alt="prosthesis"
          width={331}
          height={220}
          className="rounded-t-2xl outline outline-2 outline-gray-border outline-offset-4 max-h-[206px] object-none mb-3.5 grayscale"
          />
          <div className="bg-card-background px-8 py-4 rounded-b-2xl shadow-card-shadow">
            <h5 className='text-md text-center leading-6 font-medium pb-2'>Протезування</h5>
            <p className='text-s text-center leading-[17px] font-normal '>Забезпечуємо доступ до кращих лікарів і новітніх медичних розробок, консультації з протезування, допомогу з реабілітацією</p>
          </div>
        </div>
        <div className="bg-[url('/assets/images/directions_bg1_xs.svg')] h-[142px] bg-contain bg-no-repeat bg-center mt-2 mb-3.5"/>
        <div className="flex flex-col justify-center items-center">
          <Image
          src="/assets/images/lawyer_help.png"
          alt="prosthesis"
          width={331}
          height={220}
          className="rounded-t-2xl outline outline-2 outline-gray-border outline-offset-4 max-h-[206px] object-none mb-3.5 grayscale"
          />
          <div className="bg-card-background px-8 py-4 rounded-b-2xl shadow-card-shadow">
            <h5 className='text-md text-center leading-6 font-medium pb-2'>Правова допомога</h5>
            <p className='text-s text-center leading-[17px] font-normal '>Ветерани війни та члени їх сімей можуть отримати безоплатну первинну правничу допомогу з будь-яких правових питань</p>
          </div>
        </div>
        <div className="bg-[url('/assets/images/directions_bg2_xs.svg')] h-[142px] bg-contain bg-no-repeat bg-center mt-2 mb-3.5"/>
        <div className="flex flex-col justify-center items-center">
          <Image
          src="/assets/images/psycological_help.png"
          alt="prosthesis"
          width={331}
          height={220}
          className="rounded-t-2xl outline outline-2 outline-gray-border outline-offset-4 max-h-[206px] object-none object-top mb-3.5 grayscale"
          />
          <div className="bg-card-background px-8 py-4 rounded-b-2xl shadow-card-shadow">
            <h5 className='text-md text-center leading-6 font-medium pb-2'>Психологічна допомога</h5>
            <p className='text-s text-center leading-[17px] font-normal '>Забезпечуємо психологічну підтримку для допомоги в подоланні стресу після досвіду бойових дій та адаптації до мирного життя</p>
          </div>
        </div>
        <div className="bg-[url('/assets/images/directions_bg3_xs.svg')] h-[142px] bg-contain bg-no-repeat bg-center mt-2 mb-3.5"/>
      </section>
      <button
          type="button"
          title="applying"
          // onClick={() => {clickHandler}}
          className="w-full rounded-3xl bg-accent text-sm font-medium py-[15px] text-white leading-[22px] absolute bottom-[151px]"
        >
          ПОДАТИ ЗАЯВКУ
          {/* {ICON.VECTOR} */}
        </button>
    </section>
  );
};

export default Directions;
