// use swiper.js library
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { SwiperButtonNext, SwiperButtonPrev } from './SwiperButtons';

// take data of members
import { teamMembers } from '../teamMembers';

// use next-intl library
import { useTranslations } from 'next-intl';

// use next image
import Image from 'next/image';

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css';

type TeamSwiperProps = {};

const TeamSwiper = ({}: TeamSwiperProps) => {
  const t = useTranslations('Home.Team');

  // !!!!! be careful when add new members !!!!! you need to check them id, and add to translate files by them id
  // translated name and role of member
  const translatedTeamMembers = teamMembers.map((member) => {
    const translationKey = `teamMembers.${member.id}`;

    const translatedName = t(`${translationKey}.name`) || member.name;
    const translatedRole = t(`${translationKey}.role`) || member.role;

    return {
      ...member,
      name: translatedName,
      role: translatedRole,
    };
  });

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
        {translatedTeamMembers.map((member: any) => (
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
