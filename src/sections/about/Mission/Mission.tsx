import { HTMLAttributes } from 'react';

type MissionProps = {};

const Mission = ({}: MissionProps) => {
  return (
    <section className="mb-[60px] desktop:mb-[100px]">
      <h2 className="pb-3 pt-10 text-center font-noteworthy text-5xl font-bold uppercase tracking-[1.44px] text-accent desktop:pb-12 desktop:text-8xl desktop:tracking-[2.24px]">
        Наша місія
      </h2>
      <p className="text-1 relative mx-auto mb-16 max-w-[908px] text-center mobile:text-[22px] desktop:text-[26px]">
        <span className="sm:top-5 sm:left-6 md:top-8 md:left-8 lg:top[-9px] lg:left-10 absolute bottom-[-45px] left-0 h-8 w-8 bg-[url('/assets/images/Mission/icon_quote.svg')] bg-contain bg-center bg-no-repeat leading-loose desktop:left-[-30px]" />
        Повноцінне життя та рівні можливості для тих, хто боронив нашу країну
        від ворога, в сучасному та післявоєнному суспільстві
        <span className="md:right-[-20px] lg:right-[-30px] absolute right-[-10px] top-[-40px] h-8 w-8 bg-[url('/assets/images/Mission/icon_quote.svg')] bg-contain bg-center bg-no-repeat" />
      </p>
      <div className="relative items-start justify-between text-center tablet:flex">
        <span className="hidden tablet:block sm:top-5 md:top-8 lg:top[-9px] lg:left-10 absolute bottom-[-30%] left-[-33%] h-[75%] w-[100%] bg-[url('/assets/images/Mission/decor.svg')] bg-contain bg-center bg-no-repeat" />
        <div className="md:translate-x-0 translate-x-5 transform">
          <div className="bg-gray-300 p-4">
            <h3 className="font-normal leading-loose mobile:text-[20px] desktop:text-[30px]">
              Реабілітація
            </h3>
            <p className="font-light leading-snug mobile:text-[14px] desktop:text-[16px]">
              організуємо доступ до кращих лікарів і новітніх медичних розробок
            </p>
          </div>
        </div>
        <div className="-translate-x-10 transform tablet:mt-[9%] tablet:w-1/2 tablet:translate-x-0">
          <div className="bg-gray-300 p-4">
            <h3 className="font-normal leading-loose mobile:text-[20px] desktop:text-[30px]">
              Працевлаштування
            </h3>
            <p className="font-light leading-snug mobile:text-[14px] desktop:text-[16px]">
              допомагаємо знайти роботу та реалізувати професійний потенціал
            </p>
          </div>
        </div>
        <div className="md:translate-x-0 translate-x-5 transform">
          <div className="tablet:bg-gray-200 p-4">
            <h3 className="font-normal leading-loose mobile:text-[20px] desktop:text-[30px]">
              Соціалізація
            </h3>
            <p className="font-light leading-snug mobile:text-[14px] desktop:text-[16px]">
              сприяємо поверненню військових до повноцінного суспільного життя
            </p>
          </div>
        </div>
        <span className="hidden tablet:block sm:top-5 sm:right-6 md:top-8 lg:top[-9px] lg:right-10 absolute bottom-[-30%] right-[-17%] h-[75%] w-[50%] scale-x-[-1] transform bg-[url('/assets/images/Mission/decor.svg')] bg-contain bg-center bg-no-repeat leading-loose " />
        <span className="tablet:hidden absolute bottom-[-20%] left-[-11%] h-[100%] w-[100%] bg-[url('/assets/images/Mission/decor-mob.svg')] bg-contain bg-left bg-no-repeat -z-10 leading-loose " />
        
      </div>
    </section>
  );
};

export default Mission;
