import { InputHTMLAttributes } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> { error?: string; }
export default function Input({ error, className='', ...props }: InputProps){return <div><input className={`w-full rounded-xl border px-4 py-3 bg-white text-brand-dark transition-all duration-150 focus:ring-2 focus:ring-brand-accent/50 ${error?'border-red-500':'border-gray-300'} ${className}`} {...props}/>{error && <p className='text-red-400 text-xs mt-1'>{error}</p>}</div>}
