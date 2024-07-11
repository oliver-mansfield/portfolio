import Image from 'next/image'

export default function Page() {
  return (
    <main className="border-[1px] border-black bg-grayLight flex items-center flex-col">


      <section className='w-full md:max-w-[1200px] p-4 mb-20'>


        <div className='pt-10 lg:pt-20 pb-8 md:pb-20'>
          <h1 className="font-nunito font-bold text-5xl md:text-8xl mb-4">Ministry of Defence</h1>
          <p className="text-xl">Royal Navy & Royal Air Force New Recruit Forms</p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-12 md:gap-4 pb-10">

          <div className='md:col-start-1 md:col-end-6 mb-4 md:mb-0'>
            <div className='grid gap-y-3 grid-cols-[150px_auto]'>

              <p className='text-gray-400'>Client</p>
              <p>British Ministry of Defence</p>

              <p className='text-gray-400'>Published</p>
              <p>2017</p>

              <p className='text-gray-400'>My role</p>
              <div>
                <ul>
                  <li><p>Front End Build</p></li>
                  <li><p>Cross Browser / Device Testing</p></li>
                </ul>
              </div>

              <p className='text-gray-400'>Tech used</p>
              <div>
                <ul>
                  <li><p>HTML with .NET Razor Templates</p></li>
                  <li><p>CSS / SCSS</p></li>
                  <li><p>.NET Web Forms</p></li>
                </ul>
              </div>

            </div>
          </div>

          <div className='md:col-start-7 md:col-end-13'>
            <p className='text-xl leading-9'>Having being built before the ubiquity of mobile devices, the client&apos;s sign up forms had fallen behind the times. The brief was to rebuild the UI with an updated design.</p>
            <p className='text-xl leading-9 mt-4'>I retrofitted the existing solution with modern standards of responsive layout, accessibility and useability.</p>
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