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

    return <motion.div
        initial={{}}
        animate={{}}
        whileHover={{scale:1.1}}
        className='text-white border p-8 rounded-4xl border-white/20 bg-gray-400/10 '>

            <motion.div className='flex flex-row items-center gap-2 font-semibold text-xl mb-2'>
                <img className='h-[32px]' src={img}/>
                <motion.h1>{type}</motion.h1>
            </motion.div>

            <motion.div>
                <motion.h1 className='font-bold text-2xl '>{title}</motion.h1>
                <h1 className='mb-2 font-semibold text-gray-400 ' >{link}</h1>
                <span className='font-medium line-clamp-2'>{description}</span>
            </motion.div>

            <motion.div className='flex flex-row items-center gap-2 font-semibold mt-4'>
                {tags?.map((tag,index)=>(
                    <motion.h1 key={index} className='border border-white/20 bg-amber-50/10 rounded-lg py-1 px-2'>{tag}</motion.h1>
                ))}
            </motion.div>

        </motion.div>
}
