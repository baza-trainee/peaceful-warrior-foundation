declare module 'react-input-mask' {
  import { InputHTMLAttributes, ReactNode } from 'react';

  export interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
    mask: string | Array<string | RegExp>;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children?: (inputProps: InputHTMLAttributes<HTMLInputElement>) => ReactNode;
  }

  export default function InputMask(props: InputMaskProps): JSX.Element;
}
