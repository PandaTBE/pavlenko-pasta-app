import {
    INCORRECT_EMAIL_ERROR,
    REQUIRED_FIELD_ERROR,
} from '@/shared/config/validation-errors';
import { z } from 'zod';

export const UserScheme = z.object({
    id: z.number(),
    last_login: z.string(),
    is_superuser: z.boolean(),
    is_staff: z.boolean(),
    is_active: z.boolean(),
    date_joined: z.string(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string().nullable(),
    second_name: z.string().nullable(),
    groups: z.array(z.number()),
    user_permissions: z.array(z.number()),
});

export const UserProfileScheme = z.object({
    id: z.number(),
    user: z.number(),
    location: z.string().nullable(),
});

export const UserProfileUpdateDtoScheme = z.object({
    first_name: z.string().min(1, { message: REQUIRED_FIELD_ERROR }),
    last_name: z.string().optional().nullable(),
    second_name: z.string().optional().nullable(),
    profile: z
        .object({
            location: z.string().optional().nullable(),
        })
        .optional()
        .nullable(),
});

export const UserProfileResponseScheme = UserScheme.merge(
    z.object({ profile: UserProfileScheme.nullable() }),
);

export const UserLoginDtoScheme = z.object({
    email: z.string().email({ message: INCORRECT_EMAIL_ERROR }),
    password: z.string().min(1, { message: REQUIRED_FIELD_ERROR }),
});

export const UserLoginResponseScheme = z.object({
    access: z.string(),
    refresh: z.string(),
    user: UserScheme,
});

export const UserRegisterDtoScheme = z
    .object({
        email: z.string().email({ message: INCORRECT_EMAIL_ERROR }),
        first_name: z.string().min(1, { message: REQUIRED_FIELD_ERROR }),
        last_name: z.string().optional(),
        second_name: z.string().optional(),
        password1: z.string().min(8, {
            message: 'Длина пароля должна быть не менее 8 символов',
        }),
        password2: z.string().min(1, { message: REQUIRED_FIELD_ERROR }),
    })
    .refine((data) => data.password1 === data.password2, {
        message: 'Пароли не совпадают',
        path: ['password2'],
    });

export const UserRegisterResponseScheme = z.object({
    access: z.string(),
    refresh: z.string(),
    user: UserScheme,
});

export const UserTokenRefreshDtoScheme = z.object({
    refresh: z.string(),
});

export const UserTokenRefreshResponseScheme = z.object({
    access: z.string(),
    refresh: z.string(),
    access_expiration: z.string(),
    refresh_expiration: z.string(),
});

export const UserTokenVerifyDtoScheme = z.object({
    token: z.string(),
});

export const UserTokenVerifyResponseScheme = z.object({});

export const UserLogoutDtoScheme = z.object({
    refresh: z.string(),
});
