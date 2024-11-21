import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '../config';

export const getAuthHeaders = async (): Promise<
    Record<PropertyKey, string>
> => {
    const session = await getServerSession(NEXT_AUTH_OPTIONS);

    return {
        Authorization: `Bearer ${session?.token?.access}`,
        'Content-Type': 'application/json',
    };
};
