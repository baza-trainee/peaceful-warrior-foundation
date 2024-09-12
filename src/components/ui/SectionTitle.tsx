import clsx from 'clsx';

export interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <h2
      className={clsx(
        'text-center font-noteworthy text-5xl font-bold uppercase leading-[58px] text-accent tablet:text-[48px] tablet:font-light tablet:leading-[90px] desktop:text-8xl',
        className
      )}
    >
      {children}
    </h2>
  );
}
