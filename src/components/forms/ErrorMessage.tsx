import React from 'react';
import clsx from 'clsx';

export interface ErrorMessageProps {
  children: React.ReactNode;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, className }) => {
  return (
    <p role="alert" className={clsx('text-red-error', className)}>
      {children}
    </p>
  );
};

export default ErrorMessage;
