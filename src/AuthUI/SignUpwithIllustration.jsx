<<<<<<< HEAD
import { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import Image from '../assets/BannerUI-Image/AuthImage1.jpg'
import { RiEyeCloseLine } from "react-icons/ri";
import { GiSemiClosedEye } from "react-icons/gi";
// import PasswordChecklist from "react-password-checklist"
import { IoCopy } from "react-icons/io5";
const SignUpwithIllustration = () => {
    const [showPreview, setShowPreview] = useState(true)
    const [showPassword, setShowPassword] = useState(true)
    const [state, setState] = useState('Sign Up')
    // const [password, setPassword] = useState("")
    // const [passwordAgain, setPasswordAgain] = useState("")
    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };

    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Sign-Up Form with Illustration</h1>
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
                <div className="bg-slate-900 rounded-lg overflow-hidden py-2">
                    {/* sign up */}
                    {showPreview ? (
                        <div className='w-11/12 mx-auto p-6 sm:p-8 flex justify-between items-center bg-white m-20 rounded-md text-black'>
                            <div className="flex items-center w-full">
                                {/* Left Section */}
                                <div className="w-1/2 flex flex-col items-center">
                                    <h2 className="text-2xl pb-2 text-center text-black font-sans font-semibold">
                                        React Components
                                    </h2>
                                    <p className="text-center text-sm text-slate-600 font-normal">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum at amet veniam voluptates quos? Impedit
                                    </p>
                                    <img src={Image} alt="React Components" className="mt-4" />
                                </div>

                                {/* Vertical Divider */}
                                <hr className="bg-black w-[2px] h-auto mx-6" />

                                {/* Right Section */}
                                <div className="w-1/2 flex flex-col items-center">
                                    <p className="text-sm text-slate-600 font-medium uppercase">Start For Free</p>
                                    <h1 className="text-black font-semibold font-serif py-2 text-2xl">
                                        {state === "Sign up" ? "Sign Up" : "Login "} to React Components
                                    </h1>
                                    <form className="w-full max-w-sm space-y-4">
                                        {state === "Sign Up" && (
                                            <div className="flex w-full gap-4">
                                                <div className="w-full">
                                                    <p className="text-sm font-semibold text-slate-500 pb-2">First Name</p>
                                                    <input
                                                        type="text"
                                                        className="outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                        placeholder="First Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm font-semibold text-slate-500 pb-2">Last Name</p>
                                                    <input
                                                        type="text"
                                                        className="outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                        placeholder="Last Name"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        <div className="w-full">
                                            <p className="text-sm font-semibold text-slate-500 pb-2">Email</p>
                                            <input
                                                type="text"
                                                className="outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                        <p className="text-sm font-semibold text-slate-500 pb-2">Password</p>
                                        <div className="w-full flex items-center">
                                            <input
                                                type={showPassword ? "password" : "text"}
                                                className="outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                placeholder="password"
                                                required
                                            // onChange={(e) => setPassword(e.target.value)}
                                            />
                                            {showPassword ? (
                                                <RiEyeCloseLine
                                                    onClick={() => setShowPassword(false)}
                                                    className="cursor-pointer"
                                                />
                                            ) : (
                                                <GiSemiClosedEye
                                                    onClick={() => setShowPassword(true)}
                                                    className="cursor-pointer"
                                                />
                                            )}
                                        </div>
                                        <p className="text-sm font-normal pt-2 text-slate-500 pb-2">
                                            Have an Account?{" "}
                                            <span
                                                onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
                                                className="text-blue-400 cursor-pointer underline"
                                            >
                                                {state === "Sign Up" ? "Login here" : "Sign up here"}
                                            </span>
                                        </p>
                                        <button className="bg-blue-900 text-white mt-6 w-1/2 mx-auto rounded-md px-6 py-2">
                                            {state === "Sign Up" ? "Create an Account" : "Login"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto overflow-x-hidden text-xs sm:text-sm text-indigo-100 whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end mb-2">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={handleCopy}
                                    title="Copy Code"
                                />
                            </div>
                            <pre>
                                {`
import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import Image from '../assets/BannerUI-Image/AuthImage1.jpg'
import { RiEyeCloseLine } from "react-icons/ri";
import { GiSemiClosedEye } from "react-icons/gi";
// import PasswordChecklist from "react-password-checklist"
import { IoCopy } from "react-icons/io5";
const SignUpwithIllustration = () => {
    const [showPassword, setShowPassword] = useState(true)
    const [state, setState] = useState('Sign Up')
    // const [password, setPassword] = useState("")
    // const [passwordAgain, setPasswordAgain] = useState("")
    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
return (
<div>
<div className='w-11/12 mx-auto p-6 sm:p-8 flex justify-between items-center bg-white m-20 rounded-md text-black'>
                            <div className="flex items-center w-full">
                                {/* Left Section */}
                                <div className="w-1/2 flex flex-col items-center">
                                    <h2 className="text-2xl pb-2 text-center text-black font-sans font-semibold">
                                        React Components
                                    </h2>
                                    <p className="text-center text-sm text-slate-600 font-normal">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum at amet veniam voluptates quos? Impedit
                                    </p>
                                    <img src={Image} alt="React Components" className="mt-4" />
                                </div>

                                {/* Vertical Divider */}
                                <hr className="bg-black w-[2px] h-auto mx-6" />

                                {/* Right Section */}
                                <div className="w-1/2 flex flex-col items-center">
                                    <p className="text-sm text-slate-600 font-medium uppercase">Start For Free</p>
                                    <h1 className="text-black font-semibold font-serif py-2 text-2xl">
                                        {state === "Sign up" ? "Sign Up" : "Login "} to React Components
                                    </h1>
                                    <form className="w-full max-w-sm space-y-4">
                                        {state === "Sign Up" && (
                                            <div className="flex w-full gap-4">
                                                <div className="w-full">
                                                    <p className="text-sm font-semibold text-slate-500 pb-2">First Name</p>
                                                    <input
                                                        type="text"
                                                        className="outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                        placeholder="First Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm font-semibold text-slate-500 pb-2">Last Name</p>
                                                    <input
                                                        type="text"
                                                        className="outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                        placeholder="Last Name"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        <div className="w-full">
                                            <p className="text-sm font-semibold text-slate-500 pb-2">Email</p>
                                            <input
                                                type="text"
                                                className="outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                        <p className="text-sm font-semibold text-slate-500 pb-2">Password</p>
                                        <div className="w-full flex items-center">
                                            <input
                                                type={showPassword ? "password" : "text"}
                                                className="outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                placeholder="password"
                                                required
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            {showPassword ? (
                                                <RiEyeCloseLine
                                                    onClick={() => setShowPassword(false)}
                                                    className="cursor-pointer"
                                                />
                                            ) : (
                                                <GiSemiClosedEye
                                                    onClick={() => setShowPassword(true)}
                                                    className="cursor-pointer"
                                                />
                                            )}
                                        </div>
                                        <p className="text-sm font-normal pt-2 text-slate-500 pb-2">
                                            Have an Account?{" "}
                                            <span
                                                onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
                                                className="text-blue-400 cursor-pointer underline"
                                            >
                                                {state === "Sign Up" ? "Login here" : "Sign up here"}
                                            </span>
                                        </p>
                                        <button className="bg-blue-900 text-white mt-6 w-1/2 mx-auto rounded-md px-6 py-2">
                                            {state === "Sign Up" ? "Create an Account" : "Login"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>


</div>
 )
}
                    
                            `}
                            </pre>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

=======
import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import Image from '../assets/BannerUI-Image/AuthImage1.jpg'
import { RiEyeCloseLine } from "react-icons/ri";
import { GiSemiClosedEye } from "react-icons/gi";
// import PasswordChecklist from "react-password-checklist"
import { IoCopy } from "react-icons/io5";
const SignUpwithIllustration = () => {
    const [showPreview, setShowPreview] = useState(true)
    const [showPassword, setShowPassword] = useState(true)
    const [state, setState] = useState('Sign Up')
    // const [password, setPassword] = useState("")
    // const [passwordAgain, setPasswordAgain] = useState("")
    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };

    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Sign-Up Form with Illustration</h1>
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
                <div className="bg-slate-900 rounded-lg overflow-hidden py-2">
                    {/* sign up */}
                    {showPreview ? (
                        <div className='w-11/12 mx-auto p-6 sm:p-8 flex justify-between items-center bg-white m-20 rounded-md text-black'>
                            <div className="flex items-center w-full">
                                {/* Left Section */}
                                <div className="w-1/2 flex flex-col items-center">
                                    <h2 className="text-2xl pb-2 text-center text-black font-sans font-semibold">
                                        React Components
                                    </h2>
                                    <p className="text-center text-sm text-slate-600 font-normal">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum at amet veniam voluptates quos? Impedit
                                    </p>
                                    <img src={Image} alt="React Components" className="mt-4" />
                                </div>

                                {/* Vertical Divider */}
                                <hr className="bg-black w-[2px] h-auto mx-6" />

                                {/* Right Section */}
                                <div className="w-1/2 flex flex-col items-center">
                                    <p className="text-sm text-slate-600 font-medium uppercase">Start For Free</p>
                                    <h1 className="text-black font-semibold font-serif py-2 text-2xl">
                                        {state === "Sign up" ? "Sign Up" : "Login "} to React Components
                                    </h1>
                                    <form className="w-full max-w-sm space-y-4">
                                        {state === "Sign Up" && (
                                            <div className="flex w-full gap-4">
                                                <div className="w-full">
                                                    <p className="text-sm font-semibold text-slate-500 pb-2">First Name</p>
                                                    <input
                                                        type="text"
                                                        className="bg-transparent outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                        placeholder="First Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm font-semibold text-slate-500 pb-2">Last Name</p>
                                                    <input
                                                        type="text"
                                                        className="bg-transparent outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                        placeholder="Last Name"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        <div className="w-full">
                                            <p className="text-sm font-semibold text-slate-500 pb-2">Email</p>
                                            <input
                                                type="text"
                                                className="bg-transparent outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                        <p className="text-sm font-semibold text-slate-500 pb-2">Password</p>
                                        <div className="w-full flex items-center">
                                            <input
                                                type={showPassword ? "password" : "text"}
                                                className="bg-transparent outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                placeholder="password"
                                                required
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            {showPassword ? (
                                                <RiEyeCloseLine
                                                    onClick={() => setShowPassword(false)}
                                                    className="cursor-pointer"
                                                />
                                            ) : (
                                                <GiSemiClosedEye
                                                    onClick={() => setShowPassword(true)}
                                                    className="cursor-pointer"
                                                />
                                            )}
                                        </div>
                                        <p className="text-sm font-normal pt-2 text-slate-500 pb-2">
                                            Have an Account?{" "}
                                            <span
                                                onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
                                                className="text-blue-400 cursor-pointer underline"
                                            >
                                                {state === "Sign Up" ? "Login here" : "Sign up here"}
                                            </span>
                                        </p>
                                        <button className="bg-blue-900 text-white mt-6 w-1/2 mx-auto rounded-md px-6 py-2">
                                            {state === "Sign Up" ? "Create an Account" : "Login"}
                                        </button>
                                    </form>
                                </div>
                            </div>
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
                           <pre>
                            {`
import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import Image from '../assets/BannerUI-Image/AuthImage1.jpg'
import { RiEyeCloseLine } from "react-icons/ri";
import { GiSemiClosedEye } from "react-icons/gi";
// import PasswordChecklist from "react-password-checklist"
import { IoCopy } from "react-icons/io5";
const SignUpwithIllustration = () => {
    const [showPassword, setShowPassword] = useState(true)
    const [state, setState] = useState('Sign Up')
    // const [password, setPassword] = useState("")
    // const [passwordAgain, setPasswordAgain] = useState("")
    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
return (
<div>
<div className='w-11/12 mx-auto p-6 sm:p-8 flex justify-between items-center bg-white m-20 rounded-md text-black'>
                            <div className="flex items-center w-full">
                                {/* Left Section */}
                                <div className="w-1/2 flex flex-col items-center">
                                    <h2 className="text-2xl pb-2 text-center text-black font-sans font-semibold">
                                        React Components
                                    </h2>
                                    <p className="text-center text-sm text-slate-600 font-normal">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum at amet veniam voluptates quos? Impedit
                                    </p>
                                    <img src={Image} alt="React Components" className="mt-4" />
                                </div>

                                {/* Vertical Divider */}
                                <hr className="bg-black w-[2px] h-auto mx-6" />

                                {/* Right Section */}
                                <div className="w-1/2 flex flex-col items-center">
                                    <p className="text-sm text-slate-600 font-medium uppercase">Start For Free</p>
                                    <h1 className="text-black font-semibold font-serif py-2 text-2xl">
                                        {state === "Sign up" ? "Sign Up" : "Login "} to React Components
                                    </h1>
                                    <form className="w-full max-w-sm space-y-4">
                                        {state === "Sign Up" && (
                                            <div className="flex w-full gap-4">
                                                <div className="w-full">
                                                    <p className="text-sm font-semibold text-slate-500 pb-2">First Name</p>
                                                    <input
                                                        type="text"
                                                        className="bg-transparent outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                        placeholder="First Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm font-semibold text-slate-500 pb-2">Last Name</p>
                                                    <input
                                                        type="text"
                                                        className="bg-transparent outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                        placeholder="Last Name"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        <div className="w-full">
                                            <p className="text-sm font-semibold text-slate-500 pb-2">Email</p>
                                            <input
                                                type="text"
                                                className="bg-transparent outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                        <p className="text-sm font-semibold text-slate-500 pb-2">Password</p>
                                        <div className="w-full flex items-center">
                                            <input
                                                type={showPassword ? "password" : "text"}
                                                className="bg-transparent outline-none rounded-full px-2 py-2 bg-slate-200 text-sm w-full text-black placeholder-gray-400"
                                                placeholder="password"
                                                required
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            {showPassword ? (
                                                <RiEyeCloseLine
                                                    onClick={() => setShowPassword(false)}
                                                    className="cursor-pointer"
                                                />
                                            ) : (
                                                <GiSemiClosedEye
                                                    onClick={() => setShowPassword(true)}
                                                    className="cursor-pointer"
                                                />
                                            )}
                                        </div>
                                        <p className="text-sm font-normal pt-2 text-slate-500 pb-2">
                                            Have an Account?{" "}
                                            <span
                                                onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
                                                className="text-blue-400 cursor-pointer underline"
                                            >
                                                {state === "Sign Up" ? "Login here" : "Sign up here"}
                                            </span>
                                        </p>
                                        <button className="bg-blue-900 text-white mt-6 w-1/2 mx-auto rounded-md px-6 py-2">
                                            {state === "Sign Up" ? "Create an Account" : "Login"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>


</div>
 )
}
                    
                            `}
                            </pre>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

>>>>>>> 22a29b9142405812d7b4d0f136802e435ffa017a
export default SignUpwithIllustration