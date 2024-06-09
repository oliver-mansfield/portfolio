import Image from 'next/image'

export default function Page() {
  return (
    <main className="border-[1px] border-black border-t-0  bg-grayLight flex items-center flex-col">


      <section className='w-full md:max-w-[1200px]'>
        <div className="pt-40 pb-20 px-8">

          <div className='mb-4'>
            <h1 className="font-nunito text-8xl mb-8">Second Skin</h1>
            <p className="text-xl">New Recruit onboarding forms.</p>
          </div>

          <div>
            <span className="tech-stack-pill">HTML</span>
            <span className="tech-stack-pill">SCSS</span>
            <span className="tech-stack-pill">Razor Templates</span>
            <span className="tech-stack-pill">ASP.NET Web Forms</span>
          </div>

          <ul className='list-disc list-inside mt-4'>
            <li>Fully responsive, pixel perfection across all devices.</li>
            <li>Dynamic content for personalisation and targetted marketing.</li>
            <li>Built as a suite of to be assembled and deployed by a custom CMS.</li>
          </ul>

        </div>
      </section>


      <section className='md:max-w-[1200px] px-8 mb-20'>
        <div className="border-black border-[6px] rounded-md overflow-hidden">
          <video autoPlay={true} loop={true} >
            <source src="/images/conor-movie.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className='md:max-w-[1200px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 mb-20'>

          <Image src="/images/secondskin-mobile1.png" alt="Morrisons" width="330" height="589" className='max-w-[300px] border-black border-[6px] rounded-md overflow-hidden' />

          <Image src="/images/secondskin-mobile2.png" alt="Morrisons" width="330" height="589" className='max-w-[300px] border-black border-[6px] rounded-md overflow-hidden' />

        </div>
      </section>


    </main>
  )
}