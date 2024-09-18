import { ICONS } from '@/constants/icons/icons';
import { useTranslations } from 'next-intl';

interface SocialsProps {
  instagramClass?: string;
  facebookClass?: string;
  itemClass?: string;
}

const Socials: React.FC<SocialsProps> = ({
  instagramClass = 'w-[24px] fill-light-background transition-all duration-300 hover:scale-125 hover:fill-gray-border tablet:w-[28px] tablet:fill-accent tablet:hover:fill-hover',
  facebookClass = 'w-[24px] fill-light-background transition-all duration-300 hover:scale-125 hover:fill-gray-border tablet:w-[28px] tablet:fill-accent tablet:hover:fill-hover',
  itemClass,
}) => {
  const t = useTranslations('Layout.AriaLabels');
  return (
    <>
      <li className={`${itemClass}`}>
        <ICONS.INSTAGRAM
          aria-label={t('instagram')}
          className={`${instagramClass}`}
        />
      </li>
      <li className={`${itemClass}`}>
        <ICONS.FACEBOOK
          aria-label={t('facebook')}
          className={`${facebookClass}`}
        />
      </li>
    </>
  );
};

export default Socials;
