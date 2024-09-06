'use client';
import TeamSwiper from './Swiper/TeamSwiper';

const Team = () => {
  return (
    <section className="mb-[60px] tablet:rounded-3xl tablet:bg-swiper-card-background desktop:mb-[100px]">
      <h2 className="pb-3 pt-10 text-center font-noteworthy text-5xl font-bold tracking-[1.44px] text-accent desktop:pb-12 desktop:text-8xl desktop:tracking-[2.24px]">
        КОМАНДА
      </h2>
      <TeamSwiper />
      <section
        className="mx-auto flex max-w-[343px] flex-col border-t border-dashed border-dashed-border pb-8 text-center desktop:mt-12 desktop:max-w-[908px] desktop:pb-10 desktop:text-left" /* make the right border */
      >
        <p className="p-5 text-l font-regular text-body-text desktop:pb-2 desktop:pt-6 desktop:text-lg">
          Бажаєш стати частиною нашої місії? Долучайся до команди вже сьогодні!
        </p>
        <button
          type="button"
          title="connect-to-team-button"
          onClick={() => alert('Good job my friend!')}
          className="w-[343px] rounded-[24px] border border-accent bg-accent px-6 py-3 text-sm font-medium text-white desktop:w-[326px] desktop:self-end"
        >
          Долучитись
        </button>
      </section>
    </section>
  );
};

export default Team;
