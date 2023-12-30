import React from 'react'
import Image from 'next/image'


interface NewsProps {
  img: string | null,
    title: string,
    source: string,
    description: string,
    url: string,
    author: string | null,
}

const NewsCard: React.FC<NewsProps> = ({ title, img, source, description, url, author }) => {
    return (
      <a href={url}>
      <div className='h-[300px] w-[450px] flex gap-6  p-4 overflow-scroll mb-4 border-t hover:bg-lightBlue'>
        <div className='h-[90%] w-[30%] flex flex-col overflow-hidden'>
          <h3 className='text-xl'>{source}</h3> 
          {img && <Image alt='pictures of article' src={img} height={80} width={100} />}
        </div>
        <div className='h-full w-[90%] flex flex-col justify-between'>
            <h3 className='text-xl mb-2'>{title}</h3>
            <p className='w-[90%] mb-4'>{description}</p>
            <p className='text-right'>{author}</p>
        </div>
      </div>
      </a>
    );
  };
  
  export default NewsCard;