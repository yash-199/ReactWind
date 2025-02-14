import React from 'react'
import { NavLink } from 'react-router-dom'
import HeroSection1 from '../../HeroSection/HeroSection1'
const HeroSection = () => {
    return (
        <div className="hide-scrollbar w-10/12 mx-auto pt-20 text-white">
            <div className='mx-auto text-center'>
                <h1 className="mt-10 text-white mb-6 text-center text-4xl font-semibold leading-relaxed">ReCom Hero Section UI Build Faster! </h1>
                <p className='text-white'>
                    Over 600+ free & premium Tailwind CSS UI components, blocks, sections, and templates to
                    <br /> quickly create beautiful web user interfaces for your web projects.
                    <br /> From Marketing and Dashboard to E-commerce, Application, and Core components, each
                    high-quality UI element is handcrafted to <br /> solve your design and coding challenges
                    and bring your web project closer to launch. All components are available in HTML, React,
                    and Vue.
                </p>
            </div>
            <div className='flex sm:justify-center gap-10 pt-5 w-full overflow-x-auto'>
                <NavLink to='/components/Accordion'>
                    <p className='text-white hover:bg-white duration-300 transition-all hover:text-black border border-white font-bold py-3 px-5 uppercase rounded'>
                        Accordion
                    </p>
                </NavLink>
                <NavLink to='/components/Card'>
                    <p className='text-white hover:bg-white duration-300 transition-all hover:text-black border border-white font-bold py-3 px-5 uppercase rounded'>
                        Tab
                    </p>
                </NavLink>
            </div>
            <HeroSection1 />
        </div>
    )
}

export default HeroSection