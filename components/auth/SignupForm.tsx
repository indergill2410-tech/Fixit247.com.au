'use client';
import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { signupAction } from '@/lib/actions/auth.actions';

export default function SignupForm(){
 const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [suburb,setSuburb]=useState(''); const [roles,setRoles]=useState<string[]>([]); const [msg,setMsg]=useState('');
 const toggle=(r:string)=>setRoles(prev=>prev.includes(r)?prev.filter(x=>x!==r):[...prev,r]);
 return <div className='space-y-3 max-w-md'><Input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/><Input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/><Input placeholder='Suburb' value={suburb} onChange={e=>setSuburb(e.target.value)}/><div className='flex gap-2'><button className='px-3 py-2 border rounded' onClick={()=>toggle('homeowner')}>I need a tradie</button><button className='px-3 py-2 border rounded' onClick={()=>toggle('tradie')}>I&apos;m a tradie</button></div><Button onClick={async()=>{const res=await signupAction({email,password,suburb,roles,trades:['plumbing']}); setMsg(res.ok?'Signup complete. Check OTP email.':res.error||'Error')}}>Create account</Button><p>{msg}</p></div>
}
