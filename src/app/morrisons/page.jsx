import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center border-[1px] border-t-0 border-black bg-grayLight">
      <section className="mb-8 w-full p-4 md:mb-20 md:max-w-[1200px]">
        <div className="pb-2 pt-10 md:pb-20 lg:pt-20">
          <h1 className="mb-4 font-nunito text-5xl font-bold md:text-8xl">
            Morrisons
          </h1>
          <p className="text-xl">
            Modular e-mail templates for supermarket e-commerce eCRM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-y-4">
          <div className="mb-4 md:col-start-1 md:col-end-6 md:mb-0">
            <div className="grid grid-cols-[150px_auto] gap-y-3">
              <p className="text-gray-400">Client</p>
              <p>Morrisons Supermarket</p>

              <p className="text-gray-400">Published</p>
              <p>2017</p>

              <p className="text-gray-400">My role</p>
              <div>
                <ul>
                  <li>
                    <p>Front End Build</p>
                  </li>
                  <li>
                    <p>CMS Intergration</p>
                  </li>
                  <li>
                    <p>Cross Browser / Device Testing</p>
                  </li>
                </ul>
              </div>

              <p className="text-gray-400">Tech used</p>
              <div>
                <ul>
                  <li>
                    <p>HTML</p>
                  </li>
                  <li>
                    <p>CSS / SCSS</p>
                  </li>
                  <li>
                    <p>Custom CMS</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-start-7 md:col-end-13">
            <p className="leading-9 md:text-xl">
              Building visually appealing e-mails can be tricky. Rendering bugs
              are common, and testing is time consuming. We want to give our
              designers creative freedom, but need to acknowledge limitations of
              the format.
            </p>
            <p className="mt-4 leading-9 md:text-xl">
              Layout modules have to be rigorously tested on every mobile device
              before handing over to the client. Sending out broken marketing
              emails can damage a company&apos;s reputation.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20 p-4 md:max-w-[1200px]">
        <div className="screenshot-frame-mobile overflow-hidden">
          <Image
            src="/images/morrisons-main.png"
            alt="Morrisons"
            width="1200"
            height="500"
            className="w-full"
          />
        </div>
      </section>

      <section className="mb-8 w-full p-4 md:mb-20 md:max-w-[1200px]">
        <div className="grid grid-cols-1 gap-20 px-4 py-20 md:max-w-[1200px] md:grid-cols-2">
          <div>
            <h4>The challenge</h4>
            <p>
              Morrisons supermarket needed an email template which was flexible
              enough to fulfil their eCRM ambitions. Whether it was alerting
              customers to an instore event or sending an order confirmation,
              the client needed to communicate a variety messages to their
              customers.
            </p>
          </div>

          <div>
            <h4>The solution</h4>
            <p>
              Working with our design team, I built a suite of layout modules,
              intended to be assembled by the client’s in-house team into a
              template within their content management system. The client
              selects the modules needed to build their layout, then adds their
              content. The result is a responsive HTML email which can convey
              any message the client wishes. Every HTML email produced is built
              to render consistently across all supported mobile devices and
              email applications.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20 flex w-full justify-center">
        <Image
          src="/images/morrisons-showcase.png"
          alt="Morrisons"
          width="1200"
          height="500"
        />
      </section>

      <section className="md:max-w-[1200px]">
        <div className="mb-20 grid grid-cols-1 gap-20 md:grid-cols-2">
          <Image
            src="/images/morrisons-mobile1.png"
            alt="Morrisons"
            width="330"
            height="589"
            className="screenshot-frame-mobile overflow-hidden"
          />

          <Image
            src="/images/morrisons-mobile2.png"
            alt="Morrisons"
            width="330"
            height="589"
            className="screenshot-frame-mobile overflow-hidden"
          />
        </div>
      </section>
    </main>
  );
}
