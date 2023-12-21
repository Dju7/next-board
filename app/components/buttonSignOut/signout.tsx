'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function Signout() {
  return (
    <div>
      <button className=" border border-sky-500 rounded-lg p-1 text-white  bg-sky-500 hover:bg-transparent" onClick={() => signOut()}>Sign out</button>
    </div>
  )
}
