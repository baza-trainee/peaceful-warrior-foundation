import clsx from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ disabled, children, className, ...rest }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      {...rest}
      className={clsx(
        'h-[52px] w-[343px] rounded-btn-radius bg-accent text-center text-sm font-medium uppercase leading-[22px] text-[#FFFDFD] shadow-btn-shadow hover:bg-hover tablet:w-[326px]',
        'transition-colors duration-200 ease-out',

        disabled && 'bg-gray-devider text-gray-border',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
// example how to use
{
  /* <Button
  type="submit"
  className="m-auto"
  aria-label="Перейти до сторінки платежу"
>
  ПІДТРИМАТИ
</Button>; */
}
