import {z} from 'zod';

export const requiredBody = z.object({
    email:z.string().email(),
    username:z.string().min(3),
    password:z.string().min(6),
})


export type SignupBody = z.infer<typeof requiredBody>;