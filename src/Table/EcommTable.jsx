import React, { useState } from 'react';
import { FaRegEye, FaCode } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import ApplePc from '../assets/BannerUI-Image/ApplePc.jpeg';
import { RiDeleteBin5Line } from "react-icons/ri";

const EcommTable = () => {
    const [showPreview, setShowPreview] = useState(true);
    const [counts, setCounts] = useState([1, 1, 1]); // Array to store counts for each row
    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };
    const IncreaseCount = (index) => {
        setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] += 1; // Increment the count for the specific row
            return newCounts;
        });
    };

    const DecreaseCount = (index) => {
        setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] > 1) {
                newCounts[index] -= 1; // Decrement the count for the specific row
            }
            return newCounts;
        });
    };

    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Price Comparison Table with Bottom CTA</h1>
            <div className="py-4 px-4 mt-6 sm:py-4 sm:px-4 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                    <div className="hidden sm:flex gap-3 px-2">
                        <p className="h-2 w-2 bg-red-400 rounded-full"></p>
                        <p className="h-2 w-2 bg-yellow-400 rounded-full"></p>
                        <p className="h-2 w-2 bg-green-400 rounded-full"></p>
                    </div>
                    <div className="flex py-1 px-2 justify-between gap-2 rounded mt-10 md:mt-0 w-72">
                        <p
                            className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer ${showPreview ? "text-white bg-indigo-500" : "text-black bg-white"}`}
                            onClick={() => setShowPreview(true)}
                        >
                            <FaRegEye /> Prev
                        </p>
                        <p
                            className={`flex items-center gap-2 font-sans font-medium py-2 px-4 rounded drop-shadow-lg w-full text-center cursor-pointer ${!showPreview ? "text-white bg-indigo-500" : "text-black bg-white"}`}
                            onClick={() => setShowPreview(false)}
                        >
                            <FaCode /> Code
                        </p>
                    </div>
                </div>
                <div className="bg-slate-900 rounded-lg overflow-hidden py-2 p-4">
                    {showPreview ? (
                        <table className='w-full'>
                            <tr className='bg-[#3B82F6] text-white rounded-lg'>
                                <th className='py-4 text-lg font-medium'>Product Image</th>
                                <th className='py-4 text-lg font-medium'>Product Description</th>
                                <th className='py-4 text-lg font-medium'>Quantity</th>
                                <th className='py-4 text-lg font-medium'>Price</th>
                                <th className='py-4 text-lg font-medium'>Action</th>
                            </tr>
                            {counts.map((count, index) => (
                                <tr key={index} className='bg-[#FFFFFF] text-black'>
                                    <td className='py-4 w-1/3 px-4'><img src={ApplePc} className='w-1/3' alt="" /></td>
                                    <td className='py-4 text-lg'>
                                        <p>Apple iMac M4(16 GB Unified)</p>
                                        <p className='text-sm text-slate-400'>Blue, 461mm x 547mm x 147mm, 4.42kg</p>
                                        <p className='text-lg py-4 text-slate-400'>Seller: XYZ</p>
                                    </td>
                                    <td className='py-4 text-center text-lg'>
                                        <div className='flex items-center justify-between'>
                                            <button onClick={() => IncreaseCount(index)} className='bg-[#3B82F6] text-white rounded-lg px-4 py-2'>+</button>
                                            <p>{count}</p>
                                            <button onClick={() => DecreaseCount(index)} className='bg-[#3B82F6] text-white rounded-lg px-4 py-2'>-</button>
                                        </div>
                                    </td>
                                    <td className='py-4 text-center text-lg'>Rs {count * 3000}</td>
                                    <td className='py-4 text-center text-lg'><RiDeleteBin5Line /></td>
                                </tr>
                            ))}
                        </table>
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto overflow-x-hidden text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end mb-2">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={handleCopy}
                                    title="Copy Code"
                                />
                            </div>
                            <pre id="codeText">
                                {`
 <table className='w-full'>
<tr className='bg-[#3B82F6] text-white rounded-lg'>
    <th className='py-4 text-lg font-medium'>Product Image</th>
    <th className='py-4 text-lg font-medium'>Product Description</th>
    <th className='py-4 text-lg font-medium'>Quantity</th>
    <th className='py-4 text-lg font-medium'>Price</th>
    <th className='py-4 text-lg font-medium'>Action</th>
</tr>
{counts.map((count, index) => (
    <tr key={index} className='bg-[#FFFFFF] text-black'>
        <td className='py-4 w-1/3 px-4'><img src={ApplePc} className='w-1/3' alt="" /></td>
        <td className='py-4 text-lg'>
            <p>Apple iMac M4(16 GB Unified)</p>
            <p className='text-sm text-slate-400'>Blue, 461mm x 547mm x 147mm, 4.42kg</p>
            <p className='text-lg py-4 text-slate-400'>Seller: XYZ</p>
        </td>
        <td className='py-4 text-center text-lg'>
            <div className='flex items-center justify-between'>
                <button onClick={() => IncreaseCount(index)} className='bg-[#3B82F6] text-white rounded-lg px-4 py-2'>+</button>
                <p>{count}</p>
                <button onClick={() => DecreaseCount(index)} className='bg-[#3B82F6] text-white rounded-lg px-4 py-2'>-</button>
            </div>
        </td>
        <td className='py-4 text-center text-lg'>Rs {count * 3000}</td>
        <td className='py-4 text-center text-lg'><RiDeleteBin5Line /></td>
    </tr>
))}
</table>                          
                                                    `}
                            </pre>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default EcommTable;
