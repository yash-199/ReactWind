import { useState } from "react";
import { FaRegEye, FaCode } from "react-icons/fa";
import image1 from '../assets/BannerUI-Image/thumbslider-1.webp';
import image2 from '../assets/BannerUI-Image/thumbslider-2.webp';
import image3 from '../assets/BannerUI-Image/thumbslider-3.webp';
import { IoCopy } from "react-icons/io5";

const CardCompImg = () => {
    const [showPreview, setShowPreview] = useState(true);
    const CopyCode = () => {
        const textToCopy = document.getElementById('CopyCode').innerText;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
    return (
        <>
            <div className="py-2">
                <h1 className="font-semibold text-2xl my-10">Card Component with Image and Button</h1>
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
                        {/* card */}
                        {showPreview ? (
                            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 justify-between items-center gap-4 px-4 py-20">
                                <div className="bg-white border-2 border-gray-200 shadow-md rounded-md p-4 max-w-sm mx-auto mb-20">
                                    <div className="relative -top-14 left-1/2 transform -translate-x-1/2">
                                        <img
                                            src={image1}
                                            alt="Component Preview"
                                            className="w-full h-56 object-cover rounded-md"
                                        />
                                    </div>
                                    <div className=" text-center">
                                        <h2 className="text-lg font-semibold text-black">
                                            ReactWind: Best Website for Components
                                        </h2>
                                        <p className="text-sm text-gray-600 mt-2 text-justify">
                                            Tailwind CSS Cards by ReactWind offer a modern, responsive way to showcase
                                            content on your website. With industry-standard designs and multiple
                                            options, these cards enhance user experience and add value to your
                                            landing pages.
                                        </p>
                                        <button className="mt-4 bg-black text-white text-md px-4 py-2 rounded-md  transition-transform transform hover:-translate-y-1">
                                            Find Out More
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-white border-2 border-gray-200 shadow-md rounded-md p-4 max-w-sm mx-auto mb-20">
                                    <div className="relative -top-14 left-1/2 transform -translate-x-1/2">
                                        <img
                                            src={image2}
                                            alt="Component Preview"
                                            className="w-full h-56 object-cover rounded-md"
                                        />
                                    </div>
                                    <div className=" text-center">
                                        <h2 className="text-lg font-semibold text-black">
                                            ReactWind: Best Website for Components
                                        </h2>
                                        <p className="text-sm text-gray-600 mt-2 text-justify">
                                            Tailwind CSS Cards by ReactWind offer a modern, responsive way to showcase
                                            content on your website. With industry-standard designs and multiple
                                            options, these cards enhance user experience and add value to your
                                            landing pages.
                                        </p>
                                        <button className="mt-4 bg-black text-white text-md px-4 py-2 rounded-md  transition-transform transform hover:-translate-y-1">
                                            Find Out More
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-white border-2 border-gray-200 shadow-md rounded-md p-4 max-w-sm mx-auto mb-20">
                                    <div className="relative -top-14 left-1/2 transform -translate-x-1/2">
                                        <img
                                            src={image3}
                                            alt="Component Preview"
                                            className="w-full h-56 object-cover rounded-md"
                                        />
                                    </div>
                                    <div className=" text-center">
                                        <h2 className="text-lg font-semibold text-black">
                                            ReactWind: Best Website for Components
                                        </h2>
                                        <p className="text-sm text-gray-600 mt-2 text-justify">
                                            Tailwind CSS Cards by ReactWind offer a modern, responsive way to showcase
                                            content on your website. With industry-standard designs and multiple
                                            options, these cards enhance user experience and add value to your
                                            landing pages.
                                        </p>
                                        <button className="mt-4 bg-black text-white text-md px-4 py-2 rounded-md  transition-transform transform hover:-translate-y-1">
                                            Find Out More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="p-4 sm:p-6 h-full sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words"
                                id="CopyCode"
                            >
                                <div className="flex justify-end mb-2">
                                    <IoCopy
                                        className="cursor-pointer text-white hover:text-blue-400"
                                        onClick={CopyCode}
                                        title="Copy Code"
                                    />
                                </div>
                                {`
<div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 justify-between items-center gap-4 px-4">
<div className="bg-white border-2 border-gray-200 shadow-md rounded-md p-4 max-w-sm mx-auto mb-20">
 <div className="relative -top-14 left-1/2 transform -translate-x-1/2">
     <img
         src={image1}
         alt="Component Preview"
         className="w-full h-56 object-cover rounded-md"
     />
 </div>
 <div className=" text-center">
     <h2 className="text-lg font-semibold text-black">
         ReactWind: Best Website for Components
     </h2>
     <p className="text-sm text-gray-600 mt-2 text-justify">
         Tailwind CSS Cards by ReactWind offer a modern, responsive way to showcase
         content on your website. With industry-standard designs and multiple
         options, these cards enhance user experience and add value to your
         landing pages.
     </p>
     <button className="mt-4 bg-black text-white text-md px-4 py-2 rounded-md  transition-transform transform hover:-translate-y-1">
         Find Out More
     </button>
 </div>
v>
 className="bg-white border-2 border-gray-200 shadow-md rounded-md p-4 max-w-sm mx-auto mb-20">
<div className="relative -top-14 left-1/2 transform -translate-x-1/2">
    <img
        src={image2}
        alt="Component Preview"
        className="w-full h-56 object-cover rounded-md"
    />
</div>
<div className=" text-center">
    <h2 className="text-lg font-semibold text-black">
        ReactWind: Best Website for Components
    </h2>
    <p className="text-sm text-gray-600 mt-2 text-justify">
        Tailwind CSS Cards by ReactWind offer a modern, responsive way to showcase
        content on your website. With industry-standard designs and multiple
        options, these cards enhance user experience and add value to your
        landing pages.
    </p>
    <button className="mt-4 bg-black text-white text-md px-4 py-2 rounded-md  transition-transform transform hover:-translate-y-1">
        Find Out More
    </button>
</div>
</div>
<div className="bg-white border-2 border-gray-200 shadow-md rounded-md p-4 max-w-sm mx-auto mb-20">
<div className="relative -top-14 left-1/2 transform -translate-x-1/2">
    <img
        src={image3}
        alt="Component Preview"
        className="w-full h-56 object-cover rounded-md"
    />
</div>
<div className=" text-center">
    <h2 className="text-lg font-semibold text-black">
        ReactWind: Best Website for Components
    </h2>
    <p className="text-sm text-gray-600 mt-2 text-justify">
        Tailwind CSS Cards by ReactWind offer a modern, responsive way to showcase
        content on your website. With industry-standard designs and multiple
        options, these cards enhance user experience and add value to your
        landing pages.
    </p>
    <button className="mt-4 bg-black text-white text-md px-4 py-2 rounded-md  transition-transform transform hover:-translate-y-1">
        Find Out More
    </button>
</div>
     </div>
 </div>  
                                `}
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </>
    )
}

export default CardCompImg