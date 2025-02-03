import React, { useState } from "react";
import { FaRegEye, FaCode } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCopy } from "react-icons/io5";

const TableWithSortingSearch = () => {
    const [showPreview, setShowPreview] = useState(true);
    const [SearchEmp, setSearchEmp] = useState("");
    const [filterEmpName, setShowFilterEmpName] = useState("")
    const [setPosition, setShowPosition] = useState("")

    const [data] = useState([
        { id: 1, first_name: "Jose", last_name: "Lopez", email: "joselopez0944@slingacademy.com", phone: "+1-971-533-4552x1542", gender: "male", age: 25, job_title: "Project Manager", years_of_experience: 1, salary: 8500, department: "Product" },
        { id: 2, first_name: "Diane", last_name: "Carter", email: "dianecarter1228@slingacademy.com", phone: "881.633.0107", gender: "female", age: 26, job_title: "Machine Learning Engineer", years_of_experience: 2, salary: 7000, department: "Product" },
        { id: 3, first_name: "Shawn", last_name: "Foster", email: "shawnfoster2695@slingacademy.com", phone: "001-966-861-0065x493", gender: "male", age: 37, job_title: "Project Manager", years_of_experience: 14, salary: 17000, department: "Product" },
        { id: 4, first_name: "Brenda", last_name: "Fisher", email: "brendafisher3185@slingacademy.com", phone: "001-574-564-4648", gender: "female", age: 31, job_title: "Web Developer", years_of_experience: 8, salary: 10000, department: "Product" },
        { id: 5, first_name: "Sean", last_name: "Hunter", email: "seanhunter4753@slingacademy.com", phone: "5838355842", gender: "male", age: 35, job_title: "Project Manager", years_of_experience: 11, salary: 14500, department: "Product" },
    ]);

    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };

    // Corrected filtering logic
    const filteredData = data.filter(item =>
        (SearchEmp === "" ||
            item.first_name.toLowerCase().includes(SearchEmp.toLowerCase()) ||
            item.last_name.toLowerCase().includes(SearchEmp.toLowerCase()) ||
            item.age.toString().toLowerCase().includes(SearchEmp.toLowerCase()) ||
            item.job_title.toLowerCase().includes(SearchEmp.toLowerCase()) ||
            item.salary.toString().toLowerCase().includes(SearchEmp.toLowerCase()) ||
            item.department.toLowerCase().includes(SearchEmp.toLowerCase())
        ) &&
        (filterEmpName === "" ||
            item.first_name.toLowerCase().includes(filterEmpName.toLowerCase()) ||
            item.last_name.toLowerCase().includes(filterEmpName.toLowerCase())
        ) &&
        (setPosition === "" || item.job_title === setPosition)
    )
    return (
        <div>
            <h1 className="font-semibold text-2xl my-10">Employee Table with Filtering, Sorting, and Search</h1>
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
                            {/* Search Input */}
                            <form className="w-1/4">
                                <div className="flex items-center border border-white my-10 p-2 gap-4 rounded-2xl">
                                    <CiSearch className="text-2xl" />
                                    <input
                                        type="text"
                                        className="bg-transparent outline-none w-full"
                                        placeholder="Search Employee"
                                        value={SearchEmp}
                                        onChange={(e) => setSearchEmp(e.target.value)}
                                    />
                                </div>
                            </form>

                            {/* Filters */}
                            <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                                <div>
                                    <p className="text-slate-500 text-sm py-2">Employee Name/Id</p>
                                    <input
                                        className="bg-transparent outline-none border border-slate-500 rounded text-white p-2"
                                        type="text"
                                        value={filterEmpName}
                                        onChange={(e) => setShowFilterEmpName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm py-2">Position</p>
                                    <select
                                        className="bg-transparent outline-none border border-slate-500 rounded text-white p-2"
                                        value={setPosition}
                                        onChange={(e) => setShowPosition(e.target.value)}
                                    >
                                        <option className="text-black" value="">Select Position</option>
                                        <option className="text-black" value="Project Manager">Project Manager</option>
                                        <option className="text-black" value="Machine Learning Engineer">Machine Learning Engineer</option>
                                        <option className="text-black" value="Web Developer">Web Developer</option>
                                    </select>
                                </div>
                            </div>

                            {/* Table */}
                            <table className="w-full bg-white mt-4">
                                <thead>
                                    <tr className="bg-[#3B82F6] text-white rounded-lg">
                                        <th className="py-4 px-2 text-left text-lg font-medium">S.No</th>
                                        <th className="py-4 text-left text-lg font-medium">Name</th>
                                        <th className="py-4 text-center text-lg font-medium">Email</th>
                                        <th className="py-4 text-center text-lg font-medium">Phone</th>
                                        <th className="py-4 text-center text-lg font-medium">Gender</th>
                                        <th className="py-4 text-center text-lg font-medium">Age</th>
                                        <th className="py-4 text-center text-lg font-medium">Position</th>
                                        <th className="py-4 text-center text-lg font-medium">Exp</th>
                                        <th className="py-4 text-center text-lg font-medium">Salary</th>
                                        <th className="py-4 text-center text-lg font-medium">Dep</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item, index) => (
                                            <tr key={item.id}>
                                                <td className="py-4 px-2 text-black">{index + 1}.</td>
                                                <td className="py-4 text-black">{`${item.first_name} ${item.last_name}`}</td>
                                                <td className="py-4 text-black">{item.email}</td>
                                                <td className="py-4 text-black">{item.phone}</td>
                                                <td className="py-4 text-black">{item.gender}</td>
                                                <td className="py-4 text-black">{item.age}</td>
                                                <td className="py-4 text-black">{item.job_title}</td>
                                                <td className="py-4 text-black">{item.years_of_experience}</td>
                                                <td className="py-4 text-black">{item.salary}</td>
                                                <td className="py-4 text-black">{item.department}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="10" className="py-4 text-center text-black">No matching records found.</td>
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
                            <pre id="codeText">
                                {`
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
const TableWithSortingSearch = () => {
    const [SearchEmp, setSearchEmp] = useState("");
    const [filterEmpName, setShowFilterEmpName] = useState("")
    const [setPosition, setShowPosition] = useState("")

    const [data] = useState([
        { id: 1, first_name: "Jose", last_name: "Lopez", email: "joselopez0944@slingacademy.com", phone: "+1-971-533-4552x1542", gender: "male", age: 25, job_title: "Project Manager", years_of_experience: 1, salary: 8500, department: "Product" },
        { id: 2, first_name: "Diane", last_name: "Carter", email: "dianecarter1228@slingacademy.com", phone: "881.633.0107", gender: "female", age: 26, job_title: "Machine Learning Engineer", years_of_experience: 2, salary: 7000, department: "Product" },
        { id: 3, first_name: "Shawn", last_name: "Foster", email: "shawnfoster2695@slingacademy.com", phone: "001-966-861-0065x493", gender: "male", age: 37, job_title: "Project Manager", years_of_experience: 14, salary: 17000, department: "Product" },
        { id: 4, first_name: "Brenda", last_name: "Fisher", email: "brendafisher3185@slingacademy.com", phone: "001-574-564-4648", gender: "female", age: 31, job_title: "Web Developer", years_of_experience: 8, salary: 10000, department: "Product" },
        { id: 5, first_name: "Sean", last_name: "Hunter", email: "seanhunter4753@slingacademy.com", phone: "5838355842", gender: "male", age: 35, job_title: "Project Manager", years_of_experience: 11, salary: 14500, department: "Product" },
    ]);

    const handleCopy = () => {
        const textToCopy = document.getElementById('codeText').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };

    // Corrected filtering logic
    const filteredData = data.filter(item =>
        (SearchEmp === "" ||
            item.first_name.toLowerCase().includes(SearchEmp.toLowerCase()) ||
            item.last_name.toLowerCase().includes(SearchEmp.toLowerCase()) ||
            item.age.toString().toLowerCase().includes(SearchEmp.toLowerCase()) ||
            item.job_title.toLowerCase().includes(SearchEmp.toLowerCase()) ||
            item.salary.toString().toLowerCase().includes(SearchEmp.toLowerCase()) ||
            item.department.toLowerCase().includes(SearchEmp.toLowerCase())
        ) &&
        (filterEmpName === "" ||
            item.first_name.toLowerCase().includes(filterEmpName.toLowerCase()) ||
            item.last_name.toLowerCase().includes(filterEmpName.toLowerCase())
        ) &&
        (setPosition === "" || item.job_title === setPosition)
    )
        return(
  <>
                            {/* Search Input */}
                            <form className="w-1/4">
                                <div className="flex items-center border border-white my-10 p-2 gap-4 rounded-2xl">
                                    <CiSearch className="text-2xl" />
                                    <input
                                        type="text"
                                        className="bg-transparent outline-none w-full"
                                        placeholder="Search Employee"
                                        value={SearchEmp}
                                        onChange={(e) => setSearchEmp(e.target.value)}
                                    />
                                </div>
                            </form>

                            {/* Filters */}
                            <div className="grid grid-cols-auto">
                                <div>
                                    <p className="text-slate-500 text-sm py-2">Employee Name/Id</p>
                                    <input
                                        className="bg-transparent outline-none border border-slate-500 rounded text-white p-2"
                                        type="text"
                                        value={filterEmpName}
                                        onChange={(e) => setShowFilterEmpName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm py-2">Position</p>
                                    <select
                                        className="bg-transparent outline-none border border-slate-500 rounded text-white p-2"
                                        value={setPosition}
                                        onChange={(e) => setShowPosition(e.target.value)}
                                    >
                                        <option className="text-black" value="">Select Position</option>
                                        <option className="text-black" value="Project Manager">Project Manager</option>
                                        <option className="text-black" value="Machine Learning Engineer">Machine Learning Engineer</option>
                                        <option className="text-black" value="Web Developer">Web Developer</option>
                                    </select>
                                </div>
                            </div>

                            {/* Table */}
                            <table className="w-full bg-white mt-4">
                                <thead>
                                    <tr className="bg-[#3B82F6] text-white rounded-lg">
                                        <th className="py-4 px-2 text-left text-lg font-medium">S.No</th>
                                        <th className="py-4 text-left text-lg font-medium">Name</th>
                                        <th className="py-4 text-center text-lg font-medium">Email</th>
                                        <th className="py-4 text-center text-lg font-medium">Phone</th>
                                        <th className="py-4 text-center text-lg font-medium">Gender</th>
                                        <th className="py-4 text-center text-lg font-medium">Age</th>
                                        <th className="py-4 text-center text-lg font-medium">Position</th>
                                        <th className="py-4 text-center text-lg font-medium">Exp</th>
                                        <th className="py-4 text-center text-lg font-medium">Salary</th>
                                        <th className="py-4 text-center text-lg font-medium">Dep</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item, index) => (
                                            <tr key={item.id}>
                                                <td className="py-4 px-2 text-black">{index + 1}.</td>
                                                <td className="py-4 text-black">{item.first_name + " " + item.last_name}</td>
                            <td className="py-4 text-black">{item.email}</td>
                            <td className="py-4 text-black">{item.phone}</td>
                            <td className="py-4 text-black">{item.gender}</td>
                            <td className="py-4 text-black">{item.age}</td>
                            <td className="py-4 text-black">{item.job_title}</td>
                            <td className="py-4 text-black">{item.years_of_experience}</td>
                            <td className="py-4 text-black">{item.salary}</td>
                            <td className="py-4 text-black">{item.department}</td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan="10" className="py-4 text-center text-black">No matching records found.</td>
                    </tr>
                                    )}
                </tbody>
            </table>
        </>

    )
}
    export default TableWithSortingSearch;
`}
                            </pre>
                        </div >
                    )}
                </div >
            </div >
        </div >
    );
};

export default TableWithSortingSearch;
