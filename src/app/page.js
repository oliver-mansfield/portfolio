import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4">
      <section className='px-8'>
        <div className='p-8 bg-gray-200 md:max-w-[800px] md:grid md:grid-cols-2 md:gap-4'>

          <div>
            <h1 className='font-serif'>Oliver Mansfield</h1>
            <h2>Front End Developer</h2>
            <h2>UI Designer</h2>
          </div>

          <div>
            <p className='pb-4'>
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
