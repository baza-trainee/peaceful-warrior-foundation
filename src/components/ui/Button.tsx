import clsx from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  modal?: boolean;
  directionBtn?: boolean;
}

const Button = ({
  disabled,
  children,
  modal = false,
  directionBtn = false,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      {...rest}
      className={clsx(
        'w-full rounded-btn-radius bg-accent text-center text-sm font-medium uppercase leading-[22px] text-[#FFFDFD] shadow-btn-shadow hover:bg-hover',
        'transition-colors duration-200 ease-out',
        modal && 'h-11 tablet:h-[52px]',
        !modal && 'h-[52px] mobile:w-[343px]',
        disabled && 'bg-gray-devider text-gray-border',
        directionBtn && 'tablet:w-[332px] desktop:w-[364px]',
        !directionBtn && 'tablet:w-[326px]',
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

// example for Direction Section
{
  /* <Button
  type="submit"
  className="m-auto"
  aria-label="Перейти до сторінки платежу"
  directionBtn //!!!!!!!!!!!!!!!!!!
>
  ЗВЕРНУТИСЬ ЗА ДОПОМОГОЮ + icon(if necessary)
</Button>; */
}

// example for modal
{
  /* <Button
  type="submit"
  className="m-auto"
  aria-label="Перейти до сторінки платежу"
  modal={true} //!!!!!!!!!!!!!!!!!!!!!!!
>
  ПІДТРИМАТИ
</Button>; */
}
