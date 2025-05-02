import { motion } from 'framer-motion';
import { StashCard } from '../../components/cards/StashCards';
import { getStash } from '../../utils/getStash';
import { useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { stashState } from '../../state/stash.recoil';
import Masonry from 'react-masonry-css';


import Tweet from '../../assets/svgs/tweet.svg'
import Note from '../../assets/svgs/note.png'
import Link from '../../assets/svgs/link.png'
import Video from '../../assets/svgs/video.png'
import Doc from '../../assets/svgs/doc.png'
import Shorts from '../../assets/svgs/reels.svg'



export function StashItems(){

    const breakpoints = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
      };

    const typeToImg: Record<string,string>={
        Tweet:Tweet,
        Note:Note,
        Link:Link,
        Video:Video,
        Doc:Doc,
        Shorts:Shorts
    }

    const [stash,setStash] = useRecoilState(stashState);

    useEffect(()=>{
        async function setStashData(){
            const stashData = await getStash();
            setStash({...stashData,isLoading:false});
        }
        setStashData()
    })



    return <motion.div className=' flex justify-center items-center mt-30 '>

        <motion.div 
        initial={{y:[-100],opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{delay:1, duration:0.6}}
        className=' w-[80%] flex flex-col gap-10'>
            
            <motion.div>
                <motion.span className='font-bold text-gray-200 text-6xl'>
                    Your Stash :
                </motion.span>
            </motion.div>

            <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
                {stash.stashItems?.map((item, index) => (
                    <StashCard
                    key={index}
                    img={typeToImg[item.type]}
                    type={item.type}
                    title={item.title}
                    link={item.link}
                    description={item.content}
                    tags={item.tag}
                    />
                ))}
                
            </Masonry>
            

        </motion.div>

    </motion.div>
}
// {/* <motion.div className='text-white border p-8 rounded-4xl border-white/20 bg-gray-400/10 '>

//                 <motion.div className='flex flex-row items-center gap-2 font-semibold text-xl mb-2'>
//                     <img className='h-[32px]' src={Tweet}/>
//                     <motion.h1>Tweet</motion.h1>
//                 </motion.div>

//                 <motion.div>
//                     <motion.h1 className='font-bold text-2xl '>This is the title</motion.h1>
//                     <h1 className='mb-2 font-semibold text-gray-400 ' >This.com</h1>
//                     <span className='font-medium line-clamp-2'>This is the description</span>
//                 </motion.div>

//                 <motion.div className='flex flex-row items-center gap-2 font-semibold mt-4'>
//                     {["help","Help1"].map((tag,index)=>(
//                         <motion.h1 key={index} className='border border-white/20 bg-amber-50/10 rounded-lg py-1 px-2'>{tag}</motion.h1>
//                     ))}
//                 </motion.div>

//             </motion.div> */}