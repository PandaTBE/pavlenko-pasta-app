import { sessionConfig } from '@/entities/session';
import { Login } from '@/pages/login';
import { PATH_KEYS } from '@/shared/config/path-keys';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Page = async () => {
    const session = await getServerSession(sessionConfig.NEXT_AUTH_OPTIONS);

    if (session) {
        redirect(PATH_KEYS.home());
    }

    return <Login />;
};

export default Page;
