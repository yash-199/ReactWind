import { IoCopy } from "react-icons/io5";
import { SiAltiumdesigner } from "react-icons/si";
import { CiBookmarkCheck } from "react-icons/ci";
import { useState } from 'react';
import { FaRegEye, FaCode } from "react-icons/fa";
const CardWithBenBut = () => {
    const [showPreview, setShowPreview] = useState(true)
    const copyCardCode = () => {
        const copyCode = document.getElementById('CardCode').innerText;
        navigator.clipboard.writeText(copyCode)
            .then(() => alert('Code Copied'));
    };
    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Card with Benefits and Button</h1>
            <p className="text-lg text-justify">This card component is designed to highlight key benefits or features, accompanied by a call-to-action button. It features sections for a title, description, and a list of benefits, inviting users to explore further.
            </p>
            <div className="py-4 px-4 mt-6 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
                {/* Header */}
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
                <div className="bg-slate-900 rounded-lg overflow-hidden py-4">
                    {showPreview ? (
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-4">
                            <div className="border-2 border-white py-2 px-3 rounded-md" style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}>
                                <div className="flex  items-center gap-4 py-4">
                                    <SiAltiumdesigner className="bg-white text-black rounded-full px-2 py-2 text-4xl" />
                                    <h1 className="font-bold font-sans">ReactWind CSS
                                        <p className="font-normal text-sm">Best UI for React and Tailwind CSS Components</p>
                                    </h1>
                                </div>
                                <p className="font-semibold text-lg pb-2">Benefits</p>
                                <ul>
                                    <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
                                    <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
                                    <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
                                    <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
                                </ul>
                                <button className="bg-white my-6 w-full mx-auto rounded-full text-black font-medium py-2 text-lg hover:bg-transparent border-2 border-white hover:text-white transition-all duration-100">Try it Free</button>

                            </div>
                            <div className="border-2 border-white py-2 px-3 rounded-md" style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}>
                                <div className="flex  items-center gap-4 py-4">
                                    <SiAltiumdesigner className="bg-white text-black rounded-full px-2 py-2 text-4xl" />
                                    <h1 className="font-bold font-sans">ReactWind CSS
                                        <p className="font-normal text-sm">Best UI for React and Tailwind CSS Components</p>
                                    </h1>
                                </div>
                                <p className="font-semibold text-lg pb-2">Benefits</p>
                                <ul>
                                    <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
                                    <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
                                    <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
                                    <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
                                </ul>
                                <button className="bg-white my-6 w-full mx-auto rounded-full text-black font-medium py-2 text-lg hover:bg-transparent border-2 border-white hover:text-white transition-all duration-100">Try it Free</button>

                            </div>
                            <div className="border-2 border-white py-2 px-3 rounded-md" style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}>
                                <div className="flex  items-center gap-4 py-4">
                                    <SiAltiumdesigner className="bg-white text-black rounded-full px-2 py-2 text-4xl" />
                                    <h1 className="font-bold font-sans">ReactWind CSS
                                        <p className="font-normal text-sm">Best UI for React and Tailwind CSS Components</p>
                                    </h1>
                                </div>
                                <p className="font-semibold text-lg pb-2">Benefits</p>
                                <ul>
                                    <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
                                    <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
                                    <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
                                    <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
                                </ul>
                                <button className="bg-white my-6 w-full mx-auto rounded-full text-black font-medium py-2 text-lg hover:bg-transparent border-2 border-white hover:text-white transition-all duration-100">Try it Free</button>

                            </div>
                        </div>
                    ) : (
                        <div className="p-4 sm:p-0 h-64 sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={copyCardCode}
                                    title="Copy Code"
                                />
                            </div>
                            {`
 <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-4">
    <div className="border-2 border-white py-2 px-3 rounded-md" style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}>
        <div className="flex  items-center gap-4 py-4">
            <SiAltiumdesigner className="bg-white text-black rounded-full px-2 py-2 text-4xl" />
            <h1 className="font-bold font-sans">ReactWind CSS
                <p className="font-normal text-sm">Best UI for React and Tailwind CSS Components</p>
            </h1>
        </div>
        <p className="font-semibold text-lg pb-2">Benefits</p>
        <ul>
            <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
            <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
            <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
            <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
        </ul>
        <bu className="bg-white my-6 w-full mx-auto rounded-full text-black font-medium py-2 text-lg hover:bg-transparent border-2 border-white hover:text-white transition-all duration-100">Try it Free</bu
    </div>
    <div className="border-2 border-white py-2 px-3 rounded-md" style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}>
        <div className="flex  items-center gap-4 py-4">
            <SiAltiumdesigner className="bg-white text-black rounded-full px-2 py-2 text-4xl" />
            <h1 className="font-bold font-sans">ReactWind CSS
                <p className="font-normal text-sm">Best UI for React and Tailwind CSS Components</p>
            </h1>
        </div>
        <p className="font-semibold text-lg pb-2">Benefits</p>
        <ul>
            <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
            <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
            <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
            <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
        </ul>
        <bu className="bg-white my-6 w-full mx-auto rounded-full text-black font-medium py-2 text-lg hover:bg-transparent border-2 border-white hover:text-white transition-all duration-100">Try it Free</bu
    </div>
    <div className="border-2 border-white py-2 px-3 rounded-md" style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}>
        <div className="flex  items-center gap-4 py-4">
            <SiAltiumdesigner className="bg-white text-black rounded-full px-2 py-2 text-4xl" />
            <h1 className="font-bold font-sans">ReactWind CSS
                <p className="font-normal text-sm">Best UI for React and Tailwind CSS Components</p>
            </h1>
        </div>
        <p className="font-semibold text-lg pb-2">Benefits</p>
        <ul>
            <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
            <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
            <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
            <li className="flex gap-4 items-center"><CiBookmarkCheck className="text-2xl drop-shadow-xl bg-white text-black rounded-full py-1 px-1" /> Best UI for React and Tailwind CSS Components</li>
        </ul>
        <bu className="bg-white my-6 w-full mx-auto rounded-full text-black font-medium py-2 text-lg hover:bg-transparent border-2 border-white hover:text-white transition-all duration-100">Try it Free</bu
    </div>
</div>
                    `}
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default CardWithBenBut