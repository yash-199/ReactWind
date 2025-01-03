import icon from '../../assets/youtube.webp'
import banner from '../../assets/banner.png'
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
import { FaCode } from "react-icons/fa";

const Card = () => {
    const [showImage, setShowImage] = useState(true);
    const [showPreview, setShowPreview] = useState(true);

    const copyCardCode = () => {
        const copyCode = document.getElementById('CardCode').innerText;
        navigator.clipboard.writeText(copyCode)
            .then(() => alert('Code Copied'));
    };

    return (
        <div className='flex flex-col items-center justify-center mt-10 px-0 sm:px-6 lg:px-8'>
            <div className='py-4 px-4 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full max-w-2xl backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942]'>
                <div className='flex justify-between items-center mb-4'>
                    <div className='hidden sm:flex gap-3 px-2'>
                        <p className='h-2 w-2 bg-red-400 rounded-full'></p>
                        <p className='h-2 w-2 bg-yellow-400 rounded-full'></p>
                        <p className='h-2 w-2 bg-green-400 rounded-full'></p>
                    </div>
                    <div className='flex py-1 px-2 justify-between gap-2 rounded mt-10 md:mt-0 w-1/2'>
                        <p
                            className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer 
                            ${showPreview ? 'text-white bg-indigo-500' : 'text-black bg-white'}`}
                            onClick={() => setShowPreview(true)}
                        >
                            <FaCode /> Prev
                        </p>
                        <p
                            className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer 
                            ${!showPreview ? 'text-white bg-indigo-500' : 'text-black bg-white'}`}
                            onClick={() => setShowPreview(false)}
                        >
                            <FaCode /> Code
                        </p>
                    </div>
                </div>

                {/* Code and Preview */}
                <div className="bg-slate-900 rounded-lg overflow-hidden">
                    {showPreview ? (
                        <div className='w-full md:w-1/2 mx-auto border-2 border-white rounded-lg px-1 py-2'>
                            <div className="flex items-center justify-between w-full">
                                <div className="w-1/3">
                                    <img src={icon} alt="" className="w-10 h-10 rounded-full" />
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
                                    <img src={banner} alt="banner" className="w-full rounded-lg" />
                                ) : (
                                    <div className="relative">
                                        <img src={banner} alt="banner" className="w-full rounded-lg" />
                                        <FaCirclePlay className="absolute text-purple-500 bg-white text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
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
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end mb-2">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={copyCardCode}
                                    title="Copy Code"
                                />
                            </div>
                            {`<div className="bg-slate-900 p-4 rounded-lg shadow-lg sm:w-96 text-black text-sm mt-6">
                            <div className="bg-slate-900 p-4 rounded-lg shadow-lg sm:w-96 text-black text-sm mt-6">
{/* Header */}
<div className="flex items-center justify-between w-full">
<div className="w-1/2">
    <img src={icon} alt="icon" className="w-10 rounded-full" />
</div>
<div className="w-1/2">
    <div className="flex items-center justify-between">
        <p className="flex items-center gap-4 bg-white text-black font-semibold py-2 px-4 rounded-lg cursor-pointer">
            Read Post <FaExternalLinkAlt />
        </p>
        <p className="text-2xl text-center cursor-pointer">
            <HiOutlineDotsVertical />
        </p>
    </div>
</div>
</div>
{/* Title */}
<p className="mt-3 mb-6 text-white font-extrabold text-2xl text-left">
Build a Project using Reactwind Components
</p>
{/* Tags */}
<div className="mt-10 flex items-center gap-2 text-white lowercase">
<p className="border-2 border-white py-1 px-3 rounded-xl font-mono font-semibold">#React</p>
<p className="border-2 border-white py-1 px-3 rounded-xl font-mono font-semibold">#TailwindCSS</p>
<p className="border-2 border-white py-1 px-3 rounded-xl font-mono font-semibold">#HTML</p>
<p className="border-2 border-white py-1 px-3 rounded-xl font-mono font-semibold">#Tag</p>
</div>
{/* Meta Info */}
<ul className="flex items-center gap-6 mt-4">
<li className="text-white font-mono font-bold">Oct 03</li>
<li className="text-white font-mono font-bold list-disc">9h 43m watch time</li>
</ul>
{/* Toggle Section */}
<div className="flex justify-start gap-6 my-5">
<p
    className={py-2 px-4 font-medium rounded-xl drop-shadow-lg \${showImage ? 'border-2 border-white bg-transparent text-white' : 'bg-white text-black'}}
    onClick={() => setShowImage(true)}
>
    With Image
</p>
<p
    className={py-2 px-4 font-medium rounded-xl drop-shadow-lg \${!showImage ? 'border-2 border-white bg-transparent text-white' : 'bg-white text-black'}}
    onClick={() => setShowImage(false)}
>
    With Video
</p>
</div>
{/* Image or Video */}
<div>
{showImage ? (
    <img src={banner} alt="banner" />
) : (
    <div className="relative">
        <img src={banner} alt="banner" className="rounded-lg" />
        <FaCirclePlay className="absolute text-purple-500 bg-white text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
)}
</div>
{/* Footer Actions */}
<div className="flex items-start justify-between">
<div className="flex bg-transparent border-2 border-white py-1 px-3 mt-3 rounded-lg">
    <p className="flex text-white items-center mr-2 gap-2 text-lg font-mono cursor-pointer">
        <BiSolidUpArrowCircle />161
    </p>
    <p className="flex text-white items-center px-2">|</p>
    <p className="flex text-white items-center gap-2 justify-between text-lg font-mono cursor-pointer">
        <BiSolidDownArrowCircle />0
    </p>
</div>
<p className="flex items-center justify-between gap-4 bg-transparent text-white text-2xl font-mono mt-4 cursor-pointer">
    <GoCommentDiscussion />6
</p>
<p className="bg-transparent text-white text-2xl font-mono mt-4 cursor-pointer">
    <MdOutlineBookmarkAdd />
</p>
<p className="bg-transparent text-white text-2xl font-mono mt-4 cursor-pointer">
    <GoLink />
</p>
</div>
</div>
                            </div>`}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;