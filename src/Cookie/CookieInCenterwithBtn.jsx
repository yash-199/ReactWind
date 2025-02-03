import { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoCopy } from "react-icons/io5";
const CookieCenterwithBtn = () => {
    const [showPreview, setShowPreview] = useState(true)
    const [showCookie, setShowCookie] = useState(true);
    const CopyCode = () => {
        const textToCopy = document.getElementById('CopyCode').innerText;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
    return (
        <>
            <div>
                <h1 className="font-semibold text-2xl my-10">Cookie Icon with Button</h1>
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
                    {/* content */}
                    <div className="bg-slate-900 rounded-lg overflow-hidden py-2 h-full pt-10">
                        {showPreview ? (
                            showCookie && (
                                <div className="text-center w-1/3 mx-auto px-10 bg-black rounded py-10">
                                    <IoIosCloseCircleOutline
                                        className=" text-white my-[-20px] mx-[-20px] text-3xl hover:bg-white hover:text-black rounded-full transition-all duration-150 cursor-pointer"
                                        onClick={() => setShowCookie(false)}
                                    />
                                    <center>
                                        <LiaCookieBiteSolid className='text-6xl text-center' />
                                    </center>
                                    <h4 className="text-2xl font-medium font-sans py-2">We use cookies</h4>
                                    <p className='py-2 text-slate-500'>Please, accept these sweeties to continue enjoying our site!</p>
                                    <button className="bg-white text-black m-2 py-2 px-3 rounded-full hover:bg-transparent transition-all duration-150 hover:text-white border-2 border-white">
                                        Accept Cookie
                                    </button>
                                    <button className="border-2 border-white m-2 py-2 px-3 rounded-full hover:bg-white transition-all duration-150 hover:text-black">
                                        Reject Cookie
                                    </button>
                                </div>
                            )
                        ) : (
                            <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto overflow-x-hidden text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                                <div className="flex justify-end mb-2">
                                    <IoCopy
                                        className="cursor-pointer text-white hover:text-blue-400"
                                        onClick={CopyCode}
                                        title="Copy Code"
                                    />
                                </div>
                                <pre id="CopyCode">
                                    {`
       import React, { useState } from 'react'
       import { FaRegEye, FaCode } from "react-icons/fa";
       import { IoIosCloseCircleOutline } from "react-icons/io";
       import { IoCopy } from "react-icons/io5";
       const CookieCenterwithBtn = () => {
       const [showCookie, setShowCookie] = useState(true);
         return (
          showCookie && (
            <div className="text-center w-1/3 mx-auto px-10 bg-black rounded py-10">
                <IoIosCloseCircleOutline
                    className=" text-white my-[-20px] mx-[-20px] text-3xl hover:bg-white hover:text-black rounded-full transition-all duration-150 cursor-pointer"
                    onClick={() => setShowCookie(false)}
                />
                <center>
                    <LiaCookieBiteSolid className='text-6xl text-center' />
                </center>
                <h4 className="text-2xl font-medium font-sans py-2">We use cookies</h4>
                <p className='py-2 text-slate-500'>Please, accept these sweeties to continue enjoying our site!</p>
                <button className="bg-white text-black m-2 py-2 px-3 rounded-full hover:bg-transparent transition-all duration-150 hover:text-white border-2 border-white">
                    Accept Cookie
                </button>
                <button className="border-2 border-white m-2 py-2 px-3 rounded-full hover:bg-white transition-all duration-150 hover:text-black">
                    Reject Cookie
                </button>
            </div>
     )
         )
           }
       
export default CookieCenterwithBtn
                                           `}
                                </pre>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default CookieCenterwithBtn