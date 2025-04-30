import {motion} from 'framer-motion';

export function Stash(){
    
    return <div className=' min-h-screen min-w-screen bg-gradient-to-b from-[#000000] to-[#150d81]'>
        <motion.div className=''>
            <input className='border border-white h-[10%] w-[80%]'></input>
        </motion.div>
    </div>
}