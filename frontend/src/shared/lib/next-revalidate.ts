'use server';

import { revalidatePath as revalidateAction } from 'next/cache';

export default async function revalidatePath(
    path: string,
    type?: 'page' | 'layout',
) {
    revalidateAction(path, type);
}
