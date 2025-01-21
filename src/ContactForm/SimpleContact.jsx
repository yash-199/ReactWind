import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md"
import { SiNamecheap } from "react-icons/si";
import { IoCopy } from "react-icons/io5";
const SimpleContact = () => {
    const [showPreview, setShowPreview] = useState(true);
    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Contact Form</h1>
            <div className="py-4 px-4 mt-6 sm:py-4 sm:px-0 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
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
                <div className="bg-slate-900 rounded-lg overflow-hidden py-4 px-2 md:px-4 lg:px-6">
                    {showPreview ? (
                        <div className="m-2 grid gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 bg-white text-black p-4 rounded-lg">
                            {/* Contact Info Section */}
                            <div className="p-0 sm:p-2">
                                <p className="text-lg font-serif font-extrabold tracking-widest py-2">
                                    Contact Us
                                </p>
                                <h2 className="uppercase text-black text-xl font-serif font-semibold sm:text-2xl">
                                    Get in touch with us
                                </h2>
                                <p className="w-20 h-0.5 bg-black my-2"></p>
                                <p className="text-slate-500 text-sm font-normal text-justify mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
                                    minim veniam quis nostrud exercitation ullamco.
                                </p>

                                {/* Location */}
                                <div className="flex items-start gap-5 mt-6">
                                    <div className="drop-shadow-lg backdrop-blur-lg bg-[#6a75d3] border-2 border-[#fffefe] shadow-2xl rounded-lg p-2">
                                        <IoLocationOutline className="text-4xl text-white p-2" />
                                    </div>
                                    <div className="my-2">
                                        <p className="text-lg text-black font-serif font-bold">
                                            Our Location
                                        </p>
                                        <p className="text-slate-500 text-sm">
                                            <a href="https://www.google.com/maps">
                                                99 S.t Jomblo Park Pekanbaru 28292,
                                                <br /> Indonesia
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="flex items-start gap-5 mt-6">
                                    <div className="drop-shadow-lg backdrop-blur-lg bg-[#6a75d3] border-2 border-[#fffefe] shadow-2xl rounded-lg p-2">
                                        <FiPhoneCall className="text-4xl text-white p-2" />
                                    </div>
                                    <div className="my-2">
                                        <p className="text-lg text-black font-serif font-bold">
                                            Phone Number
                                        </p>
                                        <p className="text-slate-500 text-sm">
                                            <a href="tel:+919999999999">+91 99999 99999</a>
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-5 mt-6">
                                    <div className="drop-shadow-lg backdrop-blur-lg bg-[#6a75d3] border-2 border-[#fffefe] shadow-2xl rounded-lg p-2">
                                        <MdOutlineAlternateEmail className="text-4xl text-white p-2" />
                                    </div>
                                    <div className="my-2">
                                        <p className="text-lg text-black font-serif font-bold">Email</p>
                                        <p className="text-slate-500 text-sm">
                                            <a href="mailto:someone@example.com">someone@example.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form Section */}
                            <div className="drop-shadow-lg w-full backdrop-blur-lg bg-[#ffffff] border-2 border-[#fffefe] shadow-2xl p-4 rounded-lg">
                                <form className="sm:py-6 py-2 px-0 sm:p-4">
                                    {/* Name */}
                                    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] my-4">
                                        <SiNamecheap className="text-black text-lg" />
                                        <input
                                            type="text"
                                            placeholder="Enter Your Name"
                                            className="w-full bg-transparent outline-none text-black"
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] my-4">
                                        <MdOutlineAlternateEmail className="text-black text-lg" />
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email"
                                            className="w-full bg-transparent outline-none text-black"
                                        />
                                    </div>
                                    {/* Phone */}
                                    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] my-4">
                                        <FiPhoneCall className="text-black text-lg" />
                                        <input
                                            type="number"
                                            placeholder="Enter Your Phone Number"
                                            className="w-full bg-transparent outline-none text-black"
                                        />
                                    </div>
                                    {/* Message */}
                                    <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#e8e8eb] my-4">
                                        <textarea
                                            type="text"
                                            placeholder="Message"
                                            rows={5}
                                            className="w-full bg-transparent outline-none text-black"
                                        />
                                    </div>
                                    {/* Submit Button */}
                                    <button className="w-full bg-black text-white rounded-lg py-2 mt-4">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words">
                            {/* Copy Code Section */}
                            <div className="flex justify-end mb-2">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={handleCopy}
                                    title="Copy Code"
                                />
                            </div>
                            <pre>{`
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md"
import { SiNamecheap } from "react-icons/si";
const SimpleContact = () => {
    return(
      <div className="m-2 grid gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 bg-white text-black p-4 rounded-lg">
                            {/* Contact Info Section */}
                            <div className="p-0 sm:p-2">
                                <p className="text-lg font-serif font-extrabold tracking-widest py-2">
                                    Contact Us
                                </p>
                                <h2 className="uppercase text-black text-xl font-serif font-semibold sm:text-2xl">
                                    Get in touch with us
                                </h2>
                                <p className="w-20 h-0.5 bg-black my-2"></p>
                                <p className="text-slate-500 text-sm font-normal text-justify mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
                                    minim veniam quis nostrud exercitation ullamco.
                                </p>

                                {/* Location */}
                                <div className="flex items-start gap-5 mt-6">
                                    <div className="drop-shadow-lg backdrop-blur-lg bg-[#6a75d3] border-2 border-[#fffefe] shadow-2xl rounded-lg p-2">
                                        <IoLocationOutline className="text-4xl text-white p-2" />
                                    </div>
                                    <div className="my-2">
                                        <p className="text-lg text-black font-serif font-bold">
                                            Our Location
                                        </p>
                                        <p className="text-slate-500 text-sm">
                                            <a href="https://www.google.com/maps">
                                                99 S.t Jomblo Park Pekanbaru 28292,
                                                <br /> Indonesia
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="flex items-start gap-5 mt-6">
                                    <div className="drop-shadow-lg backdrop-blur-lg bg-[#6a75d3] border-2 border-[#fffefe] shadow-2xl rounded-lg p-2">
                                        <FiPhoneCall className="text-4xl text-white p-2" />
                                    </div>
                                    <div className="my-2">
                                        <p className="text-lg text-black font-serif font-bold">
                                            Phone Number
                                        </p>
                                        <p className="text-slate-500 text-sm">
                                            <a href="tel:+919999999999">+91 99999 99999</a>
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-5 mt-6">
                                <div className="drop-shadow-lg backdrop-blur-lg bg-[#6a75d3] border-2 border-[#fffefe] shadow-2xl rounded-lg p-2">
                                    <MdOutlineAlternateEmail className="text-4xl text-white p-2" />
                                </div>
                                <div className="my-2">
                                    <p className="text-lg text-black font-serif font-bold">Email</p>
                                    <p className="text-slate-500 text-sm">
                                        <a href="mailto:someone@example.com">someone@example.com</a>
                                    </p>
                                </div>
                                </div>
                            </div>

                            {/* Contact Form Section */}
<div className="drop-shadow-lg w-full backdrop-blur-lg bg-[#ffffff] border-2 border-[#fffefe] shadow-2xl p-4 rounded-lg">
 <form className="sm:py-6 py-2 px-0 sm:p-4">
     {/* Name */}
     <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] my-4">
         <SiNamecheap className="text-black text-lg" />
         <input
             type="text"
             placeholder="Enter Your Name"
             className="w-full bg-transparent outline-none text-black"
         />
     </div>
     {/* Email */}
     <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] my-4">
         <MdOutlineAlternateEmail className="text-black text-lg" />
         <input
             type="email"
             placeholder="Enter Your Email"  className="w-full bg-transparent outline-none text-black"
                 />
             </div>
             {/* Phone */}
             <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] my-4">
                 <FiPhoneCall className="text-black text-lg" />
                 <input
                     type="number"
                     placeholder="Enter Your Phone Number"
                     className="w-full bg-transparent outline-none text-black"
                 />
             </div>
             {/* Message */}
             <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#e8e8eb] my-4">
                 <textarea
                     type="text"
                     placeholder="Message"
                     rows={5}
                     className="w-full bg-transparent outline-none text-black"
                 />
             </div>
             {/* Submit Button */}
             <button className="w-full bg-black text-white rounded-lg py-2 mt-4">
                 Send Message
             </button>
         </form>
     </div>
 </div>
    )
    }
                            `}</pre>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default SimpleContact