import { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../lib/tailwind-merge';

export const PageTitle = ({
    children,
    className,
    ...props
}: PropsWithChildren & HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1 className={cn('font-semibold text-2xl', className)} {...props}>
            {children}
        </h1>
    );
};
