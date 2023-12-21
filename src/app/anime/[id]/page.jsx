import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async ({ params: { id } }) => {
  try {
    const animeResponse = await getAnimeResponse(`anime/${id}`);
    console.log("animeResponse:", animeResponse); // Periksa isi

    const anime = animeResponse?.data || {}; // Pastikan anime.data selalu ada
    console.log("anime:", anime); // Periksa isi

    if (!animeResponse?.data || !animeResponse.data.flatMap) {
      throw new Error("Anime data is undefined or missing.");
    }

    const user = await authUserSession();

    const collection = await prisma.collection.findFirst({
      where: { user_email: user?.email, anime_mal_id: id },
    });

    // Ensure proper null checks for properties
    const imagesWebpUrl = anime.data.images?.webp?.image_url || "/placeholder.jpg";
    const imagesJpgUrl = anime.data.images?.jpg?.image_url || "Image Alt Text";
    const youtubeId = anime.data.trailer?.youtube_id;

    return (
      <>
        <div className="px-4 pt-4">
          <h3 className="text-2xl text-color-primary">
            {anime.data.title} - {anime.data.year}
          </h3>
          {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} />}
        </div>
        <div className="flex gap-2 overflow-x-auto px-4 pt-4 text-color-primary">{/* ... rest of the code */}</div>
        <div className="flex flex-wrap gap-2 px-4 pt-4 text-color-primary sm:flex-nowrap">
          <Image src={imagesWebpUrl} alt={imagesJpgUrl} width={250} height={250} className="w-full rounded object-cover" loading="lazy" />
          <p className="text-justify text-xl">{anime.data.synopsis}</p>
        </div>
        <div>
          <VideoPlayer youtubeId={youtubeId} />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching anime data:", error);
    return (
      <div>
        <p>Terjadi kesalahan saat memuat halaman.</p>
      </div>
    );
  }
};

export default Page;
