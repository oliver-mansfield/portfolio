import Link from "next/link";

export default function HeaderBar() {
  return (
    <header className="bg-grayLight p-2 border-[1px] border-black max-w-[1200px] m-auto">
      <Link href="/">
        <h1 className="font-nunito text-xl text-center">OLIVER MANSFIELD<span className="font-nunito font-light pl-2 italic">DIGITAL</span></h1>
      </Link>
    </header>
  );
}