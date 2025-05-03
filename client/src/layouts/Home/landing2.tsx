import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import tweetSvg from '../../assets/svgs/tweet.svg'
import noteSvg from '../../assets/svgs/note.png'
import linkSvg from '../../assets/svgs/link.png'
import videoSvg from '../../assets/svgs/video.png'
import { Icard,StashCard } from '../../components/cards/StashCards'

export function LandingSub() {

    const ref = useRef(null);
    const isInView = useInView(ref, {  margin: "-200px" });


    const cardData: Icard[] = [
        {
          img: tweetSvg,
          type: "Tweet",
          title: "Why developers love TypeScript",
          link:"https://x.com/ninja_vashist",
          description: "A thread on why TypeScript improves your codebase with type safety and better tooling.",
          tags: ["typescript", "dev", "thread"],
        },
        {
          img: noteSvg,
          type: "Note",
          title: "🧠 Understanding Recoil",
          description: "Quick notes comparing Recoil and Redux based on my last project with state-heavy logic.",
          link: "https://www.linkedin.com/posts/shivamvashist_reactjs-recoil-redux-activity-7320721247883993088-ilJ7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEw8hjQBbUeTHwPq3XzMAE3nAMyjx7Zyc74",
          tags: ["notes", "recoil", "redux"],
        },
        {
          img: linkSvg,
          type: "Link",
          title: "The Ultimate React Patterns Guide",
          description: "A must-read article on advanced React component design patterns with examples.",
          link: "https://ui.dev/react-patterns",
          tags: ["react", "patterns", "frontend"],
        },
        {
          img: videoSvg,
          type: "Video",
          title: "Dark Mode UI Tutorial",
          description: "A YouTube tutorial that teaches how to build dark mode interfaces using Tailwind and React.",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          tags: ["video", "dark mode", "ui"],
        },
      ];

    return <motion.div className='flex flex-row w-[90%] h-screen mx-auto  items-center justify-center'>
    <motion.div className='w-[50%] flex flex-col gap-10 p-10'>

        <motion.h1 ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className='text-gray-200 text-6xl w-[60%] font-bold mx-auto text-left '>
            Save anything.<br/> Find it instantly.
            </motion.h1>

        <motion.h1 ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }} 
        className='text-gray-200 text-2xl w-[60%] text-left mx-auto  '>
            KeepIt helps you organize links, tweets, notes, docs, and videos in one place. Save anything from the web and access it from anywhere.
            </motion.h1>

    </motion.div>

    <motion.div className='w-[50%] mr-10'>
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className='grid grid-flow-col grid-col-2 grid-rows-2 gap-8 '>

            {cardData.map((data,index)=>(
                <StashCard
                key={index}
                img={data.img}
                type={data.type}
                title={data.title}
                link={data.link}
                description={data.description}
                tags={data.tags}
                />))}

        </motion.div>
    </motion.div>
    

    
</motion.div>

}