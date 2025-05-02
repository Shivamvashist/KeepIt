import {motion} from 'framer-motion';
// import { StashHeader } from '../layouts/Stash/StashHeader';


export function Stash(){
    
    return <motion.div className=' w-full h-full bg-black bg-gradient-to-br '>

            <motion.div className='w-[100vw] h-[100vh]'>
                <motion.div className='flex justify-center items-center pt-40 '>
                    <motion.span
                    initial={{y:250,zIndex:20,scale:2}}
                    animate={{y:[250,-50,0],zIndex:0,scale:1}}
                    transition={{delay:0.4,duration:0.6,ease:"easeInOut"}}
                    className='absolute text-gray-600/40 text-[200px] text-center font-bold font-[moonwalk] top-16 bg-black'>
                        KEEP IT
                     </motion.span>

                    
                    <motion.div className='relative flex flex-col w-[60%] pt-20 '>
                        
                        <motion.input
                        initial={{scale:0,opacity:0}}
                        animate={{scale:1,opacity:1}}
                        transition={{delay:0.5,duration:0.6,ease:"easeInOut"}}
                        className='border relative bg-black border-white/20 w-full  h-60 rounded-4xl  focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300'/>
                        

                    </motion.div>
                </motion.div>
                

            </motion.div>

    </motion.div>
}
