'use client';

import { userContracts, userQueries, userTypes } from '@/entities/user';
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
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const RegisterCard = () => {
    const router = useRouter();
    const { mutate, isPending, isError } = userQueries.useUserRegisterMutation({
        options: {
            onSuccess: () => {
                router.push(PATH_KEYS.login());
            },
        },
    });

    const form = useForm<userTypes.UserRegisterDto>({
        resolver: zodResolver(userContracts.UserRegisterDtoScheme),
        defaultValues: {
            email: '',
            first_name: '',
            password2: '',
            password1: '',
        },
    });

    const onSubmit = (values: userTypes.UserRegisterDto) => {
        mutate({ data: values });
    };

    return (
        <Card className="w-full sm:w-2/3">
            <CardHeader className="grid gap-2">
                <CardTitle>Регистрация</CardTitle>
                {isError && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>
                            Что-то пошло не так, попробуйте еще раз
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
                            name="first_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Имя</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Обязательно"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="second_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Фамилия</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Необязательно"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="last_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Отчество</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Необязательно"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password1"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Пароль</FormLabel>
                                    <FormControl>
                                        <PasswordInput
                                            placeholder="Обязательно"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password2"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Подтверждение пароля</FormLabel>
                                    <FormControl>
                                        <PasswordInput
                                            placeholder="Обязательно"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isPending}>
                            Создать аккаунт
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                <div>
                    Уже есть аккаунт?&nbsp;
                    <Link
                        href={PATH_KEYS.login()}
                        className="text-blue-500 hover:underline"
                    >
                        Вход
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
};
