import Image from 'next/image'
import React from 'react'
import { BiSearch, BiUser, BiCart } from 'react-icons/bi'
import Search from './Search'
import { navbarLinks } from '@/utils'

const Navbar = () => {

    return (
        <header className='bg-white sticky top-0 z-30'>
            <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    <div className='flex-1 md:flex md:items-center md:gap-12'>
                        <a className='block text-teal-600' href='/'>
                            <span className='sr-only'>Home</span>
                            <Image
                                src='/logo.png'
                                width={200}
                                height={100}
                                alt=''
                                className='h-[30px] w-auto'
                            />
                        </a>
                    </div>

                    <div className='md:flex md:items-center md:gap-12'>
                        <nav aria-label='Global' className='hidden md:block'>
                            <ul className='flex items-center gap-6 text-sm'>
                            {navbarLinks.map((route, index) => (
                                <li key={index}>
                                    <a
                                        className='text-gray-500 transition hover:text-gray-500/75'
                                        href={route.path}>
                                        {route.label}
                                    </a>
                                </li>
                            ))}
                               
                            </ul>
                        </nav>

                        <div className='flex items-center gap-4'>
                            <div className='flex gap-4 text-xl'>
                                <Search />
                                <BiCart />
                                <BiUser />
                            </div>

                            <div className='block md:hidden'>
                                <button className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-5 w-5'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        stroke-width='2'>
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            d='M4 6h16M4 12h16M4 18h16'
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
