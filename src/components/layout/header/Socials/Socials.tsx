import { ICONS } from '@/constants/icons/icons';

interface SocialsProps {
  instagramClass: string;
  facebookClass: string;
  itemClass: string;
}

const Socials: React.FC<SocialsProps> = ({
  instagramClass = 'w-[24px] fill-light-background transition-all duration-300 hover:scale-125 hover:fill-gray-border tablet:w-[28px] tablet:fill-accent tablet:hover:fill-hover',
  facebookClass = 'w-[24px] fill-light-background transition-all duration-300 hover:scale-125 hover:fill-gray-border tablet:w-[28px] tablet:fill-accent tablet:hover:fill-hover',
  itemClass,
}) => {
  return (
    <>
      <li className={`${itemClass}`}>
        <ICONS.INSTAGRAM
          aria-label="instagram"
          className={`${instagramClass}`}
        />
      </li>
      <li className={`${itemClass}`}>
        <ICONS.FACEBOOK aria-label="facebook" className={`${facebookClass}`} />
      </li>
    </>
  );
};

export default Socials;
