import Image from 'next/image'
import React from 'react'

const LandingCollection = () => {
    return (
        <section id='landingCollection'>
            <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
                <header className='text-center'>
                    <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
                        Product Collection
                    </h2>

                    <p className='mx-auto mt-4 max-w-md text-gray-500'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Itaque praesentium cumque iure dicta incidunt est
                        ipsam, officia dolor fugit natus?
                    </p>
                </header>

                <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                <li>
                        <a href='#' className='group block overflow-hidden relative'>
                            <Image
                                width={500}
                                height={500}
                                src='/images/product/1.png'
                                alt=''
                                className='w-full aspect-square object-cover transition duration-500'
                            />
                            <Image
                                width={500}
                                height={500}
                                src='/images/product/model1.png'
                                alt=''
                                className='w-full aspect-square object-cover transition duration-500 hidden group-hover:block absolute top-0 left-0'
                            />

                            <div className='relative bg-white pt-3'>
                                <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                                    Basic Tee
                                </h3>

                                <p className='mt-2'>
                                    <span className='sr-only'>
                                        {' '}
                                        Regular Price{' '}
                                    </span>

                                    <span className='tracking-wider text-gray-900'>
                                        {' '}
                                        Rp 169.980,00 {' '}
                                    </span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='group block overflow-hidden relative'>
                            <Image
                                width={500}
                                height={500}
                                src='/images/product/2.png'
                                alt=''
                                className='w-full aspect-square object-cover transition duration-500'
                            />
                            <Image
                                width={500}
                                height={500}
                                src='/images/product/model2.png'
                                alt=''
                                className='w-full aspect-square object-cover transition duration-500 hidden group-hover:block absolute top-0 left-0'
                            />

                            <div className='relative bg-white pt-3'>
                                <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                                    Basic Tee
                                </h3>

                                <p className='mt-2'>
                                    <span className='sr-only'>
                                        {' '}
                                        Regular Price{' '}
                                    </span>

                                    <span className='tracking-wider text-gray-900'>
                                        {' '}
                                        Rp 169.980,00 {' '}
                                    </span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='group block overflow-hidden relative'>
                            <Image
                                width={500}
                                height={500}
                                src='/images/product/3.png'
                                alt=''
                                className='w-full aspect-square object-cover transition duration-500'
                            />
                            <Image
                                width={500}
                                height={500}
                                src='/images/product/model3.png'
                                alt=''
                                className='w-full aspect-square object-cover transition duration-500 hidden group-hover:block absolute top-0 left-0'
                            />

                            <div className='relative bg-white pt-3'>
                                <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                                    Basic Tee
                                </h3>

                                <p className='mt-2'>
                                    <span className='sr-only'>
                                        {' '}
                                        Regular Price{' '}
                                    </span>

                                    <span className='tracking-wider text-gray-900'>
                                        {' '}
                                        Rp 169.980,00 {' '}
                                    </span>
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='group block overflow-hidden relative'>
                            <Image
                                width={500}
                                height={500}
                                src='/images/product/1.png'
                                alt=''
                                className='w-full aspect-square object-cover transition duration-500'
                            />
                            <Image
                                width={500}
                                height={500}
                                src='/images/product/model1.png'
                                alt=''
                                className='w-full aspect-square object-cover transition duration-500 hidden group-hover:block absolute top-0 left-0'
                            />

                            <div className='relative bg-white pt-3'>
                                <h3 className='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                                    Basic Tee
                                </h3>

                                <p className='mt-2'>
                                    <span className='sr-only'>
                                        {' '}
                                        Regular Price{' '}
                                    </span>

                                    <span className='tracking-wider text-gray-900'>
                                        {' '}
                                        Rp 169.980,00 {' '}
                                    </span>
                                </p>
                            </div>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </section>
    )
}

export default LandingCollection
