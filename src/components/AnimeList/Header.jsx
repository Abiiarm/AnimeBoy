import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <h1 className="mb-6 mt-4 text-3xl font-bold text-color-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="text-sm text-color-primary underline transition-all hover:text-color-orange md:text-xl ">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
