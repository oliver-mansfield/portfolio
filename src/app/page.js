import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 bg-grayDark">
      <section className='px-8'>
        <div className='p-8 md:pt-36 bg-grayLight md:max-w-[800px] md:grid md:grid-cols-2 md:gap-4'>

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
    </main>
  );
}
