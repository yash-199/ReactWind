import React from 'react';
import { IoLayersOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { DiResponsive } from "react-icons/di";
const WeOffer = () => {
    return (
        <div className="flex flex-wrap items-center justify-between w-full md:px-20 px-10 mt-10 gap-4">
            <div className="py-2 px-2 rounded-lg drop-shadow-lg w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942]">
                <div className='flex gap-10 px-2 py-2'>
                    <div><IoLayersOutline className='bg-white shadow-xl text-5xl py-2 px-2 rounded-full' /></div>
                    <div>
                        <p className='text-white font-semibold text-lg'>500+ <br />Components</p>
                        <p className='text-white text-justify px-2'>Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.</p>
                    </div>
                </div>
            </div>
            <div className="py-2 px-2 rounded-lg drop-shadow-lg w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] backdrop-blur-lg  bg-[#1C1F26] border-2 border-[#343942]">
                <div className='flex'>
                    <div className='flex gap-10 px-2 py-2'>
                        <div><FaCode className='bg-white shadow-xl text-5xl py-2 px-2 rounded-full' /></div>
                        <div>
                            <p className='text-white font-semibold text-lg'>React, Tailwind CSS, and HTML</p>
                            <p className='text-white text-justify px-2'>Interactive examples for React  powered by Headless UI, plus vanilla HTML if you’d rather write any necessary JS yourself.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-2 px-2 rounded-lg drop-shadow-lg w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] backdrop-blur-lg  bg-[#1C1F26] border-2 border-[#343942]">
                <div className='flex'>
                    <div className='flex gap-10 px-2 py-2'>
                        <div><DiResponsive className='bg-white shadow-xl text-5xl py-2 px-2 rounded-full' /></div>
                        <div>
                            <p className='text-white font-semibold text-lg'>Fully <br /> Responsive</p>
                            <p className='text-white text-justify px-2'>Every example is fully responsive and carefully designed and implemented to look great at any screen size.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeOffer;
