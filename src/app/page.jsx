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
                Oliver is a developer with a decade of industry experience.
                Delivering projects for large international clients and smaller
                boutique shops.
              </p>
              <p className="text-grayDarker">
                As confident in the UI Design phase as he is in the Front End
                Build. Oliver is a developer with a decade of industry
                experience. Delivering projects for large international clients
                and smaller boutique shops.
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
            text="New Recruit sign up forms for the Ministry of Defence."
            img="/images/mod-thumb.png"
          />
          <ProjectCard
            link="/professional-music-technology"
            title="Professional Music Technology"
            text="eCommerce build for musical instrument store."
            img="/images/pmt-thumb.png"
          />
          <ProjectCard
            link="/morrisons"
            title="Morrisons"
            text="Modular Email Templates for Supermarket CRM."
            img="/images/morrisons-thumb.png"
          />
          <ProjectCard
            link="/morrisons"
            title="Morrisons"
            text="Modular Email Templates for Supermarket CRM."
            img="/images/morrisons-thumb.png"
          />
          <ProjectCard
            link="/morrisons"
            title="Morrisons"
            text="Modular Email Templates for Supermarket CRM."
            img="/images/morrisons-thumb.png"
          />
        </section>

        {/* <section className="m-auto max-w-[1200px] py-16">
          <div className="pb-8">
            <h4>Experience</h4>
            <span className="font-serif text-lg text-grayLight">
              2016 - 2024
            </span>
          </div>

          <div>
            <ExperienceList />
          </div>
        </section> */}
      </div>
    </main>
  );
}
