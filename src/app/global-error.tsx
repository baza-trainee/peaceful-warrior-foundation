"use client";

import React from "react";

type GlobalErrorProps = {};

export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html>
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <p>Something globally went wrong</p>
        </main>
      </body>
    </html>
  );
}
