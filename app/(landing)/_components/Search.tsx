'use client'
import React, { useState } from 'react'
import { BiSearch, BiX } from 'react-icons/bi'
import { motion } from 'framer-motion'

const Search = () => {
    const [isSearch, setIsSearch] = useState(false)

    const toggleSearch = () => {
        setIsSearch(!isSearch)
    }
    return (
        <div className='relative cursor-pointer flex items-center gap-4'>
            <div className='' onClick={toggleSearch}>
                <BiSearch />
            </div>

            {isSearch && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 0.2 }}
                    className='bg-zinc-900/70 w-screen h-screen fixed left-0 top-0'
                    onClick={toggleSearch}></motion.div>
            )}

            {isSearch && (
                <div className='fixed top-[30%] left-[50%] translate-x-[-50%] !translate-y-[-50%] max-sm:top-[20%] z-50'>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ ease: 'easeOut', duration: 0.2 }}
                        className='bg-white rounded-full overflow-hidden flex items-center gap-3 px-5 py-2'>
                        <input
                            type='text'
                            name=''
                            id=''
                            placeholder='Search Something ...'
                            className='focus:outline-none text-xl w-[50vw]'
                        />
                        <div className=''>
                            <BiSearch />
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    )
}

export default Search
