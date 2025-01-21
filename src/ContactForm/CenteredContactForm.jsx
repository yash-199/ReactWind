import { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import { SiNamecheap } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md"
import { FiPhoneCall } from "react-icons/fi";
import { IoCopy } from "react-icons/io5";
const CenteredContactForm = () => {
    const [showPreview, setShowPreview] = useState(true);
    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Centerd Contact Form</h1>
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
                {/* Content */}
                <div className="bg-slate-900 rounded-lg overflow-hidden py-2">
                    {showPreview ? (
                        <div className='sm:w-2/5 w-full mx-auto drop-shadow-lg backdrop-blur-lg bg-[#ffffff] border-2 border-[#fffefe] shadow-2xl p-8 my-4 rounded-lg  text-black'>
                            <p className='text-center text-3xl pb-2 font-serif font-semibold'>Get in touch</p>
                            <p className='text-center text-black uppercase text-sm font-serif font-semibold'>We'll get back to you within 24 Hours</p>
                            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-6'>
                                <div className='flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] my-4'>
                                    <SiNamecheap className='text-black text-lg' />
                                    <input type="text" placeholder='First Name' className='w-full bg-transparent outline-none text-black' />
                                </div>
                                <div className='flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] my-4'>
                                    <SiNamecheap className='text-black text-lg' />
                                    <input type="text" placeholder='Last Name' className='w-full bg-transparent outline-none text-black' />
                                </div>
                            </div>
                            <div className='flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] '>
                                <MdOutlineAlternateEmail className='text-black text-lg' />
                                <input type="email" placeholder='someexample@gmail.com' className='w-full bg-transparent outline-none text-black' />
                            </div>
                            <div className='flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] my-4'>
                                <FiPhoneCall className='text-black text-lg' />
                                <input type="number" placeholder='Enter Your Phone Number' className='w-full bg-transparent outline-none text-white' />
                            </div>
                            <div className='flex items-center gap-3 px-4 py-2 rounded-xl bg-[#e8e8eb] my-4'>
                                <textarea type="text" placeholder='Message' rows={5} className='w-full bg-transparent outline-none text-white' />
                            </div>
                            <button className='w-full bg-black text-white rounded py-2 cursor-pointer'>
                                Send Message
                            </button>
                        </div>
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto overflow-x-hidden text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end mb-2">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={handleCopy}
                                    title="Copy Code"
                                />
                            </div>
                            <pre>{`
 import React from 'react'
import { SiNamecheap } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md"
import { FiPhoneCall } from "react-icons/fi";
const CenteredContactForm = () => {
return(
 <div className='sm:w-2/5 w-full mx-auto drop-shadow-lg backdrop-blur-lg bg-[#ffffff] border-2 border-[#fffefe] shadow-2xl p-8 my-4 rounded-lg  text-black'>
       <p className='text-center text-3xl pb-2 font-serif font-semibold'>Get in touch</p>
       <p className='text-center text-black uppercase text-sm font-serif font-semibold'>We'll get back to you within 24 Hours</p>
       <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-6'>
           <div className='flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] my-4'>
               <SiNamecheap className='text-black text-lg' />
               <input type="text" placeholder='First Name' className='w-full bg-transparent outline-none text-black' />
           </div>
           <div className='flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] my-4'>
               <SiNamecheap className='text-black text-lg' />
               <input type="text" placeholder='Last Name' className='w-full bg-transparent outline-none text-black' />
           </div>
       </div>
       <div className='flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] '>
           <MdOutlineAlternateEmail className='text-black text-lg' />
           <input type="email" placeholder='someexample@gmail.com' className='w-full bg-transparent outline-none text-black' />
       </div>
       <div className='flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] my-4'>
           <FiPhoneCall className='text-black text-lg' />
           <input type="number" placeholder='Enter Your Phone Number' className='w-full bg-transparent outline-none text-white' />
       </div>
       <div className='flex items-center gap-3 px-4 py-2 rounded-xl bg-[#e8e8eb] my-4'>
           <textarea type="text" placeholder='Message' rows={5} className='w-full bg-transparent outline-none text-white' />
       </div>
       <button className='w-full bg-black text-white rounded py-2 cursor-pointer'>
           Send Message
       </button>
   </div>
)
    }
export default CenteredContactForm
                        `}</pre>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default CenteredContactForm