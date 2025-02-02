import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TiArrowLeftThick } from "react-icons/ti";
import { TiArrowRightThick } from "react-icons/ti";
import { IoCopy } from "react-icons/io5";

const TableWithPagination = () => {
    const [showPreview, setShowPreview] = useState(true)
    const [searchQuery, SetsearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5;



    const data = [
        { id: 1, name: "Afghanistan", currency: { code: "AFN", name: "Afghani", symbol: "؋" } },
        { id: 2, name: "Albania", currency: { code: "ALL", name: "Lek", symbol: "Lek" } },
        { id: 3, name: "Algeria", currency: { code: "DZD", name: "Dinar", symbol: false } },
        { id: 4, name: "American Samoa", currency: { code: "USD", name: "Dollar", symbol: "$" } },
        { id: 5, name: "Andorra", currency: { code: "EUR", name: "Euro", symbol: "€" } },
        { id: 6, name: "Angola", currency: { code: "AOA", name: "Kwanza", symbol: "Kz" } },
        { id: 7, name: "Anguilla", currency: { code: "XCD", name: "Dollar", symbol: "$" } },
        { id: 8, name: "Antarctica", currency: { code: "", name: "", symbol: false } },
        { id: 9, name: "Antigua and Barbuda", currency: { code: "XCD", name: "Dollar", symbol: "$" } },
        { id: 10, name: "Argentina", currency: { code: "ARS", name: "Peso", symbol: "$" } },
    ];

    const filteredFlag = data.filter(
        (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.currency.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.currency.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination Logic
    const totalPages = Math.ceil(filteredFlag.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = filteredFlag.slice(startIndex, startIndex + itemsPerPage)

    const handlePrevPage = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1)
    }

    const handleNextPage = () => {
        if (currentPage < totalPages)
            setCurrentPage(currentPage + 1)
    }

    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };

    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Table with Search and Pagination</h1>
            <div className="py-4 px-4 mt-6 sm:py-4 sm:px-4 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
                {/* Header */}
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
                {/* Content */}
                <div className="bg-slate-900 rounded-lg overflow-hidden py-2 p-4">
                    {showPreview ? (
                        <>
                            <form>
                                <div className='flex items-center border border-white my-10 p-2 gap-4 rounded-2xl'>
                                    <CiSearch className='text-2xl' />
                                    <input
                                        type="text"
                                        className='bg-transparent outline-none w-full'
                                        placeholder='Search..'
                                        value={searchQuery}
                                        onChange={(e) => {
                                            SetsearchQuery(e.target.value);
                                            setCurrentPage(1)
                                        }}
                                    />
                                </div>
                            </form>
                            <table className='w-full bg-transparent'>
                                <thead>
                                    <tr className='bg-[#3B82F6] text-white rounded-lg'>
                                        <th className='py-4 px-2 text-left text-lg font-medium w-1/12'>id</th>
                                        <th className='py-4 text-left text-lg font-medium w-1/4'>Name</th>
                                        <th className='py-4 text-center text-lg font-medium w-1/4'>Currency Code</th>
                                        <th className='py-4 text-center text-lg font-medium w-1/4'>Currency name</th>
                                        <th className='py-4 text-center text-lg font-medium w-1/4'>Currency Symbol</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedData.length > 0 ? (
                                        selectedData.map((item) => (
                                            <tr key={item.id} className="text-center border">
                                                <td className="p-3 border">{item.id}</td>
                                                <td className="p-3 border">{item.name}</td>
                                                <td className="p-3 border">{item.currency.code}</td>
                                                <td className="p-3 border">{item.currency.name}</td>
                                                <td className="p-3 border">{item.currency.symbol || "-"}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center p-3 border">No data found</td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>
                            <div className='flex justify-evenly mt-10'>
                                <div>
                                    <p className='border border-white py-1 px-4 rounded'>Page {currentPage} of {totalPages}</p>
                                </div>
                                <div className='flex justify-between gap-10'>
                                    <p className='cursor-pointer' onClick={handlePrevPage} disabled={currentPage === 1}><TiArrowLeftThick /></p>
                                    <p className='cursor-pointer' onClick={handleNextPage} disabled={currentPage === totalPages}><TiArrowRightThick /></p>
                                </div>
                            </div>
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
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { TiArrowLeftThick } from "react-icons/ti";
import { TiArrowRightThick } from "react-icons/ti";

const TableWithPagination = () => {
    const [searchQuery, SetsearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5;



    const data = [
        { id: 1, name: "Afghanistan", currency: { code: "AFN", name: "Afghani", symbol: "؋" } },
        { id: 2, name: "Albania", currency: { code: "ALL", name: "Lek", symbol: "Lek" } },
        { id: 3, name: "Algeria", currency: { code: "DZD", name: "Dinar", symbol: false } },
        { id: 4, name: "American Samoa", currency: { code: "USD", name: "Dollar", symbol: "$" } },
        { id: 5, name: "Andorra", currency: { code: "EUR", name: "Euro", symbol: "€" } },
        { id: 6, name: "Angola", currency: { code: "AOA", name: "Kwanza", symbol: "Kz" } },
        { id: 7, name: "Anguilla", currency: { code: "XCD", name: "Dollar", symbol: "$" } },
        { id: 8, name: "Antarctica", currency: { code: "", name: "", symbol: false } },
        { id: 9, name: "Antigua and Barbuda", currency: { code: "XCD", name: "Dollar", symbol: "$" } },
        { id: 10, name: "Argentina", currency: { code: "ARS", name: "Peso", symbol: "$" } },
    ];

    const filteredFlag = data.filter(
        (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.currency.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.currency.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination Logic
    const totalPages = Math.ceil(filteredFlag.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = filteredFlag.slice(startIndex, startIndex + itemsPerPage)

    const handlePrevPage = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1)
    }

    const handleNextPage = () => {
        if (currentPage < totalPages)
            setCurrentPage(currentPage + 1)
    }
return(
  <>
                            <form>
                                <div className='flex items-center border border-white my-10 p-2 gap-4 rounded-2xl'>
                                    <CiSearch className='text-2xl' />
                                    <input
                                        type="text"
                                        className='bg-transparent outline-none w-full'
                                        placeholder='Search..'
                                        value={searchQuery}
                                        onChange={(e) => {
                                            SetsearchQuery(e.target.value);
                                            setCurrentPage(1)
                                        }}
                                    />
                                </div>
                            </form>
                            <table className='w-full bg-transparent'>
                                <thead>
                                    <tr className='bg-[#3B82F6] text-white rounded-lg'>
                                        <th className='py-4 px-2 text-left text-lg font-medium w-1/12'>id</th>
                                        <th className='py-4 text-left text-lg font-medium w-1/4'>Name</th>
                                        <th className='py-4 text-center text-lg font-medium w-1/4'>Currency Code</th>
                                        <th className='py-4 text-center text-lg font-medium w-1/4'>Currency name</th>
                                        <th className='py-4 text-center text-lg font-medium w-1/4'>Currency Symbol</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedData.length > 0 ? (
                                        selectedData.map((item) => (
                                            <tr key={item.id} className="text-center border">
                                                <td className="p-3 border">{item.id}</td>
                                                <td className="p-3 border">{item.name}</td>
                                                <td className="p-3 border">{item.currency.code}</td>
                                                <td className="p-3 border">{item.currency.name}</td>
                                                <td className="p-3 border">{item.currency.symbol || "-"}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center p-3 border">No data found</td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>
                            <div className='flex justify-evenly mt-10'>
                                <div>
                                    <p className='border border-white py-1 px-4 rounded'>Page {currentPage} of {totalPages}</p>
                                </div>
                                <div className='flex justify-between gap-10'>
                                    <p className='cursor-pointer' onClick={handlePrevPage} disabled={currentPage === 1}><TiArrowLeftThick /></p>
                                    <p className='cursor-pointer' onClick={handleNextPage} disabled={currentPage === totalPages}><TiArrowRightThick /></p>
                                </div>
                            </div>
                        </>
)
}
export default TableWithPagination
`}</pre>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default TableWithPagination