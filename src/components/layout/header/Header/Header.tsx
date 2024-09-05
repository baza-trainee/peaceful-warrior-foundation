import { Logo } from '@/components/ui/Logo/Logo';
import { NAV_LINKS } from '@/constants/navlinks/navlinks';
import { Navigation } from '../Navigation/Navigation';
import Link from 'next/link';
import { ICONS } from '@/constants/icons/icons';

const Header = () => {
  const email = 'ukr.peaceful.warrior@gmail.com';
  return (
    <header className="container flex items-center pb-[13px] pt-[16px] lg:gap-[12px] lg:pb-[48px] lg:pt-[40px]">
      <Logo type="dark" />
      <div className="flex w-full items-center justify-between lg:flex-col lg:items-stretch lg:gap-y-[12px] lg:pl-[56px]">
        <div className="flex flex-col pl-[4px] lg:hidden">
          <h3 className="mb-[2px] text-m font-medium uppercase leading-[19.5px] text-body-text">
            МИРНИЙ ВОЇН
          </h3>
          <p className="mb-[2px] text-xs font-normal leading-[14.63px] text-body-text">
            Благодійний фонд
          </p>
        </div>
        <div className="flex justify-end items-center">
          <Link
            rel="nofollow noreferrer"
            target="_blank"
            href={`mailto:${email}`}
            title={`Send an email to ${email}`}
            className="hidden hover:underline lg:flex mr-[32px]"
          >
            {email}
          </Link>
          <ul className='flex gap-[16px] mr-[32px]'>
            <li>
              <ICONS.INSTAGRAM className="w-[28px] fill-accent" />
            </li>
            <li>
              <ICONS.FACEBOOK className="w-[28px] fill-accent" />
            </li>
          </ul>
          <button type='button' className='rounded-btn-radius bg-accent text-white uppercase font-medium text-m py-[12px] px-[24px] mr-[24px] shadow-btn-shadow'>ПІДТРИМАТИ ПРОЄКТ</button>
          <button className="flex lg:hidden" type="button">
            <ICONS.BURGER_MENU className="w-[32px] fill-body-text" />
          </button>
        </div>
        <Navigation headerNav={NAV_LINKS} />
      </div>
    </header>
  );
};

export default Header;
