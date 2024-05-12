import Link from "next/link";

export default function HeaderBar() {
  return (
    <header className="bg-grayLight p-2 border-[1px] border-black">
      <Link href="/">
        <h1 className="font-sans text-xl text-center">OLIVER MANSFIELD<span className="font-serif pl-4 italic">DIGITAL</span></h1>
      </Link>
    </header>
  );
}