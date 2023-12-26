import React from 'react'
import { db } from '@/lib/db'
import AddPost from '@/app/components/addPost/addPost'
import CardPost from '@/app/components/cardPost/cardPost' 
import Link from 'next/link'

async function getPosts() {
  const posts = await db.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: { username: true}
      }
    }
  })
  return posts
}

export default async function KitchenPosts() {
  const posts = await getPosts();

  return (
    <section className='w-full h-screen flex justify-center items-center gap-6'>
    <div className='w-[20%] h-[800px] flex flex-col items-center rounded-2xl'>
      <h3 className='text-secondary text-2xl mt-4'>NEW POST</h3>
      <AddPost />
    </div>
      <article className='w-[70%] h-[80%] flex flex-col justify-center items-center bg-clearBlue shadow-xl rounded-2xl  mr-4 border'>
        <h2>Feed Post-it</h2>
        <div className=' w-[90%] h-[90%] grid grid-cols-5 p-4 gap-8'>
        {
            (posts).map((post) => {
              return (
                <Link key={post.id} href={`http://localhost:3000/board/kitchen/${post.id}`}>
                <CardPost
                key = {post.id}
                title = {post.title}
                author={post.author ? post.author.username : "Auteur inconnu"}
                content= {post.content}
                id={post.id}
                />
                </Link>
              )
            })
          }
        </div>
       
      </article>
    </section>
  )
}
