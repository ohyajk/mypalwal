"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const DropDown = () => {

    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <>
            <li onMouseEnter={() => setShowDropDown(true)} onMouseLeave={() => setShowDropDown(false)} className='hidden cursor-pointer h-full lg:flex justify-center items-center px-4 border-l-2 border-news-white/25 hover:bg-news-black'>
                <div className='font-bold text-lg flex items-center gap-1' href="/">
                    <i class='bx bx-category bx-burst' ></i>
                    <span>CATEGORY</span>
                    <i className='bx bxs-down-arrow bx-xs ml-2 bx-tada ' ></i>
                </div>
            </li>
            {
                showDropDown &&
                <div onMouseEnter={() => setShowDropDown(true)} onMouseLeave={() => setShowDropDown(false)} className='absolute top-16 right-0 flex flex-col justify-start items-start text-left bg-news-red'>
                    <li className='z-50 bg-news-red cursor-pointer h-full flex justify-start items-center w-full p-4 hover:bg-news-black'>
                        <Link className='font-bold text-lg flex items-center gap-1' href="/">
                            <i class='bx bx-poll' ></i>
                            <span>POLITICS</span>
                        </Link>
                    </li>
                    <li className='z-50 bg-news-red cursor-pointer h-full flex justify-start items-center w-full p-4 hover:bg-news-black'>
                        <Link className='font-bold text-lg flex items-center gap-1' href="/">
                            <i class='bx bx-film' ></i>
                            <span>ENTERNTAINMENT</span>
                        </Link>
                    </li>
                    <li className='z-50 bg-news-red cursor-pointer h-full flex justify-start items-center w-full p-4 hover:bg-news-black'>
                        <Link className='font-bold text-lg flex items-center gap-1' href="/">
                            <i class='bx bx-cricket-ball' ></i>
                            <span>SPORTS</span>
                        </Link>
                    </li>
                    <li className='z-50 bg-news-red cursor-pointer h-full flex justify-start items-center w-full p-4 hover:bg-news-black'>
                        <Link className='font-bold text-lg flex items-center gap-1' href="/">
                            <i class='bx bx-laptop' ></i>
                            <span>TECHNOLOGY</span>
                        </Link>
                    </li>
                </div>
            }
        </>
    )
}

export default DropDown