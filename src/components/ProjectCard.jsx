import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ link, title, text, img }) {
  return (
    <div className="col-start-3 col-end-11">
      <Link
        href={link}
        className="project-card relative mb-12 grid w-full grid-cols-12 border-[1px] border-black p-4"
      >
        <div className="perspective col-start-1 col-end-4">
          <Image
            src={img}
            alt="Second Skin"
            width={300}
            height={214}
            className="rotated mt-[-50px] w-4/5"
          />
        </div>
        <div className="col-start-4 col-end-12">
          <h3 className="text-4xl">{title}</h3>
          <p>{text}</p>
        </div>
        <span className="absolute bottom-4 right-4">View project</span>
      </Link>
    </div>
  );
}
