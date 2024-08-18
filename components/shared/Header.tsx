import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center text-white px-24 max-sm:px-8 py-5">
      <Image
        alt="CCLogo"
        src={"/assets/images/CCLogo.png"}
        width={60}
        height={60}
        className="cursor-pointer"
      ></Image>
      <div className="">
        <ul className="flex justify-center gap-12 text-lg font-medium">
          <Link href={"/"}>
            <li className="cursor-pointer transition hover:text-[#AC51D2]">
              About
            </li>
          </Link>
          <Link href={"/clubs"}>
            <li className="cursor-pointer transition hover:text-[#AC51D2]">
              Clubs
            </li>
          </Link>
          <Link href={"/"}>
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
