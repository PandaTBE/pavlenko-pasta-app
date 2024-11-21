import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { UserRegisterDto, UserRegisterResponse } from '../model/types';
import { userRegisterMutation } from './api';

const keys = {
    root() {
        return ['user'];
    },
    register() {
        return [...this.root(), 'register'];
    },
    profile() {
        return [...this.root(), 'profile'];
    },
};

export const useUserRegisterMutation = (args?: {
    options?: UseMutationOptions<
        UserRegisterResponse,
        unknown,
        { data: UserRegisterDto }
    >;
}) => {
    return useMutation({
        mutationKey: keys.register(),
        mutationFn: userRegisterMutation,
        ...args?.options,
    });
};
