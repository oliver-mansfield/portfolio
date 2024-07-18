import ViewSiteBtn from '@/components/ViewSiteBtn'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="border-[1px] border-black border-t-0 bg-grayLight flex items-center flex-col">

      <section className='w-full md:max-w-[1200px] p-4 mb-8 md:mb-20'>


        <div className='pt-10 lg:pt-20 pb-8 md:pb-20'>
          <h1 className="font-nunito font-bold text-5xl md:text-8xl mb-4">Professional Music Technology</h1>
          <p className="text-xl">eCommerce build for a musical instrument store.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-4 pb-10">

          <div className='md:col-start-1 md:col-end-6 mb-4 md:mb-0'>
            <div className='grid gap-y-3 grid-cols-[150px_auto]'>

              <p className='text-gray-400'>Client</p>
              <p>Professional Music Technology</p>

              <p className='text-gray-400'>Published</p>
              <p>2020</p>

              <p className='text-gray-400'>My role</p>
              <div>
                <ul>
                  <li><p>Front End Build</p></li>
                </ul>
              </div>

              <p className='text-gray-400'>Tech used</p>
              <div>
                <ul>
                  <li><p>Magento 2</p></li>
                  <li><p>HTML</p></li>
                  <li><p>CSS / SCSS</p></li>
                  <li><p>JavaScript with Knockout.js</p></li>
                </ul>
              </div>

            </div>
          </div>

          <div className='md:col-start-7 md:col-end-13'>
            <p className='text-xl leading-9 mb-4'>Professional Music Technology is a chain of musical instrument stores in the UK. I build the Front End of their new eCommerce site, as part of a team migrating the client from Magento to Magento 2.
            </p>
            <p className='text-xl leading-9 mb-4'>We were able to significantly improve page load speed by prioritising performance as we built.
            </p>
            <p className='text-xl leading-9 mb-4'>I integrated various third-party plugins to provide a rich customer experience. These included a product recommendation engine, a CMS powered page builder and a customer review system.
            </p>
            <p className='text-xl leading-9 mb-4'>The client enjoyed a significant increase in sales after the launch of the new site.
            </p>


            <ViewSiteBtn url='https://www.pmtonline.co.uk/' text="View the site"></ViewSiteBtn>
            <p className='italic mt-4'>Please note, since launching in 2020 the site has been significantly updated by other developers.</p>

          </div>

        </div>
      </section>

      <section className='w-full flex justify-center flex-col items-center mb-20'>
        <Image src="/images/pmt-hero.png" alt="A screenshot of the home page of Professional Music Technology" width="1200" height="1099" className='mb-10 border-black border-[6px] rounded-md overflow-hidden' />

        <Image src="/images/pmt-product.png" alt="A screenshot of a product page for a guitar" width="1200" height="872" className='mb-10 border-black border-[6px] rounded-md overflow-hidden' />

        <Image src="/images/pmt-cms.png" alt="A screenshot of a product page for a guitar" width="1200" height="1149" className='mb-10 border-black border-[6px] rounded-md overflow-hidden' />
      </section>






    </main>
  )
}