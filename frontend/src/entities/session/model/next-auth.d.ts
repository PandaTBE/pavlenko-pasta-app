import { DefaultSession } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';
import { userTypes } from '../../user/@x/session';

declare module 'next-auth' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface User extends userTypes.UserLoginResponse {}

    interface Session extends DefaultSession {
        user: userTypes.User;
        token: {
            access: string;
            refresh: string;
        };
    }
}

declare module 'next-auth/jwt' {
    interface JWT extends DefaultJWT {
        user: userTypes.User;
        token: {
            access: string;
            refresh: string;
        };
    }
}
