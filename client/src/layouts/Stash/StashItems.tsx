import { motion } from 'framer-motion';
import { StashCard } from '../../components/cards/StashCards';
import { API } from '../../utils/axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { stashState } from '../../state/stash.recoil';

import Tweet from '../../assets/svgs/tweet.svg'
import Note from '../../assets/svgs/note.png'
import Link from '../../assets/svgs/link.png'
import Video from '../../assets/svgs/video.png'
import Doc from '../../assets/svgs/doc.png'
import Shorts from '../../assets/svgs/reels.svg'


export function StashItems(){

    return <motion.div className=' flex justify-center items-center '>

        <motion.div className='border border-white w-[90%] '>

            <motion.div className='text-white border p-8 rounded-4xl border-white/20 bg-gray-400/10 '>

                <motion.div className='flex flex-row items-center gap-2 font-semibold text-xl mb-2'>
                    <img className='h-[32px]' src={Tweet}/>
                    <motion.h1>Tweet</motion.h1>
                </motion.div>

                <motion.div>
                    <motion.h1 className='font-bold text-2xl '>This is the title</motion.h1>
                    <h1 className='mb-2 font-semibold text-gray-400 ' >This.com</h1>
                    <span className='font-medium line-clamp-2'>This is the description</span>
                </motion.div>

                <motion.div className='flex flex-row items-center gap-2 font-semibold mt-4'>
                    {["help","Help1"].map((tag,index)=>(
                        <motion.h1 key={index} className='border border-white/20 bg-amber-50/10 rounded-lg py-1 px-2'>{tag}</motion.h1>
                    ))}
                </motion.div>

            </motion.div>

        </motion.div>

    </motion.div>
}