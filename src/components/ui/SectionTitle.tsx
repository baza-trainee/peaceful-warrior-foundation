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
        'laptop:text-8xl laptop:leading-[90.44px] laptop:font-light text-center font-noteworthy text-5xl font-bold uppercase leading-[58.14px] text-accent',
        className
      )}
    >
      {children}
    </h2>
  );
}
