import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className='px-4 py-10 w-full border-t border-t-brand-main-02 lg:px-10 2xl:max-w-380 2xl:mx-auto'>
        <div className='flex flex-col gap-20 '>
            <div className='flex flex-col gap-6.75 lg:flex-row'>
                <p className='font-body text-14 font-bold tracking-[-2.5%]'>Benefits</p>
                <p className='font-body text-14 font-bold tracking-[-2.5%]'>Specifications</p>
                <p className='font-body text-14 font-bold tracking-[-2.5%]'>How-to</p>
            </div>
            <div className='flex justify-between items-end '>
                <div className='flex items-end gap-10 lg:gap-0'> 
                    <Image src="FooterLogo.svg" alt='' width={32} height={70} priority/>
                    <p className='font-roboto text-[10px] text-text-caption'>&copy; Ore.Omoyeni 2026</p>
                </div>
                <div> 
                    <p className='font-roboto text-[10px] text-text-caption'>All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
