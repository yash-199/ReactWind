import { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
import person_icon from '../assets/person_icon.svg'
import email_icon from '../assets/mail_icon.svg'
import lock_icon from '../assets/lock_icon.svg'
import { IoCopy } from "react-icons/io5";

const SignInAuthWithSocialIcon = () => {
    const [showPreview, setShowPreview] = useState(true)
    const [state, setState] = useState()
    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">SignIn with Social Icon</h1>
            <p className="text-lg text-justify">A user-friendly sign-in form with input fields for email and password, a prominent 'Sign In' button, and links for 'Forgot Password?' and 'Create an Account' for additional actions.</p>

            <div className="py-4 px-4 mt-6 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
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
                <div className="bg-slate-900 rounded-lg overflow-hidden py-2">
                    <div className='w-1/3 mx-auto p-6 sm:p-8 flex flex-col items-center'>
                        <p className="text-center text-2xl text-white font-mono mb-6">
                            {state === 'Sign Up' ? 'Create your Account' : 'Login your account'}
                        </p>
                        {/* <p className='text-4xl font-semibold font-mono mb-10'>ReactWind</p> */}
                        <div className='flex items-center gap-3'>
                            <p className="h-0.5 w-14 bg-slate-400 "></p>
                            <p className="text-sm font-bold">Connect With</p>
                            <p className="h-0.5 w-14 bg-slate-400"></p>
                        </div>
                        <div className='py-4 flex items-center justify-between gap-10'>
                            <FcGoogle className='bg-white drop-shadow-lg w-16 py-2 rounded text-5xl cursor-pointer' />
                            < GrGithub className='bg-white drop-shadow-lg w-16 py-2 rounded text-5xl cursor-pointer text-black' />
                            <FaLinkedin className='bg-white drop-shadow-lg w-16 py-2 rounded text-5xl cursor-pointer text-blue-500' />
                        </div>
                        <form className='w-full max-w-sm space-y-4'>
                            {state === "Sign Up" && (
                                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#333A5C]">
                                    <img src={person_icon} alt="Full Name" className="h-5 w-5" />
                                    <input
                                        type="text"
                                        className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-400"
                                        placeholder="Full Name"
                                    />
                                </div>
                            )}
                            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#333A5C]">
                                <img src={email_icon} alt="Email" className="h-5 w-5" />
                                <input
                                    type="email"
                                    className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-400"
                                    placeholder="example@gmail.com"
                                />
                            </div>
                            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#333A5C]">
                                <img src={lock_icon} alt="Password" className="h-5 w-5" />
                                <input
                                    type="password"
                                    className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-400"
                                    placeholder="*********"
                                />
                            </div>
                        </form>
                        <p className="text-gray-400 text-center text-xs mt-4">
                            {state === "Sign Up"
                                ? `Already have an account? `
                                : `Don't have an account? `}
                            <span
                                onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
                                className="text-blue-400 cursor-pointer underline"
                            >
                                {state === "Sign Up" ? "Login here" : "Sign up here"}
                            </span>
                        </p>
                        {state === "Sign Up"
                            ? <button className='bg-white text-black mt-6 w-full rounded-md px-6 py-2'>Sign Up</button>
                            : <button className='bg-white text-black mt-6 w-full rounded-md px-6 py-2'>Login</button>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInAuthWithSocialIcon