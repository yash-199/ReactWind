import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { LuMoonStar } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { IoCopy } from "react-icons/io5"; // Uncommented for usage
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';

const SimpleNavbar = () => {
    const [showPreview, setShowPreview] = useState(true);
    const [isOpen, setIsOpen] = useState(false)

    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };

    return (
        <div className="sm:px-10 sm:py-5 px-0 py-0">
            <div className="flex flex-col justify-center px-0">
                <p className="text-white text-4xl font-semibold my-10">Simple Navbar</p>
                <div className="py-4 px-4 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="hidden sm:flex gap-3 px-2">
                            <p className="h-2 w-2 bg-red-400 rounded-full"></p>
                            <p className="h-2 w-2 bg-yellow-400 rounded-full"></p>
                            <p className="h-2 w-2 bg-green-400 rounded-full"></p>
                        </div>
                        <div className="flex py-1 px-2 justify-between gap-2 rounded mt-10 md:mt-0 w-72">
                            <p
                                className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer ${showPreview ? 'text-white bg-indigo-500' : 'text-black bg-white'
                                    }`}
                                onClick={() => setShowPreview(true)}
                            >
                                <FaRegEye /> Prev
                            </p>
                            <p
                                className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer ${!showPreview ? 'text-white bg-indigo-500' : 'text-black bg-white'
                                    }`}
                                onClick={() => setShowPreview(false)}
                            >
                                <FaCode /> Code
                            </p>
                        </div>
                    </div>

                    {/* Content Preview */}
                    <div className="bg-slate-900 rounded-lg overflow-hidden h-96">

                        {showPreview ? (
                            <div className="top-0 left-0 w-full h-16 flex items-center justify-between px-4 backdrop-blur-md bg-glass/30 border border-white/20 drop-shadow-3xl z-50">
                                <p className="text-black font-semibold rounded-full uppercase bg-white drop-shadow-lg px-6 py-2">
                                    Logo
                                </p>
                                <ul className="hidden md:flex text-white items-start gap-5 uppercase text-sm">
                                    <NavLink to="/">
                                        <li>Docs</li>
                                    </NavLink>
                                    <NavLink to="#">
                                        <li>Components</li>
                                    </NavLink>
                                    <NavLink>
                                        <li>Blog</li>
                                    </NavLink>
                                    <NavLink>
                                        <li>Showcase</li>
                                    </NavLink>
                                </ul>
                                <div className="flex items-center justify-between gap-5 pr-5">

                                    {/* Hamburger Menu: Visible only on small screens */}
                                    <FaBarsStaggered className="text-white cursor-pointer sm:hidden" onClick={() => setIsOpen(true)} />

                                    {/* On medium screens and above, show Moon and Github icons, and hide hamburger */}
                                    <div className="hidden sm:flex gap-5 items-center">
                                        <LuMoonStar className="m-2 text-black bg-white drop-shadow-xl p-2 text-4xl rounded-full cursor-pointer" />
                                        <FaGithub className="m-2 text-black bg-white drop-shadow-xl p-2 text-4xl rounded-full cursor-pointer" />
                                    </div>
                                </div>

                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, x: "100%" }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: "100%" }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-white w-64 absolute right-0 top-0 mt-0 sm:mt-6 rounded-md py-4 px-6 shadow-lg"
                                    >
                                        <div className="bg-white w-64 absolute right-0 top-0 mt-0 rounded-md py-6 px-6 shadow-lg">
                                            <IoMdClose
                                                className="absolute text-black top-2 right-2 text-2xl border-2 border-black rounded-full p-1 cursor-pointer"
                                                onClick={() => setIsOpen(false)} // Close the sidebar
                                            />
                                            <ul className="px-2 py-4 text-black text-lg">
                                                <li className="py-2">Docs</li>
                                                <li className="py-2">Components</li>
                                                <li className="py-2">Blog</li>
                                                <li className="py-2">Showcase</li>
                                                <li className="py-2">Github</li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                        ) : (
                            <div
                                className="p-4 sm:p-6 h-full sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words"
                                id="codeText"
                            >
                                <div className="flex justify-end mb-2">
                                    <IoCopy
                                        className="cursor-pointer text-white hover:text-blue-400"
                                        onClick={handleCopy}
                                        title="Copy Code"
                                    />
                                </div>
                                {`
 <div className="top-0 left-0 w-full h-16 flex items-center justify-between px-4 backdrop-blur-md bg-glass/30 border border-white/20 drop-shadow-3xl z-50">
                                <p className="text-black font-semibold rounded-full uppercase bg-white drop-shadow-lg px-6 py-2">
                                    Logo
                                </p>
                                <ul className="hidden md:flex text-white items-start gap-5 uppercase text-sm">
                                    <NavLink to="/">
                                        <li>Docs</li>
                                    </NavLink>
                                    <NavLink to="#">
                                        <li>Components</li>
                                    </NavLink>
                                    <NavLink>
                                        <li>Blog</li>
                                    </NavLink>
                                    <NavLink>
                                        <li>Showcase</li>
                                    </NavLink>
                                </ul>
                                <div className="flex items-center justify-between gap-5 pr-5">

                                    {/* Hamburger Menu: Visible only on small screens */}
                                    <FaBarsStaggered className="text-white cursor-pointer sm:hidden" onClick={() => setIsOpen(true)} />

                                    {/* On medium screens and above, show Moon and Github icons, and hide hamburger */}
                                    <div className="hidden sm:flex gap-5 items-center">
                                        <LuMoonStar className="m-2 text-black bg-white drop-shadow-xl p-2 text-4xl rounded-full cursor-pointer" />
                                        <FaGithub className="m-2 text-black bg-white drop-shadow-xl p-2 text-4xl rounded-full cursor-pointer" />
                                    </div>
                                </div>

                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, x: "100%" }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: "100%" }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-white w-64 absolute right-0 top-0 mt-0 sm:mt-6 rounded-md py-4 px-6 shadow-lg"
                                    >
                                        <div className="bg-white w-64 absolute right-0 top-0 mt-0 rounded-md py-6 px-6 shadow-lg">
                                            <IoMdClose
                                                className="absolute text-black top-2 right-2 text-2xl border-2 border-black rounded-full p-1 cursor-pointer"
                                                onClick={() => setIsOpen(false)} // Close the sidebar
                                            />
                                            <ul className="px-2 py-4 text-black text-lg">
                                                <li className="py-2">Docs</li>
                                                <li className="py-2">Components</li>
                                                <li className="py-2">Blog</li>
                                                <li className="py-2">Showcase</li>
                                                <li className="py-2">Github</li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                                `}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleNavbar;
