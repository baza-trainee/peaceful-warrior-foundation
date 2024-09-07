import Link from 'next/link';
import { ICONS } from '../../../constants/icons/icons';

export interface LogoProps {
  type: 'dark' | 'light';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ type }) => {
  const LogoComponent = type === 'dark' ? ICONS.LOGO_DARK : ICONS.LOGO_LIGHT;

  return (
    <Link href="/" aria-label="logo">
      <LogoComponent className="h-[74px] laptop:h-[136px]" />
    </Link>
  );
};
