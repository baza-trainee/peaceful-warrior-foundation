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
        'h-[52px] rounded-btn-radius bg-accent text-center text-sm font-medium uppercase leading-[22px] text-[#FFFDFD] shadow-btn-shadow hover:bg-hover',
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
