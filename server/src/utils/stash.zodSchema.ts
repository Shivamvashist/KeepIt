import {z} from 'zod';

export const requiredStash = z.object({
    title:z.string(),
    link:z.string().url(),
    content:z.string(),
    type:z.enum(['Link','Note','Tweet','Video','Doc','Shorts']),
    tag:z.array(z.string()),
});

export type stashBody = z.infer<typeof requiredStash>;