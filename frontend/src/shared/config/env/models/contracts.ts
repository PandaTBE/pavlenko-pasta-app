import { z } from 'zod';

export const EnvSchema = z.object({
    NEXT_PUBLIC_BASE_API_URL: z.string(),
    NEXT_PUBLIC_SERVER_SIDE_BASE_API_URL: z.string()
});

export const EnvPrivateSchema = z.object({
    NEXTAUTH_SECRET: z.string().optional(),
    NEXT_JWT_REFRESH_TOKEN_LIFETIME_IN_SECONDS: z.string().optional(),
    NEXT_JWT_ACCESS_TOKEN_LIFETIME_IN_SECONDS: z.string().optional(),
});
