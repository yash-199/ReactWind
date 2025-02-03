// import icon from '../../assets/youtube.webp'
import image1 from '../assets/BannerUI-Image/thumbslider-1.webp';
import image2 from '../assets/BannerUI-Image/thumbslider-2.webp';
import { BiSolidDownArrowCircle } from "react-icons/bi";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GoLink } from "react-icons/go";
import { FaCirclePlay } from "react-icons/fa6";
import { useState } from 'react';
import { IoCopy } from "react-icons/io5";
import { FaRegEye, FaCode } from "react-icons/fa";
const BlogCard = () => {
    const [showPreview, setShowPreview] = useState(true);
    const [showImage, setShowImage] = useState(true);
    const CopyCode = () => {
        const textToCopy = document.getElementById('CopyCode').innerText;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
    return (
        <div>
            <h1 className="font-semibold text-2xl my-10">Blog Card</h1>
            <div className="py-4 px-4 mt-6 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <div className="hidden sm:flex gap-3 px-2">
                        <p className="h-2 w-2 bg-red-400 rounded-full"></p>
                        <p className="h-2 w-2 bg-yellow-400 rounded-full"></p>
                        <p className="h-2 w-2 bg-green-400 rounded-full"></p>
                    </div>
                    <div className="flex py-1 px-2 justify-between gap-2 rounded mt-10 md:mt-0 w-72">
                        <p
                            className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer ${showPreview ? "text-white bg-indigo-500" : "text-black bg-white"
                                }`}
                            onClick={() => setShowPreview(true)}
                        >
                            <FaRegEye /> Prev
                        </p>
                        <p
                            className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer ${!showPreview ? "text-white bg-indigo-500" : "text-black bg-white"
                                }`}
                            onClick={() => setShowPreview(false)}
                        >
                            <FaCode /> Code
                        </p>
                    </div>
                </div>
                {/* Content */}
                <div className="bg-slate-900 rounded-lg overflow-hidden py-2">
                    {showPreview ? (
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-2 gap-4">
                            <div className='mx-auto border-2 border-white rounded-lg px-1 py-2'>
                                <div className="flex items-center justify-between w-full">
                                    <div className="w-1/3">
                                        <img src={image1} alt="" className="w-10 h-10 rounded-full" />
                                    </div>
                                    <div className="w-2/3 flex items-center justify-end gap-4">
                                        <button className="flex items-center gap-2 bg-white text-black font-semibold py-1 px-3 rounded-lg">
                                            Read Post <FaExternalLinkAlt />
                                        </button>
                                        <HiOutlineDotsVertical className="text-2xl text-white cursor-pointer" />
                                    </div>
                                </div>
                                <p className="mt-3 mb-4 text-white font-extrabold text-lg md:text-2xl">
                                    Build a Project using Reactwind Components
                                </p>
                                <div className="flex flex-wrap gap-2 text-white">
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#React</span>
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#TailwindCSS</span>
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#HTML</span>
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#Tag</span>
                                </div>
                                <ul className="flex flex-wrap gap-4 mt-4 text-white text-xs font-mono">
                                    <li>Oct 03</li>
                                    <li className="list-disc">9h 43m watch time</li>
                                </ul>
                                <div className="flex gap-4 my-4">
                                    <button
                                        className={`py-2 px-4 font-medium rounded-xl ${showImage ? 'border-2 border-white bg-transparent text-white' : 'bg-white text-black'}`}
                                        onClick={() => setShowImage(true)}
                                    >
                                        With Image
                                    </button>
                                    <button
                                        className={`py-2 px-4 font-medium rounded-xl ${!showImage ? 'border-2 border-white bg-transparent text-white' : 'bg-white text-black'}`}
                                        onClick={() => setShowImage(false)}
                                    >
                                        With Video
                                    </button>
                                </div>
                                <div>
                                    {showImage ? (
                                        <img src={image2} alt="banner" className="w-full rounded-lg" />
                                    ) : (
                                        <div className="relative">
                                            <img src={image2} alt="banner" className="w-full rounded-lg" />
                                            <FaCirclePlay className="absolute text-purple-500 bg-transparent text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div className="flex items-center gap-2 bg-transparent border-2 border-white py-1 px-2 rounded-lg">
                                        <BiSolidUpArrowCircle className="text-white" /> <span className="text-white">161</span>
                                        <span className="text-white">|</span>
                                        <BiSolidDownArrowCircle className="text-white" /> <span className="text-white">0</span>
                                    </div>
                                    <GoCommentDiscussion className="text-white text-2xl cursor-pointer" />
                                    <MdOutlineBookmarkAdd className="text-white text-2xl cursor-pointer" />
                                    <GoLink className="text-white text-2xl cursor-pointer" />
                                </div>
                            </div>
                            <div className='mx-auto border-2 border-white rounded-lg px-1 py-2'>
                                <div className="flex items-center justify-between w-full">
                                    <div className="w-1/3">
                                        <img src={image1} alt="" className="w-10 h-10 rounded-full" />
                                    </div>
                                    <div className="w-2/3 flex items-center justify-end gap-4">
                                        <button className="flex items-center gap-2 bg-white text-black font-semibold py-1 px-3 rounded-lg">
                                            Read Post <FaExternalLinkAlt />
                                        </button>
                                        <HiOutlineDotsVertical className="text-2xl text-white cursor-pointer" />
                                    </div>
                                </div>
                                <p className="mt-3 mb-4 text-white font-extrabold text-lg md:text-2xl">
                                    Build a Project using Reactwind Components
                                </p>
                                <div className="flex flex-wrap gap-2 text-white">
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#React</span>
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#TailwindCSS</span>
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#HTML</span>
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#Tag</span>
                                </div>
                                <ul className="flex flex-wrap gap-4 mt-4 text-white text-xs font-mono">
                                    <li>Oct 03</li>
                                    <li className="list-disc">9h 43m watch time</li>
                                </ul>
                                <div className="flex gap-4 my-4">
                                    <button
                                        className={`py-2 px-4 font-medium rounded-xl ${showImage ? 'border-2 border-white bg-transparent text-white' : 'bg-white text-black'}`}
                                        onClick={() => setShowImage(true)}
                                    >
                                        With Image
                                    </button>
                                    <button
                                        className={`py-2 px-4 font-medium rounded-xl ${!showImage ? 'border-2 border-white bg-transparent text-white' : 'bg-white text-black'}`}
                                        onClick={() => setShowImage(false)}
                                    >
                                        With Video
                                    </button>
                                </div>
                                <div>
                                    {showImage ? (
                                        <img src={image2} alt="banner" className="w-full rounded-lg" />
                                    ) : (
                                        <div className="relative">
                                            <img src={image2} alt="banner" className="w-full rounded-lg" />
                                            <FaCirclePlay className="absolute text-purple-500 bg-transparent text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div className="flex items-center gap-2 bg-transparent border-2 border-white py-1 px-2 rounded-lg">
                                        <BiSolidUpArrowCircle className="text-white" /> <span className="text-white">161</span>
                                        <span className="text-white">|</span>
                                        <BiSolidDownArrowCircle className="text-white" /> <span className="text-white">0</span>
                                    </div>
                                    <GoCommentDiscussion className="text-white text-2xl cursor-pointer" />
                                    <MdOutlineBookmarkAdd className="text-white text-2xl cursor-pointer" />
                                    <GoLink className="text-white text-2xl cursor-pointer" />
                                </div>
                            </div>
                            <div className='mx-auto border-2 border-white rounded-lg px-1 py-2'>
                                <div className="flex items-center justify-between w-full">
                                    <div className="w-1/3">
                                        <img src={image1} alt="" className="w-10 h-10 rounded-full" />
                                    </div>
                                    <div className="w-2/3 flex items-center justify-end gap-4">
                                        <button className="flex items-center gap-2 bg-white text-black font-semibold py-1 px-3 rounded-lg">
                                            Read Post <FaExternalLinkAlt />
                                        </button>
                                        <HiOutlineDotsVertical className="text-2xl text-white cursor-pointer" />
                                    </div>
                                </div>
                                <p className="mt-3 mb-4 text-white font-extrabold text-lg md:text-2xl">
                                    Build a Project using Reactwind Components
                                </p>
                                <div className="flex flex-wrap gap-2 text-white">
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#React</span>
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#TailwindCSS</span>
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#HTML</span>
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#Tag</span>
                                </div>
                                <ul className="flex flex-wrap gap-4 mt-4 text-white text-xs font-mono">
                                    <li>Oct 03</li>
                                    <li className="list-disc">9h 43m watch time</li>
                                </ul>
                                <div className="flex gap-4 my-4">
                                    <button
                                        className={`py-2 px-4 font-medium rounded-xl ${showImage ? 'border-2 border-white bg-transparent text-white' : 'bg-white text-black'}`}
                                        onClick={() => setShowImage(true)}
                                    >
                                        With Image
                                    </button>
                                    <button
                                        className={`py-2 px-4 font-medium rounded-xl ${!showImage ? 'border-2 border-white bg-transparent text-white' : 'bg-white text-black'}`}
                                        onClick={() => setShowImage(false)}
                                    >
                                        With Video
                                    </button>
                                </div>
                                <div>
                                    {showImage ? (
                                        <img src={image2} alt="banner" className="w-full rounded-lg" />
                                    ) : (
                                        <div className="relative">
                                            <img src={image2} alt="banner" className="w-full rounded-lg" />
                                            <FaCirclePlay className="absolute text-purple-500 bg-transparent text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div className="flex items-center gap-2 bg-transparent border-2 border-white py-1 px-2 rounded-lg">
                                        <BiSolidUpArrowCircle className="text-white" /> <span className="text-white">161</span>
                                        <span className="text-white">|</span>
                                        <BiSolidDownArrowCircle className="text-white" /> <span className="text-white">0</span>
                                    </div>
                                    <GoCommentDiscussion className="text-white text-2xl cursor-pointer" />
                                    <MdOutlineBookmarkAdd className="text-white text-2xl cursor-pointer" />
                                    <GoLink className="text-white text-2xl cursor-pointer" />
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end mb-2">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={CopyCode}
                                    title="Copy Code"
                                />
                            </div>
                            {`
            ${` <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-2 gap-4">
                // add two more 
                            <div className='mx-auto border-2 border-white rounded-lg px-1 py-2'>
                                <div className="flex items-center justify-between w-full">
                                    <div className="w-1/3">
                                        <img src={image1} alt="" className="w-10 h-10 rounded-full" />
                                    </div>
                                    <div className="w-2/3 flex items-center justify-end gap-4">
                                        <button className="flex items-center gap-2 bg-white text-black font-semibold py-1 px-3 rounded-lg">
                                            Read Post <FaExternalLinkAlt />
                                        </button>
                                        <HiOutlineDotsVertical className="text-2xl text-white cursor-pointer" />
                                    </div>
                                </div>
                                <p className="mt-3 mb-4 text-white font-extrabold text-lg md:text-2xl">
                                    Build a Project using Reactwind Components
                                </p>
                                <div className="flex flex-wrap gap-2 text-white">
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#React</span>
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#TailwindCSS</span>
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#HTML</span>
                                    <span className="border-2 border-white py-1 px-2 rounded-xl font-mono text-xs font-semibold">#Tag</span>
                                </div>
                                <ul className="flex flex-wrap gap-4 mt-4 text-white text-xs font-mono">
                                    <li>Oct 03</li>
                                    <li className="list-disc">9h 43m watch time</li>
                                </ul>
                                <div className="flex gap-4 my-4">
                                    <button
    className={py-2 px-4 font-medium rounded-xl drop-shadow-lg \${showImage ? 'border-2 border-white bg-transparent text-white' : 'bg-white text-black'}}
    onClick={() => setShowImage(true)}
>
    With Image
</button>
<button
    className={py-2 px-4 font-medium rounded-xl drop-shadow-lg \${!showImage ? 'border-2 border-white bg-transparent text-white' : 'bg-white text-black'}}
    onClick={() => setShowImage(false)}
>
    With Video
</button>
                                </div>
                <div>
                    {showImage ? (
                        <img src={image2} alt="banner" className="w-full rounded-lg" />
                    ) : (
                        <div className="relative">
                            <img src={image2} alt="banner" className="w-full rounded-lg" />
                            <FaCirclePlay className="absolute text-purple-500 bg-transparent text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    )}
                </div>
                <div className="flex justify-between mt-4">
                    <div className="flex items-center gap-2 bg-transparent border-2 border-white py-1 px-2 rounded-lg">
                        <BiSolidUpArrowCircle className="text-white" /> <span className="text-white">161</span>
                        <span className="text-white">|</span>
                        <BiSolidDownArrowCircle className="text-white" /> <span className="text-white">0</span>
                    </div>
                    <GoCommentDiscussion className="text-white text-2xl cursor-pointer" />
                    <MdOutlineBookmarkAdd className="text-white text-2xl cursor-pointer" />
                    <GoLink className="text-white text-2xl cursor-pointer" />
                </div>
            </div>

        </div>`}
        `}
                        </div >
                    )}
                </div >
            </div >
        </div >
    )
}

export default BlogCard