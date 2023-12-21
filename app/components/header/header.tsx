import React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Signout from '../buttonSignOut/signout'



export default async function Header() {
  const session = await getServerSession(authOptions)
  console.log(session)

  
  return (
    <header className='fixed top-0 right-0 w-full h-14 bg-primary border-b border-tertiary flex justify-end z-0 shadow-lg'>
        <div className='w-[55%] h-full flex justify-between items-center'>
            <h2>Next Board</h2>
            {session ? (
          <>
            <p className='text-secondary text-xl ml-[70%]'>{session.user.username}</p>
            
          </>
          ) : (
           <p className='text-secondary text-xl ml-[60%]'>Not logged in</p>
          )}
          <Signout />
          <div className='h-10 w-10 rounded-full bg-secondary  mr-4'/>
        </div>
      
    </header>
  )
}
