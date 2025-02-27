import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>

          {/* ----- Right ---- */}
        <div className='flex flex-row gap-3 items-center'>
            <h1 className='text-white text-[25px] font-semibold'>
                Nima
                <span  className="text-transparent bg-clip-text bg-gradient-to-r from from-purple-500 to-red-500 ml-3">
                    Rahnama
                </span>
            </h1>
        </div>


        {/* ----- Left ----- */}

        <div className='flex flex-row gap-5 mb-2'>
            {
                Socials.map((social) => (
                    <Image
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    width={28}
                    height={28}/>
                ))
            }
        </div>
    </div>
  )
}

export default Navbar