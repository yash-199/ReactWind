import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ComponentSidebar from '../component/ComponentSidebar';
import AllUI from '../component/AllUI';
import '../index.css'
const Components = () => {
    const location = useLocation();

    // Check if the current route is the base route
    const isBaseRoute = location.pathname === '/components'; // Adjust the base route as needed

    return (
        <div className="pt-20 px-4 h-full">
            <div className="m-auto text-white text-center">
                <p className="mt-20 mb-6 text-4xl font-semibold font-serif leading-relaxed">
                    React Tailwind CSS UI Components, <br /> Blocks and Templates to Build Faster!
                </p>
                <p>
                    Over 600+ free & premium Tailwind CSS UI components, blocks, sections, and templates to
                    <br /> quickly create beautiful web user interfaces for your web projects.
                    <br /> From Marketing and Dashboard to E-commerce, Application, and Core components, each
                    high-quality UI element is handcrafted to <br /> solve your design and coding challenges
                    and bring your web project closer to launch. All components are available in HTML, React,
                    and Vue.
                </p>
            </div>
            <hr className="mt-10" />
            <div className="flex rounded-lg drop-shadow-lg w-full mt-10 h-[calc(100vh-10rem)]">
                {/* Sidebar */}
                <div className="w-[20%] hidden sm:block rounded px-4 py-4 h-full overflow-y-auto">
                    <ComponentSidebar />
                </div>
                {/* Content Area */}
                <div className="w-full sm:w-[80%] h-full overflow-y-auto">
                    {isBaseRoute ? <AllUI /> : <Outlet />}
                </div>
            </div>
        </div>
    );
};

export default Components;
