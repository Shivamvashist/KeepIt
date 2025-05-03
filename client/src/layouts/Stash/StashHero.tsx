import {AnimatePresence, motion} from 'framer-motion';
import { Link } from 'react-router-dom';

import logout from '../../assets/icons/logoutSwitch.png'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { logoutState } from '../../state/logoutMenu';
import { useEffect, useState } from 'react';
import { API } from '../../utils/axios';
import { stashState } from '../../state/stash.recoil';
import { getStash } from '../../utils/getStash';
import toast from 'react-hot-toast';
import { authState } from '../../state/auth.recoil';

export function StashHero(){

    const setLogoutState = useSetRecoilState(logoutState);
    const setStash = useSetRecoilState(stashState);
    const userData = useRecoilValue(authState);

    const [isCreating,setIsCreating] = useState(false);
    const [formData, setFormData] = useState({
        "title": '',
        "type": 'Note',
        "content": '',
        "link": '',
        "tag":'',
      });
    
      function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>){
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      async function handleSave(e: React.FormEvent){
        e.preventDefault();
        console.log(formData);
        try {
            await API.post('/stash/createStash',{
                "title": formData.title,
                "content": formData.content,
                "type": formData.type,
                "link": formData.link,
                "tag": formData.tag
                        .split(",")
                        .map(tag => tag.trim())
                        .filter(tag => tag !== ""),
                
              })
            setFormData({
                title: '',
                type: 'Note',
                content: '',
                link: '',
                tag:'',
              })
              const newStash =  await getStash()
              setStash({...newStash,isLoading:false,isEmpty:false})
              setTimeout(()=>{
                setIsCreating(false)
              },1000)
        } catch (error) {
            toast.error("Missing or Invalid Syntex",{position:"bottom-right"})
        }
        
      };

    function setCreating(){
        setIsCreating(true)
    }

    return <motion.div className='flex justify-center items-center pt-40'>

        
        
        <motion.div
        initial={{y:250,zIndex:20,scale:2,filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.0))"}}
        animate={{y:[250,0],zIndex:0,scale:[2.2,1],filter:["drop-shadow(0 0 2px rgba(255,255,255, 0))"]} }
        transition={{delay:0.6,duration:0.6,ease:"anticipate"}}
        className='absolute text-[65px] top-36 md:text-[100px] md:top-38 lg:text-[160px] lg:top-24 xl:text-[200px] xl:top-16 
        text-center font-bold font-[moonwalk]  bg-black bg-gradient-to-b from-gray-500/60 to-gray-800/10 text-transparent  bg-clip-text'> 
            <motion.span

            
            > <Link to='/'>KEEP IT</Link>
            </motion.span>
        </motion.div>

        <motion.div 
        initial={{x:100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{delay:1.4,duration:0.7,ease:"anticipate"}}
        className='absolute top-6 right-10'>
            <motion.button 
            whileHover={{scale:1.1}} 
            whileTap={{scale:0.9}}
            onClick={()=>{setLogoutState(true)}}
            >
                <img className='h-14 md:h-24 brightness-50' src={logout} />
            </motion.button>

        </motion.div>

        
        <motion.div initial={{scale:0,opacity:0}}
                animate={{scale:1,opacity:1}}
                transition={{delay:0.7,duration:0.4,ease:"anticipate"}} 
                className='relative flex flex-col w-[70%] md:w-[60%] mt-10 md:m-20'>
            <AnimatePresence mode='wait'>
                {(isCreating?
                    
                    <motion.div
                    initial={{ scale: 1.1, }}
                    animate={{ scale: 1, }}
                    exit={{scale:1.4}}
                    transition={{ duration: 0.4, ease: 'anticipate' }}
                    className='bg-black border border-white/20 border-b-blue-900 rounded-4xl p-8 w-full max-w-4xl mx-auto text-white/80 shadow-md'
                    >
                        <motion.span 
                        initial={{opacity:0,y:[-50]}}
                        animate={{opacity:1,y:0}}
                        transition={{delay:0.1,duration:0.5}}
                        className='font-[roboto] font-bold text-white/20 py-2 mb-2'>Welcome {userData.user?.username}!</motion.span>
                        
                        <motion.input
                            initial={{opacity:0,y:[-50]}}
                            animate={{opacity:1,y:0}}
                            transition={{delay:0.2,duration:0.5}}
                            required
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={formData.title}
                            onChange={handleChange}
                            className='bg-transparent text-3xl sm:text-4xl w-full mb-4 focus:outline-none placeholder:text-white/20'
                        />

                        <motion.select
                            initial={{opacity:0,y:[-50]}}
                            animate={{opacity:1,y:0}}
                            transition={{delay:0.3,duration:0.5}}
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className='bg-transparent text-lg w-full mb-4 border border-white/20 rounded-lg px-4 py-2 focus:outline-none'
                        >
                            <option value="Note">Note</option>
                            <option value="Link">Link</option>
                            <option value="Tweet">Tweet</option>
                            <option value="Video">Video</option>
                            <option value="Doc">Doc</option>
                            <option value="Shorts">Shorts</option>
                        </motion.select>

                        <motion.input
                            initial={{opacity:0,y:[-50]}}
                            animate={{opacity:1,y:0}}
                            transition={{delay:0.4,duration:0.5}}
                            type="text"
                            name="link"
                            placeholder="Add a link (optional)"
                            value={formData.link}
                            onChange={handleChange}
                            className='bg-transparent text-base w-full  border-2 border-white/10 rounded-t-xl border-b-0 p-3 focus:outline-none placeholder:text-white/20'
                        />

                        <motion.textarea
                            initial={{opacity:0,y:[-50]}}
                            animate={{opacity:1,y:0}}
                            transition={{delay:0.5,duration:0.5}}
                            name="content"
                            placeholder={"Descibe this "+formData.type}
                            value={formData.content}
                            onChange={handleChange}
                            className='bg-transparent text-base w-full h-32 mb-4 border-2 border-white/10 rounded-b-xl border-t-0 p-3 focus:outline-none placeholder:text-white/20'
                        />

                        <motion.input
                            initial={{opacity:0,y:[-50]}}
                            animate={{opacity:1,y:0}}
                            transition={{delay:0.6,duration:0.5}}
                            type="text"
                            name="tag"
                            placeholder="Tags (comma separated)"
                            value={formData.tag}
                            onChange={handleChange}
                            className='bg-transparent text-base w-full mb-6 border border-white/10 rounded-xl p-3 focus:outline-none placeholder:text-white/20'
                        />

                        <motion.div 
                        initial={{opacity:0,y:[-50]}}
                        animate={{opacity:1,y:0}}
                        transition={{delay:0.7,duration:0.5}}
                        className='flex justify-between'>
                            <button
                            onClick={handleSave}
                            className='bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-medium transition-all'
                            >
                            Save
                            </button>
                            <button
                            onClick={()=>{setIsCreating(false)}}
                            className='border border-white/20 text-white/50 px-6 py-2 rounded-lg hover:text-white hover:border-white transition-all'
                            >
                            Cancel
                            </button>
                        </motion.div>

                    </motion.div>

                    :
                    
                        <motion.input
                        initial={{scale:1.2}}
                        animate={{scale:1}}
                        exit={{scale:1.2}}
                        onFocus={setCreating}
                        className='border relative bg-black border-white/20 border-b-blue-900
                        text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/20 text-center
                        w-full h-28 md:h-40 lg:h-60 rounded-4xl  
                        focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-md transition-all duration-300'
                        placeholder='Whats on not your mind!' 
                        />

                    )}

            </AnimatePresence>
                
                
            
            
        </motion.div>
    
    </motion.div>
}