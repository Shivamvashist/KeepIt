import {AnimatePresence, motion} from 'framer-motion';
// import { StashHeader } from '../layouts/Stash/StashHeader';
import { StashHero } from '../layouts/Stash/StashHero';
import { StashItems } from '../layouts/Stash/StashItems';
import { LogoutMenu } from '../components/modals/LogoutMenu';
import { useRecoilValue } from 'recoil';
import { logoutState } from '../state/logoutMenu';
import { authState } from '../state/auth.recoil';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


export function Stash(){
    
    const logoutMenuStatus = useRecoilValue(logoutState);
    const isLoggedIn = useRecoilValue(authState);
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn.isLoggedIn) {
          const id = toast.loading("Invalid Session. Redirecting...", {
            duration: 2000,
            position: "bottom-right",
          });
      
          const redirect = setTimeout(() => {
            toast.dismiss(id);
            navigate("/");
          }, 2000);
      
          return () => clearTimeout(redirect);
        }
      }, [isLoggedIn, navigate]);

    return <div className='bg-black'>
        <motion.div 
        initial={{}}
        animate={{}}
        transition={{}}
        className=' w-full h-full  bg-radial from-black via-black to-blue-950/70'>
            
            <motion.div className='min-h-[100vh] min-w-[100vw]'>
                    
                <StashHero/>
                
                <StashItems/>

                <AnimatePresence mode='wait'>
                    {logoutMenuStatus ? <LogoutMenu/> : null}
                </AnimatePresence>

            </motion.div>

        </motion.div>
    </div> 
}