import { z } from 'zod';

const requiredString = z.string().min(1, 'Required');

export const formPostSchema = z.object({
  id: z.number().optional(),
  title: requiredString,
  body: requiredString,
  userId: z.number(),
});

export type FormPostValues = z.infer<typeof formPostSchema>;

export const formCommentSchema = z.object({
  postId: z.number(),
  id: z.number().optional(),
  name: requiredString,
  email: requiredString,
  body: requiredString,
});

export type FormCommentValues = z.infer<typeof formCommentSchema>;
