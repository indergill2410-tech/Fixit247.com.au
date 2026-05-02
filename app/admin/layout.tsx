export const dynamic = 'force-dynamic';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user?.email) redirect('/login');
  const user = await db.user.findUnique({ where: { email: session.user.email } });
  if (!user?.isAdmin) redirect('/role-select');
  return <div className='p-8'>{children}</div>;
}
