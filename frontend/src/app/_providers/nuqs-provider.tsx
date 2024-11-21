'use client';

import { ReactNode } from 'react';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

export const NuqsProvider = ({ children }: { children: ReactNode }) => {
    return <NuqsAdapter>{children}</NuqsAdapter>;
};
