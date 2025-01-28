
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

