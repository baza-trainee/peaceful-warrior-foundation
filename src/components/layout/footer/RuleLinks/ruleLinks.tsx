import Link from 'next/link';

const RuleLinks: React.FC = () => {
  return (
    <ul className="mb-[32px] mt-[24px] flex cursor-pointer flex-col gap-y-[8px] text-m font-normal leading-[20px] text-light-background laptop:m-0 laptop:gap-y-[16px] laptop:text-sm laptop:font-medium laptop:leading-[21.94px]">
      <li className="underline transition-all duration-200 hover:text-gray-border">
        <Link href="/">Політика конфіденційності</Link>
      </li>
      <li className="underline transition-all duration-200 hover:text-gray-border">
        <Link href="/">Правила користування сайтом</Link>
      </li>
      <li className="hidden underline transition-all duration-200 hover:text-gray-border laptop:flex">
        <Link href="/">Статут</Link>
      </li>
      <li className="hidden underline transition-all duration-200 hover:text-gray-border laptop:flex">
        <Link href="/">Звітність</Link>
      </li>
    </ul>
  );
};

export default RuleLinks;
