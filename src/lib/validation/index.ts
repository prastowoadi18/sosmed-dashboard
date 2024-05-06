import { z } from 'zod';

const requiredString = z.string().min(1, 'Required');

export const formPostSchema = z.object({
  id: z.number().optional(),
  title: requiredString,
  body: requiredString,
  userId: z.number(),
});

export type FormPostValues = z.infer<typeof formPostSchema>;
