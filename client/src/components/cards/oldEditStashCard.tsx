import { motion, useAnimation } from "framer-motion"
import { useRef } from "react"
import { editStashState } from "../../state/editStash.recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedStashState } from "../../state/selectedStash.recoil";

import closeIcon from '../../assets/icons/close.png'
import deleteIcon from '../../assets/icons/delete.png'
import editIcon from '../../assets/icons/edit.png'

// const stash = useRecoilValue(stashState); 

export function EditStashCard(){

    const constraintRef = useRef(null);
    const controls = useAnimation();

    const setEditStash = useSetRecoilState(editStashState);
    const cardItems = useRecoilValue(selectedStashState);

    return <motion.div 
    
    className=" z-30 fixed top-0  min-h-[100vh] min-w-[100vw] flex justify-center items-center backdrop-blur-lg">

        <motion.div ref={constraintRef} className="p-40 rounded-xl backdrop-blur-3xl shadow-2xl">
            
            {/* This is the card ekement that opens */}
            
            <motion.div 
            drag
            whileDrag={{rotate:5,scale:0.96}}
            dragConstraints={constraintRef}
            onDragEnd={() => {
                controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 300 } });
              }}
            dragElastic={0.5}
            animate={controls}
            className=" rounded-md "
            >
{/* entry */}
                <motion.div
                whileHover={{}}
                transition={{ease:"easeInOut"}}
                className='text-white border p-8 Glow:bg-color-[#1F51FF] border-white/20 rounded-md bg-white/10  
                relative max-w-[80vw] overflow-scroll'>

                    <motion.button 
                    whileHover={{opacity:0.8}}
                    whileTap={{scale:0.9}}
                    transition={{duration:0.2}}
                    onClick={()=>{setEditStash(false)}}
                    className="absolute top-0 right-0 p-2">
                        <img className="h-10" src={closeIcon} />
                    </motion.button>

                    <motion.button 
                    whileHover={{opacity:0.8}}
                    whileTap={{scale:0.9}}
                    transition={{duration:0.2}}
                    className="absolute bottom-0 right-0 p-2">
                        <img className="h-10" src={deleteIcon} />
                    </motion.button>

                    <motion.div className='flex flex-row items-center gap-2 font-semibold text-xl mb-2
                    min-w-80'>
                        {/* <img className='h-[32px]' src={cardItems?.type}/> */}
                        <motion.h1>{cardItems?.type}</motion.h1>
                    </motion.div>

                    <motion.div className="max-h-[60vh]">
                        <motion.h1 className='font-bold text-2xl '>{cardItems?.title}</motion.h1>
                        <motion.input defaultValue={cardItems?.title}  />

                        <h1 className='mb-2 font-semibold text-gray-400 max-w-[80vw] overflow-scroll py-1' >
                            <a className='hover:text-blue-400/80' href={cardItems?.link} target="_blank">
                                {cardItems?.link}
                            </a>
                        </h1>
                        
                        <span className='font-medium whitespace-pre-wrap overflow-scroll '>{cardItems?.content}</span>
                    </motion.div>

                    <motion.div className='flex flex-wrap w-80 items-center gap-2 font-semibold mt-4'>
                        {cardItems?.tag?.map((tag,index)=>(
                            <motion.div className='flex-wrap  '>
                                <motion.h1 key={index} className='border border-white/20 bg-amber-50/10 rounded-lg py-1 px-2 '>{tag}</motion.h1>
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div> 
            {/* exit */}
            </motion.div>

        </motion.div>
        
    </motion.div>
 
}