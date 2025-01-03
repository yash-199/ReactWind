import { FaCircleCheck } from "react-icons/fa6";
import { useState } from 'react';
import { IoCopy } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
const ButtonGradient = () => {

    const [showPreview, setShowPreview] = useState(true);


    const handleCopyButton = () => {
        const buttonCode = document.getElementById('ButtonCode').innerText;
        navigator.clipboard.writeText(buttonCode)
            .then(() => alert("code copy"));
    }
    return (
        <div className='flex flex-col items-center justify-center mt-10 px-0 sm:px-6 lg:px-8'>
            <div className='py-4 px-4 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full max-w-2xl backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942]'>
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

                {/* code & Preview */}
                <div className="bg-slate-900 rounded-lg overflow-hidden">
                    {showPreview ? (
                        <div className='flex flex-wrap justify-between items-center gap-4 mt-16 px-10 py-10'>
                            <button className='bg-blue-600 py-2 px-6 text-white rounded'>Primay Button</button>
                            <button className='bg-white py-2 px-4 text-black rounded-md'>Secondary Button</button>
                            <p className="flex items-center justify-between gap-4 text-white bg-blue-600 py-2 px-4 rounded-lg"><FaCircleCheck /> Icon Button</p>
                            <button className="bg-gradient-to-br from-blue-200 to-purple-400 py-2 px-6 text-white rounded-full">Gradient Button</button>
                        </div>
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="ButtonCode">
                            <div className="flex justify-end mb-2">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={handleCopyButton}
                                    title="Copy Code"
                                />
                            </div>
                            {`
                                <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm mt-6'>
                    <h2 className='text-3xl font-semibold text-white text-center mb-3'>Gradient Button</h2>
                    <div className='flex flex-wrap justify-between items-center gap-4 mt-8'>
                        <button className='bg-blue-600 py-2 px-6 text-white rounded'>Primay Button</button>
                        <button className='bg-white py-2 px-4 text-black rounded-md'>Secondary Button</button>
                        <p className="flex items-center justify-between gap-4 text-white bg-blue-600 py-2 px-4 rounded-lg"><FaCircleCheck /> Icon Button</p>
                        <button className="bg-gradient-to-br from-blue-200 to-purple-400 py-2 px-6 text-black rounded-full">Gradient Button</button>
                    </div>
                </div>
                            `}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ButtonGradient