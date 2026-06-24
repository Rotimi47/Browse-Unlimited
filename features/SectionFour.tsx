import Image from "next/image";


export default function SectionFour() {
  return (
    <section className="w-full px-4 pb-20 pt-10 lg:px-10  2xl:max-w-380 2xl:mx-auto">
      <div className="flex flex-col gap-20 lg:flex-row lg:gap-25 items-center border-b border-b-brand-main-02 pb-10 ">
        <div className="">
          <Image src="Rocks.svg" alt=" " width={790} height={870} priority className="rounded-[30px]"/>
        </div>
        <div className="flex flex-col gap-10.5  max-w-148 ">
          <h1 className="font-head text-3xl tracking-[-4%] lg:text-[40px] leading-105">“I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can&#39;t imagine running my company without it.”</h1>
          <div className="flex gap-3 lg:flex-row">
            <p className="font-body text-15">Ore.Omoyeni</p>
            <p className="font-roboto text-15 text-brand-main-05 tracking-[-3%] ">Head of Data</p>
          </div>
        </div>
      </div>
    </section>
  )
}
