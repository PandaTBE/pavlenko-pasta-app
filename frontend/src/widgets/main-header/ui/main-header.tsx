import { PATH_KEYS } from '@/shared/config/path-keys';
import Link from 'next/link';
import { ReactNode } from 'react';

export const MainHeader = ({
    logo,
    actions,
    navigationMenu,
}: {
    actions: ReactNode;
    navigationMenu?: ReactNode;
    logo: ReactNode;
}) => {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
            <div className="container !max-w-none flex items-center py-1">
                <div className="flex items-center">
                    <Link href={PATH_KEYS.home()}>{logo}</Link>
                </div>
                <div className="justify-end flex-1 flex items-center gap-3">
                    {navigationMenu}
                    {actions}
                </div>
            </div>
        </header>
    );
};
