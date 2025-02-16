import clsx from 'clsx';

export interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  modal?: boolean;
}

export default function SectionTitle({
  modal = false,
  children,
  className,
}: SectionTitleProps) {
  return (
    <h2
      className={clsx(
        'text-center font-noteworthy font-bold uppercase tracking-tr-4 text-accent tablet:font-light',
        className,
        modal &&
          'desktop:text-8xl desktop:leading-[90px] text-lg leading-[41.99px] tablet:text-5xl tablet:leading-[58.14px]',
        !modal &&
          'text-5xl leading-[58px] tablet:text-8xl tablet:leading-[90px] desktop:text-9xl'
      )}
    >
      {children}
    </h2>
  );
}

//example how to use
{
  /* <SectionTitle className="mb-3 tablet:hidden">підтримка</SectionTitle>
        <SectionTitle className="hidden tablet:mb-6 tablet:block desktop:mb-12">
          підтримайте нас
        </SectionTitle> */
}
// for modal
{
  /* <SectionTitle modal className="mb-8">
  ПІДТРИМАТИ ФОНД!
</SectionTitle>; */
}
