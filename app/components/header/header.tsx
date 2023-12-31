import React from 'react'
import Signout from '../buttonSignOut/signout'



export default async function Header() {

 
  return (
    <header className='fixed top-0 right-0 w-full h-14 bg-primary border-b border-tertiary flex justify-end z-0 shadow-lg'>
        <div className='w-[90%] h-full flex justify-end items-center mr-4'>
              <Signout />
        </div>
          <div className='h-10 w-10 rounded-full bg-secondary m-2 mr-4'/> 
    </header>
  )
}
