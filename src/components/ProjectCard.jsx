import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ link, title, text, img, techUsed }) {
  return (
    <Link
      href={link}
      className="project-card relative mb-12 grid w-full grid-cols-12 border-[2px] border-blueDark bg-white p-4"
    >
      <div className="col-span-8 mb-4 lg:col-end-9">
        <h3 className="text-blueDark">{title}</h3>
      </div>
      <div className="col-span-12 mt-4 mt-auto lg:col-span-8">
        <p className="mb-4">{text}</p>
        {techUsed ? (
          <ul>
            {techUsed.map((tech, index) => (
              <li
                className="mb-2 mr-2 inline-block rounded-xl border-[1px] border-gray-500 px-4 text-gray-500"
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className="forward-arrow absolute bottom-4 right-4 fill-blueDark"
      >
        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
      </svg>
    </Link>
  );
}
