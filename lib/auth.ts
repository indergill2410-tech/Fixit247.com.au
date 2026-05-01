import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { db } from '@/lib/db';

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: 'jwt' },
  providers: [Credentials({
    credentials: { email: {}, password: {} },
    async authorize(credentials) {
      const email = String(credentials.email || '');
      const password = String(credentials.password || '');
      const user = await db.user.findUnique({ where: { email }, include: { homeownerProfile: true, tradieProfile: true } });
      if (!user) return null;
      const ok = await compare(password, user.hashedPassword);
      if (!ok) return null;
      return { id: user.id, email: user.email, isAdmin: user.isAdmin, hasHomeownerProfile: !!user.homeownerProfile, hasTradieProfile: !!user.tradieProfile } as any;
    }
  })],
  callbacks: { jwt({ token, user }) { if (user) Object.assign(token, user); return token; }, session({ session, token }) { Object.assign(session.user, token); return session; } }
});
