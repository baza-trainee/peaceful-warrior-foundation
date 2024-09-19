import { ICONS } from '@/constants/icons/icons';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

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
  const instagramUrl = 'https://www.instagram.com/mirnii_voin/';
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61553769122737';

  const t = useTranslations('Layout.AriaLabels');

  return (
    <>
      <Link
        className={`${itemClass}`}
        href={instagramUrl}
        aria-label={t('instagram')}
        target="_blank"
        rel="nofollow noreferrer"
      >
        <ICONS.INSTAGRAM className={`${instagramClass}`} />
      </Link>
      <Link
        className={`${itemClass}`}
        href={facebookUrl}
        aria-label={t('facebook')}
        target="_blank"
        rel="nofollow noreferrer"
      >
        <ICONS.FACEBOOK className={`${facebookClass}`} />
      </Link>
    </>
  );
};

export default Socials;
