'use client';
import { sidebarMenu,  } from '@/assets/constatnts';
import Link from 'next/link';
import {useState} from 'react'

import {AiOutlineMenu, AiOutlineClose, AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'
export default function Sidebar() {
    const [isOpen, setisOpen] = useState(true)
  return (
    <div className={`bg-primary-color h-screen ${isOpen ? "w-44" : "w-20"} duration-300 fixed ${! isOpen ? "flex items-center  flex-col" : "flex flex-col"} z-10  `}>
        {sidebarMenu.map((item, i) =>  {

          return(
            <div key={i}>
               {isOpen ? (
                 <Link href={item.to}>
                 <div className='text-white  flex items-center gap-4 mb-4 py-2 hover:bg-white/10 px-3 rounded-lg'>{<item.icon size={30} />} <p className='font-semibold text-lg'>{item.name}</p></div> 
                 </Link>
               ): 
                 <Link href={item.to}>  <item.icon  className='text-white  mb-6 hover:bg-white/10 p-2 cursor-pointer rounded-full ' size={50}  /> </Link>
               }
            </div>
          )
        })}
       <div className=' flex items-center  mt-auto mb-14 justify-end'>
        {isOpen ? (
    <AiOutlineDoubleLeft className='cursor-pointer text-white pb-2' size={30} onClick={() => setisOpen(! isOpen)} />
        ): 
        <AiOutlineDoubleRight className='cursor-pointer text-white pb-2' size={30} onClick={() => setisOpen(! isOpen)} />
        }
         
       </div>
    </div>
  )
}
