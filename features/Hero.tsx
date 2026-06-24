'use client';
import Image from "next/image";
import {motion} from "framer-motion"


export default function Hero() {
  return (
    <motion.section className="w-full px-4 pt-8 lg:px-10 lg:pt-15 2xl:max-w-380 2xl:mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1.0 }}
    
    >
        <div className="flex flex-col gap-30 lg:gap-50">
            <div>
                <h1 className="font-head text-[80px] text-center lg:text-[160px] leading-105  tracking-[-5%]">Browse Everything.</h1>
            </div>
            <div className="relative  ">
                <div className="bg-brand-main-04 h-85 lg:h-90.5 max-w-500 rounded-[30px]">
                    
                </div>

                <motion.div 
                    className="absolute inset-x-0 top-[-50] z-10  flex justify-center lg:hidden"
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2.0,
                        ease: "easeOut",
                    }}

                >
                    <Image src="/iPhone.svg" alt="" width={270} height={542} priority/>
                </motion.div>

                <motion.div 
                    className="absolute inset-x-0 top-[-143] z-10  lg:flex justify-center hidden"
                     initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2.0,
                        ease: "easeOut",
                    }}

                >
                    <Image src="/Ipad.svg" alt="" width={907} height={644} priority/>
                </motion.div>

            </div>
        </div>

    </motion.section>
  )
}
