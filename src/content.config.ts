import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const patterns = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/patterns' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'retrieval',
      'reasoning',
      'tool-use',
      'memory',
      'agents',
      'evaluation',
      'orchestration',
      'safety',
    ]),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    tags: z.array(z.string()),
    relatedPatterns: z.array(z.string()).optional(),
    lastUpdated: z.string().optional(),
  }),
});

export const collections = { patterns };
