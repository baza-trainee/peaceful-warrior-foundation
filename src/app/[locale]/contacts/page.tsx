import Address from '@/components/layout/footer/Address/Address';
import Email from '@/components/layout/header/Email/Email';
import Socials from '@/components/layout/header/Socials/Socials';
import SectionTitle from '@/components/ui/SectionTitle';
import { ICONS } from '@/constants/icons/icons';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Page: React.FC = () => {
  const t = useTranslations('ContactsPage');
  return (
    <section className="pb-[60px] pt-[24px] tablet:pb-[80px] tablet:pt-[32px]">
      <SectionTitle className="mb-[12px] mt-0 text-center tablet:mb-[24px] laptop:mb-[48px]">
        {t('title')}
      </SectionTitle>
      <div className="laptop:flex laptop:gap-x-[24px] desktop:justify-between desktop:gap-x-0">
        <ul className="mb-[24px] flex flex-col gap-y-[20px] text-body-text tablet:mb-[32px] tablet:flex-row tablet:flex-wrap tablet:gap-x-[32px] tablet:gap-y-[32px] laptop:flex-col laptop:flex-nowrap">
          <li className="flex items-center gap-x-[12px]">
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[50%] bg-accent tablet:h-[42px] tablet:w-[42px]">
              <ICONS.EMAIL
                aria-label={t('address-icon')}
                className="flex w-[19px] fill-light tablet:w-[21px]"
              />
            </div>
            <div className="flex flex-col gap-y-[8px]">
              <h3 className="text-l font-medium leading-[1.18] tablet:text-xl tablet:leading-[1.14]">
                {t('address')}
              </h3>
              <Email linkClass="text-sm laptop:text-l laptop:leading-[1.27] font-normal tablet:text-md tablet:leading-[1.2] leading-[18px]" />
            </div>
          </li>
          <li className="flex items-center gap-x-[12px]">
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[50%] bg-accent">
              <ICONS.PHONE
                aria-label={t('phone-icon')}
                className="flex w-[19px] fill-light tablet:w-[21px]"
              />
            </div>
            <div className="flex flex-col gap-y-[8px]">
              <h3 className="text-l font-medium leading-[1.18] tablet:text-xl tablet:leading-[1.14]">
                {t('phone')}
              </h3>
              <a
                aria-label={t('phone-number')}
                href="tel:+38 (050) 502 75 29"
                className="block text-sm font-normal leading-[18px] transition-all duration-200 hover:underline tablet:text-md tablet:leading-[1.2] laptop:text-l laptop:leading-[1.27]"
              >
                +38 050 502 75 29
              </a>
              <a
                aria-label={t('phone-number')}
                href="tel:+38 (050) 502 75 29"
                className="block text-sm font-normal leading-[18px] transition-all duration-200 hover:text-gray-border hover:underline tablet:text-md tablet:leading-[1.2] laptop:text-l laptop:leading-[1.27]"
              >
                +38 050 502 75 29
              </a>
            </div>
          </li>
          <li className="flex items-center gap-x-[12px]">
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[50%] bg-accent">
              <ICONS.ADRESS
                aria-label={t('email-icon')}
                className="tablet-[24px] flex w-[22px] fill-light"
              />
            </div>
            <div className="flex flex-col gap-y-[8px]">
              <h3 className="text-l font-medium leading-[1.18] tablet:text-xl tablet:leading-[1.14]">
                {t('email')}
              </h3>
              <p className="text-sm font-normal leading-[18px] tablet:text-l tablet:leading-[1.27] laptop:text-l laptop:leading-[1.27]">
                {t('address-text-1')}
              </p>
              <p className="text-sm font-normal leading-[18px] tablet:text-l tablet:leading-[1.27] laptop:text-l laptop:leading-[1.27]">
                {t('address-text-2')}
              </p>
            </div>
          </li>
          <div className="hidden flex-col laptop:flex">
            <h4 className="mb-[16px] text-md font-light text-black">
              {t('description')}
            </h4>
            <ul className="flex gap-x-[32px]">
              <Socials
                instagramClass="w-[24px] fill-light"
                facebookClass="w-[24px] fill-light"
                itemClass="flex h-[42px] w-[42px] items-center justify-center rounded-[50%] bg-accent"
              />
            </ul>
          </div>
        </ul>

        <Address>
          <Image
            src="/assets/images/contacts/map.jpg"
            alt={t('map')}
            width={674}
            height={564}
            className="inline-block w-full tablet:w-[680px] laptop:w-[674px]"
            quality={100}
            sizes="(max-width: 744px) 343px, (max-width: 1024px) 680px, 674px"
            priority
          />
        </Address>
      </div>
      <div className="laptop:hidden">
        <h4 className="mb-[16px] mt-[24px] text-m font-normal text-black tablet:mt-[32px] tablet:text-l laptop:text-md laptop:font-light">
          {t('description')}
        </h4>
        <ul className="flex gap-x-[24px] tablet:gap-x-[32px]">
          <Socials
            instagramClass="w-[20px] tablet:w-[24px] fill-light"
            facebookClass="w-[20px] tablet:w-[24px] fill-light"
            itemClass="flex tablet:h-[42px] tablet:w-[42px] h-[38px] w-[38px] items-center justify-center rounded-[50%] bg-accent"
          />
        </ul>
      </div>
    </section>
  );
};

export default Page;
