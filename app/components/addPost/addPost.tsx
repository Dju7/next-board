'use client'
import { ChangeEvent, FormEvent, useState } from "react";


export default function AddPost() {
    const [title, setTitle] = useState ('')
    const [content, setContent] = useState('')
  
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
    }
  
    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value)
    }
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log('Valeurs des champs avant envoi :', { title, content });
  
    try {
      const response = await fetch("http://localhost:3000/api/posts", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title, content })
      })

      if (!response.ok) {
        throw new Error(`Erreur lors de la requête : ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Réponse du serveur :', data);

    setTitle('');
    setContent('');
    location.reload()
      
    } catch(error) {
        console.error(error)
    }
    }

  return (
    <form method='post' onSubmit={handleSubmit} className='flex flex-col items-center mt-8 text-white'>
        <label className='mb-2 text-xl'>TITLE</label>
        <input 
        type="text" 
        id="title" 
        value={title} 
        onChange={handleTitleChange} 
        className='mb-6 w-72 h-8 rounded-xl p-2 bg-clearBlue border border-white' placeholder='Enter a title'
        />
        <label className='mb-2 text-xl'>CONTENT</label>
        <textarea 
        id="content"
        value={content}
        onChange={handleContentChange}
        className='mb-6 w-[400px] rounded-xl h-[350px] p-2 border border-white text-secondary bg-clearBlue' 
        placeholder='Write your message here ...'/>
        <button type="submit" className='h-10 bg-secondary w-72 font-bold rounded-xl p-2 border border-white'>ADD</button>
  </form>
  )
}
