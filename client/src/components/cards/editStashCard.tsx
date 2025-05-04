import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { editStashState } from "../../state/editStash.recoil";
import { selectedStashState } from "../../state/selectedStash.recoil";
import { updateStash } from "../../utils/updateStash";
import { delStash } from "../../utils/delStash";

import closeIcon from "../../assets/icons/close.png";
import deleteIcon from "../../assets/icons/delete.png";
// import editIcon from "../../assets/icons/edit.png";
import saveIcon from "../../assets/icons/save.png";
import toast from "react-hot-toast";
import { stashState } from "../../state/stash.recoil";
import { getStash } from "../../utils/getStash";

export function EditStashCard() {
  const constraintRef = useRef(null);
  const controls = useAnimation();

  const setEditStash = useSetRecoilState(editStashState);
  const cardItems = useRecoilValue(selectedStashState);
  const setStashes = useSetRecoilState(stashState);

  const [edited, setEdited] = useState(false);
  const [formData, setFormData] = useState({ ...cardItems });
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    setFormData({ ...cardItems });
  }, [cardItems]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    setEdited(true);
  };

  const handleTagAdd = () => {
    if (newTag.trim() && !formData?.tag?.includes(newTag.trim())) {
      setFormData((prev: any) => ({
        ...prev,
        tag: [...(prev.tag || []), newTag.trim()],
      }));
      setNewTag("");
      setEdited(true);
    }
  };

  const handleTagDelete = (tagToDelete: string) => {
    setFormData((prev: any) => ({
      ...prev,
      tag: prev.tag.filter((t: string) => t !== tagToDelete),
    }));
    setEdited(true);
  };

  async function handleSave(){

    try {
        const updated = await updateStash(formData._id, formData);
        toast.loading("Saving...",{duration:1000,position:"bottom-right"});

        const stashData = await getStash();
        setStashes({...stashData,isLoading:false,isEmpty:false})

          setTimeout(()=>{
            setEditStash(false);
            setEdited(false);
            toast.success("Stash updated!",{position:"bottom-right"});
          },1000)
        
      } catch (err) {
        toast.error("Update failed",{position:"bottom-right"});
      }
  };

  async function handleDelete(){
    
    try {
        await delStash(formData._id);
        toast.loading("Deleting Stash...",{duration:1000,position:"bottom-right"})
        setStashes(prev => ({
            ...prev,
            stashItems: prev.stashItems?.filter(item => item._id !== cardItems?._id) || [],
            isEmpty: (prev.stashItems?.length ?? 0) <= 1, 
          }));
          
          setTimeout(()=>{
            setEditStash(false);
            toast.success("Deleted!",{position:"bottom-right"});
          },1000)

        
      } catch (err) {
        toast.error("Delete failed",{position:"bottom-right"});
      }
  };

  return (
    <motion.div
    initial={{scale:0.2,y:800,opacity:0}}
    animate={{scale:1,y:0,opacity:1}}
    transition={{delay:0.1,duration:0.4,ease:"anticipate"}}
    exit={{scale:0.2,y:800,opacity:0}}
    className="z-30 fixed top-0 min-h-[100vh] min-w-[100vw] flex justify-center items-center backdrop-blur-lg">
      <motion.div ref={constraintRef} className="p-40 rounded-xl backdrop-blur-3xl shadow-2xl">
        <motion.div
          drag
          whileDrag={{ rotate: 5, scale: 0.96 }}
          dragConstraints={constraintRef}
          onDragEnd={() => {
            controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 300 } });
          }}
          dragElastic={0.5}
          animate={controls}
          className="rounded-md"
        >
          <motion.div
            className="text-white border p-8 Glow:bg-color-[#1F51FF] border-white/20 rounded-md bg-white/10  
                    relative min-w-[50vw] max-w-[80vw] max-h-[80vh] overflow-auto space-y-4"
          >
            <motion.button
              whileHover={{ opacity: 0.8 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                setEditStash(false);
              }}
              className="absolute top-0 right-0 p-2"
            >
              <img className="h-8" src={closeIcon} />
            </motion.button>

            {/* Save and Delete */}
            {edited && (
              <motion.button
                onClick={handleSave}
                whileHover={{ opacity: 0.8 }}
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-0 right-16 p-2"
              >
                <img className="h-8" src={saveIcon} />
              </motion.button>
            )}
            <motion.button
              onClick={handleDelete}
              whileHover={{ opacity: 0.8 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-0 right-0 p-2"
            >
              <img className="h-8" src={deleteIcon} />
            </motion.button>

            <div className="flex items-center gap-2 font-semibold text-xl">
              <motion.h1
              initial={{y:[-40],opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{delay:0.4,duration:0.4,ease:"easeInOut"}}
              exit={{y:[-40],opacity:0}}
              >{formData?.type}</motion.h1>
            </div>

            <div>
              <motion.input
              initial={{y:[-40],opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{delay:0.5,duration:0.4,ease:"easeInOut"}}
              exit={{y:[-40],opacity:0}}
                className="bg-transparent text-white text-2xl font-bold outline-none border-b border-white/20 w-full"
                value={formData?.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </div>

            {formData?.link && (
              <motion.a
              initial={{y:[-40],opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{delay:0.6,duration:0.4,ease:"easeInOut"}}
              exit={{y:[-40],opacity:0}}
                href={formData?.link}
                target="_blank"
                className="text-blue-300 hover:underline break-all block"
              >
                {formData?.link}
              </motion.a>
            )}

            <motion.textarea
            initial={{y:[-40],opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.7,duration:0.4,ease:"easeInOut"}}
            exit={{y:[-40],opacity:0}}
              className="bg-transparent text-white mt-2 outline-none w-full whitespace-pre-wrap overflow-auto border border-white/10 rounded-md p-2"
              rows={10}
              value={formData?.content}
              onChange={(e) => handleChange("content", e.target.value)}
            />

            {/* Tags */}
            <motion.div 
            initial={{y:[-40],opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.8,duration:0.4,ease:"easeInOut"}}
            exit={{y:[-40],opacity:0}}
            className="flex flex-wrap items-center gap-2 mt-4">
              {formData?.tag?.map((tag: string, i: number) => (
                <div
                  key={i}
                  className="border border-white/20 bg-white/10 px-2 py-1 rounded-md flex items-center gap-1"
                >
                  <span>{tag}</span>
                  <button
                    onClick={() => handleTagDelete(tag)}
                    className="text-red-400 text-sm"
                  >
                    <img className="h-4" src={closeIcon}/>
                  </button>
                </div>
              ))}
            </motion.div>

            {/* Tag Input */}
            <div className="mt-2 flex items-center gap-2">
                <input
                    className="bg-transparent border border-white/20 text-white rounded-md p-1 px-2 outline-none"
                    placeholder="Add tag"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        handleTagAdd();
                    }
                    }}
                    />
                    <button
                    onClick={handleTagAdd}
                    className="text-white bg-blue-500 px-2 py-1 rounded-md text-sm"
                    >
                        Add
                    </button>
            </div>
                    <motion.div 
                    initial={{y:[-40],opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{delay:0.9,duration:0.4,ease:"easeInOut"}}
                    exit={{y:[-40],opacity:0}}
                    className="text-sm text-gray-400 mt-4">
                    <p>Created: {new Date(cardItems?.createdAt).toLocaleString()}</p>
                    <p>Updated: {new Date(cardItems?.updatedAt).toLocaleString()}</p>
                    </motion.div>

          </motion.div>
          <span className="text-white/40 text-center">DRAG ME!</span>
        </motion.div>
        
      </motion.div>
    </motion.div>
  );
}
