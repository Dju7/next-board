import React from 'react'
import Link from 'next/link'
import { IoMdHome } from "react-icons/io";
import { PiChalkboardFill } from "react-icons/pi";
import { FaCheckSquare } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";

export default function Navbar() {
  return (
    <>
    <div className='fixed left-0 h-full w-14 bg-primary border-r border-tertiary z-10 '>
        <nav className=' flex flex-col gap-10 mt-24 items-center '>
         <Link href="/" className=' text-2xl text-secondary'><IoMdHome/></Link>
         <Link href="/board" className='text-2xl text-secondary'><PiChalkboardFill/></Link>
         <Link href="/board/Todo" className='text-2xl text-secondary'><FaCheckSquare/></Link>
         <Link href="/board/movie" className='text-2xl text-secondary'><RiMovie2Fill/></Link>
        </nav>
    </div>
   
    </>
  )
}
