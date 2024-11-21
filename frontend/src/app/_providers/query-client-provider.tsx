'use client';

import { ReactNode } from 'react';
import { QueryClientProvider as Provider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from '@/shared/api/query-client';

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
    const queryClient = getQueryClient();
    return (
        <Provider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
        </Provider>
    );
};
