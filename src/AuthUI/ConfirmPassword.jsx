import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import passwordImg from '../assets/lock_icon.svg'
import { RiEyeCloseLine } from "react-icons/ri";
import { GiSemiClosedEye } from "react-icons/gi";
import { IoCopy } from "react-icons/io5";

const ConfirmPassword = () => {
    const [showPreview, setShowPreview] = useState(true);
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);

    // for the password field
    const [password, setPassword] = useState('');

    // for the confirm password field
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

    const matchPassword = (e) => {
        const confirmValue = e.target.value;
        setConfirmPassword(confirmValue); // Update with the new value from input

        if (password !== confirmValue) {
            setErrorMessage("Passwords do not match");
        } else {
            setErrorMessage("");
        }
    }
    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Re-enter Password</h1>
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
                    {showPreview ? (
                        <form className='w-1/3 mx-auto p-6 sm:p-8 flex flex-col bg-[#333A5C] rounded'>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-3">
                                Re-enter Password
                            </h2>
                            <div className='flex items-center gap-3 my-2 px-4 py-2 rounded-full bg-black'>
                                <img src={passwordImg} alt="" />
                                <input
                                    type={showPassword ? "password" : "text"}
                                    className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-400"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // Update password value
                                />
                                {showPassword ? (
                                    <RiEyeCloseLine onClick={() => setShowPassword(false)} className='cursor-pointer' />
                                ) : (
                                    <GiSemiClosedEye onClick={() => setShowPassword(true)} className='cursor-pointer' />
                                )}
                            </div>
                            <div className='flex items-center gap-3 px-4 py-2 rounded-full bg-black my-2'>
                                <img src={passwordImg} alt="" />
                                <input
                                    type={showConfirmPassword ? "password" : "text"}
                                    className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-400"
                                    placeholder="Confirm Password"
                                    value={confirmPassword} // Bind confirm password value
                                    onChange={matchPassword} // Handle change event
                                />
                                {showConfirmPassword ? (
                                    <RiEyeCloseLine className='cursor-pointer' onClick={() => setShowConfirmPassword(false)} />
                                ) : (
                                    <GiSemiClosedEye className='cursor-pointer' onClick={() => setShowConfirmPassword(true)} />
                                )}
                            </div>
                            {/* Error message */}
                            {errorMessage && <p className='text-red-500 text-sm mt-1'>{errorMessage}</p>}
                            <button className='bg-white mt-4 text-black py-2 font-normal uppercase cursor-pointer rounded'
                                disabled={password !== confirmPassword} // Disable button if passwords don't match
                            >
                                Submit
                            </button>
                        </form>
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end mb-2">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={handleCopy}
                                    title="Copy Code"
                                />
                            </div>
                            <prev>
                                {`
import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import passwordImg from '../assets/lock_icon.svg'
import { RiEyeCloseLine } from "react-icons/ri";
import { GiSemiClosedEye } from "react-icons/gi";

const ConfirmPassword = () => {
  const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);

    // for the password field
    const [password, setPassword] = useState('');

    // for the confirm password field
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

    const matchPassword = (e) => {
        const confirmValue = e.target.value;
        setConfirmPassword(confirmValue); // Update with the new value from input

        if (password !== confirmValue) {
            setErrorMessage("Passwords do not match");
        } else {
            setErrorMessage("");
        }
    }
        return(
  <form className='w-1/3 mx-auto p-6 sm:p-8 flex flex-col bg-[#333A5C] rounded'>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-3">
                                Re-enter Password
                            </h2>
                            <div className='flex items-center gap-3 my-2 px-4 py-2 rounded-full bg-black'>
                                <img src={passwordImg} alt="" />
                                <input
                                    type={showPassword ? "password" : "text"}
                                    className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-400"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // Update password value
                                />
                                {showPassword ? (
                                    <RiEyeCloseLine onClick={() => setShowPassword(false)} className='cursor-pointer' />
                                ) : (
                                    <GiSemiClosedEye onClick={() => setShowPassword(true)} className='cursor-pointer' />
                                )}
                            </div>
                            <div className='flex items-center gap-3 px-4 py-2 rounded-full bg-black my-2'>
                                <img src={passwordImg} alt="" />
                                <input
                                    type={showConfirmPassword ? "password" : "text"}
                                    className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-400"
                                    placeholder="Confirm Password"
                                    value={confirmPassword} // Bind confirm password value
                                    onChange={matchPassword} // Handle change event
                                />
                                {showConfirmPassword ? (
                                    <RiEyeCloseLine className='cursor-pointer' onClick={() => setShowConfirmPassword(false)} />
                                ) : (
                                    <GiSemiClosedEye className='cursor-pointer' onClick={() => setShowConfirmPassword(true)} />
                                )}
                            </div>
                            {/* Error message */}
                            {errorMessage && <p className='text-red-500 text-sm mt-1'>{errorMessage}</p>}
                            <button className='bg-white mt-4 text-black py-2 font-normal uppercase cursor-pointer rounded'
                                disabled={password !== confirmPassword} // Disable button if passwords don't match
                            >
                                Submit
                            </button>
                        </form>
  )
}

export default ConfirmPassword;
                                `}
                            </prev>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ConfirmPassword;
