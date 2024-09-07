import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { SwiperButtonNext, SwiperButtonPrev } from './SwiperButtons';
import { teamMembers } from '../teamMembers';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css';

type TeamSwiperProps = {};

const TeamSwiper = ({}: TeamSwiperProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
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
        clickable: true,
      }}
      className="relative max-w-full tablet:max-w-[100%] desktop:max-h-[464px]"
    >
      {teamMembers.map((member) => (
        <SwiperSlide key={member.id}>
          <article className="flex max-w-full flex-col rounded-[16px] bg-swiper-card-background p-3 tablet:max-w-[100%] desktop:max-h-[464px] desktop:flex-wrap desktop:content-center desktop:pb-0">
            <Image
              src={member.imageUrl}
              alt={`member ${member.name}`}
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
                {member.name}
              </h3>
              <p className="pb-3 text-m font-regular text-body-text tablet:text-center desktop:pb-6 desktop:text-left desktop:text-m desktop:font-light">
                {member.role}
              </p>
              <p className="mb-3 pb-3 text-s font-regular text-body-text tablet:mx-10 tablet:max-w-full desktop:mx-0 desktop:max-w-[442px] desktop:text-sm">
                {member.description1}
              </p>
              {isExpanded && (
                <>
                  <p className="pb-3 text-s font-regular text-body-text tablet:mx-10 tablet:max-w-full desktop:mx-0 desktop:max-w-[442px] desktop:text-sm">
                    {member.description2}
                  </p>
                  <p className="mb-3 text-s font-regular text-body-text tablet:mx-10 tablet:max-w-full desktop:mx-0 desktop:max-w-[442px] desktop:text-sm">
                    {member.description3}
                  </p>
                  <a
                    className="text-m font-medium text-body-text underline tablet:hidden"
                    onClick={() => setIsExpanded(false)}
                  >
                    ЧИТАТИ МЕНШЕ
                  </a>
                </>
              )}
              {!isExpanded && (
                <a
                  className="text-m font-medium text-body-text underline tablet:hidden"
                  onClick={() => setIsExpanded(true)}
                >
                  ЧИТАТИ БІЛЬШЕ
                </a>
              )}
              <div className="hidden tablet:block">
                <p className="pb-3 text-s font-regular text-body-text tablet:mx-10 tablet:max-w-full desktop:mx-0 desktop:max-w-[442px] desktop:text-sm">
                  {member.description2}
                </p>
                <p className="text-s font-regular text-body-text tablet:mx-10 tablet:max-w-full desktop:mx-0 desktop:max-w-[442px] desktop:text-sm">
                  {member.description3}
                </p>
              </div>
            </section>
          </article>
        </SwiperSlide>
      ))}
      <SwiperButtonPrev />
      <SwiperButtonNext />
      <div className="custom-pagination"></div>
    </Swiper>
  );
};

export default TeamSwiper;
