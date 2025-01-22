import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiUpArrowCircle, BiDownArrowCircle } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const [isApplicationUIDropdownOpen, setApplicationUIDropdownOpen] = useState(true);
    const [isCoreComponentsDropdownOpen, setCoreComponentsDropdownOpen] = useState(true);
    const [isMarketingUIDropdownOpen, setMarketingUIDropdownOpen] = useState(true);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="top-0 left-0 h-screen w-64 ">
                <div className="px-4">
                    {/* Application UI Section */}
                    <div className="drop-shadow-lg w-full bg-[#1C1F26] border-2 border-[#343942] shadow-2xl rounded-lg mb-4">
                        <p
                            onClick={() => setApplicationUIDropdownOpen(!isApplicationUIDropdownOpen)}
                            className="flex items-center justify-between px-4 py-4 rounded-full text-white cursor-pointer font-serif font-semibold"
                        >
                            Application UI{' '}
                            {isApplicationUIDropdownOpen ? <BiUpArrowCircle /> : <BiDownArrowCircle />}
                        </p>
                        {isApplicationUIDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ul className="px-4 pb-4 border-l-2 ml-4 border-white">
                                    <NavLink
                                        to="/components/Navbar"
                                        className={({ isActive }) =>
                                            `block py-2 px-4 rounded-md text-white ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-600'
                                            }`
                                        }
                                    >
                                        <li className='flex items-center justify-between'>Navbar <span>8</span></li>
                                    </NavLink>
                                    <NavLink
                                        to="/components/Banner"
                                        className={({ isActive }) =>
                                            `block py-2 px-4 rounded-md text-white ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-600'
                                            }`
                                        }
                                    >
                                        <li className='flex justify-between items-center'>Banner <span>2</span></li>
                                    </NavLink>

                                    <NavLink to="/components/Card" className={({ isActive }) => `block py-2 px-4 rounded-md text-white ${isActive ? 'bg-blue-500 text-white' : "hover:bg-gray-600"}`}>
                                        <li className="py-1 flex justify-between items-center">Card<span>8</span></li>
                                    </NavLink>
                                    <NavLink to="/components/Auth" className={({ isActive }) => `block py-2 px-4 rounded-md text-white ${isActive ? 'bg-blue-500 text-white' : "hover:bg-gray-600"}`}>
                                        <li className="py-1 flex justify-between items-center">Authentication<span>8</span></li>
                                    </NavLink>
                                    <NavLink to="/components/Cookie" className={({ isActive }) => `block py-2 px-4 rounded-md text-white ${isActive ? 'bg-blue-500 text-white' : "hover:bg-gray-600"}`}>
                                        <li className="py-1 flex justify-between items-center">Cookie<span>8</span></li>
                                    </NavLink>
                                    <NavLink to="/components/Contact" className={({ isActive }) => `block py-2 px-4 rounded-md text-white ${isActive ? 'bg-blue-500 text-white' : "hover:bg-gray-600"}`}>
                                        <li className="py-1 flex justify-between items-center">Contact Form<span>8</span></li>
                                    </NavLink>
                                    <NavLink to="/components/Table" className={({ isActive }) => `block py-2 px-4 rounded-md text-white ${isActive ? 'bg-blue-500 text-white' : "hover:bg-gray-600"}`}>
                                        <li className="py-1 flex justify-between items-center">Table<span>8</span></li>
                                    </NavLink>

                                </ul>
                            </motion.div>
                        )}
                    </div>

                    {/* Core Components Section */}
                    {/* <div className="drop-shadow-lg w-full bg-[#1C1F26] border-2 border-[#343942] shadow-2xl rounded-lg mb-4">
                        <p
                            onClick={() => setCoreComponentsDropdownOpen(!isCoreComponentsDropdownOpen)}
                            className="flex items-center text-white justify-between px-4 py-4 rounded-full cursor-pointer font-serif font-semibold"
                        >
                            Core Components{' '}
                            {isCoreComponentsDropdownOpen ? <BiUpArrowCircle /> : <BiDownArrowCircle />}
                        </p>
                        {isCoreComponentsDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ul className="px-5 pb-4 border-l-2 ml-4 border-gray-200">
                                    <li className="py-1 text-white">Accordions</li>
                                    <li className="py-1 text-white">Alerts</li>
                                    <li className="py-1 text-white">Form Element</li>
                                    <li className="py-1 text-white">List Style</li>
                                    <li className="py-1 text-white">Tab</li>
                                    <li className="py-1 text-white">Toggle</li>
                                </ul>
                            </motion.div>
                        )}
                    </div> */}

                    {/* Marketing UI Section */}
                    {/* <div className="drop-shadow-lg w-full bg-[#1C1F26] border-2 border-[#343942] shadow-2xl rounded-lg">
                        <p
                            onClick={() => setMarketingUIDropdownOpen(!isMarketingUIDropdownOpen)}
                            className="flex items-center text-white justify-between px-4 py-4 rounded-full cursor-pointer font-serif font-semibold"
                        >
                            Marketing UI{' '}
                            {isMarketingUIDropdownOpen ? <BiUpArrowCircle /> : <BiDownArrowCircle />}
                        </p>
                        {isMarketingUIDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ul className="px-5 pb-4 border-l-2 ml-4 border-gray-200">
                                    <li className="py-1 text-white">Accordions</li>
                                    <li className="py-1 text-white">Alerts</li>
                                    <li className="py-1 text-white">Form Element</li>
                                    <li className="py-1 text-white">List Style</li>
                                    <li className="py-1 text-white">Tab</li>
                                </ul>
                            </motion.div>
                        )}
                    </div> */}
                </div>
            </div >
        </div >
    );
};

export default Sidebar;
