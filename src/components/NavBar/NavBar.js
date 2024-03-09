'use client'
import React, { useState } from 'react'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";



const NavBar = () => {
    const [openNav, setOpenNav] = useState(false);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 sm:mb-0 sm:mt-0 sm:flex-row sm:items-center sm:gap-6 text-white font-inter text-[12px]">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium text-white playfair-font hover:text-yellow-600"
            >


                <button className="flex items-center cursor-pointer" onClick={() => { }}>
                    SERVICES
                </button>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium text-white playfair-font hover:text-yellow-600"
            >

                <button className="flex items-center cursor-pointer" onClick={() => { }}>
                    ABOUT US
                </button>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium text-white playfair-font hover:text-yellow-600"
            >

                <button className="flex items-center cursor-pointer" onClick={() => { }}>
                    CONTACT US
                </button>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium text-white playfair-font hover:text-yellow-600"
            >

                <button className="flex items-center cursor-pointer" onClick={() => { }}>
                    CAREERS
                </button>
            </Typography>

        </ul>
    );

    return (

        // Navigation Bar
        <Navbar className="mx-auto min-w-full px-4 py-0 lg:px-8 lg:py-2 bg-bluish-purple rounded-none">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <div className=' p-2'>
                    <img src='/images/logo.png' alt='logo' className='h-6 w-auto mx-4 ml-0 items-center justify-center ' />
                </div>

                <div className="hidden sm:block">{navList}</div>

                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-10 items-center justify-center -mt-2 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent sm:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto pb-4">
                    {navList}

                </div>
            </Collapse>
        </Navbar>
    );
}

export default NavBar