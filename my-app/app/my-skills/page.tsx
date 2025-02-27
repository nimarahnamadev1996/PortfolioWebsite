'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";


import { SkillData } from "@/constants";



const MySkills = () => {
  return (
   <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/bg-2.jpg)" }}   >

    <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">

      <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[50px]">
            حرفه و تکنولوژی ها
          </h1>
          <p className="text-gray-400 text-[20px]">
            تجربه کار با آخرین ورژن  
          </p>
      </div>

      <Swiper
       slidesPerView={5}
       loop={true}
       autoplay={{
         delay: 0,
         disableOnInteraction: false,
       }}
       speed={5000}
       modules={[Autoplay]}
       className="max-w-[80%]">
        {
          SkillData.map((skill,index) => (
            <SwiperSlide key={index}>
              <Image
               src={skill.Image}
               alt={skill.name}
               width={skill.width}
               height={skill.height}/>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="max-w-[80%]">
        {
          SkillData.map((skill,index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
   </div>
  )
}

export default MySkills