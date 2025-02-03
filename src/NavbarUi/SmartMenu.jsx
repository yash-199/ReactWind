import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { GrSearch } from "react-icons/gr";
import { FaDochub } from "react-icons/fa";
import { RxComponent2 } from "react-icons/rx";
import { RiBloggerFill } from "react-icons/ri";
import { RiSlideshowView } from "react-icons/ri";

const SmartMenu = () => {
    const [showPreview, setShowPreview] = useState(true);

    return (
        <div className="sm:px-10 sm:py-5 px-0 py-0">
            <div className="flex flex-col justify-center mt-10 px-0">
                <p className="text-white text-4xl my-10 font-semibold">Responsive Menu Top & Bottom</p>
                <div className="py-4 px-4 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
                    {/* header */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="hidden sm:flex gap-3 px-2">
                            <p className="h-2 w-2 bg-red-400 rounded-full"></p>
                            <p className="h-2 w-2 bg-yellow-400 rounded-full"></p>
                            <p className="h-2 w-2 bg-green-400 rounded-full"></p>
                        </div>
                        <div className="flex py-1 px-2 justify-between gap-2 rounded mt-10 md:mt-0 w-72">
                            <p
                                className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer ${showPreview ? 'text-white bg-indigo-500' : 'text-black bg-white'}`}
                                onClick={() => setShowPreview(true)}
                            >
                                <FaRegEye /> Prev
                            </p>
                            <p
                                className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer ${!showPreview ? 'text-white bg-indigo-500' : 'text-black bg-white'}`}
                                onClick={() => setShowPreview(false)}
                            >
                                <FaCode /> Code
                            </p>
                        </div>
                    </div>

                    {/* content preview */}
                    <div className="bg-slate-900 rounded-lg overflow-hidden h-96 px-6">
                        <>
                            {showPreview ? (
                                <div className="bg-white mt-3 rounded py-2 px-4 flex items-center justify-between">
                                    <p className="text-black font-semibold rounded-full my-1 uppercase bg-white drop-shadow-lg px-6 py-2">
                                        Logo
                                    </p>
                                    <div className="flex items-center gap-4 px-4 py-2 rounded-full bg-[#333A5C]">
                                        <GrSearch className="h-5 w-5 text-white" />
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-400"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className="bg-slate-900 p-4 sm:p-6 h-full sm:h-96 text-left overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words"
                                    id="codeText"
                                >
                                    <div className="flex justify-end mb-2">
                                        <IoCopy
                                            className="cursor-pointer text-white hover:text-blue-400"
                                            title="Copy Code"
                                        />
                                    </div>
                                    {`
<div className="bg-white mt-3 rounded py-2 px-4 flex items-center justify-between">
<p className="text-black font-semibold rounded-full my-10 uppercase bg-white drop-shadow-lg px-6 py-2">
    Logo
</p>
<div className="flex items-center gap-4 px-4 py-2 rounded-full bg-[#333A5C]">
<GrSearch className="h-5 w-5 text-white" />
<input
type="text"
placeholder="Search"
className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-400"
        />
    </div>
</div>

{/* Bottom Navigation */}
                    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center bg-white shadow-md py-4">
                        <div className="w-[80%] max-w-xs">
                            <ul className="flex justify-around items-center space-x-2">
                                <li className="text-xl flex flex-col items-center">
                                    <FaDochub className="m-2 text-black bg-white rounded-full drop-shadow-lg px-2 py-2 text-4xl" />
                                    <hr className="border-none h-1 bg-black w-4/5 m-auto hidden" />
                                </li>
                                <li className="text-xl flex flex-col items-center">
                                    <RxComponent2 className="m-2 text-black bg-white rounded-full drop-shadow-lg px-2 py-2 text-4xl" />
                                    <hr className="border-none h-1 bg-black w-4/5 m-auto hidden" />
                                </li>
                                <li className="text-xl flex flex-col items-center">
                                    <RiBloggerFill className="m-2 text-black bg-white rounded-full drop-shadow-lg px-2 py-2 text-4xl" />
                                    <hr className="border-none h-1 bg-black w-4/5 m-auto hidden" />
                                </li>
                                <li className="text-xl flex flex-col items-center">
                                    <RiSlideshowView className="m-2 text-black bg-white rounded-full drop-shadow-lg px-2 py-2 text-4xl" />
                                    <hr className="border-none h-1 bg-black w-4/5 m-auto hidden" />
                                </li>
                            </ul>
                        </div>
                    </div>
              `}
                                </div>
                            )}
                        </>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center bg-white shadow-md py-4">
                        <div className="w-[80%] max-w-xs">
                            <ul className="flex justify-around items-center space-x-2">
                                <li className="text-xl flex flex-col items-center">
                                    <FaDochub className="m-2 text-black bg-white rounded-full drop-shadow-lg px-2 py-2 text-4xl" />
                                    <hr className="border-none h-1 bg-black w-4/5 m-auto hidden" />
                                </li>
                                <li className="text-xl flex flex-col items-center">
                                    <RxComponent2 className="m-2 text-black bg-white rounded-full drop-shadow-lg px-2 py-2 text-4xl" />
                                    <hr className="border-none h-1 bg-black w-4/5 m-auto hidden" />
                                </li>
                                <li className="text-xl flex flex-col items-center">
                                    <RiBloggerFill className="m-2 text-black bg-white rounded-full drop-shadow-lg px-2 py-2 text-4xl" />
                                    <hr className="border-none h-1 bg-black w-4/5 m-auto hidden" />
                                </li>
                                <li className="text-xl flex flex-col items-center">
                                    <RiSlideshowView className="m-2 text-black bg-white rounded-full drop-shadow-lg px-2 py-2 text-4xl" />
                                    <hr className="border-none h-1 bg-black w-4/5 m-auto hidden" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartMenu;
