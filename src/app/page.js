import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="bg-grayLight border-[1px] border-black border-t-0">
      {/* <section>

        <h1 className='font-nunito text-[6em] leading-[0.8] mb-4 text-grayLight'>Oliver Mansfield</h1>

        <div className="">

        </div>

        <div className='p-8 md:pt-36 md:max-w-[800px]  md:grid md:grid-cols-2 md:gap-4'>

          <div className="text-grayLight">
            <h2 className="text-2xl leading-6 text-grayLight">Front End Developer</h2>
            <h2 className="text-2xl leading-6 text-grayLight">UI Designer</h2>
            <h2 className="text-2xl leading-6 text-grayLight">Full Stack Designer</h2>

          </div>

          <div className="pt-16 md:pt-36">
            <p className='pb-4 text-xl indent-12 text-grayLight'>
              Oliver is a developer with a decade of industry experience. Delivering projects for large international clients and smaller boutique shops.
            </p>
            <p className="text-grayLight">
              As confident in the UI Design phase as he is in the Front End Build. Oliver is a developer with a decade of industry experience. Delivering projects for large international clients and smaller boutique shops.
            </p>
          </div>

        </div>
      </section> */}

      <section>
        <div className='col-12-container'>

          <div className="col-start-1 col-end-12">
            <h1 className='font-nunito text-[3rem] lg:text-[6em] leading-[0.8] mt-20 text-grayDarker'>Oliver Mansfield</h1>
            <h2 className="text-grayDarker text-[2rem] leading-[0.8] lg:text-[3em] mt-4 lg:mt-8">Senior Front End Developer</h2>
          </div>


          <div className="pt-16 md:pt-20 col-span-12 md:col-start-1 md:col-end-5">
            <p className='pb-4 text-xl indent-12 text-grayDarker'>
              Oliver is a developer with a decade of industry experience. Delivering projects for large international clients and smaller boutique shops.
            </p>
            <p className="text-grayDarker">
              As confident in the UI Design phase as he is in the Front End Build. Oliver is a developer with a decade of industry experience. Delivering projects for large international clients and smaller boutique shops.
            </p>
          </div>

        </div>

      </section>


      <section className="py-16 max-w-[1200px] m-auto">
        <div className="pb-8">
          <h2 className="text-3xl md:text-4xl text-grayDarker inline-block pr-4">Selected Projects</h2>
          <span className="font-serif text-grayLight text-lg">2016 - 2024</span>
        </div>

        <div className='col-12-container gap-8'>

          <ProjectCard link="/secondskin" title="Second Skin" text="Headless eCommerce. Design and build" img="/images/secondskin-thumb.png" />
          <ProjectCard link="/mod-onboarding" title="Ministry of Defence" text="New Recruit sign up forms for the Ministry of Defence" img="/images/mod-thumb.png" />
          <ProjectCard link="/morrisons" title="Morrisons" text="Modular Email Templates for Supermarket CRM" img="/images/morrisons-thumb.png" />






          {/* <div className="bg-grayLight p-4">
            <h3 className="font-serif text-4xl inline-block h-28">Green Energy Advice</h3>
            <p>Headless eCommerce. Design and Build.</p>
            <p className="text-right">View Project</p>
          </div> */}



        </div>

      </section>


    </main>
  );
}
