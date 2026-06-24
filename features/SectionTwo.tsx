import { disc } from "@/constants"
import Image from "next/image"

export default function SectionTwo() {
  return (
    <section className="w-full px-8 pt-10 pb-20 lg:px-10 2xl:max-w-380 2xl:mx-auto">
        <div className="flex flex-col gap-20 lg:flex-row">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-10"> 
                    <h1 className="text-[60px] font-head leading-[90%] tracking-[-3%]">See the Big Picture</h1>
                    <p className="text-text-body font-body leading-140 text-15 tracking-[-0.5%]">Area turns your data into clear, vibrant visuals that show you <span className="hidden lg:inline"><br/></span> exactly what&#39;s happening in each region.</p>
                </div>

                <div className="">
                    {disc.map((disc, index) =>(
                        <div
                        key={index}
                        className="flex gap-7.5 py-5 px-7 border-t border-b border-brand-main-02"
                        >
                            <p className="font-bold font-body text-15 text-text-body">{disc.number}</p>
                            <p className="text-15 tracking-[-0.5%]">{disc.text}</p>
                        </div>

                    ))}
                </div>

                <div>
                    <button className="bg-brand-main-03 px-5.5 py-3.5 rounded-full">
                        Discover More
                    </button>
                </div>

            </div>
            <div>
                <Image src="Blocks.svg" alt="" width={590} height={711} priority className="rounded-3xl"/>

            

            </div>
        </div>
    </section>
  )
}
