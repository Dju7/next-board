'use client'

import Link from "next/link";
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState ({
    username: '',
    password:''
  })

  const [error, setError] = useState('');

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(data)
    const result = await signIn('credentials', {
      ...data,
      redirect: false,
    });
  
    if (result?.ok) { 
      router.push('/board');
    } else {
      setError("L'utilisateur n'existe pas. Veuillez vérifier vos informations d'identification.");
    }
  };

  return (
    <main className='h-screen w-full flex justify-center items-center bg-primary text-white'>
      <div>
      <form 
      className="p-4 h-[500px] w-[400px] shadow-xl flex flex-col bg-clearBlue justify-center items-center gap-4"
      onSubmit={loginUser} method="POST"
      >
         {error && (
                <p className="bg-red-600 text-center text-white rounded-xl">{error}</p>
              )}
        <h2>Connection</h2>
        <label>Username :</label>
          <input 
          id="username" 
          name="username" type="username"  
          className="w-full h-10 p-2 text-tertiary" placeholder="john Doe" 
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
        <p className="py-2 mt-4"> You don't have an account ?
        <Link className="text-secondary cursor-pointer" href="/signin"> Create one </Link></p>
      </form>
      <Link href="/board">Board</Link>
      </div>
    </main>
  )
}
