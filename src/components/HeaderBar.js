import Link from "next/link";

export default function HeaderBar() {
  return (
    <header className="bg-grayMid p-2 border-[1px] border-black">
      <Link href="/">
        <h1 className="font-nunito text-xl text-center">OLIVER MANSFIELD<span className="font-nunito font-light pl-2 italic">DIGITAL</span></h1>
      </Link>
    </header>
  );
}