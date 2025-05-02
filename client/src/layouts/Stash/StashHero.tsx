import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
// import { useRef } from 'react';

import logout from '../../assets/icons/logoutSwitch.png'

export function StashHero(){
    
    // const ref= useRef(null);
    // const {scrollY} = useScroll();

    // useMotionValueEvent(scrollY,"change",(scroll)=>{
    //     if(scroll<=100){

    //     } else {

    //     }
    // })
    // const inView = useInView(ref, {  margin: "-200px" })

    return <motion.div className='flex justify-center items-center pt-40'>
        
        <motion.div
        initial={{y:250,zIndex:20,scale:2,filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.0))"}}
        animate={{y:[250,0],zIndex:0,scale:[2.2,1],filter:["drop-shadow(0 0 2px rgba(255,255,255, 0))"]} }
        transition={{delay:0.6,duration:0.6,ease:"anticipate"}}
        className='absolute text-[65px] top-36 md:text-[100px] md:top-38 lg:text-[160px] lg:top-24 xl:text-[200px] xl:top-16 
        text-center font-bold font-[moonwalk]  bg-black bg-gradient-to-b from-gray-500/60 to-gray-800/1 text-transparent  bg-clip-text'> 
            <motion.span

            
            > <Link to='/'>KEEP IT</Link>
            </motion.span>
        </motion.div>

        <motion.div 
        initial={{x:100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{delay:1.2,duration:0.7,ease:"anticipate"}}
        className='absolute top-6 right-10'>
            <motion.button 
            whileHover={{scale:1.1}} 
            whileTap={{scale:0.9}}>
                <img className='h-14 md:h-24 brightness-50' src={logout} />
            </motion.button>

        </motion.div>

        
        <motion.div className='relative flex flex-col w-[70%] md:w-[60%] mt-10 md:m-20'>
            
            <motion.input
            initial={{scale:0,opacity:0}}
            animate={{scale:1,opacity:1}}
            transition={{delay:0.7,duration:0.4,ease:"anticipate"}}
            className='border relative bg-black border-white/20 border-b-blue-900
             text-4xl md:text-5xl lg:text-6xl text-white/20 text-center
             w-full h-28 md:h-40 lg:h-60 rounded-4xl  
             focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-md transition-all duration-300'
            placeholder='Whats on your mind!' 
            />
            
        </motion.div>
    
    </motion.div>
}