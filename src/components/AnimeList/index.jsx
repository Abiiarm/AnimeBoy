import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-5">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary transition-all hover:text-color-orange" key={index}>
            <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="max-h-64 w-full rounded-lg object-cover" />
            <h3 className="text-md p-4 font-bold md:text-xl">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
