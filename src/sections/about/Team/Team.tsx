'use client';
import TeamSwiper from './Swiper/TeamSwiper';

const Team = () => {
  return (
    <section className="mb-[60px] rounded-3xl tablet:bg-swiper-card-background desktop:mb-[100px]">
      <h2 className="pb-3 text-center font-noteworthy text-5xl font-bold tracking-[1.44px] text-accent tablet:pt-6 desktop:pb-12 desktop:pt-10 desktop:text-8xl desktop:tracking-[2.24px]">
        КОМАНДА
      </h2>
      <TeamSwiper />
      <section className="mx-auto flex max-w-[343px] flex-col text-center tablet:max-w-[908px] tablet:pb-8 desktop:mt-12 desktop:border-t desktop:border-dashed desktop:border-dashed-border desktop:pb-10 desktop:text-left">
        <p className="p-5 text-l font-regular text-body-text desktop:pb-2 desktop:pt-6 desktop:text-lg">
          Бажаєш стати частиною нашої місії? Долучайся до команди вже сьогодні!
        </p>
        <button
          type="button"
          title="connect-to-team-button"
          onClick={() => alert('Good job my friend!')}
          className="w-[343px] rounded-[24px] border border-accent bg-accent px-6 py-3 text-sm font-medium text-white tablet:self-center desktop:w-[326px] desktop:self-end"
        >
          Долучитись
        </button>
      </section>
    </section>
  );
};

export default Team;
