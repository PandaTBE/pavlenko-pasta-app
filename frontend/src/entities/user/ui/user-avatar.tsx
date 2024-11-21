import { PATH_KEYS } from '@/shared/config/path-keys';
import { makeFullName, makeInitials } from '@/shared/lib/full-name-format';
import { cn } from '@/shared/lib/tailwind-merge';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Skeleton } from '@/shared/ui/skeleton';
import Link from 'next/link';
import { ComponentPropsWithRef } from 'react';

export const UserAvatar = ({
    isLoading = false,
    avatarUrl,
    firstName,
    lastName,
    secondName,
    avatarProps,
    avatarFallbackProps,
}: {
    isLoading?: boolean;
    firstName?: string | null;
    lastName?: string | null;
    secondName?: string | null;
    avatarUrl?: string;
    avatarProps?: ComponentPropsWithRef<typeof Avatar>;
    avatarFallbackProps?: ComponentPropsWithRef<typeof AvatarFallback>;
}) => {
    if (isLoading) {
        return <Skeleton className="w-9 h-9 rounded-full" />;
    }

    return (
        <Link href={PATH_KEYS.profile()} className="inline-block">
            <Avatar
                {...avatarProps}
                className={cn('w-9 h-9 text-sm', avatarProps?.className)}
            >
                <AvatarImage src={avatarUrl} />
                <AvatarFallback
                    {...avatarFallbackProps}
                    className={cn(avatarFallbackProps?.className)}
                >
                    {makeInitials(
                        makeFullName({
                            middleName: secondName,
                            firstName,
                            lastName,
                        }),
                    )}
                </AvatarFallback>
            </Avatar>
        </Link>
    );
};
