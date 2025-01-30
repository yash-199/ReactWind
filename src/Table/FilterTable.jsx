import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCopy } from "react-icons/io5";
const FilterTable = () => {
    const [showPreview, setShowPreview] = useState(true);
    const [filterText, setFilterText] = useState("")
    const [data] = useState([
        {
            id: 1,
            name: "Alex",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nesciunt maxime reiciendis et exercitationem incidunt doloremque?",
            date: "10 Dec 2025",
        },
        {
            id: 2,
            name: "Siri",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nesciunt maxime reiciendis et exercitationem incidunt doloremque?",
            date: "10 Dec 2025",
        },
        {
            id: 3,
            name: "Master",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nesciunt maxime reiciendis et exercitationem incidunt doloremque?",
            date: "10 Dec 2025",
        },
    ]);

    const filteredData = data.filter(
        (item) =>
            item.name.toLowerCase().includes(filterText.toLowerCase()) ||
            item.message.toLowerCase().includes(filterText.toLowerCase()) ||
            item.date.toLowerCase().includes(filterText.toLowerCase())
    );

    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };

    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Filter Table</h1>
            <div className="py-4 px-4 mt-6 sm:py-4 sm:px-4 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
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
                <div className="bg-slate-900 rounded-lg overflow-hidden py-2 p-4">
                    {showPreview ? (
                        <>
                            <form>
                                <div className='flex items-center border border-white my-10 p-2 gap-4 rounded-2xl'>
                                    <CiSearch className='text-2xl' />
                                    <input
                                        type="text"
                                        className='bg-transparent outline-none w-full'
                                        placeholder='Search by Name, Message, or Date'
                                        value={filterText}
                                        onChange={(e) => setFilterText(e.target.value)}
                                    />
                                </div>
                            </form>
                            <table className='w-full bg-transparent'>
                                <thead>
                                    <tr className='bg-[#3B82F6] text-white rounded-lg'>
                                        <th className='py-4 px-2 text-left text-lg font-medium w-1/12'>S.No</th>
                                        <th className='py-4 text-left text-lg font-medium w-1/4'>Name</th>
                                        <th className='py-4 text-center text-lg font-medium w-1/4'>Message</th>
                                        <th className='py-4 text-center text-lg font-medium w-1/4'>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item, index) => (
                                            <tr key={item.id}>
                                                <td className="py-4 px-2 w-1/12 align-top">{index + 1}.</td>
                                                <td className="py-4 w-1/4 align-top">{item.name}</td>
                                                <td className="py-4 w-1/2 text-justify">{item.message}</td>
                                                <td className="py-4 w-1/4 text-center align-top">
                                                    {item.date}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="py-4 text-center text-white">
                                                No matching records found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </>
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto overflow-x-hidden text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end mb-2">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={handleCopy}
                                    title="Copy Code"
                                />
                            </div>
                            <pre id="codeText">{`
                            
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const FilterTable = () => {
    const [filterText, setFilterText] = useState("");
    const [data] = useState([
        {
            id: 1,
            name: "Alex",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nesciunt maxime reiciendis et exercitationem incidunt doloremque?",
            date: "10 Dec 2025",
        },
        {
            id: 2,
            name: "Siri",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nesciunt maxime reiciendis et exercitationem incidunt doloremque?",
            date: "10 Dec 2025",
        },
        {
            id: 3,
            name: "Master",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nesciunt maxime reiciendis et exercitationem incidunt doloremque?",
            date: "10 Dec 2025",
        },
    ]);

    const filteredData = data.filter(
        (item) =>
            item.name.toLowerCase().includes(filterText.toLowerCase()) ||
            item.message.toLowerCase().includes(filterText.toLowerCase()) ||
            item.date.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <form>
                <div className='flex items-center border border-white my-10 p-2 gap-4 rounded-2xl'>
                    <CiSearch className='text-2xl' />
                    <input
                        type="text"
                        className='bg-transparent outline-none w-full'
                        placeholder='Search by Name, Message, or Date'
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                </div>
            </form>
            <table className='w-full bg-transparent'>
                <thead>
                    <tr className='bg-[#3B82F6] text-white rounded-lg'>
                        <th className='py-4 px-2 text-left text-lg font-medium w-1/12'>S.No</th>
                        <th className='py-4 text-left text-lg font-medium w-1/4'>Name</th>
                        <th className='py-4 text-center text-lg font-medium w-1/4'>Message</th>
                        <th className='py-4 text-center text-lg font-medium w-1/4'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <tr key={item.id}>
                                <td className="py-4 px-2 w-1/12 align-top">{index + 1}.</td>
                                <td className="py-4 w-1/4 align-top">{item.name}</td>
                                <td className="py-4 w-1/2 text-justify">{item.message}</td>
                                <td className="py-4 w-1/4 text-center align-top">
                                    {item.date}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="py-4 text-center text-white">
                                No matching records found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default FilterTable;


                            `}</pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FilterTable;
