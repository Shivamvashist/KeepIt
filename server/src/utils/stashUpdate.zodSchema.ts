import {z} from 'zod';

export const requiredStashEdit = z.object({
    title:z.string().optional(),
    link:z.string().optional(),
    content:z.string().optional(),
    type:z.enum(['Link','Note','Tweet','Video','Doc','Shorts']).optional(),
    tag:z.array(z.string()).optional(),
});

export type stashEditBody = z.infer<typeof requiredStashEdit>;