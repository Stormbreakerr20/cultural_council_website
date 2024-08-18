import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <div className="h-[65px] flex justify-between items-center text-white px-24 max-sm:px-8">
        <Image
          alt="CCLogo"
          src={"/assets/images/CCLogo.png"}
          width={40}
          height={40}
          className="cursor-pointer"
        ></Image>
        <div className="">
          <ul className="flex justify-center gap-5">
            <Link href={"/"}>
              <li className="cursor-pointer">About</li>
            </Link>
            <Link href={"/clubs"}>
              <li className="cursor-pointer">Clubs</li>
            </Link>
            <Link href={"/"}>
              <li className="cursor-pointer">Events</li>
            </Link>
            <Link href={"/"}>
              <li className="cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
