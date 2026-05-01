'use client';
import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { loginAction, verifyOtpAction } from '@/lib/actions/auth.actions';

export default function LoginForm(){
 const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [otp,setOtp]=useState(''); const [step,setStep]=useState(1); const [msg,setMsg]=useState('');
 async function handleLogin(){ const res=await loginAction({email,password}); if(res.ok){setStep(2);setMsg('OTP sent to your email.')} else setMsg(res.error||'Failed'); }
 async function handleOtp(){ const res=await verifyOtpAction({email,otp}); setMsg(res.ok?'Verified. Refresh to continue.':res.error||'Invalid'); }
 return <div className='space-y-3 max-w-md'>{step===1?<><Input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/><Input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/><Button onClick={handleLogin}>Login & Send OTP</Button></>:<><Input placeholder='6-digit OTP' value={otp} onChange={e=>setOtp(e.target.value)}/><Button onClick={handleOtp}>Verify OTP</Button></>}<p className='text-sm text-brand-sand'>{msg}</p></div>
}
