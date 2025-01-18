import React, { useState, useRef, useEffect } from "react";
import { FaRegEye, FaCode } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
const OTPwithResentCode = () => {
    const [showPreview, setShowPreview] = useState(true);
    const [canResend, setCanResend] = useState(true);
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(null)
    const inputRefs = React.useRef([])

    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };

    const handleInput = (e, index) => {
        if (!/^\d*$/.test(e.target.value)) {
            e.target.value = ""; // Clear non-numeric input
            return;
        }
        if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    }

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text');
        const pasteArray = paste.split('');
        pasteArray.forEach((char, index) => {
            if (inputRefs.current[index]) {
                inputRefs.current[index].value = char;
            }
        })
    }

    const sendCode = () => {
        if (canResend) {
            console.log("code sent");
            setCanResend(false);
            setTimer(20);

        }
    }

    useEffect(() => {
        if (timer > 0) {
            intervalRef.current = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000)
        } else {
            clearInterval(intervalRef.current);
            setCanResend(true)
        }
        return () => clearInterval(intervalRef.current)
    }, [timer])
    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">OTP With Resend OTP</h1>
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
                    {/* OTP Screen */}
                    {showPreview ? (
                        <div className='w-2/5 mx-auto p-6 sm:p-8 flex flex-col items-center bg-white rounded my-6'>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black text-center mb-3">
                                OTP
                            </h2>
                            <p className='text-slate-400 text-sm font-normal'> Enter the 6-digit code sent to your email id.</p>
                            <form>
                                <div className='flex justify-between mb-2 gap-1 mt-5' onPaste={handlePaste}>
                                    {Array(6)
                                        .fill(0)
                                        .map((_, index) => (
                                            <input
                                                type='tel'
                                                maxLength='1'
                                                key={index}
                                                required
                                                className='w-12 h-12 outline-none bg-slate-300 text-white text-center text-xl rounded-md'
                                                ref={(e) => (inputRefs.current[index] = e)}
                                                onInput={(e) => handleInput(e, index)}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                            />
                                        ))}
                                </div>
                                <p className="text-black text-sm my-2">Don't Get Code? {""}
                                    {canResend ? (
                                        <span className="text-blue-950 cursor-pointer code" onClick={sendCode}>Resend Code</span>
                                    ) : (
                                        <span className="text-gray-500">Resend in {timer}sec</span>
                                    )}
                                </p>
                                <button className="w-full py-3 bg-black text-white rounded">Verify Email</button>
                            </form>
                        </div>
                    ) : (
                        < div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto overflow-x-hidden text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end mb-2">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={handleCopy}
                                    title="Copy Code"
                                />
                            </div>
                            <pre>
                                {`
import React, { useState, useRef, useEffect } from "react";

const OTPwithResentCode = () => {
    const [canResend, setCanResend] = useState(true);
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(null)
    const inputRefs = React.useRef([])

    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };

    const handleInput = (e, index) => {
        if (!/^\d*$/.test(e.target.value)) {
            e.target.value = ""; // Clear non-numeric input
            return;
        }
        if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    }

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text');
        const pasteArray = paste.split('');
        pasteArray.forEach((char, index) => {
            if (inputRefs.current[index]) {
                inputRefs.current[index].value = char;
            }
        })
    }
        const sendCode = () => {
        if (canResend) {
            console.log("code sent");
            setCanResend(false);
            setTimer(20);

        }
    }

    useEffect(() => {
        if (timer > 0) {
            intervalRef.current = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000)
        } else {
            clearInterval(intervalRef.current);
            setCanResend(true)
        }
        return () => clearInterval(intervalRef.current)
    }, [timer])
    return (
    <div className='w-2/5 mx-auto p-6 sm:p-8 flex flex-col items-center bg-white rounded my-6'>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black text-center mb-3">
                                OTP
                            </h2>
                            <p className='text-slate-400 text-sm font-normal'> Enter the 6-digit code sent to your email id.</p>
                            <form>
                                <div className='flex justify-between mb-2 gap-1 mt-5' onPaste={handlePaste}>
                                    {Array(6)
                                        .fill(0)
                                        .map((_, index) => (
                                            <input
                                                type='tel'
                                                maxLength='1'
                                                key={index}
                                                required
                                                className='w-12 h-12 outline-none bg-slate-300 text-white text-center text-xl rounded-md'
                                                ref={(e) => (inputRefs.current[index] = e)}
                                                onInput={(e) => handleInput(e, index)}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                            />
                                        ))}
                                </div>
                                <p className="text-black text-sm my-2">Don't Get Code? {""}
                                    {canResend ? (
                                        <span className="text-blue-950 cursor-pointer code" onClick={sendCode}>Resend Code</span>
                                    ) : (
                                        <span className="text-gray-500">Resend in {timer}sec</span>
                                    )}
                                </p>
                                <button className="w-full py-3 bg-black text-white rounded">Verify Email</button>
                            </form>
                        </div>
    )}
 export default OTPwithResentCode
                                `}
                            </pre>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default OTPwithResentCode