import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
const PriceComp = () => {
    const [showPreview, setShowPreview] = useState(true);
    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Price Comparison Table</h1>
            <div className="py-4 px-4 mt-6 sm:py-4 sm:px-4 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
                {/* header */}
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
                <div className="bg-slate-900 rounded-lg overflow-hidden py-2 p-4">
                    {showPreview ? (
                        <table className='w-full rounded-lg'>
                            <tr className='bg-[#3B82F6] text-white rounded-lg'>
                                <th className='py-4 text-lg font-medium'>Domain</th>
                                <th className='py-4 text-lg font-medium'>1 Month</th>
                                <th className='py-4 text-lg font-medium'>6 Month</th>
                                <th className='py-4 text-lg font-medium'>1 Years</th>
                                <th className='py-4 text-lg font-medium'>SSL</th>
                                <th className='py-4 text-lg font-medium'>Action</th>
                            </tr>
                            <tr className='bg-[#FFFFFF] hover:bg-slate-300 text-black duration-150 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                            <tr className='bg-white hover:bg-slate-300 text-black duration-150 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                            <tr className='bg-[#FFFFFF] hover:bg-slate-300 text-black duration-150 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                            <tr className='bg-white hover:bg-slate-300 text-black duration-150 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                            <tr className='bg-[#FFFFFF] hover:bg-slate-300 text-black duration-700 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                            <tr className='bg-white hover:bg-slate-300 text-black duration-700 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                            <tr className='bg-[#FFFFFF] hover:bg-slate-300 text-black duration-150 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                            <tr className='bg-white hover:bg-slate-300 text-black duration-150 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                        </table>
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto overflow-x-hidden text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end mb-2">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={handleCopy}
                                    title="Copy Code"
                                />
                            </div>
                            <pre id="codeText">
                                {`
 import React from 'react'
const PriceComp = () => {
 return (
  <table className='w-full rounded-lg'>
                            <tr className='bg-[#3B82F6] text-white rounded-lg'>
                                <th className='py-4 text-lg font-medium'>Domain</th>
                                <th className='py-4 text-lg font-medium'>1 Month</th>
                                <th className='py-4 text-lg font-medium'>6 Month</th>
                                <th className='py-4 text-lg font-medium'>1 Years</th>
                                <th className='py-4 text-lg font-medium'>SSL</th>
                                <th className='py-4 text-lg font-medium'>Action</th>
                            </tr>
                            <tr className='bg-[#FFFFFF] hover:bg-slate-300 text-black duration-150 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                            <tr className='bg-white hover:bg-slate-300 text-black duration-150 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                            <tr className='bg-[#FFFFFF] hover:bg-slate-300 text-black duration-150 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                            <tr className='bg-white hover:bg-slate-300 text-black duration-150 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                            <tr className='bg-[#FFFFFF] hover:bg-slate-300 text-black duration-700 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                            <tr className='bg-white hover:bg-slate-300 text-black duration-700 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                            <tr className='bg-[#FFFFFF] hover:bg-slate-300 text-black duration-150 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                            <tr className='bg-white hover:bg-slate-300 text-black duration-150 transition-all'>
                                <td className='py-4 text-center text-lg'>xyz.com</td>
                                <td className='py-4 text-center text-lg'>Rs 500</td>
                                <td className='py-4 text-center text-lg'>Rs 1900</td>
                                <td className='py-4 text-center text-lg'>Rs 3000</td>
                                <td className='py-4 text-center text-lg'>Yes</td>
                                <td className='py-4 text-center text-lg '><a href='#' className='bg-[#3B82F6] w-1/2 mx-auto text-white rounded py-2 px-4 font-sans text-sm uppercase font-medium hover:translate-y-[-4px] duration-500 transition-all'>Buy Now</a></td>
                            </tr>
                        </table>
 )
    }   
 export default PriceComp    
                                `}
                            </pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PriceComp