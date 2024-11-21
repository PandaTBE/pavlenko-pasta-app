import { ENV } from '../config/env';
import { isServer } from '../lib/is-server';

export const baseUrl = (
    path: string,
    baseUrl = isServer() ? ENV.NEXT_PUBLIC_SERVER_SIDE_BASE_API_URL : ENV.NEXT_PUBLIC_BASE_API_URL,
) => {
    return `${baseUrl}${path}`;
};
