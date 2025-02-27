"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface props {
    image: string;
    title: string;
    text: string;
  }
  


const ProjectCard = ({image, title, text} : props) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
          setIsFlipped(!isFlipped);
          setIsAnimating(true);
        }
      }
    
  

  return (
    <div
    className="w-[450px] h-[280px] rounded-md cursor-pointer"
    onClick={handleFlip}>

        <motion.div
         className="flip-card-inner w-full h-full"
         initial={false}
         animate={{ rotateY: isFlipped ? 180 : 360 }}
         transition={{ duration: 0.6, animationDirection: "normal" }}
         onAnimationComplete={() => setIsAnimating(false)}>

         <div
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
          style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
        </div>

        <div
          className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
          <div className="flex flex-col gap-20 py-3 z-[30]">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-[20px]">{text}</p>
          </div>
        </div>

        </motion.div>

    </div>
  );
};

export default ProjectCard;