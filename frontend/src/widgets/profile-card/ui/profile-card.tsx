'use client';

import { userContracts, userTypes } from '@/entities/user';
import revalidatePath from '@/shared/lib/next-revalidate';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

export const ProfileCard = ({
    userProfile,
}: {
    userProfile: userTypes.UserProfileResponse;
}) => {
    const { update, status } = useSession();

    const defaultValues = useMemo(() => {
        return {
            email: userProfile.email,
            first_name: userProfile.first_name,
            last_name: userProfile.last_name ?? '',
            second_name: userProfile.second_name ?? '',
            profile: {
                location: userProfile.profile?.location ?? '',
            },
        };
    }, [userProfile]);

    const form = useForm<userTypes.UserProfileUpdateDto & { email: string }>({
        resolver: zodResolver(userContracts.UserProfileUpdateDtoScheme),
        defaultValues,
    });

    useEffect(() => {
        form.reset(defaultValues);
    }, [defaultValues, form]);

    const onSubmit = (values: userTypes.UserProfileUpdateDto) => {
        update(values).finally(() => {
            revalidatePath('/profile');
        });
    };

    return (
        <Card className="w-full sm:w-2/3">
            <CardHeader className="grid gap-2">
                <CardTitle>Данные профиля</CardTitle>
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
                                            disabled
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
                                            {...field}
                                            placeholder="Необязательно"
                                            value={field.value ?? undefined}
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
                                            value={field.value ?? undefined}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="profile.location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Адрес</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Необязательно"
                                            {...field}
                                            value={field.value ?? undefined}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            disabled={
                                !form.formState.isDirty || status === 'loading'
                            }
                        >
                            Обновить данные
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};
