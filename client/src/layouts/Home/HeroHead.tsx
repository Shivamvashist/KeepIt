import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import loginHome from '../../assets/icons/loginHome.png'
import logoutHome from '../../assets/icons/logoutHome.png'
import signupHome from '../../assets/icons/signupHome.png'
import stashHome from '../../assets/icons/stashHome.png'
import { useRecoilValue,useSetRecoilState } from 'recoil'
import { logoutState } from '../../state/logoutMenu'
import { authState } from '../../state/auth.recoil'

export function HeroHead(){

    const authStatus = useRecoilValue(authState);
    
    return (authStatus.isLoggedIn? <LoggedIn/> : <NotLoggedIn/> )
}

function LoggedIn(){

    const setLogout = useSetRecoilState(logoutState);

    return <motion.div className="absolute h-20 w-36 right-8 top-4 flex justify-between">

        <Link to={"/stash"}>
            <motion.button
            whileHover={{scale:1.1,border:"none"}} 
            whileTap={{scale:0.9}}
            className=' rounded-2xl bg-black/20 border border-zinc-600/20'>
                <motion.img className='h-16 drop-shadow-[0_0_4px_#ffffff]' src={stashHome}/>
            </motion.button>
        </Link>

        <Link to={""}>
            <motion.button
            whileHover={{scale:1.1,border:"none"}} 
            whileTap={{scale:0.9}}
            onClick={()=>{setLogout(true)}}
            className=' rounded-2xl bg-black/20 border border-zinc-600/20'>
                <motion.img className='h-16 drop-shadow-[0_0_4px_#ffffff]' src={logoutHome}/>
            </motion.button>
        </Link>

    </motion.div>
}

function NotLoggedIn(){

    return <motion.div className="absolute h-20 w-36 right-8 top-4 flex justify-between">

        <Link to={"/login"}>
            <motion.button
            whileHover={{scale:1.1,border:"none"}} 
            whileTap={{scale:0.9}}
            className=' rounded-2xl bg-black/20 border border-zinc-600/20'>
                <motion.img className='h-16 drop-shadow-[0_0_4px_#ffffff]' src={loginHome}/>
            </motion.button>
        </Link>

        <Link to={"/signup"}>
            <motion.button
            whileHover={{scale:1.1,border:"none"}} 
            whileTap={{scale:0.9}}
            className=' rounded-2xl bg-black/20 border border-zinc-600/20'>
                <motion.img className='h-16 drop-shadow-[0_0_4px_#ffffff]' src={signupHome}/>
            </motion.button>
        </Link>

    </motion.div>
}