'use client'
import React, {useState } from 'react';
import Image from "next/image";

interface Movie {
  id?: number;
  title: string;
  poster_path: string;
  overview: string;
}

export default function Search() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [input, setInput] = useState('');

  const fetchData = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3d4bb99f3e9d96edb18d9eff6c7c7b79&query=${input}`);
    const data = await res.json();
    setMovie(data.results[0] || null);
  };

  const handleSearch = () => {
    fetchData();
  };


  return (
    <div className="flex flex-col items-center">
      <label htmlFor="movier-search" className='text-secondary mb-2 text-xl'>LOOKING FOR A MOVIE</label>
      <input
        type="search"
        className="text-black w-72 mb-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-secondary text-white mt-2 w-20 h-8 rounded-xl hover:text-tertiary"
      >
        Search
      </button>
      <div className='p-8'>
        {movie && (
          <div key={movie.id}>
            <h2 className='text-2xl mb-4'>{movie.title}</h2>
            <Image 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt = {movie.title}
            width={250}
            height={350}
             />
            <p className='mt-4 text-white'>{movie.overview}</p>
          </div>
        )}
      </div>
      
    </div>  
  );
}
