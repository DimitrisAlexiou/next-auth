import * as z from 'zod';

export const LoginSchema = z.object({
	email: z.string().email({
		message: 'Email is required',
	}),
	password: z.string().min(1, {
		message: 'Password is required',
	}),
	code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
	email: z.string().email({
		message: 'Email is required',
	}),
	password: z.string().min(10, {
		message: 'Minimum 10 characters required',
	}),
	// confirmPassword: z.string().min(10, {
	// 	message: 'Passwords should match',
	// }),
	name: z.string().min(1, {
		message: 'Name is required',
	}),
});

export const ResetSchema = z.object({
	email: z.string().email({
		message: 'Email is required',
	}),
});

export const NewPasswordSchema = z.object({
	password: z.string().min(10, {
		message: 'Minimum of 10 characters required',
	}),
});
