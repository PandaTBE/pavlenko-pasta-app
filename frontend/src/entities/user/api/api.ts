import { zodContract } from '@/shared/lib/zod';
import {
    UserLoginDto,
    UserLogoutDto,
    UserProfileUpdateDto,
    UserRegisterDto,
    UserTokenRefreshDto,
    UserTokenVerifyDto,
} from '../model/types';
import {
    UserLoginResponseScheme,
    UserProfileResponseScheme,
    UserRegisterResponseScheme,
    UserTokenRefreshResponseScheme,
    UserTokenVerifyResponseScheme,
} from '../model/contracts';
import { baseUrl } from '@/shared/api/base-url';
import { createJsonMutation, createJsonQuery } from '@/shared/api/fetch';
import { sessionLib } from '@/entities/session/@x/user';

export const userProfileQuery = async (signal?: AbortSignal) => {
    const headers = await sessionLib.getAuthHeaders();

    return createJsonQuery({
        request: {
            url: baseUrl(`/api/v1/profile/`),
            method: 'GET',
            headers,
        },
        response: {
            contract: zodContract(UserProfileResponseScheme),
        },
        abort: signal,
    });
};

export const userProfileUpdateMutation = async (args: {
    data: UserProfileUpdateDto;
}) => {
    const headers = await sessionLib.getAuthHeaders();
    return createJsonMutation({
        request: {
            url: baseUrl(`/api/v1/profile/`),
            method: 'PATCH',
            headers,
            body: JSON.stringify(args.data),
        },
        response: {
            contract: zodContract(UserProfileResponseScheme),
        },
    });
};

export const userLoginMutation = (args: { data: UserLoginDto }) => {
    return createJsonMutation({
        request: {
            url: baseUrl(`/api/v1/auth/login/`),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(args.data),
        },
        response: {
            contract: zodContract(UserLoginResponseScheme),
        },
    });
};

export const userTokenRefreshMutation = (args: {
    data: UserTokenRefreshDto;
}) => {
    return createJsonMutation({
        request: {
            url: baseUrl(`/api/v1/auth/token/refresh/`),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(args.data),
        },
        response: {
            contract: zodContract(UserTokenRefreshResponseScheme),
        },
    });
};

export const userTokenVerifyMutation = (args: { data: UserTokenVerifyDto }) => {
    return createJsonMutation({
        request: {
            url: baseUrl(`/api/v1/auth/token/verify/`),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(args.data),
        },
        response: {
            contract: zodContract(UserTokenVerifyResponseScheme),
        },
    });
};

export const userLogoutMutation = (args: { data: UserLogoutDto }) => {
    return createJsonMutation({
        request: {
            url: baseUrl(`/api/v1/auth/logout/`),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(args.data),
        },
    });
};

export const userRegisterMutation = (args: { data: UserRegisterDto }) => {
    return createJsonMutation({
        request: {
            url: baseUrl(`/api/v1/auth/register/`),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(args.data),
        },
        response: {
            contract: zodContract(UserRegisterResponseScheme),
        },
    });
};
