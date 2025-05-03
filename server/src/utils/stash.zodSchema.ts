import {z} from 'zod';

export const requiredStash = z.object({
    title:z.string(),
    link:z.string().optional(),
    content:z.string(),
    type:z.enum(['Link','Note','Tweet','Video','Doc','Shorts']),
    tag:z.array(z.string()).optional(),
});

export type stashBody = z.infer<typeof requiredStash>;