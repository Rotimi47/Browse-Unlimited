import { benefits } from "@/constants"
import Image from "next/image"

export default function SectionOne() {
  return (
    <section className="w-full px-4 pt-5 pb-25 flex flex-col gap-15 lg:px-10 2xl:max-w-380 2xl:mx-auto">
        <div className="flex flex-col gap-12.5">  
            <div className="flex flex-col gap-6.5">
                <p className="font-roboto text-[12px] text-brand-main-05 tracking-[-1%]">Benefits</p>
                <h2 className="font-head text-[50px] leading-[95%] tracking-[-3%]">We&#39;ve cracked <span className="lg:hidden"><br/></span>the code.</h2>
                <p className="font-body text-15 text-text-body tracking-[-0.5%]">Area provides real insights, without the data overload.</p>
            </div>

            <div className="flex flex-col pt-10 gap-5 lg:flex-row">
                {benefits.map((benefit, index) =>(
                    <div
                    key={index}
                    className="flex flex-col gap-5 py-10 border-t border-t-brand-main-02"
                    >
                        <Image src={benefit.icon} alt="icon" width={24} height={24} priority/>
                        <h3 className="font-head text-18 ">{benefit.title}</h3>
                        <p className="text-body text-text-body text-15 leading-140 tracking-[-0.5%]">{benefit.text}</p>

                    </div>

                ))}

            </div>

        </div>

        <div>
            <Image src="Mountains.svg" alt="" width={1200} height={620} priority className="w-full"/>
        </div>

    </section>
  )
}
