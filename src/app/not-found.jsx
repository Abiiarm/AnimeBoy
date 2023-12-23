"use client";

import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="mx-auto flex min-h-screen max-w-xl items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <FileSearch size={44} className="text-color-orange" />
        <h3 className="text-4xl font-bold text-color-primary">NOT FOUND</h3>
        <button onClick={() => router.back()} className="text-color-primary underline transition-all hover:text-color-orange">
          Kembali
        </button>
      </div>
    </div>
  );
};

export default Page;
