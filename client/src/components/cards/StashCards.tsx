import { Glow } from '@codaworks/react-glow';
import {motion} from 'framer-motion';


export interface Icard {
    img:string;
    type:string;
    title: string;
    link?: string;
    description: string;
    tags?:string[];
}

export function StashCard({img,type,title,link,description,tags}:Icard){

    return <Glow >
            <motion.div
            // whileHover={{scale:1.02}}
            transition={{ease:"easeInOut"}}
            className='text-white border p-8 Glow:bg-color-[#1F51FF] border-white/20 rounded-md bg-white/10 overflow-hidden 
            cursor-pointer '>

            <motion.div className='flex flex-row items-center gap-2 font-semibold text-xl mb-2 Glow:'>
                <img className='h-[32px]' src={img}/>
                <motion.h1>{type}</motion.h1>
            </motion.div>

            <motion.div>
                <motion.h1 className='font-bold text-2xl '>{title}</motion.h1>

                <h1 className='mb-2 font-semibold text-gray-400 line-clamp-2 ' >
                    <a className='hover:text-blue-400/80' href={link} target="_blank">
                        {link}
                    </a>
                </h1>
                
                <span className='font-medium line-clamp-6'>{description}</span>
            </motion.div>

            <motion.div className='flex flex-row items-center gap-2 font-semibold mt-4'>
                {tags?.map((tag,index)=>(
                    <motion.div className='flex-wrap  '>
                        <motion.h1 key={index} className='border border-white/20 bg-amber-50/10 rounded-lg py-1 px-2 '>{tag}</motion.h1>
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
    </Glow> 
    
}
