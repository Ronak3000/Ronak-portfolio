import Pdf from "../assets/ronak sharma.pdf"
import { motion } from "framer-motion"
import { FaReact } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import React, { useEffect, useState } from "react";
import { useMotionValue, useTransform, animate } from "framer-motion";
import profileImage from '../assets/profile.png'; 


export function AnimatedText  ({ text }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 4,
      ease: "linear",
      onUpdate: (latest) => {
        if (latest === text.length) {
          setAnimationCompleted(true);
        }
      },
    });

    return controls.stop;
  }, []);

  return (
    <p className={animationCompleted ? "animation-completed" : ""}>
      <motion.span>{displayText}</motion.span>
    </p>
  );
};



function Home() {

    return (
        <div className='font-roboto bg-[#0d2438]'>
        <div>
          
          <div className='flex justify-between items-center bg-[#0d2438] text-white pb-8 pt-8 '>

            <div className='text-left w-full ml-32'>
            <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
              <h1 className='text-5xl font-bold text-left pb-4'>Hi, I am <span className='text-[#a8a4f4]
'>Ronak</span></h1>
              </motion.div>

           
              <h1 className='text-3xl font-bold text-left pb-8 pt-2'>
                <AnimatedText text="Software Developer and Problem Solver"/>
              </h1>
              
            
              <button
                className='hover:underline text-[#a8a4f4]bg-transparent border border-solid border-[#a8a4f4] rounded py-2 px-4 hover:bg-[#a8a4f4] hover:text-white'
                onClick={() => window.open(Pdf, '_blank')}
              >
                Download CV
              </button>
            </div>

  
            <img src={profileImage} alt="'Profile picture'" className='h-[50vh] rounded-md pr-24 hidden md:flex' />
            <div className='h-8'></div>
          </div>


          
          <div className='grid grid-cols-7 justify-items-center ml-10  text-white h-32 subpixel-antialiased pt-8 '>
            <div></div>
            <div className='relative w-16 h-20 group'>
              <motion.image initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <FaReact alt="" className='absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 
' /> 
              </motion.image>
              <div className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                React
              </div>
            </div>

            <div className='relative w-16 h-20 group'>
            <motion.image initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <TbBrandLeetcode alt="" className='text-[#a8a4f4]
 absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0' /> 
              </motion.image>
              <div className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                Data Structures
              </div>
            </div>

			<div className='relative w-16 h-20 group'>
            <motion.image initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <SiMongodb alt="" className='
 absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0' /> 
              </motion.image>
              <div className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                Mongo-DB
              </div>
              <div></div>
            </div>

            <div className='relative w-16 h-20 group'>
            <motion.image initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <FaPython alt="" className='text-[#a8a4f4]
 absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0' /> 
              </motion.image>
              <div className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                Python
              </div>
            </div>

            

            <div className='relative w-16 h-20 group'>
            <motion.image initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <SiExpress alt="" className='
 absolute inset-0 size-5 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0' /> 
              </motion.image>
              <div className='absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                Express-JS
              </div>
              <div></div>
            </div>

          </div>

          </div>

        </div>
      
    )
}

export default Home
