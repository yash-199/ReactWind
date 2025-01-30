import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const TableWithSortingSearch = () => {
    const [showPreview, setShowPreview] = useState(true)
    const [filterText, setFilterText] = useState("")
    const [data] = useState([
        {
            "id": 1,
            "first_name": "Jose",
            "last_name": "Lopez",
            "email": "joselopez0944@slingacademy.com",
            "phone": "+1-971-533-4552x1542",
            "gender": "male",
            "age": 25,
            "job_title": "Project Manager",
            "years_of_experience": 1,
            "salary": 8500,
            "department": "Product"
        },
        {
            "id": 2,
            "first_name": "Diane",
            "last_name": "Carter",
            "email": "dianecarter1228@slingacademy.com",
            "phone": "881.633.0107",
            "gender": "female",
            "age": 26,
            "job_title": "Machine Learning Engineer",
            "years_of_experience": 2,
            "salary": 7000,
            "department": "Product"
        },
        {
            "id": 3,
            "first_name": "Shawn",
            "last_name": "Foster",
            "email": "shawnfoster2695@slingacademy.com",
            "phone": "001-966-861-0065x493",
            "gender": "male",
            "age": 37,
            "job_title": "Project Manager",
            "years_of_experience": 14,
            "salary": 17000,
            "department": "Product"
        },
        {
            "id": 4,
            "first_name": "Brenda",
            "last_name": "Fisher",
            "email": "brendafisher3185@slingacademy.com",
            "phone": "001-574-564-4648",
            "gender": "female",
            "age": 31,
            "job_title": "Web Developer",
            "years_of_experience": 8,
            "salary": 10000,
            "department": "Product"
        },
        {
            "id": 5,
            "first_name": "Sean",
            "last_name": "Hunter",
            "email": "seanhunter4753@slingacademy.com",
            "phone": "5838355842",
            "gender": "male",
            "age": 35,
            "job_title": "Project Manager",
            "years_of_experience": 11,
            "salary": 14500,
            "department": "Product"
        },
    ])

    const filteredData = data.filter(
        (item) => item.first_name.toLowerCase().includes(filterText.toLowerCase()) ||
            item.job_title.toLowerCase().includes(filterText.toLowerCase()) ||
            item.department.toLowerCase().includes(filterText.toLowerCase())
    )

    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Employee Table with Filtering, Sorting, and Search</h1>
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
                <div className="bg-slate-900 rounded-lg overflow-hidden py-2 p-4">
                    <>
                        <form className='w-1/4'>
                            <div className='flex items-center border border-white my-10 p-2 gap-4 rounded-2xl'>
                                <CiSearch className='text-2xl' />
                                <input type="text"
                                    className='bg-transparent outline-none w-full'
                                    placeholder='Search Employee'
                                    value={filterText}
                                    onChange={(e) => setFilterText(e.target.value)}
                                />
                            </div>
                        </form>
                        <div className='grid grid-cols-auto'>
                            <div>
                                <p className='text-slate-500 text-sm py-2'>Employee Name/Id</p>
                                <input className='bg-transparent outline-none border border-slate-500 rounded text-white p-2' type="text" name="" id="" />
                            </div>
                            <div>
                                <p className='text-slate-500 text-sm py-2'>Position</p>
                                <select className='bg-transparent outline-none border border-slate-500 rounded text-white p-2'>
                                    <option value="">Select Postion</option>
                                    <option value="Project Manager">Project Manager</option>
                                    <option value="ML">Machine Learning Engineer</option>
                                    <option value="Project Manager">Project Manager</option>
                                </select>
                            </div>

                        </div>
                        <table className='w-full bg-white mt-4'>
                            <thead>
                                <tr className='bg-[#3B82F6] text-white rounded-lg'>
                                    <th className='py-4 px-2 text-left text-lg font-medium'>S.No</th>
                                    <th className='py-4 text-left text-lg font-medium'>Name</th>
                                    <th className='py-4 text-center text-lg font-medium'>Email</th>
                                    <th className='py-4 text-center text-lg font-medium'>Phone</th>
                                    <th className='py-4 text-center text-lg font-medium'>Gender</th>
                                    <th className='py-4 text-center text-lg font-medium'>Age</th>
                                    <th className='py-4 text-center text-lg font-medium'>Position</th>
                                    <th className='py-4 text-center text-lg font-medium'>Experience</th>
                                    <th className='py-4 text-center text-lg font-medium'>Salary</th>
                                    <th className='py-4 text-center text-lg font-medium'>Department</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.length > 0 ? (
                                    filteredData.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="py-4 px-2 text-black">{index + 1}.</td>
                                            <td className="py-4 text-black">{item.first_name + '\n' + item.last_name}</td>
                                            <td className="py-4  text-black">{item.email}</td>
                                            <td className="py-4 text-black">
                                                {item.phone}
                                            </td>
                                            <td className="py-4 text-black">
                                                {item.gender}
                                            </td>
                                            <td className="py-4 text-black">
                                                {item.age}
                                            </td>
                                            <td className="py-4 text-black">
                                                {item.job_title}
                                            </td>
                                            <td className="py-4 text-black">
                                                {item.years_of_experience}
                                            </td>
                                            <td className="py-4 text-black">
                                                {item.salary}
                                            </td>
                                            <td className="py-4 text-black">
                                                {item.department}
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
                </div>
            </div>
        </div>
    )
}

export default TableWithSortingSearch