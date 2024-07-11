import Link from "next/link";

export default function HeaderBar() {
  return (
    <header className="bg-grayMid border-[1px] border-black h-10">
      <div className="flex justify-between h-full">

        <Link href="/" className="flex items-center pl-8">
          <h1 className="font-nunito text-xl text-center">OLIVER MANSFIELD<span className="font-nunito font-light pl-2 italic">DIGITAL</span></h1>
        </Link>

        <div className="flex flex-row items-center">
          <span className="dot"></span>
          <p className="pr-8 italic font-nunito">Available as of July 2024</p>

          <div className="bg-orange-300 h-full px-8 border-l-[1px] border-black flex items-center">
            <p className="font-bold tracking-widest font-nunito">CONTACT</p>
          </div>
        </div>

      </div>
    </header>
  );
}