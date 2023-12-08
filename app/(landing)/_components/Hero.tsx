import Image from 'next/image'
import React from 'react'

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
    </div>
  )
}

export default Hero