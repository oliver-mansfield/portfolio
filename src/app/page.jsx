// import ExperienceList from "@/components/ExperienceList";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="border-[1px] border-t-0 border-black bg-grayLight p-4">
      <div className="relative mx-auto mt-20 max-w-[1400px] grid-cols-12 gap-x-12 md:grid">
        <aside className="relative col-start-1 col-end-6">
          <div className="sticky top-40">
            <h1 className="font-nunito text-[3rem] leading-[0.8] lg:text-[4em]">
              Oliver Mansfield
            </h1>
            <h2 className="mt-4 font-nunito text-[2rem] leading-[0.8] lg:mt-8 lg:text-[2em]">
              Senior Front End Developer
            </h2>

            <div className="col-span-12 pt-16 md:col-start-3 md:col-end-11 md:pt-20">
              <p className="pb-4 text-xl text-grayDarker">
                I&apos;m a UK based developer with 11 years of industry
                experience delivering high quality websites.
              </p>
              <p className="pb-4 text-xl text-grayDarker">
                I have been privileged to work in sectors including eCommerce,
                sustainability and premier sport.
              </p>
              <p className="pb-4 text-xl text-grayDarker">
                I&apos;ve delivered digital projects from concept to completion.
                From wireframing, through design and build, to deployment and
                maintenance.
              </p>
            </div>
          </div>
        </aside>

        <section className="col-start-7 col-end-13 mt-8 md:mt-0">
          <h4 className="col-start-3 col-end-11 mb-16">Selected projects</h4>

          <ProjectCard
            link="/secondskin"
            title="Second Skin"
            text="Headless eCommerce. Design and build."
            img="/images/secondskin-thumb.png"
          />
          <ProjectCard
            link="/ministry-of-defence"
            title="Ministry of Defence"
            text="New Recruit onboarding forms for the Ministry of Defence."
            img="/images/mod-thumb.png"
          />
          <ProjectCard
            link="/professional-music-technology"
            title="Professional Music Technology"
            text="eCommerce build for musical instrument retailer."
            img="/images/pmt-thumb.png"
          />
          <ProjectCard
            link="/morrisons"
            title="Morrisons"
            text="Modular Email Templates for Supermarket CRM."
            img="/images/morrisons-thumb.png"
          />
        </section>
      </div>
    </main>
  );
}
