import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center border-[1px] border-t-0 border-black bg-grayLight">
      <section className="mb-20 w-full p-4 md:max-w-[1400px]">
        <div className="pb-8 pt-10 md:pb-20 lg:pt-20">
          <h1 className="mb-4 font-nunito text-5xl font-bold md:text-8xl">
            Ministry of Defence
          </h1>
          <p className="text-xl">
            Royal Navy & Royal Air Force New Recruit Forms
          </p>
        </div>

        <div className="grid grid-cols-1 pb-10 md:grid-cols-12 md:gap-4">
          <div className="mb-4 md:col-start-1 md:col-end-6 md:mb-0">
            <div className="grid grid-cols-[150px_auto] gap-y-3">
              <p className="text-gray-400">Client</p>
              <p>British Ministry of Defence</p>

              <p className="text-gray-400">Published</p>
              <p>2017</p>

              <p className="text-gray-400">My role</p>
              <div>
                <ul>
                  <li>
                    <p>Front End Build</p>
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
                    <p>HTML with .NET Razor Templates</p>
                  </li>
                  <li>
                    <p>CSS / SCSS</p>
                  </li>
                  <li>
                    <p>.NET Web Forms</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-start-7 md:col-end-13">
            <p className="text-xl leading-9">
              Having being built before the ubiquity of mobile devices, the
              client&apos;s sign up forms had fallen behind the times. The brief
              was to rebuild the UI with an updated design.
            </p>
            <p className="mt-4 text-xl leading-9">
              I retrofitted the existing solution with modern standards of
              responsive layout, accessibility and useability.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20 w-full px-4 md:max-w-[1400px]">
        <div className="justify-between md:flex">
          <div className="mb-4 md:w-1/2">
            <Image
              src="/images/mod-tablet1.png"
              alt="MOD Forms"
              width={690}
              height={526}
              quality={100}
              className="overflow-hidden rounded-md border-[6px] border-black"
            />
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/mod-mobile1.png"
              alt="MOD Forms"
              width={350}
              height={526}
              quality={100}
              className="mx-auto overflow-hidden rounded-md border-[6px] border-black"
            />
          </div>
        </div>
      </section>

      <section className="mb-20 flex w-full justify-center bg-grayMid">
        <div className="grid grid-cols-1 gap-20 px-4 py-20 md:max-w-[1400px] md:grid-cols-2">
          <div>
            <h4>The challenge</h4>
            <p>
              With the modern ubiquity of mobile devices, most young people
              looking to join the military will access the recruitment website
              using a smart phone. To meet their user’s needs, the Royal Navy
              and Royal Air Force needed to update their aging registration
              website to make it compatible with modern mobile devices.
            </p>
          </div>

          <div>
            <h4>The solution</h4>
            <p>
              To accomplish this, I built a completely new, fully responsive
              user interface on top of the existing back-end solution. The
              resulting website provides potential recruits with an improved
              user flow, reducing the effort required to complete the lengthy
              form. The website is highly usable and performs well across all
              modern desktop and mobile devices.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20 flex w-full justify-center">
        <div>
          <Image
            src="/images/mod-showcase.png"
            alt="Morrisons"
            width="1400"
            height="500"
          />
        </div>
      </section>
    </main>
  );
}
