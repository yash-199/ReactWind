import { IoCopy } from "react-icons/io5";
import { FaRegEye, FaCode } from "react-icons/fa";
import image1 from '../assets/BannerUI-Image/full-screen-4.webp'
import profile1 from '../assets/BannerUI-Image/profile1.png'
import { useState } from 'react';
const CardWAuthorImg = () => {
    const [showPreview, setShowPreview] = useState(true)
    const copyCardCode = () => {
        const copyCode = document.getElementById('CardCode').innerText;
        navigator.clipboard.writeText(copyCode)
            .then(() => alert('Code Copied'));
    };
    return (
        <div>
            <h1 className="font-semibold text-2xl my-10">Card with Author Image</h1>

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
                <div className="bg-slate-900 rounded-lg overflow-hidden py-4">
                    {showPreview ? (
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4 gap-4">
                            <div
                                className="border-2 border-white py-2 px-2 rounded-md"
                                style={{ boxShadow: '1px 1px 1px 1px rgba(255, 255, 255, 0.6)' }}
                            >
                                {/* Author Name and position */}
                                <div className="flex items-center gap-2">
                                    <img src={profile1} className="w-20 rounded-full" alt="" />
                                    <div>
                                        <p>Sten Thomas</p>
                                        <p>Frontend Developer</p>
                                    </div>
                                </div>
                                <img src={image1} className="w-full rounded-md py-1 px-1" alt="" />
                                <h1 className="text-justify font-bold text-xl">Card Title Here</h1>
                                <p className="text-justify text-md py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse, harum iure a repudiandae magnam hic cupiditate id nam reprehenderit voluptate numquam magni sapiente excepturi amet maxime nostrum, in recusandae.</p>
                            </div>
                            <div
                                className="border-2 border-white py-2 px-2 rounded-md"
                                style={{ boxShadow: '1px 1px 1px 1px rgba(255, 255, 255, 0.6)' }}
                            >
                                {/* Author Name and position */}
                                <div className="flex items-center gap-2">
                                    <img src={profile1} className="w-20 rounded-full" alt="" />
                                    <div>
                                        <p>Sten Thomas</p>
                                        <p>Frontend Developer</p>
                                    </div>
                                </div>
                                <img src={image1} className="w-full rounded-md py-1 px-1" alt="" />
                                <h1 className="text-justify font-bold text-xl">Card Title Here</h1>
                                <p className="text-justify text-md py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse, harum iure a repudiandae magnam hic cupiditate id nam reprehenderit voluptate numquam magni sapiente excepturi amet maxime nostrum, in recusandae.</p>
                            </div>
                            <div
                                className="border-2 border-white py-2 px-2 rounded-md"
                                style={{ boxShadow: '1px 1px 1px 1px rgba(255, 255, 255, 0.6)' }}
                            >
                                {/* Author Name and position */}
                                <div className="flex items-center gap-2">
                                    <img src={profile1} className="w-20 rounded-full" alt="" />
                                    <div>
                                        <p>Sten Thomas</p>
                                        <p>Frontend Developer</p>
                                    </div>
                                </div>
                                <img src={image1} className="w-full rounded-md py-1 px-1" alt="" />
                                <h1 className="text-justify font-bold text-xl">Card Title Here</h1>
                                <p className="text-justify text-md py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse, harum iure a repudiandae magnam hic cupiditate id nam reprehenderit voluptate numquam magni sapiente excepturi amet maxime nostrum, in recusandae.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="p-4 sm:p-0 h-64 sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={copyCardCode}
                                    title="Copy Code"
                                />
                            </div>
                            {` <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4 gap-4">
                            <div
                                className="border-2 border-white py-2 px-2 rounded-md"
                                style={{ boxShadow: '1px 1px 1px 1px rgba(255, 255, 255, 0.6)' }}
                            >
                                {/* Author Name and position */}
                                <div className="flex items-center gap-2">
                                    <img src={profile1} className="w-20 rounded-full" alt="" />
                                    <div>
                                        <p>Sten Thomas</p>
                                        <p>Frontend Developer</p>
                                    </div>
                                </div>
                                <img src={image1} className="w-full rounded-md py-1 px-1" alt="" />
                                <h1 className="text-justify font-bold text-xl">Card Title Here</h1>
                                <p className="text-justify text-md py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse, harum iure a repudiandae magnam hic cupiditate id nam reprehenderit voluptate numquam magni sapiente excepturi amet maxime nostrum, in recusandae.</p>
                            </div>
                            <div
                                className="border-2 border-white py-2 px-2 rounded-md"
                                style={{ boxShadow: '1px 1px 1px 1px rgba(255, 255, 255, 0.6)' }}
                            >
                                {/* Author Name and position */}
                                <div className="flex items-center gap-2">
                                    <img src={profile1} className="w-20 rounded-full" alt="" />
                                    <div>
                                        <p>Sten Thomas</p>
                                        <p>Frontend Developer</p>
                                    </div>
                                </div>
                                <img src={image1} className="w-full rounded-md py-1 px-1" alt="" />
                                <h1 className="text-justify font-bold text-xl">Card Title Here</h1>
                                <p className="text-justify text-md py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse, harum iure a repudiandae magnam hic cupiditate id nam reprehenderit voluptate numquam magni sapiente excepturi amet maxime nostrum, in recusandae.</p>
                            </div>
                            <div
                                className="border-2 border-white py-2 px-2 rounded-md"
                                style={{ boxShadow: '1px 1px 1px 1px rgba(255, 255, 255, 0.6)' }}
                            >
                                {/* Author Name and position */}
                                <div className="flex items-center gap-2">
                                    <img src={profile1} className="w-20 rounded-full" alt="" />
                                    <div>
                                        <p>Sten Thomas</p>
                                        <p>Frontend Developer</p>
                                    </div>
                                </div>
                                <img src={image1} className="w-full rounded-md py-1 px-1" alt="" />
                                <h1 className="text-justify font-bold text-xl">Card Title Here</h1>
                                <p className="text-justify text-md py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse, harum iure a repudiandae magnam hic cupiditate id nam reprehenderit voluptate numquam magni sapiente excepturi amet maxime nostrum, in recusandae.</p>
                            </div>
                        </div>`}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardWAuthorImg