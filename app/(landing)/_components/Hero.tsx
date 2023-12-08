import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CgChevronDoubleDown } from 'react-icons/cg'

const Hero = () => {
    return (
        <div className='relative'>
            <Image
                src='/images/landing/hero-desktop.jpg'
                width={1920}
                height={1080}
                alt=''
                className='hidden md:block w-full h-[90vh] object-cover'
            />
            <Image
                src='/images/landing/hero-mobile.jpg'
                width={1080}
                height={1920}
                alt=''
                className='block md:hidden w-full h-[70vh] object-cover'
            />
            <Link href='#landingCollection'>
                <div className='absolute bottom-5 left-[50%] translate-x-[-50%] flex flex-col items-center justify-center'>
                    <div className='text-2xl text-white animate-bounce bg-primary rounded-sm'>
                        <CgChevronDoubleDown />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Hero
