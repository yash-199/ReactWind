import { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { GoSidebarCollapse } from "react-icons/go";
import { SlUserFollowing } from "react-icons/sl";
import { MdWhatshot } from "react-icons/md";
import { GiUpgrade } from "react-icons/gi";
// import { BiUpArrow } from "react-icons/bi";
import './Dashboard.css'

const DashboardMenu = () => {
    const [showPreview, setShowPreview] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false)
    return (
        <div className='flex flex-col justify-center mt-10 px-0 md:px-10'>
            <p className="text-white text-4xl font-mono font-semibold">Dashboard Menu</p>
            <p className="my-5 text-white text-lg text-justify">
                The DashboardMenu component creates a visually appealing dashboard layout with a flexible and responsive design.
            </p>
            <div className='py-4 px-4 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full  backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl'>
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

                {/* content  */}
                <div className="bg-slate-900 rounded-lg overflow-hidden h-96">
                    <div className='bg-white border-2  mt-6 px-4 flex items-center justify-between'>
                        <p className='text-xl font-serif p-3 font-bold cursor-pointer'>Logo</p>
                        <div className='flex items-center justify-between gap-4'>
                            <div className="flex sm:flex items-center gap-4 px-4 py-2 rounded-full bg-[#333A5C] hidden">
                                <GrSearch className="h-5 w-5 text-white" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-400"
                                />
                            </div>
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
                                </span>
                                <IoMdNotificationsOutline className='cursor-pointer' />
                            </span>
                            {/* <IoMdNotificationsOutline className='text-3xl cursor-pointer' />
                            <p className="absolute right-28 top-34  h-2 w-2 bg-red-400 rounded-full"></p> */}
                            <FaUserCircle className='text-3xl cursor-pointer' />
                        </div>
                    </div>
                    <div className="bg-white px-4 w-full">
                        <ul className="text-black flex items-center justify-between gap-x-2 py-2 overflow-x-auto hide-scrollbar flex-nowrap sm:overflow-x-hidden lg:hidden">
                            <li className="text-center shrink-0"><CiSquarePlus className="text-3xl bg-black text-white rounded-lg" /></li>
                            <li className="text-center shrink-0">For You</li>
                            <li className="text-center shrink-0">Following</li>
                            <li className="text-center shrink-0">Discussions</li>
                            <li className="text-center shrink-0">Tags</li>
                            <li className="text-center shrink-0">Sources</li>
                            <li className="text-center shrink-0">Leaderboard</li>
                            <li className="text-center shrink-0">Bookmark</li>
                            <li className="text-center shrink-0">History</li>
                        </ul>
                    </div>
                    <div className='flex'>
                        <div
                            className={`${isCollapsed ? 'w-[5%]' : 'w-[20%]'} 
                bg-white h-screen transition-all duration-300
                hidden sm:block sm:overflow-auto`}
                        >

                            <div className='flex items-center justify-between px-4 py-4'>
                                <p className={`${isCollapsed ? 'hidden' : ''}`}>Menu</p>
                                <p onClick={() => setIsCollapsed(!isCollapsed)}><GoSidebarCollapse /></p>
                            </div>
                            <ul className=''>
                                <li
                                    className={`flex items-center gap-4 px-2 py-2 text-sm ${isCollapsed ? 'justify-center' : ''
                                        }`}
                                >
                                    <FaUserCircle className="text-lg cursor-pointer" />
                                    {!isCollapsed && <span>My Feed</span>}
                                </li>
                                <li
                                    className={`flex items-center gap-4 px-2 py-2 text-sm ${isCollapsed ? 'justify-center' : ''
                                        }`}
                                >
                                    <SlUserFollowing className="text-lg cursor-pointer" />
                                    {!isCollapsed && <span>Following</span>}
                                </li>
                                <li
                                    className={`flex items-center gap-4 px-2 py-2 text-sm ${isCollapsed ? 'justify-center' : ''
                                        }`}
                                >
                                    <MdWhatshot className="text-lg cursor-pointer" />
                                    {!isCollapsed && <span>Explore</span>}
                                </li>
                                <li
                                    className={`flex items-center gap-4 px-2 py-2 text-sm ${isCollapsed ? 'justify-center' : ''
                                        }`}
                                >
                                    <FaRegEye className="text-lg cursor-pointer" />
                                    {!isCollapsed && <span>History</span>}
                                </li>
                                <li
                                    className={`flex items-center gap-4 px-2 py-2 text-sm ${isCollapsed ? 'justify-center' : ''
                                        }`}
                                >
                                    <GiUpgrade className="text-lg cursor-pointer" />
                                    {!isCollapsed && <span>Upgrade to Plus</span>}
                                </li>
                            </ul>
                        </div>
                        <div className='w-[80%] px-4 py-4'>
                            <p className='text-center text-4xl text-white py-16 font-mono font-semibold'>Add Your Widget</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardMenu