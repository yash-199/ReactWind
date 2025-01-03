import { useState } from 'react';
import person_icon from '../../assets/person_icon.svg';
import email_icon from '../../assets/mail_icon.svg';
import lock_icon from '../../assets/lock_icon.svg';
import { FaCode } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";

const Register = () => {
    const [state, setState] = useState('Sign Up');
    const [showPreview, setShowPreview] = useState(true);

    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };

    return (
        <div className='flex flex-col items-center justify-center mt-10 px-0 sm:px-6 lg:px-8'>
            <div className='py-4 px-4 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full max-w-2xl backdrop-blur-lg  bg-[#1C1F26] border-2 border-[#343942]'>
                {/* Header */}
                <div className='flex justify-between items-center mb-4'>
                    <div className='hidden sm:flex gap-3 px-2'>
                        <p className='h-2 w-2 bg-red-400 rounded-full'></p>
                        <p className='h-2 w-2 bg-yellow-400 rounded-full'></p>
                        <p className='h-2 w-2 bg-green-400 rounded-full'></p>
                    </div>
                    <div className='flex py-1 px-2 justify-between gap-2 rounded mt-10 md:mt-0 w-1/2'>
                        <p
                            className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer 
                            ${showPreview ? 'text-white bg-indigo-500' : 'text-black bg-white'}`}
                            onClick={() => setShowPreview(true)}
                        >
                            <FaCode /> Prev
                        </p>
                        <p
                            className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer 
                            ${!showPreview ? 'text-white bg-indigo-500' : 'text-black bg-white'}`}
                            onClick={() => setShowPreview(false)}
                        >
                            <FaCode /> Code
                        </p>
                    </div>
                </div>

                {/* Code and Preview */}
                <div className="bg-slate-900 rounded-lg overflow-hidden">
                    {showPreview ? (
                        <div className='w-full p-6 sm:p-8 flex flex-col items-center'>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-3">
                                {state === 'Sign Up' ? "Create Account" : "Login"}
                            </h2>
                            <p className="text-center text-sm text-gray-400 mb-6">
                                {state === 'Sign Up' ? 'Create your Account' : 'Login your account'}
                            </p>
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
                        </div>
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end mb-2">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={handleCopy}
                                    title="Copy Code"
                                />
                            </div>
                            {`
import person_icon from '../../assets/person_icon.svg';
import email_icon from '../../assets/mail_icon.svg';
import lock_icon from '../../assets/lock_icon.svg';
const Register = () => {
    const [state, setState] = useState('Sign Up');
    return (
        <>
            <div className="flex items-center justify-center mt-20 px-6 sm:px-0">
                <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm">
                    <h2 className="text-3xl font-semibold text-white text-center mb-3">
                        {state === 'Sign Up' ? "Create Account" : "Login"}
                    </h2>
                    <p className="text-center text-sm mb-6">
                        {state === 'Sign Up' ? 'Create your Account' : 'Login your account'}
                    </p>
                    <form>
                        {state === "Sign Up" && (
                            <div className="mb-4 flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#333A5C]">
                                <img src={person_icon} alt="Full Name" />
                                <input
                                    type="text"
                                    className="bg-transparent outline-none"
                                    placeholder="Full Name"
                                />
                            </div>
                        )}
                        <div className="mb-4 flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#333A5C]">
                            <img src={email_icon} alt="Email" />
                            <input
                                type="email"
                                className="bg-transparent outline-none"
                                placeholder="example@gmail.com"
                            />
                        </div>
                        <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#333A5C]">
                            <img src={lock_icon} alt="Password" />
                            <input
                                type="password"
                                placeholder="*********"
                                className="bg-transparent outline-none"
                            />
                        </div>
                    </form>
                    {state === "Sign Up" ? (
                        <p className="text-gray-400 text-center text-xs mt-4">
                            Already have an account?
                            <span
                                onClick={() => setState('Login')}
                                className="text-blue-400 cursor-pointer underline"
                            >
                                Login here
                            </span>
                        </p>
                    ) : (
                        <p className="text-gray-400 text-center text-xs mt-4">
                            Don't have an account?
                            <span
                                onClick={() => setState('Sign Up')}
                                className="text-blue-400 cursor-pointer underline"
                            >
                                Sign up here
                            </span>
                        </p>
                    )}
                            `}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Register;
