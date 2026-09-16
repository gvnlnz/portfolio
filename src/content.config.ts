import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    locale: z.enum(['it', 'en']),
    key: z.string(),
    file: z.string(),
    folder: z.enum(['web', 'ai', 'systems', 'games', 'security']),
    tech: z.string(),
    year: z.string(),
    order: z.number(),
    stars: z.number().optional(),
    repo: z.string().url().optional(),
    title: z.string(),
    tags: z.array(z.string())
  })
});

export const collections = { projects };
