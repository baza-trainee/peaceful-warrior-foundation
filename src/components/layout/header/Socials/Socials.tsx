import { ICONS } from '@/constants/icons/icons';

const Socials = () => {
  return (
    <>
      <li>
        <ICONS.INSTAGRAM className="hover:fill-hover w-[24px] fill-light-background transition-all duration-300 laptop:w-[28px] laptop:fill-accent" />
      </li>
      <li>
        <ICONS.FACEBOOK className="hover:fill-hover w-[24px] fill-light-background transition-all duration-300 laptop:w-[28px] laptop:fill-accent" />
      </li>
    </>
  );
};

export default Socials;
