import { motion } from "framer-motion"
import { logoutState } from "../../state/logoutMenu"
import { useSetRecoilState } from "recoil"
import { API } from "../../utils/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { authState } from "../../state/auth.recoil";

export function LogoutMenu(){

    const setlogout = useSetRecoilState(logoutState);
    const navigate = useNavigate();
    const setAuth = useSetRecoilState(authState);
    
    async function logoutFn(){
        try {
        await API.post('/userAuth/logout')

        const logoutLoader = toast.loading('Logging out...',{position:"bottom-right"})
        setTimeout(()=>{
            navigate('/')
            toast.dismiss(logoutLoader);
            toast.success('Logged Out!',{position:"bottom-right"})
            setlogout(false)
            setAuth({isLoggedIn:false, user:null,loading:false})

        },1000)
        
        } catch (error) {
            toast.error('Failed to log Out!',{position:"bottom-right"})
        }
        
    }

    return <motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    transition={{ease:"anticipate",duration:0.7}}
    exit={{opacity:0,scale:0}} 
    className="fixed z-20 h-full w-full top-0 bg-transparent backdrop-blur-xl flex justify-center items-center">
        <motion.div className=" h-52 w-72 border rounded-2xl border-white/20 bg-black/80 flex flex-col items-center justify-center shadow-2xl gap-4 
        text-white text-2xl font-bold">
            <motion.span
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{ease:"easeInOut",duration:0.4,delay:0.4}}
            exit={{opacity:0,y:20}}
             className="">Logging Out!</motion.span>

            <motion.span 
            initial={{opacity:0,y:[-20]}}
            animate={{opacity:1,y:0}}
            transition={{ease:"easeInOut",duration:0.4,delay:0.5}}
            exit={{opacity:0,y:20}}
            className="font-medium w-[70%] text-center">are you sure you want to log out?</motion.span>

            <motion.div 
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{ease:"easeInOut",duration:0.4,delay:0.6}}
            exit={{opacity:0,y:20}}
            className="flex flex-row gap-3">
                <motion.button
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={logoutFn}
                className="px-5 py-1 border border-gray-400/40 rounded-xl items-center justify-centerr">
                    yes
                </motion.button>
                <motion.button 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={()=>{setlogout(false)}}
                className="px-5 py-1 border border-gray-400/40  rounded-xl items-center justify-centerr">
                    no
                </motion.button>
            </motion.div>
        </motion.div>
    </motion.div>

}