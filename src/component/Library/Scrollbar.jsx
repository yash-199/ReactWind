import { useState } from 'react'
import './scrollbar.css'
import { IoCopy } from "react-icons/io5";
import { FaCode } from "react-icons/fa";


const Scrollbar = () => {

    const [showPreview, setShowPreview] = useState(true);


    const CopyScrollBarCode = () => {
        const textToCopy = document.getElementById('ScrollCode').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied'))
    }
    return (
        <div className='flex flex-col items-center justify-center mt-10 px-0 sm:px-6 lg:px-8'>
            <div className='py-4 px-4 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full max-w-2xl backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942]'>
                {/* headder */}
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

                {/* code and preview */}
                <div className="bg-slate-900 rounded-lg overflow-hidden">
                    {showPreview ? (
                        <div className='bg-slate-900 p-100 rounded-lg shadow-lg w-full text-indigo-300 text-sm'>
                            <h2 className='text-3xl font-semibold text-white text-center mb-3 pt-10'>Scroll Bar</h2>
                            <div className='p-4 text-justify h-60 overflow-auto'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut perspiciatis aliquam tempore eum iure est harum ratione corporis nemo, distinctio nisi vitae placeat. Sit possimus suscipit explicabo deserunt enim?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut perspiciatis aliquam tempore eum iure est harum ratione corporis nemo, distinctio nisi vitae placeat. Sit possimus suscipit explicabo deserunt enim?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut perspiciatis aliquam tempore eum iure est harum ratione corporis nemo, distinctio nisi vitae placeat. Sit possimus suscipit explicabo deserunt enim?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut perspiciatis aliquam tempore eum iure est harum ratione corporis nemo, distinctio nisi vitae placeat. Sit possimus suscipit explicabo deserunt enim?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut perspiciatis aliquam tempore eum iure est harum ratione corporis nemo, distinctio nisi vitae placeat. Sit possimus suscipit explicabo deserunt enim?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut perspiciatis aliquam tempore eum iure est harum ratione corporis nemo, distinctio nisi vitae placeat. Sit possimus suscipit explicabo deserunt enim?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut perspiciatis aliquam tempore eum iure est harum ratione corporis nemo, distinctio nisi vitae placeat. Sit possimus suscipit explicabo deserunt enim?</p>
                            </div>
                        </div>
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="ScrollCode">
                            <div className="flex justify-end mb-2">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={CopyScrollBarCode}
                                    title="Copy Code"
                                />
                            </div>

                            {`
                                <h2 className='text-3xl font-semibold text-white text-center mb-3 pt-10'>Scroll Bar</h2>
                            <div className='p-4 text-justify h-60 overflow-auto'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut perspiciatis aliquam tempore eum iure est harum ratione corporis nemo, distinctio nisi vitae placeat. Sit possimus suscipit explicabo deserunt enim?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut perspiciatis aliquam tempore eum iure est harum ratione corporis nemo, distinctio nisi vitae placeat. Sit possimus suscipit explicabo deserunt enim?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut perspiciatis aliquam tempore eum iure est harum ratione corporis nemo, distinctio nisi vitae placeat. Sit possimus suscipit explicabo deserunt enim?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut perspiciatis aliquam tempore eum iure est harum ratione corporis nemo, distinctio nisi vitae placeat. Sit possimus suscipit explicabo deserunt enim?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut perspiciatis aliquam tempore eum iure est harum ratione corporis nemo, distinctio nisi vitae placeat. Sit possimus suscipit explicabo deserunt enim?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut perspiciatis aliquam tempore eum iure est harum ratione corporis nemo, distinctio nisi vitae placeat. Sit possimus suscipit explicabo deserunt enim?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aut perspiciatis aliquam tempore eum iure est harum ratione corporis nemo, distinctio nisi vitae placeat. Sit possimus suscipit explicabo deserunt enim?</p>
                            </div>

                            Add Index.css
                            <pre className='scrollCss p-4'>
                                ::-webkit-scrollbar {
                                width: 10px;
}

                            /* Track */
                            ::-webkit-scrollbar-track {
                                box - shadow: inset 0 0 2px #5f6fff;
                            background-color: #0f172a;
                            border-radius: 10px;
}

                            /* Handle */
                            ::-webkit-scrollbar-thumb {
                                background: #fff;
                            border-radius: 10px;
}

                            /* Handle on hover */
                            ::-webkit-scrollbar-thumb:hover {
                                background: #fff;


                        </pre>
    
`}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Scrollbar