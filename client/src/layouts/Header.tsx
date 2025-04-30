import {motion, spring} from 'framer-motion';
import Logo from '../assets/imgs/keepItLogo.png'
import { useRecoilValue } from 'recoil';
import { authState } from '../state/auth.recoil';
import { Link } from 'react-router-dom';

export function Header(){

    const authStatus = useRecoilValue(authState);

    return <div className='flex justify-center item relative'>
        <motion.div className='fixed flex flex-row  items-center justify-between w-[90%] h-20 z-10
        backdrop-blur-2xl border border-gray-400/4 shadow-xl rounded-2xl
        bg-gradient-to-br from-black/10 to-[#020131]/20 '>

            <motion.div className='flex items-center gap-4 ml-6'>
                <motion.img className='h-16' src={Logo} />
                <motion.span className='text-[#f3ebfd] text-4xl font-extrabold font-[moonwalk]'>Keep-It</motion.span>
            </motion.div>

            <motion.div>
                {(authStatus.isLoggedIn? <LoggedIn/> : <NotLoggedIn/> )}
            </motion.div>

        </motion.div>
    </div>
    
}

function LoggedIn(){
    return <motion.div>
        <motion.button className='py-2 px-4 text-white font-bold font-[moonwalk] border rounded-2xl'>Stash</motion.button>
    </motion.div>
}

function NotLoggedIn(){
    return <motion.div className='flex gap-2 items-center'>
        <Link to='/login' >
        <motion.button
        whileHover={{scale:1.08}}
        whileTap={{scale:0.93}}
        transition={{ease:"anticipate",type:spring,duration:0.2}}
         className='py-2 px-4 text-white font-bold font-[moonwalk] border rounded-2xl '>
            Login
        </motion.button>
        </Link>
        <motion.button className='py-2 px-4 text-white font-bold font-[moonwalk] border rounded-2xl '>
            SignUp
        </motion.button>
    </motion.div>
}

