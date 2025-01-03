import { useState } from 'react'
import { FaCode } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';
import { IoCopy } from "react-icons/io5";

const SideBarMenu = () => {
    const [showPreview, setShowPreview] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const sidebarCode = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
    return (
        <div className='sm:px-10 sm:py-5 px-0 py-0'>
            <div className='flex flex-col justify-center mt-10 px-0'>
                <p className="text-white text-4xl font-mono font-semibold">Side Navbar For Desktop & Mobile</p>
                <p className="my-5 text-white text-lg text-justify">
                    The SideBarMenu component is a React functional component that implements a sidebar. It utilizes Tailwind CSS for styling and includes features like a collapsible sidebar, code copy functionality, and dynamic content rendering based on the user's choice.
                </p>
                <div className="py-4 px-4 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
                    {/* header */}
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
                    {/* content preview */}
                    <div className="bg-slate-900 px-2 pt-6 rounded-lg overflow-hidden h-96 relative">
                        {showPreview ? (
                            <div>
                                {/* Header with Logo and Menu Icon */}
                                <div className="bg-white my-2 rounded-lg px-3 py-3 flex items-center justify-between">
                                    <p className="text-black font-semibold rounded-full font-mono uppercase bg-white drop-shadow-lg px-6 py-2">
                                        Logo
                                    </p>
                                    {/* Menu toggle button */}
                                    <p onClick={() => setIsOpen(true)} className="cursor-pointer">
                                        <FaBarsProgress />
                                    </p>
                                </div>

                                {/* Sidebar */}
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, x: "100%" }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: "100%" }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-white w-64 absolute right-0 top-0 mt-6 rounded-md py-4 px-6 shadow-lg"
                                    >
                                        {/* Close button */}
                                        <IoMdClose
                                            onClick={() => setIsOpen(false)}
                                            className="absolute top-2 right-2 text-2xl border-2 border-black rounded-full p-1 cursor-pointer"
                                        />
                                        {/* Sidebar menu items */}
                                        <ul className="mt-8 space-y-4">
                                            <li className="hover:text-slate-900 cursor-pointer">Home</li>
                                            <li className="hover:text-slate-900 cursor-pointer">About</li>
                                            <li className="hover:text-slate-900 cursor-pointer">Contact Us</li>
                                        </ul>
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
                                        onClick={sidebarCode}
                                        title="Copy Code"
                                    />
                                </div>
                                {` 
<div>
{/* Header with Logo and Menu Icon */}
< className="bg-white my-2 rounded-lg px-3 py-3 flex items-center justify-between">
    <p className="text-black font-semibold rounded-full font-mono uppercase bg-white drop-shadow-lg px-6 py-2">
        Logo
    </p>
    {/* Menu toggle button */}
    <p onClick={() => setIsOpen(true)} className="cursor-pointer">
        <FaBarsProgress />
    </p>

{/* Sidebar */}
{isOpen && (
    <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.5 }}
        className="bg-white w-64 absolute right-0 top-0 mt-6 rounded-md py-4 px-6 shadow-lg"
    >
        {/* Close button */}
        <IoMdClose
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-2xl border-2 border-black rounded-full p-1 cursor-pointer"
        />
        {/* Sidebar menu items */}
        <ul className="mt-8 space-y-4">
            <li className="hover:text-slate-900 cursor-pointer">Home</li>
            <li className="hover:text-slate-900 cursor-pointer">About</li>
            <li className="hover:text-slate-900 cursor-pointer">Contact Us</li>
        </ul>
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

export default SideBarMenu