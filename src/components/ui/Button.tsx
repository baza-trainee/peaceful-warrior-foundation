import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const Button = ({ disabled, ...rest }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      {...rest}
      className={clsx(
        "py-2.5 px-5 w-56 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded",
        !disabled && "hover:bg-gray-800 active:bg-gray-950",
        disabled && "text-zinc-100"
      )}
    />
  );
};

export default Button;
