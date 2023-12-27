import React from 'react'
import Image from 'next/image'

interface NewsProps {
    img: string | null,
    title: string,
    source: string,
    description: string,
    url: string,
    author: string | null,
    key: string | number
}

const NewsCard: React.FC<NewsProps> = ({ key, img, title, source, description, url, author }) => {
    return (
      <div className='h-[150px] w-[95%] flex gap-2 rounded-xl border p-1'>
        <div className='h-[90%] w-[40%] flex flex-col items-center'>
          <h3 className='text-xl'>{source}</h3>
          {img && <Image alt='pictures of article' src={img} height={100} width={150} />}
        </div>
        <div className='h-full w-[60%] flex flex-col items-center'>
            <h3 className='text-xl'>{title}</h3>
            <p className='truncate'>{description}</p>
            <p className='text-center'>{author}</p>
        </div>
      </div>
    );
  };
  
  export default NewsCard;