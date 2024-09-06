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
        'laptop:w-[326px] h-[52px] w-[343px] rounded-btn-radius bg-accent px-5 py-2.5 text-center text-sm font-medium uppercase leading-[21.94px] text-white shadow-btn-shadow',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zinc-100',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
