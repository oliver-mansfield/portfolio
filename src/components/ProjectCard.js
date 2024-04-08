import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard() {


  return (
    <Link href="/secondskin" className='w-[300px] mt-8 project-card'>
      <div className="bg-grayLight p-4">
        <div className='perspective'>
          <Image
            src="/images/secondskin-thumb.png"
            alt="Second Skin"
            width={400}
            height={214}
            className='rotated mt-[-50px]'
          />
        </div>
        <h3 className="font-serif text-4xl inline-block h-28 pt-12">Second Skin</h3>
        <p>Headless eCommerce. Design and Build.</p>
        <p className="text-right">View Project</p>
      </div>
    </Link>
  );
}