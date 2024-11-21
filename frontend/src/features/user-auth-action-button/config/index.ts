import { ButtonProps } from '@/shared/ui/button';
import { useSession } from 'next-auth/react';

export const BUTTON_PROPS_BY_SESSION_STATUS: Record<
    ReturnType<typeof useSession>['status'],
    ButtonProps
> = {
    authenticated: {
        variant: 'ghost',
        size: 'icon',
    },
    unauthenticated: {
        variant: 'default',
        size: 'default',
    },
    loading: {
        variant: 'default',
        size: 'default',
    },
};
