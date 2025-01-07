import { IoCopy } from "react-icons/io5";
import { FaRegEye, FaCode } from "react-icons/fa";
import { useState } from 'react';

const PricingCard = () => {
    const [showPreview, setShowPreview] = useState(true);
    const copyCardCode = () => {
        const copyCode = document.getElementById('CardCode').innerText;
        navigator.clipboard.writeText(copyCode)
            .then(() => alert('Code Copied'));
    };
    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Pricing Card</h1>
            <p className="text-lg text-justify">This sleek and modern card component highlights key content. It features an image at the top, followed by a bold title and a paragraph. Ideal for showcasing various types of content, such as blog posts, portfolio items, or product features, this card layout ensures a visually engaging presentation that captures attention.
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

                {/* content */}
                <div className="bg-slate-900 rounded-lg overflow-hidden py-4">
                    {showPreview ? (
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4 gap-4">
                            <div
                                className="border-2 border-white py-2 px-4 rounded-md"
                                style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                            >
                                <p className="text-3xl font-semibold py-4 font-sans">Free Plan</p>
                                <p className="text-md text-justify ">For teams that need advanced scheduling tools to streamline workflows and enhance collaboration,
                                    ensuring every meeting is productive and on track.</p>
                                <p className=" py-4 font-semibold font-sans text-3xl">$20<span className="text-sm font-thin"> /mo</span></p>
                                <ul className="pb-4">
                                    <li>1.) Important Point</li>
                                    <li>2.) Important Point</li>
                                    <li>3.) Important Point</li>
                                    <li>4.) Important Point</li>
                                </ul>
                                <button className="bg-white w-full mx-auto rounded-md text-black font-medium py-2 text-lg hover:bg-transparent border-2 border-white hover:text-white transition-all duration-100">Try it Free</button>
                            </div>
                            <div
                                className="border-2 border-white py-2 px-4 rounded-md"
                                style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                            >
                                <p className="text-3xl font-semibold py-4 font-sans">Starter Plan</p>
                                <p className="text-md text-justify ">For teams that need advanced scheduling tools to streamline workflows and enhance collaboration,
                                    ensuring every meeting is productive and on track.</p>
                                <p className=" py-4 font-semibold font-sans text-3xl">$20<span className="text-sm font-thin"> /mo</span></p>
                                <ul className="pb-4">
                                    <li>1.) Important Point</li>
                                    <li>2.) Important Point</li>
                                    <li>3.) Important Point</li>
                                    <li>4.) Important Point</li>
                                </ul>
                                <button className="bg-white w-full mx-auto rounded-md text-black font-medium py-2 text-lg hover:bg-transparent border-2 border-white hover:text-white transition-all duration-100">Try it Free</button>
                            </div>
                            <div
                                className="border-2 border-white py-2 px-4 rounded-md"
                                style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                            >
                                <p className="text-3xl font-semibold py-4 font-sans">Premium Plan</p>
                                <p className="text-md text-justify ">For teams that need advanced scheduling tools to streamline workflows and enhance collaboration,
                                    ensuring every meeting is productive and on track.</p>
                                <p className=" py-4 font-semibold font-sans text-3xl">$20<span className="text-sm font-thin"> /mo</span></p>
                                <ul className="pb-4">
                                    <li>1.) Important Point</li>
                                    <li>2.) Important Point</li>
                                    <li>3.) Important Point</li>
                                    <li>4.) Important Point</li>
                                </ul>
                                <button className="bg-white w-full mx-auto rounded-md text-black font-medium py-2 text-lg hover:bg-transparent border-2 border-white hover:text-white transition-all duration-100">Try it Free</button>
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
  <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4 gap-4">
<div
    className="border-2 border-white py-2 px-4 rounded-md"
    style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
>
    <p className="text-3xl font-semibold py-4 font-sans">Free Plan</p>
    <p className="text-md text-justify ">For teams that need advanced scheduling tools to streamline workflows and enhance collaboration,
        ensuring every meeting is productive and on track.</p>
    <p className=" py-4 font-semibold font-sans text-3xl">$20<span className="text-sm font-thin"> /mo</span></p>
    <ul className="pb-4">
        <li>1.) Important Point</li>
        <li>2.) Important Point</li>
        <li>3.) Important Point</li>
        <li>4.) Important Point</li>
    </ul>
    <button className="bg-white w-full mx-auto rounded-md text-black font-medium py-2 text-lg hover:bg-transparent border-2 border-white hover:text-white transition-all duration-100">Try it Free</button>
</div>
<div
    className="border-2 border-white py-2 px-4 rounded-md"
    style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
>
    <p className="text-3xl font-semibold py-4 font-sans">Starter Plan</p>
    <p className="text-md text-justify ">For teams that need advanced scheduling tools to streamline workflows and enhance collaboration,
        ensuring every meeting is productive and on track.</p>
    <p className=" py-4 font-semibold font-sans text-3xl">$20<span className="text-sm font-thin"> /mo</span></p>
    <ul className="pb-4">
        <li>1.) Important Point</li>
        <li>2.) Important Point</li>
        <li>3.) Important Point</li>
        <li>4.) Important Point</li>
    </ul>
    <button className="bg-white w-full mx-auto rounded-md text-black font-medium py-2 text-lg hover:bg-transparent border-2 border-white hover:text-white transition-all duration-100">Try it Free</button>
</div>
    <div
        className="border-2 border-white py-2 px-4 rounded-md"
        style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
    >
        <p className="text-3xl font-semibold py-4 font-sans">Premium Plan</p>
        <p className="text-md text-justify ">For teams that need advanced scheduling tools to streamline workflows and enhance collaboration,
            ensuring every meeting is productive and on track.</p>
        <p className=" py-4 font-semibold font-sans text-3xl">$20<span className="text-sm font-thin"> /mo</span></p>
        <ul className="pb-4">
            <li>1.) Important Point</li>
            <li>2.) Important Point</li>
            <li>3.) Important Point</li>
            <li>4.) Important Point</li>
        </ul>
        <button className="bg-white w-full mx-auto rounded-md text-black font-medium py-2 text-lg hover:bg-transparent border-2 border-white hover:text-white transition-all duration-100">Try it Free</button>
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

export default PricingCard