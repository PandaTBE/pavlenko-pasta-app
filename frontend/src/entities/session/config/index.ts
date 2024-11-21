export * from './next-auth-options';

export const AUTH_ERROR_SEARCH_PARAM_NAME = 'error';

export const SIGN_IN_ERRORS_MAP: Record<
    PropertyKey,
    { key: string; label: string }
> = {
    CredentialsSignin: {
        key: 'CredentialsSignin',
        label: 'Неправильный логин или пароли, попробуйте еще раз',
    },
    Default: {
        key: 'Default',
        label: 'Что-то пошло не так',
    },
};
