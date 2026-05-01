import crypto from 'crypto';
import { db } from './db';

export function generateOtp(): string { return crypto.randomInt(100000, 999999).toString(); }
export function hashOtp(otp: string): string { return crypto.createHmac('sha256', process.env.NEW_SECRET || 'fallback').update(otp).digest('hex'); }
export async function saveOtp(email: string, otp: string) {
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
  await db.otpToken.upsert({ where: { email }, update: { hashedOtp: hashOtp(otp), expiresAt }, create: { email, hashedOtp: hashOtp(otp), expiresAt } });
}
export async function verifyOtp(email: string, otp: string): Promise<boolean> {
  const record = await db.otpToken.findUnique({ where: { email } });
  if (!record || record.expiresAt < new Date()) return false;
  const valid = record.hashedOtp === hashOtp(otp);
  if (valid) await db.otpToken.delete({ where: { email } });
  return valid;
}
