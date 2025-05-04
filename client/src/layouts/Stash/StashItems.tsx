import { motion } from 'framer-motion';
import { StashCard } from '../../components/cards/StashCards';
import { getStash } from '../../utils/getStash';
import { useEffect} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { stashState } from '../../state/stash.recoil';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import Masonry from 'react-masonry-css';


import Tweet from '../../assets/svgs/tweet.svg'
import Note from '../../assets/svgs/note.png'
import Link from '../../assets/svgs/link.png'
import Video from '../../assets/svgs/video.png'
import Doc from '../../assets/svgs/doc.png'
import Shorts from '../../assets/svgs/reels.svg'
import { authState } from '../../state/auth.recoil';



export function StashItems(){

    const breakpoints = {
        default: 4,
        1200: 3,
        900: 2,
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
    const userData = useRecoilValue(authState)
    const userName = userData.user?.username
    const authStatus = userData.isLoggedIn
    const stashItems = (stash.stashItems || [])
    console.log(stashItems)
    

    useEffect(()=>{
        async function setStashData(){
            const stashData = await getStash();
            setStash({...stashData,isLoading:false});
        }
        setStashData()
    },[setStash])



    return <motion.div className='relative flex justify-center items-center mt-30 '>

        <motion.div 
        initial={{y:[-100],opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{delay:1.4, duration:0.6}}
        className=' w-[80%] flex flex-col gap-10'>
            
            {(authStatus?
                <motion.div >
                    <motion.span className=' ml-3 text-3xl  md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 '>
                        {userName}'s Stash :
                    </motion.span>
                </motion.div>

                :<NotLoggedIn/>)}


            <GlowCapture>
                <Masonry
                    breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {[...stashItems].reverse().map((item) => (
                        
                            <StashCard
                                _id={item._id}
                                createdAt={item.createdAt}
                                updatedAt={item.updatedAt}
                                img={typeToImg[item.type]}
                                type={item.type}
                                title={item.title}
                                link={item.link}
                                content={item.content}
                                tag={item.tag}
                            />
                        
                    ))}
                </Masonry>
                
            </GlowCapture>
            

        </motion.div>

    </motion.div>
}


function NotLoggedIn(){

    return <motion.div className='flex justify-center'>
    <motion.span className=' ml-3 text-3xl  md:text-5xl lg:text-6xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 '>
        Login to add Items!
    </motion.span>
</motion.div>
}