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

        <motion.div className='flex flex-row w-[90%] h-screen mx-auto  items-center justify-center'>
            <motion.div className='w-[50%] flex flex-col gap-10 p-10'>
                <motion.h1 className='text-gray-200 text-6xl w-[60%] font-bold mx-auto text-left '>Save anything.<br/> Find it instantly.</motion.h1>
                <motion.h1 className='text-gray-200 text-2xl w-[60%] text-left mx-auto  '>KeepIt helps you organize links, tweets, notes, docs, and videos in one place. Save anything from the web and access it from anywhere.</motion.h1>
            </motion.div>

            <motion.div className='w-[50%] '>
                <motion.div className='grid grid-flow-col grid-col-2 grid-rows-2 gap-16 '>

                    <motion.div
                    initial={{y:0}}
                    animate={{y:[4,-4,4]}} 
                    transition={{repeat:Infinity,duration:1.6,ease:"easeInOut"}}
                    className='text-white border p-8 rounded-4xl border-white/20 bg-gray-400/10'>

                        <motion.div className='flex flex-row items-center gap-2 font-semibold text-xl mb-2'>
                            <img className='h-[32px]' src={tweetSvg}/>
                            <motion.h1>Tweet</motion.h1>
                        </motion.div>

                        <motion.div>
                            <motion.h1 className='font-bold text-2xl mb-1'>This is the Title of the Tweet!</motion.h1>
                            <span>This is the description part of the tweet that is stored</span>
                        </motion.div>

                    </motion.div>

                    <motion.div
                    initial={{y:0}}
                    animate={{y:[4,-4,4]}} 
                    transition={{repeat:Infinity,duration:1.4,ease:"easeInOut"}}
                    className='text-white border p-8 rounded-4xl border-white/20 bg-gray-400/10'>

                        <motion.div className='flex flex-row items-center gap-2 font-semibold text-xl mb-2'>
                            <img className='h-[32px]' src={tweetSvg}/>
                            <motion.h1>Tweet</motion.h1>
                        </motion.div>

                        <motion.div>
                            <motion.h1 className='font-bold text-2xl mb-1'>This is the Title of the Tweet!</motion.h1>
                            <span>This is the description part of the tweet that is stored</span>
                        </motion.div>

                    </motion.div>

                    <motion.div
                    initial={{y:0}}
                    animate={{y:[4,-4,4]}} 
                    transition={{repeat:Infinity,duration:1.4,ease:"easeInOut"}}
                    className='text-white border p-8 rounded-4xl border-white/20 bg-gray-400/10'>

                        <motion.div className='flex flex-row items-center gap-2 font-semibold text-xl mb-2'>
                            <img className='h-[32px]' src={tweetSvg}/>
                            <motion.h1>Tweet</motion.h1>
                        </motion.div>

                        <motion.div>
                            <motion.h1 className='font-bold text-2xl mb-1'>This is the Title of the Tweet!</motion.h1>
                            <span>This is the description part of the tweet that is stored</span>
                        </motion.div>

                    </motion.div>

                    <motion.div
                    initial={{y:0}}
                    animate={{y:[4,-4,4]}} 
                    transition={{repeat:Infinity,duration:1.6,ease:"easeInOut"}}
                    className='text-white border p-8 rounded-4xl border-white/20 bg-gray-400/10'>

                        <motion.div className='flex flex-row items-center gap-2 font-semibold text-xl mb-2'>
                            <img className='h-[32px]' src={tweetSvg}/>
                            <motion.h1>Tweet</motion.h1>
                        </motion.div>

                        <motion.div>
                            <motion.h1 className='font-bold text-2xl mb-1'>This is the Title of the Tweet!</motion.h1>
                            <span>This is the description part of the tweet that is stored</span>
                        </motion.div>

                    </motion.div>

                </motion.div>
            </motion.div>
            

            
        </motion.div>


    </div>
}