import Link from 'next/link'
import React from 'react'
import DropDown from './DropDown'

const Navbar = () => {
    return (
        // MAIN NAVIGATION 
        <header className='bg-news-red w-full flex justify-center items-center box-border'>
            <nav className='h-16 px-4 md:px-8 w-full max-w-7xl flex justify-between items-center box-border'>
                {/* LEFT NAV */}
                <div className='h-full w-full flex justify-between items-center gap-8'>
                    {/* LOGO OR TEXT */}
                    <div className=''>
                        <h1 className='font-extrabold text-2xl lg:text-3xl whitespace-nowrap'>NEWS LOGO</h1>
                    </div>
                    {/* MENU OR LINKS */}
                    <ul className='h-full w-full hidden md:flex justify-center items-center relative'>
                        {/* MENU BUTTONS */}
                        <li className='cursor-pointer h-full flex justify-center items-center px-2 lg:px-4 border-l-2 border-news-white/25 hover:bg-news-black'>
                            <Link className='font-bold text-lg flex items-center gap-1' href="/">
                                <i class='bx bxs-home bx-burst'></i>
                                <span>HOME</span>
                            </Link>
                        </li>
                        <li className='cursor-pointer h-full flex justify-center items-center px-2 lg:px-4 border-l-2 border-news-white/25 hover:bg-news-black'>
                            <Link className='font-bold text-lg flex items-center gap-1' href="/">
                                <i class='bx bxs-flag bx-burst' ></i>
                                <span>HARYANA</span>
                            </Link>
                        </li>
                        <li className='cursor-pointer h-full flex justify-center items-center px-2 lg:px-4 border-l-2 border-news-white/25 hover:bg-news-black'>
                            <Link className='font-bold text-lg flex items-center gap-1' href="/">
                                <i class='bx bxs-castle bx-burst' ></i>
                                <span>NATIONAL</span>
                            </Link>
                        </li>
                        <li className='cursor-pointer h-full flex justify-center items-center px-2 lg:px-4 border-l-2 border-news-white/25 hover:bg-news-black'>
                            <Link className='font-bold text-lg flex items-center gap-1' href="/">
                                <i class='bx bx-globe bx-burst'></i>
                                <span>INTERNATIONAL</span>
                            </Link>
                        </li>
                        <DropDown />
                    </ul>
                </div>
                {/* RIGHT NAV */}
                <div className='xl:flex items-center gap-4 hidden'>
                    <button>
                        <i className='hover:text-news-black bx bxl-facebook-circle bx-sm' ></i>
                    </button>
                    <button>
                        <i className='hover:text-news-black bx bxl-twitter bx-sm' ></i>
                    </button>
                    <button>
                        <i className='hover:text-news-black bx bxl-instagram-alt bx-sm'></i>
                    </button>
                    <button>
                        <i className='hover:text-news-black bx bxs-envelope bx-sm' ></i>
                    </button>
                </div>
                {/* HAMBURGER MENU */}
                <div className='md:hidden'>
                    <button>
                        <i class='bx bx-menu bx-md'></i>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar