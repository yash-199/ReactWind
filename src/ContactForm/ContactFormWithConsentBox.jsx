import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { SiNamecheap } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md"
import { FiPhoneCall } from "react-icons/fi";
const ContactFormWithConsentBox = () => {
    const [showPreview, setShowPreview] = useState(true);
    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Centerd Contact Form</h1>
            <div className="py-4 px-2 mt-6 sm:py-4 sm:px-4 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
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

                <div className="bg-slate-900 rounded-lg overflow-hidden py-8 sm:px-8 px-2">
                    <div className='bg-white  sm:p-4 p-1 rounded-xl sm:px-10 px-2'>
                        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 sm:mt-10 mt-4'>
                            <p className='text-black sm:text-4xl text-lg font-medium font-serif sm:text-justify text-center'>Start Your Journey to Better Business</p>
                            <div>
                                <center>
                                    <FaLocationCrosshairs className='bg-[#FBC108] text-white text-center p-3 rounded-full text-6xl' />
                                    <p className='text-black font-sans font-medium my-2 text-xl'>Address</p>
                                    <p className='text-slate-400'>99 S.t Jomblo Park Pekanbaru 28292, Indonesia</p>
                                </center>
                            </div>
                            <div>
                                <center>
                                    <LuPhoneCall className='bg-[#E2EFFF] text-[-#6D9DD9] text-center p-3 rounded-full text-6xl' />
                                    <p className='text-black font-sans font-medium my-2 text-xl'>Call Us</p>
                                    <p className='text-slate-400'><a href="tel:+919999999999">+919999999999</a></p>
                                </center>
                            </div>
                            <div>
                                <center>
                                    <MdAlternateEmail className='bg-[#6D9DD9] text-white text-center p-3 rounded-full text-6xl' />
                                    <p className='text-black font-sans font-medium my-2 text-xl'>Mail</p>
                                    <p className='text-slate-400'><a href="mailto:someexample@gmail.com">someexample@gmail.com</a></p>
                                </center>
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                            <div className='map mt-10'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9934.186679009023!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1737475318776!5m2!1sen!2sus" className='w-full h-fit' style={{ "border": 0 }} allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            {/* contact form */}
                            <form className='drop-shadow-lg w-full backdrop-blur-lg bg-[#ffffff] border-2 border-[#fffefe] shadow-2xl p-2 my-4 rounded-lg'>
                                <div className='flex items-center gap-3 px-4 py-2 rounded-full bg-[#e8e8eb] my-4'>
                                    <SiNamecheap className='text-black text-lg' />
                                    <input type="text" placeholder='Last Name' className='w-full bg-transparent outline-none text-black' />
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactFormWithConsentBox