import Link from 'next/link';

export default function Page() {
  return (
    <main className='p-8 space-y-4'>
      <h1 className='text-2xl font-bold'>Choose your dashboard</h1>
      <div className='flex gap-3'>
        <Link href='/homeowner/dashboard' className='border rounded px-4 py-2'>Homeowner</Link>
        <Link href='/tradie/dashboard' className='border rounded px-4 py-2'>Tradie</Link>
        <Link href='/admin' className='border rounded px-4 py-2'>Admin</Link>
      </div>
    </main>
  );
}
