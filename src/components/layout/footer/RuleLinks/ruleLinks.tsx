import Link from 'next/link';

const RuleLinks = () => {
  return (
    <ul className="text-second-text mb-[32px] mt-[24px] flex flex-col gap-[8px] text-m font-normal leading-[20px]">
      <li className="underline">
        <Link href="/">Політика конфіденційності</Link>
      </li>
      <li className="underline">
        <Link href="/">Правила користування сайтом</Link>
      </li>
      <li>
        <Link href="/">Статут</Link>
      </li>
      <li>
        <Link href="/">Звітність</Link>
      </li>
    </ul>
  );
};

export default RuleLinks;
