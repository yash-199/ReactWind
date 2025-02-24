import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi"
import HeroBanner from '../assets/Furniture.jpg'
import { CiLocationArrow1 } from "react-icons/ci";
import Chair from '../assets/Chair.png'
import { CiHeart } from "react-icons/ci";
const HeroSection1 = () => {
    const [showPreview, setShowPreview] = useState(true)
    return (
        <div>
            <h1 className='font-bold my-10 text-3xl'>Normal Tab</h1>
            <div className="py-4 px-4 mt-6 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <div className="hidden sm:flex gap-3 px-2">
                        <p className="h-2 w-2 bg-red-400 rounded-full"></p>
                        <p className="h-2 w-2 bg-yellow-400 rounded-full"></p>
                        <p className="h-2 w-2 bg-green-400 rounded-full"></p>
                    </div>
                    <div className="flex py-1 px-2 justify-between gap-2 rounded mt-10 md:mt-0 w-72">
                        <p
                            className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer ${showPreview ? "text-white bg-indigo-500" : "text-black bg-white"
                                }`}
                            onClick={() => setShowPreview(true)}
                        >
                            <FaRegEye /> Prev
                        </p>
                        <p
                            className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer ${!showPreview ? "text-white bg-indigo-500" : "text-black bg-white"
                                }`}
                            onClick={() => setShowPreview(false)}
                        >
                            <FaCode /> Code
                        </p>
                    </div>
                </div>
                {/* Content */}
                <div className="bg-slate-900 rounded-lg overflow-hidden py-4 px-6">
                    {/* Hero section */}
                    <div className='relative h-[700px] rounded-3xl w-full bg-cover bg-center'
                        style={{ backgroundImage: `url(${HeroBanner})` }}>
                        {/* navbar */}
                        <nav className='flex justify-between items-center shadow-md p-3'>
                            {/* left side  */}
                            <div className='flex items-center gap-4'>
                                <button className='text-white bg-black text-2xl p-2 rounded-full'>
                                    <FiMenu />
                                </button>

                                {/* navigation links */}
                                <div>
                                    <ul className='flex gap-2'>
                                        <li className='bg-white text-black px-4 py-2 rounded-full text-base font-medium'>Home</li>
                                        <li className='bg-gray-500 text-white px-4 py-2 rounded-full text-base font-medium'>Category</li>
                                        <li className='bg-gray-500 text-white px-4 py-2 rounded-full text-base font-medium'>About</li>
                                    </ul>
                                </div>
                            </div>
                            {/* logo */}
                            <h1 className='text-base font-bold'>Funiture.</h1>
                            {/* Right side */}
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center gap-2 bg-gray-500 px-3 py-1 rounded-full'>
                                    <img className='w-8 h-8 rounded-full border-2 border-white' src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
                                    <img className='w-8 h-8 rounded-full border-2 border-white -ml-2' src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
                                    <span className='text-base font-medium ml-2'>+15K Customers</span>
                                </div>
                                {/* search & Profile */}
                                <FiSearch className='text-white text-3xl cursor-pointer bg-gray-500 p-2 rounded-full' />
                                <FiUser className='text-white text-3xl cursor-pointer bg-black p-2 rounded-full' />
                            </div>
                        </nav>
                        {/* content */}
                        <div className='flex justify-between py-36 px-10'>
                            <div>
                                <p className='text-sm font-normal py-2'>Discover timeless pieces for every room in your <br /> home</p>
                                <h1 className='text-4xl'>
                                    Find the Perfect Balance of<br />
                                    Comfort and Style with <b>Our <br />
                                        Curated Collection.</b>
                                </h1>
                                <div className='bg-black/55 py-5 my-10 cursor-pointer hover:bg-black transition-all duration-200 text-center rounded-full w-3/12'>
                                    <CiLocationArrow1 className='mx-auto text-2xl font-bold' />
                                    <p className='text-sm font-light'>Go to the<br />
                                        Online Store</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-4'>
                                <div>
                                    <div className='flex justify-between items-center bg-white/25 p-2 rounded-lg gap-4'>
                                        <div className='bg-white/55 rounded-lg'>
                                            <img src={Chair} className='w-32 h-32' alt="" />
                                        </div>
                                        <div>
                                            <p className='text-base font-semibold'>High-Quality Furniture</p>
                                            <p className='text-sm'>Discover timeless pieces for <br />
                                                every room in your home</p>
                                            <div className='flex gap-6 items-center'>
                                                <button className='bg-white rounded-full text-sm text-black px-3 py-1.5 my-2'>
                                                    Show Now
                                                </button>
                                                <CiHeart className='text-black cursor-pointer bg-white text-3xl p-2 rounded-full' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-2 flex justify-between items-center bg-white/25 p-2 rounded-lg gap-4'>
                                        <div className='bg-white/55 rounded-lg'>
                                            <img src={Chair} className='w-32 h-32' alt="" />
                                        </div>
                                        <div>
                                            <p className='text-base font-semibold'>High-Quality Furniture</p>
                                            <p className='text-sm'>Discover timeless pieces for <br />
                                                every room in your home</p>
                                            <div className='flex gap-6 items-center'>
                                                <button className='bg-white rounded-full text-sm text-black px-3 py-1.5 my-2'>
                                                    Show Now
                                                </button>
                                                <CiHeart className='text-black cursor-pointer bg-white text-3xl p-2 rounded-full' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection1