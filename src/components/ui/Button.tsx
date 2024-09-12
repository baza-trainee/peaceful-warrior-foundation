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
        'h-[52px] rounded-btn-radius bg-accent text-center text-sm font-medium uppercase leading-[22px] text-white shadow-btn-shadow',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'bg-[#407cd7]',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
