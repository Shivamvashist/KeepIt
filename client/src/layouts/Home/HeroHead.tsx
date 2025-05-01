import {motion} from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import loginHome from '../../assets/icons/loginHome.png'
import logoutHome from '../../assets/icons/logoutHome.png'
import signupHome from '../../assets/icons/signupHome.png'
import stashHome from '../../assets/icons/stashHome.png'
import { useRecoilValue } from 'recoil'
import { authState } from '../../state/auth.recoil'
import toast from 'react-hot-toast'
import { API } from '../../utils/axios'

export function HeroHead(){

    const authStatus = useRecoilValue(authState)

    return (authStatus.isLoggedIn? <LoggedIn/> : <NotLoggedIn/> )
}

function LoggedIn(){

    const navigate = useNavigate();

    async function logoutFn(){
        try {
        await API.post('/logout')

        const logoutLoader = toast.loading('Logging out...',{position:"bottom-right"})
        setTimeout(()=>{
            navigate('/')
            toast.dismiss(logoutLoader);
            toast.success('Logged Out!',{position:"bottom-right"})

        },1000)
        } catch (error) {
            toast.error('Failed to log Out!',{position:"bottom-right"})
        }
        
    }

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
            onClick={logoutFn}
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

        <Link to={"/login"}>
            <motion.button
            whileHover={{scale:1.1,border:"none"}} 
            whileTap={{scale:0.9}}
            className=' rounded-2xl bg-black/20 border border-zinc-600/20'>
                <motion.img className='h-16 drop-shadow-[0_0_4px_#ffffff]' src={signupHome}/>
            </motion.button>
        </Link>

    </motion.div>
}