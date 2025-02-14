import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import BackGroundImage from "../assets/HeroSection/HeroSection1.jpg"
import { GoArrowUpRight } from "react-icons/go";
import { IoCopy } from "react-icons/io5";
const HeroSection1 = () => {
    const [showPreview, setShowPreview] = useState(true)
    return (
        <div>
            <h1 className='font-bold my-10 text-3xl'>Hero Section 1</h1>
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
                    <div className="min-h-screen bg-gray-200 p-6 rounded-3xl mt-20 ">
                        <div className="fixed rounded-3xl z-50 w-11/12">
                            <div className="flex items-center justify-around text-black">
                                <div className='bg-white rounded-full py-3 mt-1' >
                                    <p className="font-bold text-3xl px-10">ReCom</p>
                                </div>
                                <ul className="flex items-center gap-5 text-sm mt-10">
                                    <li className="cursor-pointer hover:text-gray-600">Shop</li>
                                    <li className="cursor-pointer hover:text-gray-600">Browser</li>
                                    <li className="cursor-pointer hover:text-gray-600">About</li>
                                    <li className="cursor-pointer hover:text-gray-600">Blog</li>
                                </ul>
                                <div className="flex gap-4 cursor-pointer">
                                    <p className='bg-white rounded-full text-1xl pt-3 px-6 hover:bg-[#f3f2f1] duration-200 transition-all'>Contact with us</p>
                                    <GoArrowUpRight className='bg-white rounded-full p-2 text-5xl' />
                                </div>
                            </div>
                        </div>
                        <div
                            className="relative h-[500px] rounded-3xl w-full bg-cover bg-center py-36 text-center text-white text-3xl font-bold mt-6"
                            style={{ backgroundImage: `url(${BackGroundImage})` }}
                        >
                            <p className='text-black text-6xl'>Modern Furniture for</p>
                            <p className='text-black text-6xl'>Minimalist Lovers</p>
                            <p className='text-base font-normal text-black'>Experience the ultimate relaxation with our collection of serene <br /> and tranquil living-inspired design</p>
                            <button className='flex items-center bg-black font-normal text-sm mx-auto my-10 pl-10 rounded-full py-1 gap-4'>Expolre More <GoArrowUpRight className='bg-white text-black rounded-full text-4xl p-2' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeroSection1