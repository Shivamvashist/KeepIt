import { motion, useAnimation } from "framer-motion"
import { useRecoilValue } from "recoil"
import { stashState } from "../../state/stash.recoil"
import { useRef } from "react"


// const stash = useRecoilValue(stashState); 

export function EditStashCard(){

    const constraintRef = useRef(null);
    const controls = useAnimation();

    return <motion.div 
    
    className=" z-30 fixed top-0  h-[100vh] w-[100vw] border border-amber-100 flex justify-center items-center">

        <motion.div ref={constraintRef} className="p-40">

            <motion.div 
            drag
            whileDrag={{rotate:5}}
            dragConstraints={constraintRef}
            onDragEnd={() => {
                controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 300 } });
              }}
            className="w-20 h-20 bg-blue-500 rounded-md absolute"
            dragElastic={0.5}
            animate={controls}
            >

            </motion.div>

        </motion.div>
        
    </motion.div>
 
}