import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="absolute top-0 w-full z-50 flex justify-between items-center text-white px-12 max-sm:px-8 py-5">
      <Link href={"/"}>
        <Image
          alt="CCLogo"
          src={"/assets/images/CCLogo.png"}
          width={60}
          height={60}
        ></Image>
      </Link>
      <div className="">
        <ul className="flex justify-center gap-12 max-sm:gap-3 text-lg font-medium">
          <Link href={"/about"}>
            <li className="cursor-pointer transition hover:text-[#AC51D2]">
              About
            </li>
          </Link>
          <Link href={"/clubs"}>
            <li className="cursor-pointer transition hover:text-[#AC51D2]">
              Clubs
            </li>
          </Link>
          <Link href={"/events"}>
            <li className="cursor-pointer transition hover:text-[#AC51D2]">
              Events
            </li>
          </Link>
          <Link href={"/"}>
            <li className="cursor-pointer transition hover:text-[#AC51D2]">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
