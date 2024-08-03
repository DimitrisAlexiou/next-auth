import * as z from 'zod';

export const LoginSchema = z.object({
	email: z.string().email({
		message: 'Email is required',
	}),
	password: z.string().min(1, {
		message: 'Password is required',
	}),
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
