import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import Imag1 from "../assets/BannerUI-Image/cardImg1.webp"
import Imag2 from "../assets/BannerUI-Image/cardImg2.webp"
import Imag3 from "../assets/BannerUI-Image/cardImg3.webp"
import Imag4 from "../assets/BannerUI-Image/cardImg4.webp"
import Imag5 from "../assets/BannerUI-Image/full-screen-1.webp"
import Imag6 from "../assets/BannerUI-Image/full-screen-2.webp"
import Imag7 from "../assets/BannerUI-Image/full-screen-3.webp"
import Imag8 from "../assets/BannerUI-Image/full-screen-4.webp"
const ImageGalleryTab = () => {
    const [showPreview, setShowPreview] = useState(true)
    const [GalleryTab, setGalleryTab] = useState("All")

    const handleGalleryTab = (galleryCategory) => {
        setGalleryTab(galleryCategory)
    }
    const copyCode = () => {
        navigator.clipboard.writeText(codeSnippet)
            .then(() => alert("Code copied successfully!"))
            .catch(() => alert("Failed to copy!"));
    };

    const codeSnippet = `
    import React, { useState } from 'react'
import Imag1 from "../assets/BannerUI-Image/cardImg1.webp"
import Imag2 from "../assets/BannerUI-Image/cardImg2.webp"
import Imag3 from "../assets/BannerUI-Image/cardImg3.webp"
import Imag4 from "../assets/BannerUI-Image/cardImg4.webp"
import Imag5 from "../assets/BannerUI-Image/full-screen-1.webp"
import Imag6 from "../assets/BannerUI-Image/full-screen-2.webp"
import Imag7 from "../assets/BannerUI-Image/full-screen-3.webp"
import Imag8 from "../assets/BannerUI-Image/full-screen-4.webp"
const ImageGalleryTab = () => {
 const [GalleryTab, setGalleryTab] = useState("All")

 const handleGalleryTab = (galleryCategory) => {
        setGalleryTab(galleryCategory)
    }

    return(
     <div className='w-10/12 mx-auto p-4 bg-white'>
        <div className='flex flex-col justify-center flex-wrap rounded-lg border border-[#e4e4e4] px-4 py-1 dark:border-dark-3 sm:flex-row'>
        <a onClick={() => handleGalleryTab("All")}
             className={\`cursor-pointer text-black px-4 py-3 text-sm font-medium md:text-base lg:px-6 
             \${GalleryTab === "All"
              ? "bg-blue-700 text-white"
              : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"}\`}>All
            </a>
        <a onClick={() => handleGalleryTab("Gallery01")}
            className={\`cursor-pointer text-black px-4 py-3 text-sm font-medium md:text-base lg:px-6 
            \${GalleryTab === "Gallery01"
            ? "bg-blue-700 text-white"
            : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"
        } \`} >Gallery 01</a>
        <a onClick={() => handleGalleryTab("Gallery02")}
            className={\`cursor-pointer text-black px-4 py-3 text-sm font-medium md:text-base lg:px-6 
            \${GalleryTab === "Gallery02"
            ? "bg-blue-700 text-white"
            : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"
        } \`} >Gallery 02</a>
        <a onClick={() => handleGalleryTab("Gallery03")}
           className={\`cursor-pointer text-black px-4 py-3 text-sm font-medium md:text-base lg:px-6 
           \${GalleryTab === "Gallery03"
            ? "bg-blue-700 text-white"
            : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"
        }\`} >Gallery 03</a>
                        </div>
        <div className='rounded-lg border border-[#e4e4e4] my-4'>
            {GalleryTab === "All" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full p-2">
                    <img src={Imag1} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                    <img src={Imag2} alt="Image 2" className="w-full h-auto rounded-lg shadow-md" />
                    <img src={Imag3} alt="Image 3" className="w-full h-auto rounded-lg shadow-md" />
                    <img src={Imag4} alt="Image 4" className="w-full h-auto rounded-lg shadow-md" />
                    <img src={Imag5} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                    <img src={Imag6} alt="Image 2" className="w-full h-auto rounded-lg shadow-md" />
                    <img src={Imag7} alt="Image 3" className="w-full h-auto rounded-lg shadow-md" />
                    <img src={Imag8} alt="Image 4" className="w-full h-auto rounded-lg shadow-md" />
                </div>
            )}

        {GalleryTab === "Gallery01" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full p-2">
                <img src={Imag1} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                <img src={Imag2} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
            </div>
        )}
        {GalleryTab === "Gallery02" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full p-2">
                <img src={Imag3} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                <img src={Imag4} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
            </div>
        )}
        {GalleryTab === "Gallery03" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full p-2">
                <img src={Imag5} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                <img src={Imag8} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                <img src={Imag6} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                <img src={Imag7} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
            </div>
        )}
    </div>
</div>
 )
}
export default ImageGalleryTab   
    `
    return (
        <div>
            <h1 className='font-bold my-10 text-3xl'>Image Gallery Tab</h1>
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
                <div className="bg-slate-900 rounded-lg overflow-hidden py-4 px-6">
                    {showPreview ? (
                        <div className='w-10/12 mx-auto p-4 bg-white'>
                            <div className='flex flex-col justify-center flex-wrap rounded-lg border border-[#e4e4e4] px-4 py-1 dark:border-dark-3 sm:flex-row'>
                                <a onClick={() => handleGalleryTab("All")}
                                    className={`cursor-pointer text-black px-4 py-3 text-sm font-medium md:text-base lg:px-6 
                                ${GalleryTab === "All"
                                            ? "bg-blue-700 text-white"
                                            : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"}`}>All
                                </a>
                                <a onClick={() => handleGalleryTab("Gallery01")}
                                    className={`cursor-pointer text-black px-4 py-3 text-sm font-medium md:text-base lg:px-6
                            ${GalleryTab === "Gallery01"
                                            ? "bg-blue-700 text-white"
                                            : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"
                                        }`} >Gallery 01</a>
                                <a onClick={() => handleGalleryTab("Gallery02")}
                                    className={`cursor-pointer text-black px-4 py-3 text-sm font-medium md:text-base lg:px-6
                            ${GalleryTab === "Gallery02"
                                            ? "bg-blue-700 text-white"
                                            : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"
                                        }`} >Gallery 02</a>
                                <a onClick={() => handleGalleryTab("Gallery03")}
                                    className={`cursor-pointer text-black px-4 py-3 text-sm font-medium md:text-base lg:px-6
                            ${GalleryTab === "Gallery03"
                                            ? "bg-blue-700 text-white"
                                            : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"
                                        }`} >Gallery 03</a>
                            </div>
                            <div className='rounded-lg border border-[#e4e4e4] my-4'>
                                {GalleryTab === "All" && (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full p-2">
                                        <img src={Imag1} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                                        <img src={Imag2} alt="Image 2" className="w-full h-auto rounded-lg shadow-md" />
                                        <img src={Imag3} alt="Image 3" className="w-full h-auto rounded-lg shadow-md" />
                                        <img src={Imag4} alt="Image 4" className="w-full h-auto rounded-lg shadow-md" />
                                        <img src={Imag5} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                                        <img src={Imag6} alt="Image 2" className="w-full h-auto rounded-lg shadow-md" />
                                        <img src={Imag7} alt="Image 3" className="w-full h-auto rounded-lg shadow-md" />
                                        <img src={Imag8} alt="Image 4" className="w-full h-auto rounded-lg shadow-md" />
                                    </div>

                                )}

                                {GalleryTab === "Gallery01" && (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full p-2">
                                        <img src={Imag1} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                                        <img src={Imag2} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                                    </div>
                                )}
                                {GalleryTab === "Gallery02" && (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full p-2">
                                        <img src={Imag3} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                                        <img src={Imag4} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                                    </div>
                                )}
                                {GalleryTab === "Gallery03" && (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full p-2">
                                        <img src={Imag5} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                                        <img src={Imag8} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                                        <img src={Imag6} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                                        <img src={Imag7} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end mb-2">
                                <IoCopy className="cursor-pointer text-white hover:text-blue-400" onClick={copyCode} title="Copy Code" />
                            </div>
                            <pre className="p-4 text-xs text-indigo-100 bg-transparent whitespace-pre-wrap">{codeSnippet}</pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ImageGalleryTab