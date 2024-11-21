'use client';

import { PATH_KEYS } from '@/shared/config/path-keys';
import { cn } from '@/shared/lib/tailwind-merge';
import { Button, ButtonProps } from '@/shared/ui/button';
import { LogOutIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { BUTTON_PROPS_BY_SESSION_STATUS } from '../config';
import { sessionTypes } from '@/entities/session';

export const UserAuthActionButton = ({
    children,
    className,
    sessionStatus,
    ...props
}: PropsWithChildren<
    ButtonProps & { sessionStatus: sessionTypes.SessionStatus }
>) => {
    const router = useRouter();
    const pathname = usePathname();

    const onClick = () => {
        if (sessionStatus === 'unauthenticated') {
            router.push(PATH_KEYS.login());
        }

        if (sessionStatus === 'authenticated') {
            signOut();
        }
    };

    if (sessionStatus === 'unauthenticated' && pathname === PATH_KEYS.login()) {
        return null;
    }

    return (
        <Button
            {...BUTTON_PROPS_BY_SESSION_STATUS[sessionStatus]}
            onClick={onClick}
            {...props}
            className={cn(className)}
        >
            {children ?? <DefaultContent sessionStatus={sessionStatus} />}
        </Button>
    );
};

const DefaultContent = ({
    sessionStatus,
}: {
    sessionStatus: sessionTypes.SessionStatus;
}) => {
    if (sessionStatus === 'authenticated') {
        return <LogOutIcon />;
    }

    if (sessionStatus === 'unauthenticated') {
        return 'Войти';
    }

    return null;
};
