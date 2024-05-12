import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main>
      <section>
        <div className='p-8 md:pt-36 bg-grayLight md:max-w-[800px] border-[1px] border-black md:grid md:grid-cols-2 md:gap-4'>

          <div className="">
            <h1 className='font-serif text-5xl mb-4'>Oliver Mansfield</h1>
            <h2 className="font-serif text-2xl leading-6">Front End Developer</h2>
            <h2 className="font-serif text-2xl leading-6">UI Designer</h2>
          </div>

          <div className="pt-16 md:pt-36">
            <p className='pb-4 text-xl indent-12'>
              Oliver is a developer with a decade of industry experience. Delivering projects for large international clients and smaller boutique shops.
            </p>
            <p>
              As confident in the UI Design phase as he is in the Front End Build. Oliver is a developer with a decade of industry experience. Delivering projects for large international clients and smaller boutique shops.
            </p>
          </div>

        </div>
      </section>


      <section className="px-8 py-16 max-w-[1200px]">
        <div className="pb-8">
          <h2 className="font-serif text-5xl text-grayLight inline-block pr-4">Selected Projects</h2>
          <span className="font-serif text-grayLight text-lg">2016 - 2024</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ProjectCard link="/second-skin" title="Second Skin" text="Headless eCommerce. Design and build" img="/images/secondskin-thumb.png" />
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
