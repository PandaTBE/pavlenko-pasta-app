'use client';

import { sessionConfig } from '@/entities/session';
import { userContracts, userTypes } from '@/entities/user';
import { PATH_KEYS } from '@/shared/config/path-keys';
import { Alert, AlertTitle } from '@/shared/ui/alert';
import { Button } from '@/shared/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { PasswordInput } from '@/shared/ui/password-input';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useQueryState } from 'nuqs';
import { useForm } from 'react-hook-form';

export const LoginCard = () => {
    const session = useSession();
    const [error] = useQueryState(sessionConfig.AUTH_ERROR_SEARCH_PARAM_NAME);

    const form = useForm<userTypes.UserLoginDto>({
        resolver: zodResolver(userContracts.UserLoginDtoScheme),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (values: userTypes.UserLoginDto) => {
        signIn('credentials', {
            redirect: true,
            callbackUrl: PATH_KEYS.home(),
            ...values,
        });
    };

    return (
        <Card className="w-full sm:w-2/3">
            <CardHeader className="grid gap-2">
                <CardTitle>Авторизация</CardTitle>
                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>
                            {sessionConfig.SIGN_IN_ERRORS_MAP[error]?.label ??
                                sessionConfig.SIGN_IN_ERRORS_MAP.Default?.label}
                        </AlertTitle>
                    </Alert>
                )}
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Почта</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Введите почту"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Пароль</FormLabel>
                                    <FormControl>
                                        <PasswordInput
                                            placeholder="Пароль"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            disabled={session.status === 'loading'}
                        >
                            Войти
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                <div>
                    Нет аккаунта?&nbsp;
                    <Link
                        href={PATH_KEYS.register()}
                        className="text-blue-500 hover:underline"
                    >
                        Регистрация
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
};
