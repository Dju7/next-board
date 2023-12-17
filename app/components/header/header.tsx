import React from 'react'

export default function Header() {
  return (
    <header className='fixed top-0 right-0 w-full h-14 bg-primary border-b border-tertiary flex justify-end z-0 shadow-lg'>
        <div className='w-[55%] h-full flex justify-between items-center'>
            <h2>Next Board</h2>
            <div className='h-10 w-10 rounded-full bg-secondary border-2 border-tertiary mr-4'></div>
        </div>
      
    </header>
  )
}
