'use client';

import ErrorDisplay from '@/components/layout/error-display';
import React from 'react';

type ErrorComponentProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <>
      <ErrorDisplay error={error} reset={reset} />
    </>
  );
}
