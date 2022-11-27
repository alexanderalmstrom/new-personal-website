import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid relative mt-[-6.75rem]">
      <div className="col-span-full row-span-full z-10 place-self-center text-white">
        <h1 className="text-fluid-2">Alexander Almström</h1>
      </div>
      <Image
        className="col-span-full row-span-full object-cover object-center h-screen"
        src={"/images/wood-wood-hero.jpg"}
        alt="hero image"
        width={1920}
        height={857}
        sizes="100vw"
        priority
      />
    </section>
  );
}
