// UserActionButton.js
import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex items-center justify-end">
      <Link href={actionURL} className="ml-4 px-4 py-2 text-color-primary transition-all hover:text-color-orange">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
