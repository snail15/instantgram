'use client';

type Props = {
  children: React.ReactNode;
};

import React from 'react';
import { SWRConfig } from 'swr';

export default function SWRConfigContext({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}
