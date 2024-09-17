'use client';

import React from 'react';

type GlobalErrorProps = { error: Error; reset: () => void };

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h2>Something globally went wrong</h2>
          <button
            className="my-2 rounded border-orange-700 bg-orange-400 p-1"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try Again
          </button>
        </main>
      </body>
    </html>
  );
}
