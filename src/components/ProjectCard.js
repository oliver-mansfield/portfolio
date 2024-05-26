import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ link, title, text, img }) {


  return (
    <Link href={link} className='mt-8 project-card col-span-4'>
      <div className="bg-grayLight p-4 border-[1px] border-black ">
        <div className='perspective flex justify-center'>
          <Image
            src={img}
            alt="Second Skin"
            width={400}
            height={214}
            className='rotated mt-[-50px] w-4/5'
          />
        </div>
        <h3 className="text-4xl inline-block  h-40 pt-12">{title}</h3>
        <p>{text}</p>
        <p className="text-right">View Project</p>
      </div>
    </Link>
  );
}