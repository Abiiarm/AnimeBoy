import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <div className="px-4 pt-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
        {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} />}
      </div>
      <div className="flex gap-2 overflow-x-auto px-4 pt-4 text-color-primary">
        <div className="flex w-36 flex-col items-center justify-center rounded border border-color-primary p-2">
          <h3>PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="flex w-36 flex-col items-center justify-center rounded border border-color-primary p-2">
          <h3>SKOR</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="flex w-36 flex-col items-center justify-center rounded border border-color-primary p-2">
          <h3>ANGGOTA</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="flex w-36 flex-col items-center justify-center rounded border border-color-primary p-2">
          <h3>EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 px-4 pt-4 text-color-primary sm:flex-nowrap">
        <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250} className="w-full rounded object-cover" />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
