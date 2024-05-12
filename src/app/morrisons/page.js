import Image from 'next/image';

export default function Page() {
  return (
    <main className="border-[1px] border-black border-t-0 bg-grayLight flex items-center flex-col">

      <section className='w-full md:max-w-[1200px]'>
        <div className="pt-40 pb-20">

          <div className='mb-4'>
            <h1 className="font-serif text-8xl mb-8">Morrisons</h1>
            <p className="text-xl">Modular e-mail templates for supermarket e-commerce eCRM.</p>
          </div>

          <div>
            <span className="tech-stack-pill">HTML</span>
            <span className="tech-stack-pill">SCSS</span>
            <span className="tech-stack-pill">Custom CMS</span>
          </div>

          <ul className='list-disc list-inside mt-4'>
            <li>Fully responsive, pixel perfection across all devices.</li>
            <li>Dynamic content for personalisation and targetted marketing.</li>
            <li>Built as a suite of blocks to be assembled and deployed by a custom CMS.</li>
          </ul>

        </div>
      </section>

      <section className='md:max-w-[1200px]'>
        <div className="border-black border-[2px] rounded-md overflow-hidden">
          <Image src="/images/morrisons-main.png" alt="Morrisons" width="1200" height="500" className='w-full' />
        </div>
      </section>

      <section className='md:max-w-[1200px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 py-20 px-20'>
          <div>
            <h3>The challenge</h3>
            <p>Morrisons supermarket needed an email template which was flexible enough to fulfil their eCRM ambitions. Whether it was alerting customers to an instore event or sending an order confirmation, the client needed to communicate a variety messages to their customers.</p>
          </div>

          <div>
            <h3>The solution</h3>
            <p>
              Working with our design team, I built a suite of layout modules, intended to be assembled by the client’s in-house team into a template within their content management system. The client selects the modules needed to build their layout, then adds their content. The result is a responsive HTML email which can convey any message the client wishes. Every HTML email produced is built to render consistently across all supported mobile devices and email applications.
            </p>
          </div>
        </div>
      </section>

      <section className='md:max-w-[1200px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 mb-20'>

          <Image src="/images/morrisons-mobile1.png" alt="Morrisons" width="330" height="589" className='max-w-[300px] border-black border-[2px] rounded-md overflow-hidden' />

          <Image src="/images/morrisons-mobile2.png" alt="Morrisons" width="330" height="589" className='max-w-[300px] border-black border-[2px] rounded-md overflow-hidden' />

        </div>
      </section>

      <section className='bg-grayMid w-full flex justify-center mb-20'>
        <div className='bg-grayMid'>

          <Image src="/images/morrisons-showcase.png" alt="Morrisons" width="1200" height="500" />

        </div>
      </section>

    </main>
  );
}