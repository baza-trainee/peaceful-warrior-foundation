'use client';
import { useState } from 'react';
import TeamSwiper from './Swiper/TeamSwiper';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ModalApplicationForm from './ModalApplicationForm/ModalApplicationForm';
import Home from '@/app/[locale]/page';

type TeamProps = {};

const Team = ({}: TeamProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Home.Team');
  return (
    <section className="tablet:transparent mb-[60px] laptop:mb-[100px]">
      <SectionTitle className="tablet:mb-6 laptop:mb-12">
        {t('title')}
      </SectionTitle>
      <TeamSwiper />
      <Image
        src="/assets/icons/team/dashed-border.svg"
        width={908}
        height={1}
        alt="border"
        className="mx-auto mt-10"
      />
      <section className="m-auto flex flex-col items-center tablet:max-w-[908px] tablet:pb-8 laptop:mt-6 laptop:pb-10">
        <p className="mb-6 mt-8 text-center text-l font-regular leading-[26px] text-body-text tablet:w-[506px] laptop:w-[908px] laptop:pb-2 laptop:pt-6 laptop:text-lg laptop:leading-[32px]">
          {t('join')}
        </p>
        <Button
          type="submit"
          onClick={() => setIsOpen(true)}
          className="w-[343px] tablet:w-[326px]"
        >
          {t('join-btn')}
        </Button>
        {isOpen && (
          <ModalApplicationForm
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        )}
      </section>
    </section>
  );
};

export default Team;
