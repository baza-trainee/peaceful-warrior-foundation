declare module 'react-input-mask' {
    import { Component } from 'react';
  
    interface InputMaskProps extends React.InputHTMLAttributes<HTMLInputElement> {
      mask: string;
      maskChar?: string;
      formatChars?: { [key: string]: string };
      alwaysShowMask?: boolean;
      beforeMaskedValueChange?: (
        newState: {
          value: string;
          selection: { start: number; end: number };
          cursor: number;
        },
        oldState: {
          value: string;
          selection: { start: number; end: number };
          cursor: number;
        },
        userInput: string,
        options: { mask: string; maskChar: string; alwaysShowMask: boolean; formatChars: { [key: string]: string } }
      ) => { value: string; selection: { start: number; end: number } };
    }
  
    export default class InputMask extends Component<InputMaskProps> {}
  }
  