import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { SwiperButtonNext, SwiperButtonPrev } from './SwiperButtons';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css';

type TeamSwiperProps = {};

const TeamSwiper = ({}: TeamSwiperProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      spaceBetween="30"
      navigation={{
        prevEl: '.custom-button-prev',
        nextEl: '.custom-button-next',
      }}
      pagination={{
        el: '.custom-pagination',
      }}
      className="relative max-w-full tablet:max-w-[100%] desktop:max-h-[464px]"
    >
      <SwiperSlide>
        <article className="flex max-w-full flex-col rounded-[16px] bg-swiper-card-background p-3 tablet:max-w-[100%] desktop:max-h-[464px] desktop:flex-wrap desktop:content-center desktop:pb-0">
          <Image
            src="/assets/images/TeamMemberVictoria.png"
            alt="member Victoria"
            priority={true}
            width={441}
            height={464}
            className="relative z-0 pb-4 tablet:m-auto desktop:mr-[25px] desktop:p-0"
          />
          <p className="absolute z-10 hidden text-center text-lg font-regular text-white desktop:bottom-[50%] desktop:left-[16%] desktop:inline">
            місце для Вашого фото
          </p>
          <section>
            <h3 className="pb-1 text-lg font-medium text-body-text tablet:text-center desktop:pb-2 desktop:pt-[42px] desktop:text-left desktop:text-6xl desktop:font-regular">
              Вікторія
            </h3>
            <p className="pb-3 text-m font-regular text-body-text tablet:text-center desktop:pb-6 desktop:text-left desktop:text-m desktop:font-light">
              Засновниця фонду
              <span className="hidden tablet:inline"> "МИРНИЙ ВОЇН"</span>,
              юрист
            </p>
            <p className="pb-3 text-s font-regular text-body-text tablet:mx-10 tablet:max-w-full desktop:mx-0 desktop:max-w-[442px] desktop:text-sm">
              Харків’янка за місцем народження, українка за ДНК. Професію юриста
              обрала усвідомлено, бо маю загострене відчуття справедливості та
              переконана, що варто боротися, відстоювати, захищати і прагнути.
            </p>
            <p className="pb-3 text-s font-regular text-body-text tablet:mx-10 tablet:max-w-full desktop:mx-0 desktop:max-w-[442px] desktop:text-sm">
              З 2016 року на волонтерських засадах почала здійснювати юридичний
              супровід військовослужбовців. Задля цього додатково пройшла
              навчання з основ психології, поглиблено вивчала військову
              психологію.
            </p>
            <p className="text-s font-regular text-body-text tablet:mx-10 tablet:max-w-full desktop:mx-0 desktop:max-w-[442px] desktop:text-sm">
              Наразі, особливу увагу і свої знання приділяю супроводу
              поранених. 
            </p>
          </section>
        </article>
      </SwiperSlide>

      <SwiperSlide>
        <article className="flex max-w-[343px] flex-col rounded-[16px] bg-swiper-card-background p-3 desktop:max-h-[464px] desktop:max-w-[100%] desktop:flex-wrap desktop:content-center desktop:pb-0">
          <Image
            src="/assets/images/TeamMemberVictoria.png"
            alt="member Victoria"
            priority={true}
            width={441}
            height={464}
            className="relative z-0 pb-4 desktop:mr-[25px] desktop:p-0"
          />
          <p className="absolute z-10 hidden text-center text-lg font-regular text-white desktop:bottom-[50%] desktop:left-[16%] desktop:inline">
            місце для Вашого фото
          </p>
          <section>
            <h3 className="pb-1 text-lg font-medium text-body-text desktop:pb-2 desktop:pt-[42px] desktop:text-6xl desktop:font-regular">
              Вікторія
            </h3>
            <p className="pb-3 text-m font-regular text-body-text desktop:pb-6 desktop:text-m desktop:font-light">
              Засновниця фонду
              <span className="hidden desktop:inline"> "МИРНИЙ ВОЇН"</span>,
              юрист
            </p>
            <p className="pb-3 text-s font-regular text-body-text desktop:max-w-[442px] desktop:text-sm">
              Харків’янка за місцем народження, українка за ДНК. Професію юриста
              обрала усвідомлено, бо маю загострене відчуття справедливості та
              переконана, що варто боротися, відстоювати, захищати і прагнути.
            </p>
            <p className="pb-3 text-s font-regular text-body-text desktop:max-w-[442px] desktop:text-sm">
              З 2016 року на волонтерських засадах почала здійснювати юридичний
              супровід військовослужбовців. Задля цього додатково пройшла
              навчання з основ психології, поглиблено вивчала військову
              психологію.
            </p>
            <p className="text-s font-regular text-body-text desktop:max-w-[442px] desktop:text-sm">
              Наразі, особливу увагу і свої знання приділяю супроводу
              поранених. 
            </p>
          </section>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className="flex max-w-[343px] flex-col rounded-[16px] bg-swiper-card-background p-3 desktop:max-h-[464px] desktop:max-w-[100%] desktop:flex-wrap desktop:content-center desktop:pb-0">
          <Image
            src="/assets/images/TeamMemberVictoria.png"
            alt="member Victoria"
            priority={true}
            width={441}
            height={464}
            className="relative z-0 pb-4 desktop:mr-[25px] desktop:p-0"
          />
          <p className="absolute z-10 hidden text-center text-lg font-regular text-white desktop:bottom-[50%] desktop:left-[16%] desktop:inline">
            місце для Вашого фото
          </p>
          <section>
            <h3 className="pb-1 text-lg font-medium text-body-text desktop:pb-2 desktop:pt-[42px] desktop:text-6xl desktop:font-regular">
              Вікторія
            </h3>
            <p className="pb-3 text-m font-regular text-body-text desktop:pb-6 desktop:text-m desktop:font-light">
              Засновниця фонду
              <span className="hidden desktop:inline"> "МИРНИЙ ВОЇН"</span>,
              юрист
            </p>
            <p className="pb-3 text-s font-regular text-body-text desktop:max-w-[442px] desktop:text-sm">
              Харків’янка за місцем народження, українка за ДНК. Професію юриста
              обрала усвідомлено, бо маю загострене відчуття справедливості та
              переконана, що варто боротися, відстоювати, захищати і прагнути.
            </p>
            <p className="pb-3 text-s font-regular text-body-text desktop:max-w-[442px] desktop:text-sm">
              З 2016 року на волонтерських засадах почала здійснювати юридичний
              супровід військовослужбовців. Задля цього додатково пройшла
              навчання з основ психології, поглиблено вивчала військову
              психологію.
            </p>
            <p className="text-s font-regular text-body-text desktop:max-w-[442px] desktop:text-sm">
              Наразі, особливу увагу і свої знання приділяю супроводу
              поранених. 
            </p>
          </section>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className="flex max-w-[343px] flex-col rounded-[16px] bg-swiper-card-background p-3 desktop:max-h-[464px] desktop:max-w-[100%] desktop:flex-wrap desktop:content-center desktop:pb-0">
          <Image
            src="/assets/images/TeamMemberVictoria.png"
            alt="member Victoria"
            priority={true}
            width={441}
            height={464}
            className="relative z-0 pb-4 desktop:mr-[25px] desktop:p-0"
          />
          <p className="absolute z-10 hidden text-center text-lg font-regular text-white desktop:bottom-[50%] desktop:left-[16%] desktop:inline">
            місце для Вашого фото
          </p>
          <section>
            <h3 className="pb-1 text-lg font-medium text-body-text desktop:pb-2 desktop:pt-[42px] desktop:text-6xl desktop:font-regular">
              Вікторія
            </h3>
            <p className="pb-3 text-m font-regular text-body-text desktop:pb-6 desktop:text-m desktop:font-light">
              Засновниця фонду
              <span className="hidden desktop:inline"> "МИРНИЙ ВОЇН"</span>,
              юрист
            </p>
            <p className="pb-3 text-s font-regular text-body-text desktop:max-w-[442px] desktop:text-sm">
              Харків’янка за місцем народження, українка за ДНК. Професію юриста
              обрала усвідомлено, бо маю загострене відчуття справедливості та
              переконана, що варто боротися, відстоювати, захищати і прагнути.
            </p>
            <p className="pb-3 text-s font-regular text-body-text desktop:max-w-[442px] desktop:text-sm">
              З 2016 року на волонтерських засадах почала здійснювати юридичний
              супровід військовослужбовців. Задля цього додатково пройшла
              навчання з основ психології, поглиблено вивчала військову
              психологію.
            </p>
            <p className="text-s font-regular text-body-text desktop:max-w-[442px] desktop:text-sm">
              Наразі, особливу увагу і свої знання приділяю супроводу
              поранених. 
            </p>
          </section>
        </article>
      </SwiperSlide>
      <SwiperButtonPrev />
      <SwiperButtonNext />
      <div className="custom-pagination"></div>
    </Swiper>
  );
};

export default TeamSwiper;
