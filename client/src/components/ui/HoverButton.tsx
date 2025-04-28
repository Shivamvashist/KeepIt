import {motion} from 'framer-motion';

interface HoverButtonProps {
    val: string;
  }

  export function HoverButton({val}:HoverButtonProps){

    return (
        <motion.button 
        initial={{opacity:0,scale:0,y:30}}
        animate={{opacity:1,scale:1,y:0}}
        exit={{opacity:0,scale:0,y:30}}
        className="bg-blue-950 text-blue-400 font-bold text-xl border border-blue-400 border-b-4  overflow-hidden relative px-8 py-3 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none group">
            <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                {val}
        </motion.button>
    );
}

