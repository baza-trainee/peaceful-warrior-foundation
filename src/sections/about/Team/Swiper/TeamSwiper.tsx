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
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={16}
        navigation={{
          prevEl: '.custom-button-prev',
          nextEl: '.custom-button-next',
        }}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          744: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="w-[343px] tablet:w-[540px] desktop:w-[908px]"
      >
        {teamMembers.map((member) => (
          <SwiperSlide
            key={member.id}
            className="tablet:w-[262px] laptop:w-[286.65px]"
          >
            <article className="flex flex-col rounded-[16px] bg-swiper-card-background p-3 tablet:bg-light-background tablet:p-0">
              <Image
                src={member.imageUrl}
                alt={`member ${member.name}`}
                priority={true}
                width={319}
                height={372}
                className="relative h-auto tablet:h-[259px]"
              />
              <h3 className="pb-1 pt-3 text-[24px] font-medium leading-[29.26px] text-body-text tablet:text-2xl tablet:leading-[36px]">
                {member.name}
              </h3>
              <p className="pb-3 text-m font-regular leading-[19.5px] text-body-text tablet:font-light tablet:leading-[20px] laptop:text-s laptop:font-regular laptop:leading-[16px]">
                {member.role}
              </p>
            </article>
          </SwiperSlide>
        ))}
        <div className="custom-pagination"></div>
      </Swiper>
      <SwiperButtonPrev />
      <SwiperButtonNext />
    </div>
  );
};

export default TeamSwiper;
