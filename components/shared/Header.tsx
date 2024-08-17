import Image from "next/image";
export default function Header() {
  return (
    <>
      <div className="">
        <div className="h-[65px] flex justify-between items-center text-white px-24">
          <Image alt="CCLogo" src={'/assets/images/CCLogo.png'} width={40} height={40} className="cursor-pointer"></Image>
          <div className="">
            <ul className="flex justify-center gap-5">
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Clubs</li>
              <li className="cursor-pointer">Events</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
