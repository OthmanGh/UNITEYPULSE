import { z } from 'zod';

export const SignupSchema = z.object({
  name: z.string().min(2).max(50),
  username: z
    .string()
    .min(5)
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string(),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
