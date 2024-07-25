import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ link, title, text, img }) {
  return (
    <Link
      href={link}
      className="project-card relative mb-12 grid min-h-[150px] w-full grid-cols-12 border-[1px] border-black bg-white p-4"
    >
      <div className="col-start-1 col-end-8 lg:col-end-9">
        <h3 className="text-2xl md:text-3xl">{title}</h3>
        <p>{text}</p>
        <p className="mt-4 font-sans text-blueDark underline">View project</p>
      </div>
      <div className="perspective absolute right-[-5px] max-w-[110px] lg:right-[-10px] lg:top-[-20px] lg:max-w-[180px]">
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
