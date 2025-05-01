import {motion} from 'framer-motion';
import authGirl from '../assets/imgs/authGirl.png'
import { Link,useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { API } from '../utils/axios';
import { useRecoilState } from 'recoil';
import { authState } from '../state/auth.recoil';
import { checkAuth } from '../utils/checkAuth';

export function Login(){
    
    const [showPass,setShowPass] = useState(false)

    const navigate = useNavigate();

    const [auth,setAuth] = useRecoilState(authState);

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    useEffect(()=>{
        setTimeout(()=>{
            if(auth.isLoggedIn){
                setTimeout(()=>{
                    navigate('/stash')
                },2100);
                toast.loading("Redirecting...",{duration:2000,position:"bottom-right"})
            }
        },800)
        
    })

    async function handleSubmit(e){

        e.preventDefault()

        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        try {
            const userLogin = await API.post(`/userAuth/login`,{username,password});
            toast.success(userLogin.data.msg,{position:"bottom-right"})
            const userData = await checkAuth();
            setAuth({...userData,loading:false})
            setTimeout(()=>{
                navigate('/stash');
            },1500)
            
        } catch (error: any) {
            const status = error.response?.status;
            const data = error.response?.data;
        
            if (status === 400) {
              toast.error(data.error || 'Bad request', { position: "bottom-right" });
            } else if (status === 401) {
              toast.error(data || 'Unauthorized', { position: "bottom-right" });
            } else if (status === 404) {
              toast.error(data || 'Not found', { position: "bottom-right" });
            } else if (status === 500) {
              toast.error(data?.msg || 'Server error', { position: "bottom-right" });
            } else {
              toast.error('Something went wrong', { position: "bottom-right" });
            }
          }
    }

    function showPassFn(){
        setShowPass(v=>!v)
    }

    return <div className='h-[100vh] flex justify-center items-center bg-gradient-to-br  from-[#4e1369] via-[#1e032bf1] to-[#010102]'>
        
        <motion.div 
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:[0,1.2,1]}} 
        exit={{opacity:0,scale:[1,1.2,0]}}
        transition={{duration:0.4}}
        className='flex flex-row items-center gap-10 p-10 rounded-4xl 
        min-w-[320px] md:w-[] lg:w-[1020px] xl:w-[1020px] 
        h-[640px]  xl:h-[640px] 
        border drop-shadow-[0_0_12px_#1e032b]
        bg-gradient-to-br  to-[#4e1369] via-[#1e032b] from-[#000000]  '
        >
            <motion.div
            initial={{opacity:0,x:[40]}}
            animate={{opacity:1,x:0}} 
            transition={{delay:0.4,duration:0.4}}
            className='h-[500px] w-[500px]'
            >
                <motion.img 
                initial={{x:0,y:0 }}
                animate={{y:[-12,12,-12]}}
                transition={{repeat:Infinity,
                    ease:"easeInOut",
                    duration:2
                    }}
                className='h-[500px] drop-shadow-[0_0_40px_#7202a7] brightness-150 transform scale-x-[-1]' 
                src={authGirl} />
            </motion.div>


            <motion.div 
            initial={{opacity:0,x:[-20]}}
            animate={{opacity:1,x:0}} 
            transition={{delay:0.4,duration:0.4}}
            className='w-[400px] h-[460px] border-amber-100  rounded-4xl 
             bg-[#99a1af25] 
            p-8 flex flex-col gap-4
            font-bold text-gray-200 text-center text-4xl font-[MoonWalk]'
            >
                <motion.div
                initial={{opacity:0,y:[-40]}}
                animate={{opacity:1,y:0}} 
                transition={{delay:0.6,duration:0.4}} 
                className='mb-6 mt-3'>
                    <Link className='cursor-pointer hover:text-gray-400 duration-200' to={'/'}>Keep It</Link>
                    <br/>
                    <span className='text-xl '>Your Second Brain !</span>
                </motion.div>
                
                <motion.form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <motion.input
                    initial={{opacity:0,y:20}}
                    animate={{opacity:1,y:0}} 
                    transition={{delay:0.6,duration:0.4}} 
                    type='text' required
                    ref={usernameRef}
                    placeholder='username'
                    className='w-[100%] h-12 border pl-5 rounded-xl border-gray-700 bg-black/30 mask-b-from-5 text-lg font-[roboto]' />

                    <motion.input
                    initial={{opacity:0,y:20}}
                    animate={{opacity:1,y:0}} 
                    transition={{delay:0.7,duration:0.4}}
                    type={(showPass ? "text" : "password" )} required
                    ref={passwordRef}
                    placeholder='••••••••'
                    className='w-[100%] h-12 border pl-5 rounded-xl border-gray-700 bg-black/30 mask-b-from-5 text-lg font-[roboto]' />

                    <motion.div
                    initial={{opacity:0,y:20}}
                    animate={{opacity:1,y:0}} 
                    transition={{delay:0.8,duration:0.4}}
                    >
                    <motion.button
                    whileHover={{scale:1.04}}
                    whileTap={{scale:0.94}}
                    type='submit'
                    className=' w-[100%] p-3 border rounded-xl border-gray-700 bg-black/30 hover:mask-b-from-5 text-xl mb-3'>
                        Login
                    </motion.button>
                    </motion.div>
                </motion.form>

                
                
                {/* hover:scale-[1.04] active:scale-[0.94] ease-in-out duration-200  */}


                <motion.div
                initial={{opacity:0,y:[-40]}}
                animate={{opacity:1,y:0}} 
                transition={{delay:0.6,duration:0.4}} 
                className='border-t border-white/15'>
                    <span className='text-sm text-gray-500 font-mono'>Don't have an account? - <Link to={'/signup'} className='font-bold text-blue-700 hover:text-blue-500 duration-200 cursor-pointer' >Sign Up!</Link> </span>
                </motion.div>

            </motion.div>

            
            
            
        </motion.div>
    </div>
}