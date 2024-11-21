import { sessionConfig } from '@/entities/session';
import { PATH_KEYS } from '@/shared/config/path-keys';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const MainLayout = async ({ children }: { children: ReactNode }) => {
    const session = await getServerSession(sessionConfig.NEXT_AUTH_OPTIONS);

    if (!session) {
        redirect(PATH_KEYS.login());
    }

    return <>{children}</>;
};

export default MainLayout;
