'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { PiChalkboardFill } from "react-icons/pi";
import { FaCheckSquare } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { FaKitchenSet } from "react-icons/fa6";
import { RiGameFill } from "react-icons/ri";

export default function Navbar() {
  const [ displayPage, setDisplayPage] = useState('')

  const mouseOn = (page: React.SetStateAction<string>) => {
    setDisplayPage(page)
  }

  const mouseOut = () => {
    setDisplayPage(" ")
  }

  return (
    <>
    <div className='fixed left-0 h-full w-24  bg-primary border-r border-tertiary z-10 '>
      <div className='h-14 w-full flex items-center justify-center'>
      <Link href="/" className=' text-2xl text-secondary'><IoMdHome/></Link>
      </div>
      
      <div className=' h-[80%] flex flex-col justify-center'>
      
        <nav className=' flex flex-col gap-10 items-center '>
         <Link href="/board" className='text-2xl text-secondary' onMouseEnter={()=>{mouseOn('accueil')}} onMouseLeave={mouseOut}><PiChalkboardFill/></Link>
         <Link href="/board" className='text-2xl text-secondary' onMouseEnter={()=>{mouseOn('cuisine')}} onMouseLeave={mouseOut}><FaKitchenSet/></Link>
         <Link href="/board/movie" className='text-2xl text-secondary' onMouseEnter={()=>{mouseOn('film')}} onMouseLeave={mouseOut}><RiMovie2Fill/></Link>
         <Link href="/board/Todo" className='text-2xl text-secondary' onMouseEnter={()=>{mouseOn('Todo')}} onMouseLeave={mouseOut}><FaCheckSquare/></Link>
         <Link href="/board" className='text-2xl text-secondary' onMouseEnter={()=>{mouseOn('Jeu')}} onMouseLeave={mouseOut}><RiGameFill/></Link>
         <p className='text-secondary text-xl w-16 h-10 px-2 m-6'>{displayPage}</p>
         
        </nav>
      </div>
    </div>
   
    </>
  )
}
