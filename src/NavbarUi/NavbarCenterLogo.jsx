import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';

const NavbarCenterLogo = () => {
    const [showPreview, setShowPreview] = useState(true);
    const [isOpen, setIsOpen] = useState(false)
    const centerLogoCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
    return (
        <div className="sm:px-10 sm:py-5 px-0 py-0">
            <div className="flex flex-col justify-center mt-10 px-0">
                <p className="text-white text-4xl font-semibold my-10">Center Logo Navbar</p>
                <div className="py4 px-4 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
                    {/* header */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="hidden sm:flex gap-3 px-2">
                            <p className="h-2 w-2 bg-red-400 rounded-full"></p>
                            <p className="h-2 w-2 bg-yellow-400 rounded-full"></p>
                            <p className="h-2 w-2 bg-green-400 rounded-full"></p>
                        </div>
                        <div className="flex py-1 px-2 justify-between gap-2 rounded mt-10 md:mt-0 w-72">
                            <p
                                className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full  text-center cursor-pointer ${showPreview ? 'text-white bg-indigo-500' : 'text-black bg-white'
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
                    <div className="bg-slate-900 rounded-lg overflow-hidden h-96 px-6">
                        {showPreview ? (
                            <div className="bg-white flex items-center justify-between mt-5 py-4 px-4 rounded-full">

                                <ul className="sm:flex items-center justify-between hidden gap-4">
                                    <li className="font-normal">Home</li>
                                    <li className="font-normal">About</li>
                                    <li className="font-normal">Service</li>
                                    <li className="font-normal">Contact</li>
                                </ul>
                                <p className="text-black font-semibold rounded-full uppercase bg-white drop-shadow-lg px-6 py-2">
                                    Logo
                                </p>
                                <div className="sm:flex hidden items-center justify-between gap-4">
                                    <p className='text-md px-4 uppercase border-2 border-black rounded-full hover:bg-slate-200 duration-500 transition-all hover:bg-black hover:text-white'>Sign In</p>
                                    <p className='text-md px-4 uppercase border-2 border-black rounded-full hover:bg-slate-200 duration-500 transition-all bg-black text-white hover:text-black hover:bg-white'>Login</p>
                                </div>
                                <FaBarsStaggered
                                    className="text-black cursor-pointer block sm:hidden"
                                    onClick={() => setIsOpen(true)}
                                />
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, x: "100%" }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: "100%" }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-white w-64 absolute right-0 top-28 mt-0 sm:mt-6 rounded-md py-4 px-6 shadow-lg"
                                    >
                                        <div className="bg-white w-64 h-fit absolute right-0 top-0 mt-0 rounded-md py-6 px-6 shadow-lg">
                                            <IoMdClose
                                                className="absolute text-black top-2 right-2 text-2xl border-2 border-black rounded-full p-1 cursor-pointer"
                                                onClick={() => setIsOpen(false)} // Close the sidebar
                                            />
                                            <ul className="px-2 py-4 text-black text-lg">
                                                <li className="font-normal">Home</li>
                                                <li className="font-normal">About</li>
                                                <li className="font-normal">Service</li>
                                                <li className="font-normal">Contact</li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ) : (
                            <div
                                className="bg-slate-900 p-4 sm:p-6 h-full sm:h-96 text-left overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words"
                                id="codeText"
                            >
                                <div className="flex justify-end mb-2">
                                    <IoCopy
                                        className="cursor-pointer text-white hover:text-blue-400"
                                        onClick={centerLogoCopy}
                                        title="Copy Code"
                                    />
                                </div>
                                {` 
import { FaCode } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
 <div className="bg-white flex items-center justify-between mt-5 py-4 px-4 rounded-full">

                                <ul className="sm:flex items-center justify-between hidden gap-4">
                                    <li className="font-normal">Home</li>
                                    <li className="font-normal">About</li>
                                    <li className="font-normal">Service</li>
                                    <li className="font-normal">Contact</li>
                                </ul>
                                <p className="text-black font-semibold rounded-full uppercase bg-white drop-shadow-lg px-6 py-2">
                                    Logo
                                </p>
                                <div className="sm:flex hidden items-center justify-between gap-4">
                                    <p className='text-md px-4 uppercase border-2 border-black rounded-full hover:bg-slate-200 duration-500 transition-all hover:bg-black hover:text-white'>Sign In</p>
                                    <p className='text-md px-4 uppercase border-2 border-black rounded-full hover:bg-slate-200 duration-500 transition-all bg-black text-white hover:text-black hover:bg-white'>Login</p>
                                </div>
                                <FaBarsStaggered
                                    className="text-black cursor-pointer block sm:hidden"
                                    onClick={() => setIsOpen(true)}
                                />
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, x: "100%" }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: "100%" }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-white w-64 absolute right-0 top-28 mt-0 sm:mt-6 rounded-md py-4 px-6 shadow-lg"
                                    >
                                        <div className="bg-white w-64 h-fit absolute right-0 top-0 mt-0 rounded-md py-6 px-6 shadow-lg">
                                            <IoMdClose
                                                className="absolute text-black top-2 right-2 text-2xl border-2 border-black rounded-full p-1 cursor-pointer"
                                                onClick={() => setIsOpen(false)} // Close the sidebar
                                            />
                                            <ul className="px-2 py-4 text-black font-mono text-lg">
                                                <li className="font-normal">Home</li>
                                                <li className="font-normal">About</li>
                                                <li className="font-normal">Service</li>
                                                <li className="font-normal">Contact</li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </div>`}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavbarCenterLogo