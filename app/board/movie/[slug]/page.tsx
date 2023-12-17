import Image from "next/image";
import { FC } from "react";

interface PageProps {
  params: { slug: string };
}

const Page: FC<PageProps> = async ({ params }) => {
  try {
    const movieDetail = await fetch(
      `https://api.themoviedb.org/3/movie/${params.slug}?api_key=3d4bb99f3e9d96edb18d9eff6c7c7b79`
    );

    if (!movieDetail.ok) {
      throw new Error("Failed to fetch movie data");
    }

    const movieData = await movieDetail.json();

    return (
      <div className=" h-screen w-full flex justify-center items-center bg-primary">
        <div className="flex flex-col justify-center items-center">

        <h1 className="mt-1">{movieData.title}</h1>
        <h2>Id Movie: {params.slug}</h2>
        <Image src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="poster" height={500} width={500} className="mt-12" />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
};

export default Page;