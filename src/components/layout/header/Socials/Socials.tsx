import { ICONS } from '@/constants/icons/icons';

const Socials = () => {
  return (
    <>
      <li>
        <ICONS.INSTAGRAM
          aria-label="instagram"
          className="w-[24px] fill-light-background transition-all duration-300 hover:scale-125 hover:fill-hover tablet:w-[28px] tablet:fill-accent"
        />
      </li>
      <li>
        <ICONS.FACEBOOK
          aria-label="facebook"
          className="w-[24px] fill-light-background transition-all duration-300 hover:scale-125 hover:fill-hover tablet:w-[28px] tablet:fill-accent"
        />
      </li>
    </>
  );
};

export default Socials;
