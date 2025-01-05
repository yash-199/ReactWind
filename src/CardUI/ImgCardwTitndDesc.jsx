import { FaRegEye, FaCode } from "react-icons/fa";
import image1 from '../assets/BannerUI-Image/full-screen-1.webp';
import image2 from '../assets/BannerUI-Image/full-screen-2.webp';
import image3 from '../assets/BannerUI-Image/full-screen-3.webp';
import { useState } from 'react';
const ImgCardwTitndDesc = () => {
    const [showPreview, setShowPreview] = useState(true);
    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Image Card with Title and Description</h1>
            <p className="text-lg text-justify">This sleek and modern card component highlights key content. It features an image at the top, followed by a bold title and a paragraph. Ideal for showcasing various types of content, such as blog posts, portfolio items, or product features, this card layout ensures a visually engaging presentation that captures attention.
            </p>
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
                <div className="bg-slate-900 rounded-lg overflow-hidden py-10">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4 gap-4">
                        <div
                            className="border-2 border-white py-2 px-2 rounded-md"
                            style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                        >
                            <img src={image1} alt="" className="rounded-md py-2" />
                            <h1 className="text-justify font-bold text-xl">Card Title Here</h1>
                            <p className="text-justify text-md py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse, harum iure a repudiandae magnam hic cupiditate id nam reprehenderit voluptate numquam magni sapiente excepturi amet maxime nostrum, in recusandae.</p>
                        </div>
                        <div
                            className="border-2 border-white py-2 px-2 rounded-md"
                            style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                        >
                            <img src={image2} alt="" className="rounded-md py-2" />
                            <h1 className="text-justify font-bold text-xl">Card Title Here</h1>
                            <p className="text-justify text-md py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse, harum iure a repudiandae magnam hic cupiditate id nam reprehenderit voluptate numquam magni sapiente excepturi amet maxime nostrum, in recusandae.</p>
                        </div>
                        <div
                            className="border-2 border-white py-2 px-2 rounded-md"
                            style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                        >
                            <img src={image3} alt="" className="rounded-md py-2" />
                            <h1 className="text-justify font-bold text-xl">Card Title Here</h1>
                            <p className="text-justify text-md py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse, harum iure a repudiandae magnam hic cupiditate id nam reprehenderit voluptate numquam magni sapiente excepturi amet maxime nostrum, in recusandae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImgCardwTitndDesc