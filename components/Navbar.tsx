"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import Link from "next/link";
import LearnMore from "./Buttons/LearnMore";
import { IconMenu3, IconX } from "@tabler/icons-react";


export default function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

     const [scrolled, setScrolled] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    useEffect(() => {
    const handleScroll = () => {
      setMobileDrawerOpen(false);
       setScrolled(window.scrollY > 50);
    };

   
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);





  return (
    <nav className="flex w-full items-center justify-between p-5 lg:px-10 2xl:max-w-380 2xl:mx-auto border-b-white rounded-2xl lg:border-0 shadow-[0_2px_4px_rgba(0,0,0,0.05)] lg:shadow-none ">
        <div><Link href="/"> <Image src="/icons/AreaLogo.svg" alt="company-logo"  width={59} height={36} priority/> </Link></div>



        <div 
          className={`
              fixed top-4 left-1/2 -translate-x-1/2 z-50
              transition-all duration-700 ease-out
              ${
                scrolled
                  ? "bg-white/70 backdrop-blur-[30px] rounded-full px-8 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                  : "bg-transparent rounded-none px-0 py-0"
              }
            
            `}
        > 
          <div className="hidden lg:flex">
              <ul className="flex gap-6.75 font-bold text-15 font-body  tracking-[-2.5%] ">
                  <li className="hover:text-brand-main-01"><Link href="#"> Benefits</Link></li>
                  <li className="hover:text-brand-main-01"><Link href="#"> Specifications</Link></li>
                  <li className="hover:text-brand-main-01"><Link href="#">How-to</Link></li>
                  <li className="hover:text-brand-main-01"><Link href="#">Contact Us</Link></li>
              </ul>
          </div>
        </div>

        <div className="hidden lg:inline-block">
            <LearnMore 
                label="Learn More"
            />
        </div>


        
      <div className='lg:hidden'>
        <button onClick={toggleNavbar} className=''> 
          {mobileDrawerOpen ?<IconX/> : <IconMenu3/>}
        </button>
      </div>

      {/* <div
         className={ `lg:hidden absolute top-16 right-4 w-52 z-50 transition-all duration-300 bg-black p-3 rounded-xl  ${
            mobileDrawerOpen 
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-4  pointer-events-none" 
            }`}
      >
        <div className="">
           <ul className="flex flex-col gap-5 text-brand-pure tracking-[-2.5%]">
              <li> <Link  href="#" onClick={() => setMobileDrawerOpen(false)}>Benefits</Link></li>
                           
              <li> <Link href="#" onClick={() => setMobileDrawerOpen(false)}>Specifications</Link></li>

              <li> <Link href="#" onClick={() => setMobileDrawerOpen(false)}>How-to</Link></li>

              <li> <Link href="#" onClick={() => setMobileDrawerOpen(false)}>Contact Ust</Link></li>
                            
            </ul>

        </div>

      </div> */}

    </nav>
  )
}
