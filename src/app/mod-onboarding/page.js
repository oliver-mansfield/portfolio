import Image from 'next/image'

export default function Page() {
  return (
    <main className="border-[1px] border-black border-t-0 bg-grayLight flex items-center flex-col">


      <section className='w-full md:max-w-[1200px] p-4'>

        <div className='pt-10 lg:pt-20 pb-10'>
          <h1 className="font-nunito font-bold text-5xl md:text-8xl mb-4">Royal Navy &<br />Royal Air Force</h1>
          <p className="text-xl">New Recruit onboarding forms.</p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-20 pb-10">

          <div className='col-span-1 mb-4 md:mb-0'>
            <h4 className='md:mb-2'>Features</h4>
            <ul className='list-disc list-outside pl-4'>
              <li>Fully responsive, pixel perfection across all devices.</li>
              <li>Dynamic content for personalisation and targetted marketing.</li>
              <li>Built as a suite of blocks to be assembled and deployed by a custom CMS.</li>
            </ul>
          </div>

          <div className='col-span-1'>
            <h4 className='md:mb-2'>Tech used</h4>
            <span className="tech-stack-pill">HTML</span>
            <span className="tech-stack-pill">SCSS</span>
            <span className="tech-stack-pill">Razor Templates</span>
            <span className="tech-stack-pill">ASP.NET Web Forms</span>
          </div>

        </div>
      </section>





      <section className='w-full md:max-w-[1200px] px-4 mb-20'>
        <div className='md:flex justify-between'>

          <div className='md:w-1/2 mb-4'>
            <Image src="/images/mod-tablet1.png" alt="MOD Forms" width={690} height={526} quality={100} className='border-black border-[6px] rounded-md overflow-hidden' />
          </div>
          <div className='md:w-1/2'>
            <Image src="/images/mod-mobile1.png" alt="MOD Forms" width={350} height={526} quality={100} className='border-black border-[6px] rounded-md overflow-hidden mx-auto' />
          </div>
        </div>
      </section>

      <section className='bg-grayMid w-full flex justify-center mb-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-[1200px] gap-20 py-20 px-4'>
          <div>
            <h4>The challenge</h4>
            <p>With the modern ubiquity of mobile devices, most young people looking to join the military will access the recruitment website using a smart phone. To meet their user’s needs, the Royal Navy and Royal Air Force needed to update their aging registration website to make it compatible with modern mobile devices.</p>
          </div>

          <div>
            <h4>The solution</h4> 
            <p>To accomplish this, I built a completely new, fully responsive user interface on top of the existing back-end solution. The resulting website provides potential recruits with an improved user flow, reducing the effort required to complete the lengthy form. The website is highly usable and performs well across all modern desktop and mobile devices.</p>
          </div>

        </div>
      </section>


      <section className='w-full flex justify-center mb-20'>
        <div>
          <Image src="/images/mod-showcase.png" alt="Morrisons" width="1200" height="500" />
        </div>
      </section>


    </main>
  )
}