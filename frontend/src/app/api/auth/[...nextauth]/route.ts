import { sessionConfig } from '@/entities/session';
import NextAuth from 'next-auth';

const handler = NextAuth(sessionConfig.NEXT_AUTH_OPTIONS);
export { handler as GET, handler as POST };
