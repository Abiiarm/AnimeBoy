import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-4">
      {user ? (
        <Link href="/users/dashboard" className="py-2 text-color-primary">
          Dashboard
        </Link>
      ) : null}
      <Link href={actionURL} className="inline-block rounded-md bg-color-dark px-12 py-2 text-color-primary transition-all hover:text-color-orange">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
