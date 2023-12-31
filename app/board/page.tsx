import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import NewsCard from '../components/newsCard/newsCard';
import Calendrier from '../components/calendar/calendar';
import ChatBox from '../components/chatBox/chatBox';


interface NewsData {
  pagination: {
    limit: number;
    offset: number;
    count: number;
    total: number;
  };
  data: Array<{
    author: string | null;
    image: string | null;
    title: string;
    description: string;
    url: string;
    source: string;
    category: string;
    language: string;
    country: string;
    published_at: string;
  }>;
}

export default async function page() {
  const session = await getServerSession(authOptions)

  let NewsData: NewsData | null = null;
  try {
    const response = await fetch('http://api.mediastack.com/v1/news?access_key=17ffc6276a1943811729f130a5782b41&countries=fr&sources=lepoint&limit=6');
     NewsData = await response.json();

  return (
    <main className='w-full h-screen flex justify-center items-center bg-primary'>
      <div className='w-[92%] h-[90%] ml-20 mt-10 flex'>
        <section className='h-full w-[60%] flex gap-10 2xl:gap-20 p-4'>
          <div className='h-[50%] w-[55%] border'>
          <ChatBox />
          </div>
            <div className='h-[50%] w-[35%] bg-primary shadow-xl shadow-primary rounded-xl text-secondary flex flex-col items-center'>
            <h3 className='mt-6 text-3xl'>B I E N V E N U E</h3>

            <p className='mt-10 text-3xl text-center bg-white/20 w-full h-10 rounded-xl'>~ {session?.user.username} ~</p>
            <div className='mt-10 text-tertiary shadow-xl shadow-tertiary'>
            <Calendrier/>
            </div>
          </div>

        </section>
        <section className=' h-auto w-[50%]  overflow-scroll flex flex-col items-center gap-6 bg-clearBlue '>
          <h3 className='text-center text-4xl text-secondary mt-4 '>Daily News</h3>
          <div className='grid grid-cols-2 h-[85%] w-[95%] bg-white p-6 rounded-xl shadow-xl shadow-primary'>
          {Array.isArray(NewsData?.data)  ? (
           NewsData.data.map((news) => (
      
          <NewsCard 
            key={news.published_at}
            img={news.image}
            title={news.title}
            description={news.description}
            author={news.author} 
            source={news.source} 
            url={news.url}          
            />
          
            ))
            ) : (
              <p>Les données ne sont pas au format de tableau.</p>
            )}
          </div>
        </section>
      
      </div>
      
    </main>
  )
} catch(error) {
  console.log(error)
}
}
