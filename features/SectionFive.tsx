import { LearnMore } from "@/components"
import { todo } from "@/constants"
import Image from "next/image"

export default function SectionFive() {
  return (
    <section className="px-4 w-full py-10 lg:px-10  2xl:max-w-380 2xl:mx-auto">
        <div className="flex flex-col gap-25">
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-10 lg:flex-row justify-between">
                    <h1 className="font-head text-5xl leading-[90%] tracking-[-3%]">Map Your Success</h1>
                    <div>
                        <button className="bg-brand-main-03 px-5.5 py-3.5 rounded-full font-bold font-body text-14">
                            Discover More
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <div className="flex w-max gap-7 lg:w-full lg:justify-between">
                        {todo.map((todo, index) => (
                            <div
                            key={index}
                            className=" w-96.5 shrink-0 pt-15 pb-5 pr-7.5 border-t border-brand-main-02 flex flex-col gap-15 "
                            >

                                <h1 className="text-brand-main-01 font-body text-[80px] tracking-[-4%]">{todo.number}</h1>
                                <div className="flex flex-col gap-4"> 
                                    <h2 className="font-head text-lg tracking-[-3%]">{todo.title} </h2>
                                    <p  className="font-body text-15 tracking-[-5%] text-text-body">{todo.text} </p>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
                
            </div>
            {/* Image */}
            <div className="border-b border-brand-main-02 pb-7.5">
                 <Image src="Valley.svg" alt="" width={1200} height={620} priority className="w-full rounded-[30px]"/>
            </div>

            <div className='text-center flex flex-col gap-7.5 items-center'>
                <h1 className='text-[60px] font-head leading-[95%]'>Connect with us</h1>
                <p className='font-body text-15 text-text-body leading-140'>Schedule a quick call to learn how Area can turn your regional data into a <span className='hidden lg:inline'><br/></span> powerful advantage.</p>
                
                   <LearnMore 
                   className="w-full justify-center max-w-130"
                        label="Learn More"
                    />
                

             </div>
        </div>
    </section>
  )
}
