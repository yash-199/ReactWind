import { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import SideImage from "../assets/BannerUI-Image/thumbslider-1.webp"
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { IoCopy } from "react-icons/io5";
const SplitScreenWithLogin = () => {
    const [showPreview, setShowPreview] = useState(true);
    const [email, setEmail] = useState("");
    const [step, setStep] = useState(1);
    const handleNext = () => {
        setStep(2); // Change to step 2 when "Next" is clicked
    };
    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
    return (
        <div className='h-full'>
            <h1 className="font-semibold text-2xl mt-4">Split-Screen Sign-In Form with Side Illustration</h1>
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
                {/* Content */}
                <div className="bg-slate-900 rounded-lg overflow-hidden py-2 min-h-screen">
                    {showPreview ?(
                    <div className="flex items-center min-h-screen">
                        {/* Left Section */}
                        <div className="w-full lg:w-1/3 bg-white py-10 px-8 min-h-screen">
                            <p className="text-green-800 text-2xl font-semibold font-serif">Your Logo</p>
                            <p className="text-green-800 mt-4 text-2xl font-semibold">Log in to your account</p>
                            <p className="text-black py-4 font-semibold">
                                Don't have an account? <span className="text-blue-600">Sign Up</span>
                            </p>
                            <p className="flex items-center justify-center gap-4 border-2 border-slate-400 py-2 mt-4 rounded-md shadow-slate-50">
                                <FcGoogle className="text-4xl" />
                                <span className="text-slate-600 font-semibold text-lg">Google</span>
                            </p>
                            <p className="flex items-center justify-center gap-4 border-2 border-slate-400 py-2 mt-4 rounded-md shadow-slate-50">
                                <GrGithub className="text-4xl text-black" />
                                <span className="text-slate-600 font-semibold text-lg">Github</span>
                            </p>
                            <p className="text-sm font-normal text-slate-500 text-center py-6">Or with email and password</p>
                            <p className="text-green-800 text-sm font-semibold font-sans">Email Address</p>
                            <div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleChange}
                                    className="bg-transparent outline-none text-sm w-full text-green-800 font-semibold placeholder-gray-400 border-2 border-slate-300 py-2 rounded-lg px-2 my-3"
                                    placeholder="Enter your email"
                                />
                                {step === 2 && (
                                    <>
                                        <p className="text-green-800 text-sm font-semibold font-sans">Password</p>
                                        <input
                                            type="password"
                                            className="bg-transparent outline-none text-sm w-full text-green-800 font-semibold placeholder-gray-400 border-2 border-slate-300 py-2 rounded-lg px-2 my-3"
                                            placeholder="Enter your password"
                                        />
                                        <p className="text-blue-600 cursor-pointer">Forget Password</p>
                                    </>
                                )}
                                <button
                                    onClick={step === 1 ? handleNext : undefined}
                                    className={`mt-6 w-full rounded-md px-6 py-2 ${!email.trim() && step === 1
                                        ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                                        : "bg-green-500 text-white hover:bg-green-800"
                                        }`}
                                    disabled={!email.trim() && step === 1}
                                >
                                    {step === 1 ? "Next" : "Login"}
                                </button>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full lg:w-2/3">
                            <img
                                src={SideImage}
                                className="object-cover w-full h-svh"
                                alt="Side Illustration"
                            />
                        </div>
                    </div>
                    ):(

                    <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                        <div className="flex justify-end mb-2">
                            <IoCopy
                                className="cursor-pointer text-white hover:text-blue-400"
                                onClick={handleCopy}
                                title="Copy Code"
                            />
                        </div>
                        <pre>
                            {`
import { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import SideImage from "../assets/BannerUI-Image/thumbslider-1.webp"
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
const SplitScreenWithLogin = () => {
     const [showPreview, setShowPreview] = useState(true);
    const [email, setEmail] = useState("");
    const [step, setStep] = useState(1);
    const handleNext = () => {
        setStep(2); // Change to step 2 when "Next" is clicked
    };
    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
    return(
   <div className="flex items-center min-h-screen">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 bg-white py-10 px-8 min-h-screen">
          <p className="text-green-800 text-2xl font-semibold font-serif">Your Logo</p>
          <p className="text-green-800 mt-4 text-2xl font-semibold">Log in to your account</p>
          <p className="text-black py-4 font-semibold">
            Don't have an account? <span className="text-blue-600">Sign Up</span>
          </p>
          <p className="flex items-center justify-center gap-4 border-2 border-slate-400 py-2 mt-4 rounded-md shadow-slate-50">
            <FcGoogle className="text-4xl" />
            <span className="text-slate-600 font-semibold text-lg">Google</span>
          </p>
          <p className="flex items-center justify-center gap-4 border-2 border-slate-400 py-2 mt-4 rounded-md shadow-slate-50">
            <GrGithub className="text-4xl text-black" />
            <span className="text-slate-600 font-semibold text-lg">Github</span>
          </p>
          <p className="text-sm font-normal text-slate-500 text-center py-6">Or with email and password</p>
          <p className="text-green-800 text-sm font-semibold font-sans">Email Address</p>
          <div>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              className="bg-transparent outline-none text-sm w-full text-green-800 font-semibold placeholder-gray-400 border-2 border-slate-300 py-2 rounded-lg px-2 my-3"
              placeholder="Enter your email"
            />
            {step === 2 && (
              <>
                <p className="text-green-800 text-sm font-semibold font-sans">Password</p>
                <input
                  type="password"
                  className="bg-transparent outline-none text-sm w-full text-green-800 font-semibold placeholder-gray-400 border-2 border-slate-300 py-2 rounded-lg px-2 my-3"
                  placeholder="Enter your password"
                />
                <p className="text-blue-600 cursor-pointer">Forget Password</p>
              </>
            )}
            <button
              onClick={step === 1 ? handleNext : undefined}
              className={\`\${!email.trim() && step === 1
                ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-800"}\`}
              disabled={!email.trim() && step === 1}
            >
              {step === 1 ? "Next" : "Login"}
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3">
          <img
            src={SideImage}
            className="object-cover w-full h-screen"
            alt="Side Illustration"
          />
        </div>
      </div> 
    
    
    
    )}
    `}
                        </pre>
                    </div>

                    )}
                </div>

            </div>
        </div>
    )
}

export default SplitScreenWithLogin
