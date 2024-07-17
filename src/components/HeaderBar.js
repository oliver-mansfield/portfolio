import Link from "next/link";

export default function HeaderBar() {
  return (
    <header className="bg-grayDark sticky top-0 px-2 md:px-4 pt-2 md:pt-4 z-10">
      <div className="bg-grayMid border-[1px] border-black h-10 ">
        <div className="flex justify-between h-full">

          <Link href="/" className="flex items-center pl-4 md:pl-8">
            <h1 className="font-nunito text-xl text-center">OLIVER MANSFIELD</h1>
          </Link>

          <div className="flex flex-row items-center">
            {/* <span className="dot"></span>
          <p className="pr-8 italic font-nunito">Available as of July 2024</p> */}

            <div className="bg-orange-300 h-full px-4 md:px-8 border-l-[1px] border-black flex items-center">
              <p className="font-bold tracking-widest font-nunito">CONTACT</p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}