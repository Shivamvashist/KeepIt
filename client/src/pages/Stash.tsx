import {motion} from 'framer-motion';
// import { StashHeader } from '../layouts/Stash/StashHeader';
import { StashHero } from '../layouts/Stash/StashHero';
import { StashItems } from '../layouts/Stash/StashItems';


export function Stash(){
    
    return <div className='bg-black'>
        <motion.div 
        initial={{}}
        animate={{}}
        transition={{}}
        className=' w-full h-full  bg-radial from-black via-black to-blue-950/70'>
            
            <motion.div className='min-h-[100vh]'>
                    
                <StashHero/>
                
                <StashItems/>

            </motion.div>

        </motion.div>
    </div> 
}