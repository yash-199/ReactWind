import React from 'react'
import { assets } from "../assets/ApplicationUi-Image/assets.js";
import { NavLink } from 'react-router-dom';
const CoreComponents = () => {
    return (
        <div className="px-4 py-5">
            <p className="text-white text-4xl font-semibold">Core Components</p>
            <p className="my-5 text-white text-lg text-justify">
                Kickstart almost any project with essential Tailwind CSS UI elements through our Core Components collection.
                This category includes versatile button styles, checkbox variations, tab styles, accordions, alerts, forms,
                list styles, toggle buttons, badges, breadcrumbs, dropdowns, tooltips, progress bars, and more –
                Almost all core components are free for commercial use.
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-5 gap-y-6">
                <NavLink to='/components/Accordion'>
                    <div className="bg-[#1C1F26] border-2 border-[#343942] shadow-2xl hover:drop-shadow-lg hover:shadow-lg rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 pb-2">
                        <img src={assets.navbar_img} />
                        <hr className="py-1" />
                        <p className="text-medium text-white text-lg px-4">Accordion with Icon</p>
                        <p className="px-4 text-medium text-white text-lg">8 components</p>
                    </div>
                </NavLink>
                <NavLink to='/components/Tab'>
                    <div className="bg-[#1C1F26] border-2 border-[#343942] shadow-2xl hover:drop-shadow-lg hover:shadow-lg rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 pb-2">
                        <img src={assets.navbar_img} />
                        <hr className="py-1" />
                        <p className="text-medium text-white text-lg px-4">Tab</p>
                        <p className="px-4 text-medium text-white text-lg">2 components</p>
                    </div>
                </NavLink>
                <NavLink to='/components/HeroSection'>
                    <div className="bg-[#1C1F26] border-2 border-[#343942] shadow-2xl hover:drop-shadow-lg hover:shadow-lg rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 pb-2">
                        <img src={assets.navbar_img} />
                        <hr className="py-1" />
                        <p className="text-medium text-white text-lg px-4">Hero Section</p>
                        <p className="px-4 text-medium text-white text-lg">2 components</p>
                    </div>
                </NavLink>

            </div>
        </div>
    )
}

export default CoreComponents