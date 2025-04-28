import {motion} from 'framer-motion'
import homeGirl from '../assets/imgs/homeGirl.png'
import { HoverButton } from '../components/ui/HoverButton'
import { NeonButton } from '../components/ui/NeonButton'

export function HomePage(){

    return <div className='w-screen h-screen flex justify-center mt-20 '>
        <motion.div className='w-[90%] h-[75%] flex flex-row 
        border rounded-4xl justify-between
        bg-gradient-to-br from-black via-[#1f0230] to-blue-950'>

            <motion.div className='flex flex-col justify-center items-center
             w-[70%] ml-16'>
                <motion.span
                className='text-9xl font-bold font-[MoonWalk] text-gray-200' 
                >Keep-It
                </motion.span>
                <motion.span
                className='text-3xl mb-12 font-bold text-gray-200/80 '>
                Because your brain wasn't built for bookmarks.
                </motion.span>
                
                <HoverButton val="Start Stashing"/>
            </motion.div>

            <motion.div className='flex justify-end items-end '>
                <motion.img
                initial={{filter: "drop-shadow(0px 0px 10px rgba(0, 255, 255, 0.3))",}}
                animate={{filter: "drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.4))",}} 
                transition={{repeat:Infinity,duration:1.2,repeatType:"reverse",ease:"easeInOut"}}
                className='h-[80%] ' src={homeGirl}/>
            </motion.div>
            
        </motion.div>
    </div>
}