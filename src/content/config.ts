import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    locale: z.enum(['ja', 'en']),
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date()
  })
});

export const collections = { news };