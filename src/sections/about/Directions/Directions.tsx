'use client';
import Image from 'next/image';
import styles from './directions.module.css'
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

type DirectionsProps = {};

const Directions = ({}: DirectionsProps) => {
  return (
    <>
    <section className="relative pb-[126px] tablet:pb-[157px] laptop:pb-[156px]">
      <SectionTitle className="pb-4 text-center font-noteworthy text-5xl font-bold tracking-[1.44px] text-accent leading-[58px] tablet:pb-6 tablet:text-[48px] tablet:leading-[90px] tablet:font-light desktop:pb-12 desktop:text-8xl">НАПРЯМИ<span className='hidden desktop:inline'> РОБОТИ</span></SectionTitle>

      <section className={styles.animationBlock}>
        <article className="flex flex-col justify-center items-center tablet:flex-row desktop:justify-end desktop:pb-[140px]">
          <Image 
          src="/assets/images/prosthesis_help.png"
          alt="prosthesis"
          width={331}
          height={220}
          className="rounded-t-2xl outline outline-2 outline-gray-border outline-offset-4 w-[321px] max-h-[206px] object-none mb-3.5 grayscale tablet:rounded-tr-[0px] tablet:rounded-l-3xl tablet:w-[188px] tablet:max-h-[156px] tablet:mb-0 desktop:max-h-[185px] desktop:w-[227px]"
          />
          <div className="bg-card-background px-8 py-4 rounded-b-2xl shadow-card-shadow tablet:w-[480px] tablet:px-12 tablet:py-8 tablet:rounded-l-[0px] tablet:rounded-r-3xl desktop:py-9 desktop:w-[675px] desktop:h-[196px]">
            <h5 className='text-md text-center leading-6 font-medium pb-2 tablet:text-lg tablet:text-left tablet:leading-[32px] tablet:pb-3 desktop:leading-[36px] desktop:text-2xl desktop:font-regular desktop:pb-4'>Протезування</h5>
            <p className='text-s text-center leading-4 font-normal tablet:text-m tablet:text-left tablet:leading-[20px] desktop:leading-[24px] desktop:text-md'>Забезпечуємо доступ до кращих лікарів і новітніх медичних розробок, консультації з протезування, допомогу з реабілітацією</p>
            </div>
         </article>

        <div className="bg-[url('/assets/images/directions_bg1_xs.svg')] h-[142px] bg-contain bg-no-repeat bg-center mt-3 mb-3.5 z-[-100] tablet:bg-[url('/assets/images/directions_bg1_md.svg')] tablet:h-[96px] tablet:mt-3.5 desktop:bg-[url('/assets/images/directions_bg1_xl.svg')] desktop:absolute desktop:left-[180px] desktop:top-[230px] desktop:h-[376px] desktop:w-[891px] "/>

        <article className="flex flex-col justify-center items-center tablet:flex-row-reverse desktop:pb-[140px] desktop:justify-end">
          <Image
          src="/assets/images/lawyer_help.png"
          alt="prosthesis"
          width={331}
          height={220}
          className="rounded-t-2xl outline outline-2 outline-gray-border outline-offset-4 max-h-[206px] w-[321px] object-none mb-3.5 grayscale tablet:rounded-tl-[0px] tablet:rounded-r-3xl tablet:w-[188px] tablet:h-[156px] tablet:mb-0 desktop:h-[185px] desktop:w-[227px]"
          />
          <div className="bg-card-background px-8 py-4 rounded-b-2xl shadow-card-shadow tablet:rounded-r-[0px] tablet:rounded-l-3xl tablet:w-[480px] tablet:px-12 tablet:py-[42px] desktop:w-[675px] desktop:h-[196px] desktop:py-9 ">
            <h5 className='text-md text-center leading-6 font-medium pb-2 tablet:text-lg tablet:text-left tablet:leading-[32px] tablet:pb-3 desktop:leading-[36px] desktop:text-2xl desktop:font-regular desktop:pb-4'>Правова допомога</h5>
            <p className='text-s text-center leading-4 font-normal tablet:text-m tablet:leading-[20px] tablet:text-left desktop:leading-[24px] desktop:text-md'>Безоплатна первинна правнича допомога з будь-яких правових питань</p>
            </div>
        </article>

        <div className="bg-[url('/assets/images/directions_bg2_xs.svg')] h-[142px] bg-contain bg-no-repeat bg-center mt-3 mb-3.5 z-[-100] tablet:bg-[url('/assets/images/directions_bg2_md.svg')] tablet:h-[97px] tablet:mt-3.5 desktop:bg-[url('/assets/images/directions_bg2_xl.svg')] desktop:w-[363px] desktop:h-[202px] desktop:absolute desktop:left-[-103px] desktop:top-[580px]"/>

        <article className="flex flex-col items-center justify-center tablet:flex-row desktop:justify-end">
          <Image
          src="/assets/images/psycological_help.png"
          alt="prosthesis"
          width={331}
          height={220}
          className="rounded-t-2xl outline outline-2 outline-gray-border outline-offset-4 max-h-[206px] w-[321px] object-none object-top mb-3.5 grayscale tablet:mb-0 tablet:rounded-tr-[0px] tablet:rounded-l-3xl tablet:w-[188px] tablet:h-[156px] desktop:h-[185px] desktop:w-[227px]"
          />
          <div className="bg-card-background px-8 py-4 rounded-b-2xl shadow-card-shadow tablet:w-[480px] tablet:px-12 tablet:py-8 tablet:rounded-l-[0px] tablet:rounded-r-3xl desktop:w-[675px] desktop:h-[196px]">
            <h5 className='text-md text-center leading-6 font-medium pb-2 tablet:text-lg tablet:leading-[32px] tablet:text-left tablet:pb-3 desktop:leading-[36px] desktop:text-2xl desktop:font-regular desktop:pb-4'>Психологічна допомога</h5>
            <p className='text-s text-center leading-4 font-normal tablet:text-m tablet:leading-[20px] tablet:text-left desktop:leading-[24px] desktop:text-md'>Забезпечуємо психологічну підтримку для допомоги в подоланні стресу після досвіду бойових дій та адаптації до мирного життя</p>
          </div>
        </article>
        <Button 
        type="submit"
        aria-label="Перейти до сторінки платежу"
        className="m-auto flex flex-row justify-between items-center px-5 py-3 mt-8 tablet:w-[364px] laptop:w-[364px] laptop:mt-[57px]"
        >
        <div><span className="text-nowrap text-center">ЗВЕРНУТИСЬ ЗА ДОПОМОГОЮ</span></div>
        <div><span className="hidden tablet:inline-flex"><svg data-testid="geist-icon" fill="none" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-[26px] h-[26px]"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></div>
      </Button>

        <div className="bg-[url('/assets/images/directions_bg3_xs.svg')] h-[111px] w-[317px] bg-contain bg-no-repeat bg-center mb-3.5 z-[-100] absolute top-[1500px] right-0 tablet:bg-[url('/assets/images/directions_bg3_md.svg')] tablet:h-[114px] tablet:w-[364px] tablet:right-[70px] tablet:top-[910px] laptop:right-[120px] laptop:top-[940px] desktop:right-[-107px] desktop:top-[920px] desktop:bg-[url('/assets/images/directions_bg3_xl.svg')] desktop:w-[599px] desktop:h-[253px]"/>
      </section>  
     
    </section>
    </>
    
  );
};

export default Directions;
