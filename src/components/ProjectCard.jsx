import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ link, title, text, img }) {
  return (
    <Link
      href={link}
      className="project-card relative mb-12 grid min-h-[150px] w-full grid-cols-12 border-[1px] border-black bg-white p-4"
    >
      <div className="col-span-8 lg:col-end-9">
        <h3>{title}</h3>
      </div>
      <div className="col-span-12 mt-4 mt-auto lg:col-span-8">
        <p>{text}</p>
        <p className="font-sans text-blueDark underline">View project</p>
      </div>
      <div className="perspective absolute right-[-5px] top-[-15px] max-w-[110px] lg:right-[-10px] lg:top-[-20px] lg:max-w-[180px]">
        <Image
          src={img}
          alt="Second Skin"
          width={300}
          height={214}
          className="rotated border-[1px] border-black"
        />
      </div>
    </Link>
  );
}
