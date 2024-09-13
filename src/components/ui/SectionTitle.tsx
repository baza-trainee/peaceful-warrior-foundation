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
        'text-center font-noteworthy font-bold uppercase text-accent',
        className,
        modal &&
          'text-lg leading-[41.99px] desktop:font-light desktop:leading-[90px]',
        !modal &&
          'text-5xl leading-[58px] tablet:font-light tablet:leading-[90px] desktop:text-8xl'
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
