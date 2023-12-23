import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 w-full px-4">
      <Header title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((collect, index) => {
          return (
            <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative border-2 border-color-orange">
              <Image src="" alt="" width={350} height={350} className="w-full" />
              <div className="absolute bottom-0 flex h-16 w-full items-center justify-center bg-color-orange">
                <h5 className="text-center text-xl">{collect.anime_mal_id}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
