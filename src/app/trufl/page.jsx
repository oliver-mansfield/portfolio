import ViewSiteBtn from "@/components/ViewSiteBtn";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center border-[1px] border-t-0 border-black bg-grayLight">
      <section className="mb-8 w-full p-4 md:mb-20 md:max-w-[1400px]">
        <div className="pb-8 pt-10 md:pb-20 lg:pt-20">
          <h1 className="mb-4 font-nunito text-5xl font-bold md:text-8xl">
            Trufl
          </h1>
          <p className="text-xl">Home utility comparison start up.</p>
        </div>

        <div className="grid grid-cols-1 pb-10 md:grid-cols-12 md:gap-4">
          <div className="mb-4 md:col-start-1 md:col-end-6 md:mb-0">
            <div className="grid grid-cols-[150px_auto] gap-y-3">
              <p className="text-gray-400">Client</p>
              <p>Trufl</p>

              <p className="text-gray-400">Published</p>
              <p>2020</p>

              <p className="text-gray-400">My role</p>
              <div>
                <ul>
                  <li>
                    <p>UX Planning</p>
                    <p>UI Design</p>
                    <p>Front End Build</p>
                  </li>
                </ul>
              </div>

              <p className="text-gray-400">Tech used</p>
              <div>
                <ul>
                  <li>
                    <p>Vue.js with Nuxt Framework</p>
                  </li>
                  <li>
                    <p>HTML</p>
                  </li>
                  <li>
                    <p>CSS / SCSS</p>
                  </li>
                  <li>
                    <p>JavaScript</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-start-7 md:col-end-13">
            <p className="mb-4 text-xl leading-9">
              Trufl was a startup brand which allowed customers to save money by
              getting them a better deal on their home utility bills.
            </p>
            <p className="mb-4 text-xl leading-9">
              I lead the creation of the website as designer and developer. I
              took the site through concept to completion. I gathered
              requirements, produced wireframes and visual designs, then lead
              the front end build.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20 flex w-full flex-col items-center justify-center px-4">
        <Image
          src="/images/trufl-desktop1.png"
          alt="A screenshot of the home page of trufl.com"
          width="1440"
          height="750"
          className="mb-10 overflow-hidden rounded-md border-[6px] border-black"
        />
        <Image
          src="/images/trufl-desktop2.png"
          alt="A screenshot of the home page of trufl.com"
          width="1440"
          height="1230"
          className="mb-10 overflow-hidden rounded-md border-[6px] border-black"
        />
        <Image
          src="/images/trufl-desktop3.png"
          alt="A screenshot of the home page of trufl.com"
          width="1440"
          height="677"
          className="mb-10 overflow-hidden rounded-md border-[6px] border-black"
        />
      </section>
    </main>
  );
}
