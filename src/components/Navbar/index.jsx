// Navbar.js
import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-dark">
      <div className="flex flex-col justify-between gap-4 p-4 md:flex-row">
        <div className="flex w-full flex-wrap items-center md:justify-between">
          <Link href="/" className="text-5xl font-bold text-color-primary">
            BoyAnime{" "}
          </Link>
          <div className="ml-auto md:ml-4 md:mr-4">
            {/* Added ml-auto to align UserActionButton to the right */}
            <UserActionButton />
          </div>
        </div>
        <InputSearch className="md:w-1/3 md:self-center" />
      </div>
    </header>
  );
};

export default Navbar;
