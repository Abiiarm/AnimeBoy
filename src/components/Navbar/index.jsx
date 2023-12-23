import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-dongker">
      <div className="flex flex-col justify-between gap-2 p-4 md:flex-row ">
        <Link href="/" className="text-4xl font-bold text-color-primary">
          BoyAnime
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
