import Link from "next/link";
import { SignedIn, UserButton  } from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
      <Link href="/sign-in">HeaderNav</Link>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
