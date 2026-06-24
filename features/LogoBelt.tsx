import Image from "next/image"
import { logos } from "@/constants"

export default function LogoBelt() {
    
const buildItems = (key: string) =>
  logos.map(({ image }, index) => (
    <div
      key={`${key}-${index}`}
      className="flex shrink-0 items-center gap-4"
    >
      <Image
        src={image}
        alt=""
        width={114}
        height={44}
        className=" shrink-0 object-cover"
      />
    </div>
  ))




  return (
    <section className='px-4 py-12.5'>
        <div>
             
                <p className="font-body text-15 text-text-body lg:pl-10 tracking-[-0.5%]">Trusted by:</p>

        
            <div
                className="pointer-events-none relative z-10 mt-8 overflow-hidden"
                aria-hidden
            >
                <style>
                    {`
                    @keyframes marquee {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                    `}
                </style>

                <div className="w-full">
                    
                    <div className=" overflow-hidden bg-brand-pure py-8">

                        <div
                            className="flex w-max shrink-0"
                            style={{ animation: "marquee 30s linear infinite" }}
                        >

                            {/* SINGLE PERFECT TRACK DUPLICATION */}
                            <div className="flex shrink-0 items-center gap-18 pr-18">
                            {buildItems("a")}
                            </div>

                            <div className="flex shrink-0 items-center gap-18 pr-18">
                            {buildItems("b")}
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>

    </section>
  )
}
