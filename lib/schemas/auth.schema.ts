import { z } from 'zod';

export const signupSchema = z.object({
  email: z.string().email('Enter a valid email address'),
  password: z.string().min(8).regex(/[A-Z]/, 'Must contain an uppercase letter').regex(/[0-9]/, 'Must contain a number'),
  roles: z.array(z.enum(['homeowner', 'tradie'])).min(1),
  suburb: z.string().optional(),
  businessName: z.string().optional(),
  trades: z.array(z.string()).optional()
});

export const loginSchema = z.object({ email: z.string().email(), password: z.string().min(8) });
export const otpSchema = z.object({ email: z.string().email(), otp: z.string().length(6) });
