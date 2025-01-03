import { useState } from 'react'
import { FaCode } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';
import { BiUpArrowCircle, BiDownArrowCircle } from 'react-icons/bi';

const AddToCart = () => {
    const [showPreview, setShowPreview] = useState(true);
    const [isOpen, setIsOpen] = useState(false)
    const [isSubMenuDropdownOpen, setSubMenuDropdownOpen] = useState(false);

    const AddToCard = () => {
        const textToCopy = document.getElementById('CopyCode').innerText;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };

    return (
        <div>
            <div className="flex flex-col justify-center mt-10 px-0 md:px-10">
                <p className="text-white text-4xl font-mono font-semibold">Add To Cart Menu</p>
                <p className="my-5 text-white text-lg text-justify">
                    The AddToCart component is a responsive UI element built with Tailwind CSS and React, featuring a navigation menu, code preview functionality, clipboard copy capability, and dynamic menu interactions with animations.
                </p>
                <div className="py-4 px-4 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full  backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
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

                    {/* content Preview */}
                    <div className="bg-slate-900 rounded-lg overflow-hidden h-96 px-3">
                        {showPreview ? (
                            <div className='bg-white rounded-lg drop-shadow-lg mt-6 flex items-center justify-between'>
                                <p className='text-xl font-serif p-3 font-bold cursor-pointer'>Logo</p>
                                <div className='hidden sm:flex'>
                                    <ul className='flex items-center justify-between gap-4 cursor-pointer'>
                                        <li>Home</li>
                                        <li>Menu</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                                <div className="flex items-center font-bold text-2xl cursor-pointer justify-between gap-4 pr-4">
                                    <CiSearch />
                                    <FaOpencart />
                                    <p className="hidden sm:block text-sm px-4 uppercase border-2 border-black rounded-full hover:bg-slate-200 duration-500 transition-all hover:bg-black hover:text-white font-mono">
                                        Sign In
                                    </p>
                                    {/* Show bars icon only on small screens */}
                                    <FaBarsStaggered
                                        className="text-black cursor-pointer block sm:hidden"
                                        onClick={() => setIsOpen(true)}
                                    />
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
                                            <ul className="px-2 py-4 text-black font-mono text-lg">
                                                <li className="py-2">Sign In</li>
                                                <li className="py-2">Home</li>
                                                <li
                                                    onClick={() => setSubMenuDropdownOpen(!isSubMenuDropdownOpen)}
                                                    className="py-2 flex items-center justify-between cursor-pointer"
                                                >
                                                    Menu
                                                    {isSubMenuDropdownOpen ? <BiUpArrowCircle /> : <BiDownArrowCircle />}
                                                </li>
                                                {isSubMenuDropdownOpen && (
                                                    <ul className="px-10 mt-2">
                                                        <li className="py-1 hover:bg-gray-100 cursor-pointer">Menu1</li>
                                                        <li className="py-1 hover:bg-gray-100 cursor-pointer">Menu2</li>
                                                        <li className="py-1 hover:bg-gray-100 cursor-pointer">Menu3</li>
                                                    </ul>
                                                )}
                                                <li className="py-2">Contact Us</li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}



                            </div>
                        ) : (
                            <div
                                className="p-4 sm:p-6 h-full sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words"
                                id="CopyCode"
                            >
                                <div className="flex justify-end mb-2">
                                    <IoCopy
                                        className="cursor-pointer text-white hover:text-blue-400"
                                        onClick={AddToCard}
                                        title="Copy Code"
                                    />
                                </div>
                                {`
import { useState } from 'react'
import { FaCode } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
const AddToCart = () => {
    return (
      <div className='bg-white rounded-lg drop-shadow-lg mt-6 flex items-center justify-between'>
                                <p className='text-xl font-serif p-3 font-bold cursor-pointer'>Logo</p>
                                <div className='hidden sm:flex'>
                                    <ul className='flex items-center justify-between gap-4 cursor-pointer'>
                                        <li>Home</li>
                                        <li>Menu</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                                <div className="flex items-center font-bold text-2xl cursor-pointer justify-between gap-4 pr-4">
                                    <CiSearch />
                                    <FaOpencart />
                                    <p className="hidden sm:block text-sm px-4 uppercase border-2 border-black rounded-full hover:bg-slate-200 duration-500 transition-all hover:bg-black hover:text-white font-mono">
                                        Sign In
                                    </p>
                                    {/* Show bars icon only on small screens */}
                                    <FaBarsStaggered
                                        className="text-black cursor-pointer block sm:hidden"
                                        onClick={() => setIsOpen(true)}
                                    />
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
                                            <ul className="px-2 py-4 text-black font-mono text-lg">
                                                <li className="py-2">Sign In</li>
                                                <li className="py-2">Home</li>
                                                <li
                                                    onClick={() => setSubMenuDropdownOpen(!isSubMenuDropdownOpen)}
                                                    className="py-2 flex items-center justify-between cursor-pointer"
                                                >
                                                    Menu
                                                    {isSubMenuDropdownOpen ? <BiUpArrowCircle /> : <BiDownArrowCircle />}
                                                </li>
                                                {isSubMenuDropdownOpen && (
                                                    <ul className="px-10 mt-2">
                                                        <li className="py-1 hover:bg-gray-100 cursor-pointer">Menu1</li>
                                                        <li className="py-1 hover:bg-gray-100 cursor-pointer">Menu2</li>
                                                        <li className="py-1 hover:bg-gray-100 cursor-pointer">Menu3</li>
                                                    </ul>
                                                )}
                                                <li className="py-2">Contact Us</li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}



                            </div>
                             )
}

export default AddToCart
                                `}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddToCart