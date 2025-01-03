import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";

const DropdownMenu = () => {
    const [showPreview, setShowPreview] = useState(true);
    const dropdownMenuCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
    return (
        <div className="sm:px-10 sm:py-5 px-0 py-0">
            <div className="flex flex-col justify-center mt-10 px-0">
                <p className="text-white text-4xl font-mono font-semibold mt-10">Simple & with Image Dropdown</p>
                <p className="my-5 text-white text-lg text-justify">

                    This DropdownMenu component showcases a clean, interactive dropdown menu with an image-based dropdown option. The component is designed to provide a sleek, minimalistic navigation experience, suitable for various web applications. It features a toggleable preview and code display mode, allowing users to either view the menu's live preview or copy the code for integration. The header includes a color-coded button section for preview and code views, while the dropdown contains a simple navigation structure, including home and dropdown options with icons. The menu items provide a seamless user experience with hover effects and responsive design, making it perfect for modern web interfaces.
                </p>
                <div className="py-4 px-4 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
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
                                className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer ${!showPreview
                                    ? "text-white bg-indigo-500"
                                    : "text-black bg-white"
                                    }`}
                                onClick={() => setShowPreview(false)}
                            >
                                <FaCode /> Code
                            </p>
                        </div>
                    </div>

                    {/* Content Preview */}
                    <div className="bg-slate-900 rounded-lg overflow-hidden h-96 px-6 py-4">
                        {showPreview ? (
                            <div className="flex items-center justify-between bg-white mt-6 rounded-sm px-4 py-2">
                                <p className="text-black font-semibold rounded-full font-mono uppercase bg-white drop-shadow-lg px-6 py-2">
                                    Logo
                                </p>
                                <ul className="flex items-center gap-4">
                                    <li className="relative group">
                                        Home
                                    </li>
                                    <li className="relative group">
                                        Simple Dropdown
                                        {/* Simple Dropdown */}
                                        <ul className="absolute left-0 mt-0 hidden group-hover:block bg-white shadow-md rounded-md overflow-hidden">
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 1</li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 2</li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 3</li>
                                        </ul>
                                    </li>
                                    <li className="relative group">
                                        Dropdown with Image
                                        {/* Dropdown with Image */}
                                        <ul className="absolute left-0 mt-0 hidden group-hover:flex bg-white shadow-md rounded-md">
                                            <div className="flex w-full pr-4 gap-4">
                                                <div className="w-1/2">
                                                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                        <img
                                                            src="https://via.placeholder.com/20"
                                                            alt="Icon"
                                                            className="w-5 h-5"
                                                        />
                                                        Profile
                                                    </li>
                                                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                        <img
                                                            src="https://via.placeholder.com/20"
                                                            alt="Icon"
                                                            className="w-5 h-5"
                                                        />
                                                        Settings
                                                    </li>
                                                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                        <img
                                                            src="https://via.placeholder.com/20"
                                                            alt="Icon"
                                                            className="w-5 h-5"
                                                        />
                                                        Logout
                                                    </li>
                                                </div>
                                                <div className="w-1/2">
                                                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                        <img
                                                            src="https://via.placeholder.com/20"
                                                            alt="Icon"
                                                            className="w-5 h-5"
                                                        />
                                                        Profile
                                                    </li>
                                                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                        <img
                                                            src="https://via.placeholder.com/20"
                                                            alt="Icon"
                                                            className="w-5 h-5"
                                                        />
                                                        Settings
                                                    </li>
                                                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                        <img
                                                            src="https://via.placeholder.com/20"
                                                            alt="Icon"
                                                            className="w-5 h-5"
                                                        />
                                                        Logout
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>

                                </ul>
                                <p className="text-black font-semibold rounded-full font-mono uppercase bg-white drop-shadow-lg px-6 py-2">
                                    Contact Us
                                </p>
                            </div>
                        ) : (
                            <div className="p-4 sm:p-6 h-full sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText" >
                                <div className="flex justify-end mb-2">
                                    <IoCopy className="cursor-pointer text-white hover:text-blue-400"
                                        onClick={dropdownMenuCopy}
                                        title="Copy Code"
                                    />
                                </div>
                                {`
<div className="flex items-center justify-between bg-white mt-6 rounded-sm px-4 py-2">
<p className="text-black font-semibold rounded-full font-mono uppercase bg-white drop-shadow-lg px-6 py-2">
    Logo
</p>
<ul className="flex items-center gap-4">
    <li className="relative group">
        Home
    </li>
    <li className="relative group">
        Simple Dropdown
        {/* Simple Dropdown */}
        <ul className="absolute left-0 mt-0 hidden group-hover:block bg-white shadow-md rounded-md overflow-hidden">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 3</li>
        </ul>
    </li>
    < className="relative group">
        Dropdown with Image
        {/* Dropdown with Image */}
        <ul className="absolute left-0 mt-0 hidden group-hover:flex bg-white shadow-md rounded-md">
    <div className="flex w-full pr-4 gap-4">
        <div className="w-1/2">
            <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <img
                    src="https://via.placeholder.com/20"
                    alt="Icon"
                    className="w-5 h-5"
                />
                Profile
            </li>
            <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <img
                    src="https://via.placeholder.com/20"
                    alt="Icon"
                    className="w-5 h-5"
                />
                Settings
            </li>
            <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <img
                    src="https://via.placeholder.com/20"
                    alt="Icon"
                    className="w-5 h-5"
                />
                Logout
            </li>
        </div>
        <div className="w-1/2">
            <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <img
                    src="https://via.placeholder.com/20"
                    alt="Icon"
                    className="w-5 h-5"
                />
                Profile
            </li>
            <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <img
                    src="https://via.placeholder.com/20"
                    alt="Icon"
                    className="w-5 h-5"
                />
                Settings
            </li>
            <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <img
                    src="https://via.placeholder.com/20"
                    alt="Icon"
                    className="w-5 h-5"
                />
                Logout
            </li>
        </div>
                </div>
            </ul>
    
    </ul>
    <p className="text-black font-semibold rounded-full font-mono uppercase bg-white drop-shadow-lg px-6 py-2">
        Contact Us
    </p>
</div>
                                 `}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;
