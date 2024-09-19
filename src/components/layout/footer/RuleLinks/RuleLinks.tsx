import { useTranslations } from 'next-intl';
import Link from 'next/link';

const RuleLinks: React.FC = () => {
  const t = useTranslations('Layout.Rules');
  return (
    <ul className="mb-[32px] mt-[24px] flex cursor-pointer flex-col gap-y-[8px] text-m font-normal leading-[20px] text-light-background laptop:m-0 laptop:gap-y-[16px] laptop:text-sm laptop:font-medium laptop:leading-[21.94px]">
      <li className="underline transition-all duration-200 hover:text-gray-border">
        <Link href="/docs/policy.pdf" target="_blank" rel="noopener noreferrer">
          {t('policy')}
        </Link>
      </li>
      <li className="underline transition-all duration-200 hover:text-gray-border">
        <Link href="/docs/rules.pdf" target="_blank" rel="noopener noreferrer">
          {t('rules')}
        </Link>
      </li>
      <li className="hidden underline transition-all duration-200 hover:text-gray-border laptop:flex">
        <Link href="/">{t('statute')}</Link>
      </li>
      <li className="hidden underline transition-all duration-200 hover:text-gray-border laptop:flex">
        <Link href="/">{t('reporting')}</Link>
      </li>
    </ul>
  );
};

export default RuleLinks;
