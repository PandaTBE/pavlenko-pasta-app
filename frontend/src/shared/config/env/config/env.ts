import { EnvSchema, EnvPrivateSchema } from '../models/contracts';

export const ENV = EnvSchema.parse({
    NEXT_PUBLIC_BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
    NEXT_PUBLIC_SERVER_SIDE_BASE_API_URL: process.env.NEXT_PUBLIC_SERVER_SIDE_BASE_API_URL
});

export const ENV_PRIVATE = EnvPrivateSchema.parse({
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_JWT_REFRESH_TOKEN_LIFETIME_IN_SECONDS:
        process.env.NEXT_JWT_REFRESH_TOKEN_LIFETIME_IN_SECONDS,
    NEXT_JWT_ACCESS_TOKEN_LIFETIME_IN_SECONDS:
        process.env.NEXT_JWT_ACCESS_TOKEN_LIFETIME_IN_SECONDS,
});
