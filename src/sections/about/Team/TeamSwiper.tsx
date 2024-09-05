import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

type TeamSwiperProps = {};

const TeamSwiper = ({}: TeamSwiperProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      spaceBetween="30"
      //   navigation
      className="relative max-w-[343px] desktop:max-h-[464px] desktop:max-w-[908px]"
    >
      <SwiperSlide>
        <article className="flex max-w-[343px] flex-col pb-8 desktop:max-h-[464px] desktop:max-w-[908px] desktop:flex-wrap desktop:pb-0">
          <Image
            src="/assets/images/TeamMemberVictoria.png"
            alt="member Victoria"
            width={441}
            height={464}
            className="relative z-0 order-3 pb-4 desktop:order-1 desktop:p-0"
          />
          <p className="absolute left-[52px] top-[210px] z-10 order-4 max-w-[245px] text-center text-lg font-regular text-white desktop:bottom-1/2 desktop:left-[10%] desktop:order-2">
            місце для Вашого фото
          </p>
          <h3 className="order-1 pb-1 text-lg font-medium text-body-text desktop:order-3 desktop:pb-2 desktop:pt-[42px] desktop:text-6xl desktop:font-regular">
            Вікторія
          </h3>
          <p className="order-2 pb-4 text-s font-light text-body-text desktop:order-3 desktop:pb-6 desktop:text-m">
            Засновниця фонду "МИРНИЙ ВОЇН", юрист
          </p>
          <p className="order-4 pb-3 text-m font-regular text-body-text desktop:order-3 desktop:max-w-[442px] desktop:text-sm">
            Харків’янка за місцем народження, українка за ДНК. Професію юриста
            обрала усвідомлено, бо маю загострене відчуття справедливості та
            переконана, що варто боротися, відстоювати, захищати і прагнути.
          </p>
          <p className="order-4 pb-3 text-m font-regular text-body-text desktop:order-3 desktop:max-w-[442px] desktop:text-sm">
            З 2016 року на волонтерських засадах почала здійснювати юридичний
            супровід військовослужбовців. Задля цього додатково пройшла навчання
            з основ психології, поглиблено вивчала військову психологію.
          </p>
          <p className="order-4 text-m font-regular text-body-text desktop:order-3 desktop:max-w-[442px] desktop:text-sm">
            Наразі, особливу увагу і свої знання приділяю супроводу поранених. 
          </p>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className="flex max-w-[343px] flex-col pb-8 desktop:max-h-[464px] desktop:max-w-[908px] desktop:flex-wrap desktop:p-0">
          <Image
            src="/assets/images/TeamMemberVictoria.png"
            alt="member Victoria"
            width={441}
            height={464}
            className="relative z-0 order-3 pb-4 desktop:order-1 desktop:p-0"
          />
          <p className="absolute left-[52px] top-[210px] z-10 order-4 max-w-[245px] text-center text-lg font-regular text-white desktop:bottom-1/2 desktop:left-[10%] desktop:order-2">
            місце для Вашого фото
          </p>
          <h3 className="order-1 pb-1 text-lg font-medium text-body-text desktop:order-3 desktop:pb-2 desktop:pt-[42px] desktop:text-6xl desktop:font-regular">
            Вікторія
          </h3>
          <p className="order-2 pb-4 text-s font-light text-body-text desktop:order-3 desktop:pb-6 desktop:text-m">
            Засновниця фонду "МИРНИЙ ВОЇН", юрист
          </p>
          <p className="order-4 pb-3 text-m font-regular text-body-text desktop:order-3 desktop:max-w-[442px] desktop:text-sm">
            Харків’янка за місцем народження, українка за ДНК. Професію юриста
            обрала усвідомлено, бо маю загострене відчуття справедливості та
            переконана, що варто боротися, відстоювати, захищати і прагнути.
          </p>
          <p className="order-4 pb-3 text-m font-regular text-body-text desktop:order-3 desktop:max-w-[442px] desktop:text-sm">
            З 2016 року на волонтерських засадах почала здійснювати юридичний
            супровід військовослужбовців. Задля цього додатково пройшла навчання
            з основ психології, поглиблено вивчала військову психологію.
          </p>
          <p className="order-4 text-m font-regular text-body-text desktop:order-3 desktop:max-w-[442px] desktop:text-sm">
            Наразі, особливу увагу і свої знання приділяю супроводу поранених. 
          </p>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className="flex max-w-[343px] flex-col pb-8 desktop:max-h-[464px] desktop:max-w-[908px] desktop:flex-wrap desktop:p-0">
          <Image
            src="/assets/images/TeamMemberVictoria.png"
            alt="member Victoria"
            width={441}
            height={464}
            className="relative z-0 order-3 pb-4 desktop:order-1 desktop:p-0"
          />
          <p className="absolute left-[52px] top-[210px] z-10 order-4 max-w-[245px] text-center text-lg font-regular text-white desktop:bottom-1/2 desktop:left-[10%] desktop:order-2">
            місце для Вашого фото
          </p>
          <h3 className="order-1 pb-1 text-lg font-medium text-body-text desktop:order-3 desktop:pb-2 desktop:pt-[42px] desktop:text-6xl desktop:font-regular">
            Вікторія
          </h3>
          <p className="order-2 pb-4 text-s font-light text-body-text desktop:order-3 desktop:pb-6 desktop:text-m">
            Засновниця фонду "МИРНИЙ ВОЇН", юрист
          </p>
          <p className="order-4 pb-3 text-m font-regular text-body-text desktop:order-3 desktop:max-w-[442px] desktop:text-sm">
            Харків’янка за місцем народження, українка за ДНК. Професію юриста
            обрала усвідомлено, бо маю загострене відчуття справедливості та
            переконана, що варто боротися, відстоювати, захищати і прагнути.
          </p>
          <p className="order-4 pb-3 text-m font-regular text-body-text desktop:order-3 desktop:max-w-[442px] desktop:text-sm">
            З 2016 року на волонтерських засадах почала здійснювати юридичний
            супровід військовослужбовців. Задля цього додатково пройшла навчання
            з основ психології, поглиблено вивчала військову психологію.
          </p>
          <p className="order-4 text-m font-regular text-body-text desktop:order-3 desktop:max-w-[442px] desktop:text-sm">
            Наразі, особливу увагу і свої знання приділяю супроводу поранених. 
          </p>
        </article>
      </SwiperSlide>
    </Swiper>
  );
};

export default TeamSwiper;
