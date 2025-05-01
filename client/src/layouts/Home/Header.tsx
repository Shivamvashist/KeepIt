import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
// import Logo from '../../assets/imgs/keepItLogo.png'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState } from '../../state/auth.recoil';
import { Link } from 'react-router-dom';
import { logoutState } from '../../state/logoutMenu';

export function Header(){

    const authStatus = useRecoilValue(authState);

    const {scrollY } = useScroll();
    const [showHeader, setshowHeader] = useState(false);

    useMotionValueEvent(scrollY,"change",(latest)=>{
        if(latest>600){
            setshowHeader(true);
        } else {
            setshowHeader(false);
        }
    })


    return <div className='flex justify-center item relative'>
        <motion.div 
        initial={{ opacity: 0, width:0 }}
        animate={showHeader ? { opacity: 1, width:"90%" } : {opacity: 0, width:"200%"}}
        transition={{ease:"backInOut",duration:0.8}}
        className='fixed flex flex-row  items-center justify-between w-[90%] h-20 z-10
        backdrop-blur-2xl border border-gray-400/4 shadow-xl rounded-2xl
        bg-gradient-to-br from-black/10 to-[#020131]/20 '>

            <motion.div className='flex items-center gap-4 ml-6'>
                {/* <motion.img className='h-16' src={Logo} /> */}
                <motion.span className='text-[#f3ebfd] text-4xl font-extrabold font-[moonwalk]'>Keep-It</motion.span>
            </motion.div>

            <motion.div>
                {(authStatus.isLoggedIn? <LoggedIn/> : <NotLoggedIn/> )}
            </motion.div>

        </motion.div>
    </div>
    
}

function LoggedIn(){

    const setLogout = useSetRecoilState(logoutState);

    return <motion.div className='flex gap-2 items-center'>
        <Link to='/stash' >
        <motion.button
        whileHover={{scale:1.08}}
        whileTap={{scale:0.93}}
        transition={{ease:"anticipate",duration:0.2}}
         className='py-2 px-4 text-gray-400 font-bold font-[moonwalk] border rounded-xl '>
            Stash
        </motion.button>
        </Link>
        <Link to='' >
        <motion.button
        whileHover={{scale:1.08}}
        whileTap={{scale:0.93}}
        onClick={()=>{setLogout(true)}}
        transition={{ease:"anticipate",duration:0.2}}
         className='py-2 px-4 font-bold font-[moonwalk] rounded-xl bg-gray-400'>
            Logout
        </motion.button>
        </Link>
    </motion.div>
}

function NotLoggedIn(){
    return <motion.div className='flex gap-2 items-center'>
        <Link to='/login' >
        <motion.button
        whileHover={{scale:1.08}}
        whileTap={{scale:0.93}}
        transition={{ease:"anticipate",duration:0.2}}
         className='py-2 px-4 text-gray-400 font-bold font-[moonwalk] border rounded-xl '>
            Login
        </motion.button>
        </Link>
        <Link to='/signup' >
        <motion.button
        whileHover={{scale:1.08}}
        whileTap={{scale:0.93}}
        transition={{ease:"anticipate",duration:0.2}}
         className='py-2 px-4 font-bold font-[moonwalk] rounded-xl bg-gray-400'>
            Signup
        </motion.button>
        </Link>
    </motion.div>
}