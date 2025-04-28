import {motion} from 'framer-motion'
import homeGirl from '../assets/imgs/homeGirl.png'
import tweetSvg from '../assets/svgs/tweet.svg'
import { HoverButton } from '../components/ui/HoverButton'
import { Link } from 'react-router-dom'

export function HomePage(){

    return <div className='bg-gradient-to-bl from-black via-[#1f0230] to-blue-950'>
        <div className='w-screen h-screen flex justify-center pt-20 '>
            <motion.div className='w-[90%] h-[85%] flex flex-row 
            rounded-4xl justify-between overflow-hidden 
            bg-gradient-to-br from-black via-[#1f0230] to-blue-950
            drop-shadow-2xl'>

                <motion.div className='flex flex-col justify-center items-center
                w-[70%] ml-16 mt-1'>
                    <motion.span
                    initial={{y:[-60],opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.3,delay:0.4}}
                    className='text-9xl font-bold font-[MoonWalk] text-gray-200' 
                    >Keep-It
                    </motion.span>

                    <motion.span
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0.6}}
                    className='text-3xl mb-12 font-bold text-gray-200/80 '>
                    Because your brain wasn't built for bookmarks.
                    </motion.span>
                    <motion.div
                    initial={{opacity:0,scale:0,y:30}}
                    animate={{opacity:1,scale:1,y:0}}
                    exit={{opacity:0,scale:0,y:30}}
                    transition={{duration:0.3,delay:0.6}}
                    >
                    <Link to={'/signup'}><HoverButton val="Start Stashing"/></Link>
                    </motion.div>
                    
                    
                </motion.div>

                <motion.div 
                initial={{x:60,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.3,delay:0.4}}
                className='flex justify-end items-end '>
                    <motion.img
                    initial={{filter: "drop-shadow(0px 0px 10px rgba(0, 255, 255, 0.3))",y:[10]}}
                    animate={{filter: "drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.4))",y:0}} 
                    transition={{repeat:Infinity,duration:1.2,repeatType:"reverse",ease:"easeInOut"}}
                    className='h-[80%] ' src={homeGirl}/>
                </motion.div>
                
            </motion.div>
        </div>

        <motion.div>
            <motion.h1 className='text-gray-200 text-4xl font-bold text-center'>Save anything. Find it instantly.</motion.h1>
            <motion.div className='flex justify-center items-center'>
                <motion.div className='grid grid-flow-row  grid-cols-4 gap-12 w-[90%] mt-10'>
                    <motion.div className=' border '>
                        <motion.img src={tweetSvg} />

                    </motion.div>
                    
                </motion.div>
            </motion.div>
            
        </motion.div>


    </div>
}