import { Logo } from '@/components/ui/Logo/Logo';
import { NAV_LINKS } from '@/constants/navlinks/navlinks';
import { Navigation } from '../Navigation/Navigation';
import { ICONS } from '@/constants/icons/icons';
import Dropdown from '../Dropdown/Dropdown';
import Socials from '../Socials/Socials';
import Email from '../Email/Email';

const Header = () => {
  return (
    <header>
      {/* Mobile-dark-element before 1024px */}
      <div className="flex h-[87px] w-full bg-footer-background laptop:hidden">
        <ul className="container flex cursor-pointer items-end justify-between pb-[8px] laptop:hidden">
          <div className="flex gap-[16px]">
            <Socials />
          </div>
          <div className="flex laptop:hidden">
            <Dropdown />
          </div>
        </ul>
      </div>

      <div className="container flex items-center pb-[13px] pt-[16px] laptop:gap-[12px] laptop:pb-[48px] laptop:pt-[40px]">
        <Logo type="dark" />
        <div className="flex w-full items-center justify-between laptop:flex-col laptop:items-stretch laptop:gap-y-[12px] laptop:pl-[56px]">
          {/* Mobile-logo-text before 1024px */}
          <div className="flex flex-col pl-[4px] laptop:hidden">
            <h3 className="mb-[2px] text-m font-medium uppercase leading-[19.5px] text-body-text">
              МИРНИЙ ВОЇН
            </h3>
            <p className="mb-[2px] text-xs font-normal leading-[14.63px] text-body-text">
              Благодійний фонд
            </p>
          </div>
          <div className="flex items-center justify-end">
            <div className="mr-[32px] hidden font-normal text-sm leading-[21.94px] laptop:flex">
              <Email />
            </div>
            <ul className="mr-[32px] hidden cursor-pointer gap-[16px] laptop:flex laptop:flex-row">
              <Socials />
            </ul>
            <button
              type="button"
              className="mr-[24px] hidden max-w-[237px] rounded-btn-radius bg-accent px-[24px] py-[12px] text-m font-medium uppercase text-white shadow-btn-shadow laptop:flex"
            >
              ПІДТРИМАТИ ПРОЄКТ
            </button>
            <div className="hidden laptop:flex">
              <Dropdown />
            </div>

            {/* Mobile-burger-btn before 1024px */}
            <button className="flex cursor-pointer laptop:hidden" type="button">
              <ICONS.BURGER_MENU className="w-[32px] fill-body-text" />
            </button>
          </div>
          <hr className="hidden laptop:flex laptop:w-full laptop:border-[1px] laptop:border-gray-devider" />
          <nav className="hidden laptop:flex">
            <Navigation headerNav={NAV_LINKS} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
