import Link from "next/link";

export default function HeaderBar() {
  return (
    <header className="sticky top-0 z-10 bg-grayDark px-2 pt-2 md:px-4 md:pt-4">
      <div className="h-10 border-[1px] border-black bg-grayMid">
        <div className="flex h-full justify-between">
          <Link href="/" className="flex items-center pl-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3"
            >
              <circle cx="8" cy="8" r="8" fill="#0922FF" />
            </svg>

            <h1 className="pt-[2px] text-center font-nunito text-xl">
              OLIVER MANSFIELD
            </h1>
          </Link>

          <div className="flex flex-row items-center">
            {/* <span className="dot"></span>
          <p className="pr-8 italic font-nunito">Available as of July 2024</p> */}

            {/* <div className="flex h-full items-center border-l-[1px] border-black bg-orange-300 px-4 md:px-8">
              <p className="font-nunito font-bold tracking-widest">CONTACT</p>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}
