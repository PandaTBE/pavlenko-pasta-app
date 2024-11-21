import { z } from 'zod';
import {
    UserLoginDtoScheme,
    UserLoginResponseScheme,
    UserLogoutDtoScheme,
    UserProfileResponseScheme,
    UserProfileScheme,
    UserProfileUpdateDtoScheme,
    UserRegisterDtoScheme,
    UserRegisterResponseScheme,
    UserScheme,
    UserTokenRefreshDtoScheme,
    UserTokenRefreshResponseScheme,
    UserTokenVerifyDtoScheme,
    UserTokenVerifyResponseScheme,
} from './contracts';

export type UserLoginDto = z.infer<typeof UserLoginDtoScheme>;
export type UserLoginResponse = z.infer<typeof UserLoginResponseScheme>;
export type User = z.infer<typeof UserScheme>;
export type UserTokenRefreshDto = z.infer<typeof UserTokenRefreshDtoScheme>;
export type UserTokenRefreshResponse = z.infer<
    typeof UserTokenRefreshResponseScheme
>;
export type UserTokenVerifyDto = z.infer<typeof UserTokenVerifyDtoScheme>;
export type UserTokenVerifyResponse = z.infer<
    typeof UserTokenVerifyResponseScheme
>;
export type UserLogoutDto = z.infer<typeof UserLogoutDtoScheme>;
export type UserRegisterDto = z.infer<typeof UserRegisterDtoScheme>;
export type UserRegisterResponse = z.infer<typeof UserRegisterResponseScheme>;
export type UserProfile = z.infer<typeof UserProfileScheme>;
export type UserProfileUpdateDto = z.infer<typeof UserProfileUpdateDtoScheme>;
export type UserProfileResponse = z.infer<typeof UserProfileResponseScheme>;
