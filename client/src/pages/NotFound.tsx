import { motion } from "framer-motion";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export function NotFound(){

    const navigate = useNavigate();

    useEffect(()=>{
        toast.loading("REDIRECTING...",{duration:3000,position:"top-center"})
        setTimeout(()=>{
            navigate('/')
        },2500)
    })

    

    return <motion.div className="relative w-[100vw] h-[100vh] flex justify-center bg-radial from-blue-950 via-black to-blue-950">
        <motion.div
        initial={{y:250,zIndex:20,scale:2,filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.0))"}}
        animate={{y:[250,0],zIndex:0,scale:[2.2,1],filter:["drop-shadow(0 0 2px rgba(255,255,255, 0))"]} }
        transition={{delay:0.6,duration:0.6,ease:"anticipate"}}
        className='absolute text-[65px] top-36 md:text-[100px] md:top-38 lg:text-[160px] lg:top-24 xl:text-[200px] xl:top-16 
        text-center font-bold font-[moonwalk]  bg-black bg-gradient-to-b from-gray-500/60 to-gray-800/10 text-transparent  bg-clip-text'> 
            <motion.span

            
            > <Link to='/'>KEEP IT</Link>
            </motion.span>
        </motion.div>
    </motion.div>
}