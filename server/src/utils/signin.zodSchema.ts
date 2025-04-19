import {z} from 'zod';

export const requiredData = z.object({
    username:z.string().min(3),
    password:z.string().min(6),
})

export type SigninBody = z.infer<typeof requiredData>;

