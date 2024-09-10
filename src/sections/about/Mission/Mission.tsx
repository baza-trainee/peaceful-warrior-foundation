import { HTMLAttributes } from 'react';

type MissionProps = {};

const Mission = ({}: MissionProps) => {
  return (
    <section className="mb-[60px] desktop:mb-[100px]">
      <h2 className="pb-3 pt-10 text-center font-noteworthy text-5xl font-bold uppercase tracking-[1.44px] text-accent desktop:pb-12 desktop:text-8xl desktop:tracking-[2.24px]">
        Наша місія
      </h2>
      <p className="text-1 relative mx-auto mb-16 max-w-[908px] text-center mobile:text-[22px] desktop:text-[26px]">
        <span className="sm:top-5 sm:left-6 md:top-8 md:left-8 lg:top[-95px] lg:left-10 absolute left-5 top-11 h-8 w-8 bg-[url('/assets/images/Mission/icon_quote.svg')] bg-contain bg-center bg-no-repeat desktop:left-[-30px]" />
        Повноцінне життя та рівні можливості для тих, хто боронив нашу країну
        від ворога, в сучасному та післявоєнному суспільстві
        <span className="absolute right-[-10px] md:right-[-20px] lg:right-[-30px] top-[-30px] h-8 w-8 bg-[url('/assets/images/Mission/icon_quote.svg')] bg-contain bg-center bg-no-repeat" />
      </p>
    </section>
  );
};

export default Mission;
