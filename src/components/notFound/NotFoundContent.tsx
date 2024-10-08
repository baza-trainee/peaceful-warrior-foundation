import { useTranslations } from 'next-intl';
import Button from '../ui/Button';
import Link from 'next/link';

export interface NotFoundContentProps {}

export default function NotFoundContent({}: NotFoundContentProps) {
  const t = useTranslations('NotFoundPage');
  return (
    <section className="pb-[60px] pt-6 tablet:pb-[80px] tablet:pt-8 desktop:pb-[64px] desktop:pt-6">
      <div className="m-auto flex flex-col desktop:w-[908px]">
        <div className="mb-12 bg-[url('/assets/images/NotFound/not-found-mob.png')] bg-auto bg-bottom bg-no-repeat tablet:mb-10 tablet:bg-[url('/assets/images/NotFound/not-found-tablet.png')]">
          <p className="mb-3 text-center text-md font-medium leading-[26px] tablet:text-2xl tablet:font-regular tablet:leading-[36px]">
            {t('title')}
          </p>
          <p className="pb-[284px] text-center text-s font-light leading-4 tablet:pb-[498px] tablet:text-sm tablet:leading-[22px] desktop:text-md desktop:leading-6">
            {t('text')}
          </p>
        </div>
        <Link className="tablet:m-auto" href="/">
          <Button>{t('btn')}</Button>
        </Link>
      </div>
    </section>
  );
}
