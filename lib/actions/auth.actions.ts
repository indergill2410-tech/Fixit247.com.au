'use server';
import { hash } from 'bcryptjs';
import { signIn, signOut } from '@/lib/auth';
import { db } from '@/lib/db';
import { generateOtp, saveOtp, verifyOtp } from '@/lib/otp';
import { sendOtpEmail, sendHomeownerWelcome, sendTradieWelcome } from '@/lib/email';
import { loginSchema, otpSchema, signupSchema } from '@/lib/schemas/auth.schema';

export async function signupAction(input: unknown) {
  try {
    const data = signupSchema.parse(input);
    const user = await db.user.create({
      data: {
        email: data.email,
        hashedPassword: await hash(data.password, 12),
        homeownerProfile: data.roles.includes('homeowner') ? { create: { suburb: data.suburb } } : undefined,
        tradieProfile: data.roles.includes('tradie') ? { create: { suburb: data.suburb, businessName: data.businessName, trades: data.trades || [] } } : undefined
      }
    });
    const otp = generateOtp();
    await saveOtp(data.email, otp);
    await sendOtpEmail(data.email, otp);
    if (data.roles.includes('homeowner')) await sendHomeownerWelcome(data.email, 'Mate');
    if (data.roles.includes('tradie')) await sendTradieWelcome(data.email, 'Mate');
    return { ok: true, userId: user.id };
  } catch {
    return { ok: false, error: 'Could not complete signup.' };
  }
}

export async function loginAction(input: unknown) {
  try {
    const data = loginSchema.parse(input);
    await signIn('credentials', { email: data.email, password: data.password, redirect: false });
    const otp = generateOtp();
    await saveOtp(data.email, otp);
    await sendOtpEmail(data.email, otp);
    return { ok: true };
  } catch {
    return { ok: false, error: 'Login failed.' };
  }
}

export async function verifyOtpAction(input: unknown) {
  try {
    const data = otpSchema.parse(input);
    const valid = await verifyOtp(data.email, data.otp);
    return valid ? { ok: true } : { ok: false, error: 'Invalid OTP.' };
  } catch {
    return { ok: false, error: 'OTP verification failed.' };
  }
}

export async function logoutAction() { await signOut({ redirect: false }); return { ok: true }; }
