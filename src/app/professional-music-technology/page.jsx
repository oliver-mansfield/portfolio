import ViewSiteBtn from "@/components/ViewSiteBtn";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center border-[1px] border-t-0 border-black bg-grayLight">
      <section className="mb-8 w-full p-4 md:mb-20 md:max-w-[1400px]">
        <div className="pb-8 pt-10 md:pb-20 lg:pt-20">
          <h1 className="mb-4 font-nunito text-5xl font-bold md:text-8xl">
            Professional Music Technology
          </h1>
          <p className="text-xl">
            eCommerce build for a musical instrument store.
          </p>
        </div>

        <div className="grid grid-cols-1 pb-10 md:grid-cols-12 md:gap-4">
          <div className="mb-4 md:col-start-1 md:col-end-6 md:mb-0">
            <div className="grid grid-cols-[150px_auto] gap-y-3">
              <p className="text-gray-400">Client</p>
              <p>Professional Music Technology</p>

              <p className="text-gray-400">Published</p>
              <p>2020</p>

              <p className="text-gray-400">My role</p>
              <div>
                <ul>
                  <li>
                    <p>Front End Build</p>
                  </li>
                </ul>
              </div>

              <p className="text-gray-400">Tech used</p>
              <div>
                <ul>
                  <li>
                    <p>Magento 2</p>
                  </li>
                  <li>
                    <p>HTML</p>
                  </li>
                  <li>
                    <p>CSS / SCSS</p>
                  </li>
                  <li>
                    <p>JavaScript with Knockout.js</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-start-7 md:col-end-13">
            <p className="mb-4 text-xl leading-9">
              Professional Music Technology is a chain of musical instrument
              stores in the UK. I build the Front End of their new eCommerce
              site, as part of a team migrating the client from Magento to
              Magento 2.
            </p>
            <p className="mb-4 text-xl leading-9">
              We were able to significantly improve page load speed by
              prioritising performance as we built.
            </p>
            <p className="mb-4 text-xl leading-9">
              I integrated various third-party plugins to provide a rich
              customer experience. These included a product recommendation
              engine, a CMS powered page builder and a customer review system.
            </p>
            <p className="mb-4 text-xl leading-9">
              The client enjoyed a significant increase in sales after the
              launch of the new site.
            </p>

            <ViewSiteBtn
              url="https://www.pmtonline.co.uk/"
              text="View the site"
            ></ViewSiteBtn>
            <p className="mt-4 italic">
              Please note, since launching in 2020 the site has been
              significantly updated by other developers.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20 flex w-full flex-col items-center justify-center">
        <Image
          src="/images/pmt-hero.png"
          alt="A screenshot of the home page of Professional Music Technology"
          width="1400"
          height="1099"
          className="mb-10 overflow-hidden rounded-md border-[6px] border-black"
        />

        <Image
          src="/images/pmt-product.png"
          alt="A screenshot of a product page for a guitar"
          width="1400"
          height="872"
          className="mb-10 overflow-hidden rounded-md border-[6px] border-black"
        />

        <Image
          src="/images/pmt-cms.png"
          alt="A screenshot of a product page for a guitar"
          width="1400"
          height="1149"
          className="mb-10 overflow-hidden rounded-md border-[6px] border-black"
        />
      </section>
    </main>
  );
}
