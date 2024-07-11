import Image from 'next/image'

export default function Page() {
  return (
    <main className="border-[1px] border-black bg-grayLight flex items-center flex-col">

      <section className='w-full md:max-w-[1200px] p-4 mb-8 md:mb-20'>


        <div className='pt-10 lg:pt-20 pb-8 md:pb-20'>
          <h1 className="font-nunito font-bold text-5xl md:text-8xl mb-4">Second Skin</h1>
          <p className="text-xl">A Custom Headless eCommerce Storefront</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-4 pb-10">

          <div className='md:col-start-1 md:col-end-6 mb-4 md:mb-0'>
            <div className='grid gap-y-3 grid-cols-[150px_auto]'>

              <p className='text-gray-400'>Client</p>
              <p>Conor Joseph Jewelry</p>

              <p className='text-gray-400'>Published</p>
              <p>2023</p>

              <p className='text-gray-400'>My role</p>
              <div>
                <ul>
                  <li><p>Design</p></li>
                  <li><p>Front End Build</p></li>
                  <li><p>Shopify Intergration</p></li>
                </ul>
              </div>

              <p className='text-gray-400'>Tech used</p>
              <div>
                <ul>
                  <li><p>Next.js / React.js</p></li>
                  <li><p>Tailwind</p></li>
                  <li><p>GraphQL Shopify API</p></li>
                  <li><p>Redux Toolkit</p></li>
                  <li><p>GSAP Animation</p></li>
                </ul>
              </div>

            </div>
          </div>

          <div className='md:col-start-7 md:col-end-13'>
            <p className='text-xl leading-9'>I wanted to explore what was possible with eCommerce UI.
              More novel experiences will stand out, but if we stray too far from UX patterns that our
              customers recognise we risk putting a barrier between them and their aims.</p>

            <p className='text-xl leading-9'></p>
          </div>

        </div>
      </section>

      <section className='md:max-w-[1200px] px-4 mb-20'>
        <div className="border-black border-[6px] rounded-md overflow-hidden">
          <video autoPlay loop preload="auto" controls muted>
            <source src="/images/conor-movie.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className='w-full md:max-w-[1200px] p-4 mb-8 md:mb-20'>
        <div className='md:grid gap-y-3 grid-cols-[150px_auto]'>
          <p className='text-gray-400'>Features</p>

          <div>
            <div className='mb-8 md:mb-20'>
              <h2 className='mb-4'>Shopify Intergration</h2>
              <p className='font-lg mb-4'>
                Shopify is the prefered eCommerce solution of many businesses. The dashboard enables the client to easily manage their products, orders and customers.
              </p>
              <p className='font-lg'>
                Rather than using a typical Shopify Theme, I built a custom storefront from the ground up. Refered to as &apos;Headless eCommerce&apos;, this gives me total creative and technical control. This is achieved by using Shopify&apos;s GraphQL API to communicate between the decoupled Front End and Back End.
              </p>
              <Image src="/images/secondskin-shopify-dash.png" alt="Morrisons" width="1020" height="580" className='mt-8 border-black border-[6px] rounded-md overflow-hidden' />
            </div>

            <div className='mb-8 md:mb-20'>
              <h2 className='mb-4'>Design</h2>
              <p className='font-lg mb-4'>The collection of jewelry itself is beautiful in a way that initially appears bizarre, but demands a second look. In the same vein, the art direction of the storefront should depart from the norm.</p>
              <p className='font-lg mb-4'>
                When designing, I kept the established eCommerce UX/UI conventions. Users will expect products pages, a cart and a checkout.<br />
                Departing from the traditional product grid, I opted for a fashion-editorial style layout. This layout showcases the excellent product and model photography side by side.
              </p>
              <Image src="/images/conor-showcase.png" alt="Morrisons" width="1020" height="785" quality={100} className='mt-8 border-black border-[6px] rounded-md overflow-hidden' />
            </div>

            <div className='mb-8 md:mb-20'>
              <h2 className='mb-4'>Next.js Front End</h2>
              <p className='font-lg mb-4'>
                To hit both targets of complete creative control and the highest production standards, I opted for the React framework Next.js. This tool allows me pull in data from the Shopify API and pre-render each product page.
              </p>

              <p className='font-lg mb-4'>
                The customer enjoys a modern shopping experience with lightning fast load times on any device. This method is also great for SEO, enabling the seller to rank higher in search engine results.
                <br />
                <i>(Note that as this is an experimental project, I&apos;ve disabled SEO features as to not appear in search results.)</i>
              </p>

            </div>

            <div className='mb-8 md:mb-20'>
              <h2 className='mb-4'>GSAP Animation</h2>

              <p className='font-lg mb-4'>
                The page transitions are orchestrated around network requests. The thumbnail on the search page seamlessly transitions to become the product shot on the product page. The result is an elegant closer look at the product, rather than a harsh page reload. The deceptively difficult part here is animating an image from a dynamic, responsive layout to a fixed position. I used the animation library GSAP to achieve this stand-out effect.
              </p>
              <div className="border-black border-[6px] rounded-md overflow-hidden w-[350px] h-[600px]">
                <video autoPlay loop preload="auto" controls muted className='w-[350px] h-[600px] object-cover'>
                  <source src="/images/conor-movie-mobile.mp4" type="video/mp4" />
                </video>
              </div>
            </div>


          </div>


        </div>
      </section>




    </main>
  )
}