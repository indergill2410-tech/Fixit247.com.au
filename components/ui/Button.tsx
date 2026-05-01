import { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'ghost' | 'outline';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: Variant; loading?: boolean; }

export default function Button({ variant='primary', loading, className='', children, ...props }: ButtonProps) {
  const base = 'rounded-full px-6 py-3 font-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent disabled:opacity-50 disabled:cursor-not-allowed';
  const styles = variant === 'primary' ? 'bg-brand-accent text-brand-dark hover:scale-[1.01] active:scale-95' : variant === 'outline' ? 'border border-white/40 text-white hover:bg-white/10' : 'text-white hover:text-brand-accent';
  return <button className={`${base} ${styles} ${className}`} {...props}>{loading ? 'Loading...' : children}</button>;
}
