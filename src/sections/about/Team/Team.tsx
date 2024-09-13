'use client';
import TeamSwiper from './Swiper/TeamSwiper';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

const Team = () => {
  return (
    <section className="tablet:transparent mb-[60px] laptop:mb-[100px]">
      <SectionTitle className="tablet:mb-6 laptop:mb-12">Команда</SectionTitle>
      <TeamSwiper />
      <section className="m-auto flex flex-col items-center tablet:max-w-[908px] tablet:border-t tablet:border-dashed tablet:border-dashed-border tablet:pb-8 laptop:mt-12 laptop:pb-10">
        <p className="mb-6 mt-8 text-center text-l font-regular leading-[26px] text-body-text tablet:w-[506px] laptop:w-[908px] laptop:pb-2 laptop:pt-6 laptop:text-lg laptop:leading-[32px]">
          Бажаєш стати частиною нашої місії? Долучайся до команди вже сьогодні!
        </p>
        <Button className="w-[343px] tablet:w-[326px]">Приєднатись</Button>
      </section>
    </section>
  );
};

export default Team;
