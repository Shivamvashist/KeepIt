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
import { editStashState } from '../state/editStash.recoil';
import { EditStashCard } from '../components/cards/editStashCard';


export function Stash(){
    
    const logoutMenuStatus = useRecoilValue(logoutState);
    const editStashStatus = useRecoilValue(editStashState);
    const auth = useRecoilValue(authState);
    const navigate = useNavigate()

    useEffect(() => {
      if(!auth.loading){
        if (!auth.isLoggedIn) {
          const id = toast.loading("Redirecting...", {
            duration: 900,
            position: "bottom-right",
          });

          const redirect = setTimeout(() => {
            toast.dismiss(id);
            navigate("/");
          }, 1000);
      
          return () => clearTimeout(redirect);
        }
      }
    });

    return <div className='bg-black overflow-x-hidden'>
        <motion.div 
        initial={{}}
        animate={{}}
        transition={{}}
        className=' w-full h-full  bg-radial from-blue-950/70 via-black to-blue-950/70'>
            
            <motion.div className='min-h-[100vh] min-w-[100vw]' >
                    
                <StashHero/>
                
                <StashItems/>

                <AnimatePresence mode='wait'>
                    {editStashStatus ? <EditStashCard/> : null}
                </AnimatePresence>

                <AnimatePresence mode='wait'>
                    {logoutMenuStatus ? <LogoutMenu/> : null}
                </AnimatePresence>

            </motion.div>

        </motion.div>
    </div> 
}