import Image from 'next/image';

export default function Page() {
  return (
    <main className="border-[1px] border-black bg-grayLight flex items-center flex-col">


      <section className='w-full md:max-w-[1200px] p-4 mb-8 md:mb-20'>


        <div className='pt-10 lg:pt-20 pb-8 md:pb-20'>
          <h1 className="font-nunito font-bold text-5xl md:text-8xl mb-4">Morrisons</h1>
          <p className="text-xl">Modular e-mail templates for supermarket e-commerce eCRM.</p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-12 md:gap-y-4">

          <div className='md:col-start-1 md:col-end-6 mb-4 md:mb-0'>
            <div className='grid gap-y-3 grid-cols-[150px_auto]'>

              <p className='text-gray-400'>Client</p>
              <p>Morrisons Supermarket</p>

              <p className='text-gray-400'>Published</p>
              <p>2017</p>

              <p className='text-gray-400'>My role</p>
              <div>
                <ul>
                  <li><p>Front End Build</p></li>
                  <li><p>CMS Intergration</p></li>
                  <li><p>Cross Browser / Device Testing</p></li>
                </ul>
              </div>

              <p className='text-gray-400'>Tech used</p>
              <div>
                <ul>
                  <li><p>HTML</p></li>
                  <li><p>CSS / SCSS</p></li>
                  <li><p>Custom CMS</p></li>
                </ul>
              </div>

            </div>
          </div>

          <div className='md:col-start-7 md:col-end-13'>
            <p className='md:text-xl leading-9'>Building visually appealing e-mails can be tricky. Rendering bugs are common, and testing is time consuming. We want to give our designers creative freedom, but need to acknowledge limitations of the format.</p>
            <p className='md:text-xl leading-9 mt-4'>Layout modules have to be rigorously tested on every mobile device before handing over to the client. Sending out broken marketing emails can damage a company&apos;s reputation.</p>
          </div>
        </div>
      </section>

      <section className='md:max-w-[1200px] mb-20 p-4'>
        <div className="screenshot-frame-mobile overflow-hidden">
          <Image src="/images/morrisons-main.png" alt="Morrisons" width="1200" height="500" className='w-full' />
        </div>
      </section>



      <section className='w-full md:max-w-[1200px] p-4 mb-8 md:mb-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-[1200px] gap-20 py-20 px-4'>
          <div>
            <h4>The challenge</h4>
            <p>Morrisons supermarket needed an email template which was flexible enough to fulfil their eCRM ambitions. Whether it was alerting customers to an instore event or sending an order confirmation, the client needed to communicate a variety messages to their customers.</p>
          </div>

          <div>
            <h4>The solution</h4>
            <p>
              Working with our design team, I built a suite of layout modules, intended to be assembled by the client’s in-house team into a template within their content management system. The client selects the modules needed to build their layout, then adds their content. The result is a responsive HTML email which can convey any message the client wishes. Every HTML email produced is built to render consistently across all supported mobile devices and email applications.
            </p>
          </div>

        </div>
      </section>

      <section className='w-full flex justify-center mb-20'>
        <Image src="/images/morrisons-showcase.png" alt="Morrisons" width="1200" height="500" />
      </section>

      <section className='md:max-w-[1200px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 mb-20'>

          <Image src="/images/morrisons-mobile1.png" alt="Morrisons" width="330" height="589" className='screenshot-frame-mobile overflow-hidden' />

          <Image src="/images/morrisons-mobile2.png" alt="Morrisons" width="330" height="589" className='screenshot-frame-mobile overflow-hidden' />

        </div>
      </section>



    </main>
  );
}