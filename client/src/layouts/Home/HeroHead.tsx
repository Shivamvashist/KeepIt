import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

export function HeroHead(){
    return <motion.div className="absolute border border-white h-20 w-40 right-8 top-4">
    <Link to={"/"}></Link>
</motion.div>

}