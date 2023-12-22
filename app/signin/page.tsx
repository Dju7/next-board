'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from 'framer-motion';

export default function Register() {

    const router = useRouter();
    const [data, setData] = useState({
      email: '',
      password: '',
      username: '',
      
    })
  
    const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log('Data', data);
      const response = await fetch('../api/user', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({data}),
      });

      if (response.ok) {
        alert("votre compte à été créer, vous êtes redirigé vers la page de connexion")
        router.push('/');
      } else {
        console.error('Registration failed');
      }
    };
  
  return (
    <main className='h-screen w-full flex justify-center items-center bg-primary text-white'>
      <div>
      <motion.form 
      className="p-4 h-[500px] w-[400px] shadow-xl flex flex-col bg-clearBlue justify-center items-center gap-4"
      initial={{x: 300, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 1.5, type:"spring"}}
      onSubmit={createUser} method="POST"
      >
        <h2>Create your acount</h2>
        <label>E-mail</label>
        <input 
        type="email" 
        id="email"
        name="email"
        className="w-full h-10 p-2 text-tertiary" 
        placeholder="exemple@mail.com"
        onChange={(e) => { setData({ ...data, email: e.target.value }) }}
        />
        <label>Choose Username</label>
          <input 
          type="username"
          id= "username"
          name="username" 
          className="w-full h-10 p-2 text-tertiary" 
          placeholder="john Doe"
          onChange={(e) => { setData({ ...data, username: e.target.value }) }}
          />
        
        <label>Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full h-10 p-2 text-tertiary "
            placeholder="password" 
            onChange={(e) => { setData({ ...data, password: e.target.value }) }}
            />
        <button type="submit" className="w-full h-10 bg-secondary border border-tertiary mt-4">Connection</button>
        <p className=" mt-2 "> Welcome Onboard </p>
      </motion.form>
      <Link href="/">connection</Link>
      </div>
    </main>
  )
}
