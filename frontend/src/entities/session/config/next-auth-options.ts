import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { userApi, userTypes } from '@/entities/user/@x/session';
import { ENV_PRIVATE } from '@/shared/config/env/config/env';

export const NEXT_AUTH_OPTIONS: NextAuthOptions = {
    secret: ENV_PRIVATE.NEXTAUTH_SECRET,
    pages: { signIn: '/login', error: '/login' },
    session: {
        strategy: 'jwt',
        maxAge: Number(ENV_PRIVATE.NEXT_JWT_REFRESH_TOKEN_LIFETIME_IN_SECONDS),
    },
    providers: [
        // GithubProvider({
        //     clientId: process.env.GITHUB_APP_CLIENT_ID as string,
        //     clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
        // }),
        CredentialsProvider({
            name: 'Credentials',
            type: 'credentials',
            credentials: {},
            async authorize(credentials) {
                try {
                    if (credentials) {
                        const response = await userApi.userLoginMutation({
                            data: credentials as userTypes.UserLoginDto,
                        });

                        return response as User;
                    }
                } catch (error) {
                    console.error(error);
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account, trigger, session }) {
            if (trigger === 'update') {
                await userApi.userProfileUpdateMutation({ data: session });
                return { ...token, ...session };
            }

            /**
             * Если был передан user и account, то это событие авторизации
             */
            if (user && account) {
                const backendResponse = (
                    account.provider === 'credentials' ? user : account.meta
                ) as userTypes.UserLoginResponse;

                return {
                    ...token,
                    token: {
                        access: backendResponse.access,
                        refresh: backendResponse.refresh,
                    },
                    user: backendResponse.user,
                };
            }

            /**
             * Проверка валидности токена. Если токен невалиден, то пытаемся его обновить
             */
            const result = await userApi
                .userTokenVerifyMutation({
                    data: { token: token.token.access },
                })
                .then(() => {
                    console.log('Проверка токена прошла успешно');
                    return {};
                })
                .catch((error) => {
                    console.log('Обновление токена', token, error);

                    return userApi
                        .userTokenRefreshMutation({
                            data: { refresh: token.token.refresh },
                        })
                        .then((data) => {
                            console.log('Обновление токена прошло успешно');

                            return {
                                access: data.access,
                                refresh: data.refresh,
                            };
                        })
                        .catch((error) => {
                            console.error(error);
                            throw Error('Обновление токена прошло с ошибкой');
                        });
                });

            return { ...token, token: { ...token.token, ...result } };
        },
        session: ({ session, token }) => {
            return { ...session, token: token.token, user: token.user };
        },
    },
    events: {
        signOut: ({ token }) => {
            userApi
                .userLogoutMutation({
                    data: { refresh: token.token.refresh },
                })
                .then(() => {
                    console.log('Токен добавлен в черный список на сервере');
                })
                .catch((error) => {
                    console.error('При выходе произошла ошибка ', error);
                });
        },
    },
};
