import Image from "next/image";
import { Key } from "react";
import Link from "next/link"
import Search from "@/app/components/search/search";

export default async function Movie() {

  let data = [];
 

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=3d4bb99f3e9d96edb18d9eff6c7c7b79', { cache: 'no-store' });
     data = await response.json();
     const movies = data.results


   return (
    <main className=" h-screen w-full flex  flex-col bg-primary">
    <div className=" w-full flex justify-center gap-[40%] mt-24">
        <h2>Search Movie</h2>
        <h2>Upcoming Movies</h2>
    </div>
    <div className="flex w-full gap-16 mt-10">
    <section className="w-[40%] h-[75%] ml-28 border border-secondary rounded-xl p-4">
    <Search />
    </section>
     <section className="w-[50%] h-[75%] grid grid-cols-6 py-4 gap-2 px-4 overflow-auto">
      {movies.map((movie: { id: Key | null | undefined; poster_path: any; title: string; })=> (
        
        <Link key={movie.id} href={`http://localhost:3000/board/movie/${movie.id}`}>
        <Image key={movie.id}
         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
         alt={movie.title}
         width={500}
         height={750}
       />
       </Link>
      ))}
      
    </section>
    </div>
    </main>
   );
  } catch (error) {
  console.error('Une erreur s\'est produite :', error);
  return <p>Erreur lors du chargement des données</p>;
  }
}
