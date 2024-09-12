import { ICONS } from '@/constants/icons/icons';

const Socials = () => {
  return (
    <>
      <li>
        <ICONS.INSTAGRAM className="w-[24px] fill-light-background transition-all duration-300 hover:scale-125 hover:fill-hover laptop:w-[28px] laptop:fill-accent" />
      </li>
      <li>
        <ICONS.FACEBOOK className="w-[24px] fill-light-background transition-all duration-300 hover:scale-125 hover:fill-hover laptop:w-[28px] laptop:fill-accent" />
      </li>
    </>
  );
};

export default Socials;
