import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const missions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/missions' }),
  schema: z.object({
    name: z.string(),
    /** Short form used in dense UI like the fleet scroller. */
    shortName: z.string().optional(),
    category: z.enum(['human', 'planetary', 'earth', 'navigation', 'science', 'communication']),
    status: z.enum(['operational', 'completed', 'in-development', 'upcoming']),
    launchDate: z.coerce.date().optional(),
    vehicle: z.string().optional(),
    destination: z.string(),
    summary: z.string(),
    accent: z.string().default('#5eb0ff'),
    stats: z
      // Coerced because YAML reads bare values like `7` as numbers, and stat
      // authors should not have to remember to quote them.
      .array(z.object({ label: z.string(), value: z.coerce.string() }))
      .max(4)
      .default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const vehicles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/vehicles' }),
  schema: z.object({
    name: z.string(),
    fullName: z.string(),
    heightM: z.number(),
    liftoffMassT: z.number(),
    stages: z.number(),
    payloadLeoKg: z.number(),
    payloadGtoKg: z.number().optional(),
    firstFlight: z.string(),
    status: z.enum(['operational', 'retired', 'in-development']),
    summary: z.string(),
    order: z.number().default(99),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['press', 'launch', 'science', 'outreach']),
    summary: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { missions, vehicles, news };
