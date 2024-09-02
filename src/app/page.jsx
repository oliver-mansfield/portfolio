// import ExperienceList from "@/components/ExperienceList";
import GithubBtn from "@/components/GithubBtn";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="border-[1px] border-t-0 border-black bg-grayLight p-4">
      <div className="relative mx-auto mt-20 max-w-[1400px] grid-cols-12 gap-x-12 md:grid">
        <div className="relative col-start-1 col-end-12 mb-20">
          <h1 className="font-nunito text-[3rem] leading-[0.8] lg:text-[6em]">
            Oliver Mansfield
          </h1>
          <h2 className="mt-4 font-nunito text-[2rem] leading-[0.8] lg:mt-8 lg:text-[2em]">
            Front End Developer, UI Designer.
          </h2>
        </div>
        <section className="relative col-start-1 col-end-6">
          {/* <h4 className="col-start-3 col-end-11 mb-16">About me</h4> */}
          <div className="col-span-12 md:col-start-3 md:col-end-11">
            <p className="pb-4 text-xl text-grayDarker">
              I&apos;m a UK based developer with a wealth of industry experience
              delivering high quality websites.
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
          {/* <GithubBtn
            text="My GitHub"
            url="https://github.com/oliver-mansfield"
            className="mt-8"
          /> */}
        </section>

        <section className="col-start-7 col-end-13">
          <h4 className="col-start-3 col-end-11 mb-16 mt-8 md:mt-0">
            Selected projects
          </h4>

          <ProjectCard
            link="/secondskin"
            title="Second Skin"
            text="Headless eCommerce using Shopify. Design and build."
            img="/images/secondskin-thumb.png"
            techUsed={[
              "React.js",
              "Next.js",
              "Tailwind",
              "GraphQL Shopify API",
              "Redux Toolkit",
              "GSAP Animation",
            ]}
          />
          <ProjectCard
            link="/ministry-of-defence"
            title="Ministry of Defence"
            text="New Recruit onboarding forms for the Ministry of Defence."
            img="/images/mod-thumb.png"
            techUsed={[
              "HTML with .NET Razor Templates",
              "CSS/SCSS",
              ".NET Web Forms",
            ]}
          />
          <ProjectCard
            link="/professional-music-technology"
            title="Professional Music Technology"
            text="eCommerce build for musical instrument retailer."
            img="/images/pmt-thumb.png"
            techUsed={[
              "Magento 2",
              "HTML",
              "CSS/LESS",
              "JavaScript with Knockout.js",
            ]}
          />
          <ProjectCard
            link="/morrisons"
            title="Morrisons"
            text="Modular Email Templates for Supermarket CRM."
            img="/images/morrisons-thumb.png"
            techUsed={["HTML", "CSS/SCSS", "Custom CMS"]}
          />
          <ProjectCard
            link="/trufl"
            title="Trufl"
            text="Home utility comparison start up."
            img="/images/trufl-thumb.png"
            techUsed={["Vue.js", "Nuxt.js", "HTML", "CSS/SCSS", "JavaScript"]}
          />
        </section>
      </div>
    </main>
  );
}
