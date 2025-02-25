import React, { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
const NumberedTabs = () => {
    const [showPreview, setShowPreview] = useState(true)
    const [openTab, setOpenTab] = useState("home")

    const handleTabOpen = (tabCategory) => {
        setOpenTab(tabCategory)
    }

    const copyCode = () => {
        navigator.clipboard.writeText(codeSnippet)
            .then(() => alert("Code copied successfully!"))
            .catch(() => alert("Failed to copy!"));
    };

    const codeSnippet = `
    import React, { useState } from 'react'
    const SimpleTab = () => {
    const [openTab, setOpenTab] = useState("home")
   
    const handleTabOpen = (tabCategory) => {
      setOpenTab(tabCategory)
    }
   
   
   return(
   <div className='w-10/12 mx-auto p-4 bg-white'>
    <div className='flex flex-col flex-wrap rounded-lg border border-[#e4e4e4] px-4 py-1 dark:border-dark-3 sm:flex-row'>
        <a onClick={() => handleTabOpen("home")}
            className={\`cursor-pointer text-black px-4 py-3 text-sm font-medium md:text-base lg:px-6 
            \${
           openTab === "home"
               ? "bg-blue-700 text-white"
               : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"
       } \`}
   >Home</a>
   <a onClick={() => handleTabOpen("about")}
       className={\`cursor-pointer text-black px-4 py-3 text-sm font-medium md:text-base lg:px-6 
       \${openTab === "about"
               ? "bg-blue-700 text-white"
               : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"
       } \`}
               >About Us</a>
   <a onClick={() => handleTabOpen("service")}
                   className={\`cursor-pointer text-black px-4 py-3 text-sm font-medium md:text-base lg:px-6 
                   \${openTab === "service"
               ? "bg-blue-700 text-white"
               : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"
       } \`}
       >Services</a>
       <a onClick={() => handleTabOpen("contact")}
           className={\`cursor-pointer text-black px-4 py-3 text-sm font-medium md:text-base lg:px-6 
       \${
           openTab === "contact"
           ? "bg-blue-700 text-white"
           : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"
       } \`}>
               Contact Us
           </a>
       </div>
       <div className='rounded-lg border border-[#e4e4e4] my-4'>
   {openTab === "home" && (
       <p className='px-4 text-black py-4 text-justify'>
           Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero labore, ipsum reiciendis iusto in quibusdam quidem. Velit totam eligendi praesentium asperiores veniam incidunt. Laudantium quidem distinctio impedit sint. Iusto!
       </p>
       )}
   
   {openTab === "about" && (
       <p className='px-4 text-black py-4 text-justify'>
           About Us Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero labore, ipsum reiciendis iusto in quibusdam quidem. Velit totam eligendi praesentium asperiores veniam incidunt. Laudantium quidem distinctio impedit sint. Iusto!
       </p>
       )}
   
   {openTab === "service" && (
       <p className='px-4 text-black py-4 text-justify'>
           Service Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero labore, ipsum reiciendis iusto in quibusdam quidem. Velit totam eligendi praesentium asperiores veniam incidunt. Laudantium quidem distinctio impedit sint. Iusto!
       </p>
   )}
   
   {openTab === "contact" && (
       <p className='px-4 text-black py-4 text-justify'>
           Contact Us Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero labore, ipsum reiciendis iusto in quibusdam quidem. Velit totam eligendi praesentium asperiores veniam incidunt. Laudantium quidem distinctio impedit sint. Iusto!
       </p>
   )}
       </div>
       <div>
       </div>
   </div>
           )
    }
    export default SimpleTab
       `
    return (
        <div>
            <h1 className='font-bold my-10 text-3xl'>Number Count with Tab</h1>
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
                <div className="bg-slate-900 rounded-lg overflow-hidden py-4 px-6">
                    {showPreview ? (
                        <div className='w-10/12 mx-auto p-4 bg-white'>
                            <div className='flex flex-col flex-wrap rounded-lg border border-[#e4e4e4] px-1 py-1 dark:border-dark-3 sm:flex-row'>
                                <a onClick={() => handleTabOpen("home")}
                                    className={`cursor-pointer text-black px-4 py-3 text-sm font-medium md:text-base lg:px-6 
                                                    ${openTab === "home"
                                            ? "bg-blue-700 text-white"
                                            : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"
                                        }`}
                                ><span className='border border-white rounded-full px-1 py-0'>01</span> Home</a>

                                <a onClick={() => handleTabOpen("about")}
                                    className={`cursor-pointer text-black px-4 py-3 text-sm font-medium md:text-base lg:px-6 
                                                    ${openTab === "about"
                                            ? "bg-blue-700 text-white"
                                            : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"
                                        }`}
                                ><span className='border border-white rounded-full px-1 py-0'>02</span> About Us</a>

                                <a onClick={() => handleTabOpen("service")}
                                    className={`text-black cursor-pointer px-4 py-3 text-sm font-medium md:text-base lg:px-6
                                                    ${openTab === "service"
                                            ? "bg-blue-700 text-white"
                                            : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"
                                        }`}
                                ><span className='border border-white rounded-full px-1 py-0'>03</span> Services</a>
                                <a onClick={() => handleTabOpen("contact")}
                                    className={`text-black cursor-pointer px-4 py-3 text-sm font-medium md:text-base lg:px-6
                                                ${openTab === "contact"
                                            ? "bg-blue-700 text-white"
                                            : "text-body-color hover:bg-blue-700 hover:text-white dark:text-dark-6 dark:hover:text-white"
                                        }`}>
                                    <span className='border border-white rounded-full px-1 py-0'>04</span> Contact Us
                                </a>
                            </div>
                            <div className='rounded-lg border border-[#e4e4e4] my-4'>
                                {openTab === "home" && (
                                    <p className='px-4 text-black py-4 text-justify'>
                                        Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero labore, ipsum reiciendis iusto in quibusdam quidem. Velit totam eligendi praesentium asperiores veniam incidunt. Laudantium quidem distinctio impedit sint. Iusto!
                                    </p>
                                )}

                                {openTab === "about" && (
                                    <p className='px-4 text-black py-4 text-justify'>
                                        About Us Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero labore, ipsum reiciendis iusto in quibusdam quidem. Velit totam eligendi praesentium asperiores veniam incidunt. Laudantium quidem distinctio impedit sint. Iusto!
                                    </p>
                                )}

                                {openTab === "service" && (
                                    <p className='px-4 text-black py-4 text-justify'>
                                        Service Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero labore, ipsum reiciendis iusto in quibusdam quidem. Velit totam eligendi praesentium asperiores veniam incidunt. Laudantium quidem distinctio impedit sint. Iusto!
                                    </p>
                                )}

                                {openTab === "contact" && (
                                    <p className='px-4 text-black py-4 text-justify'>
                                        Contact Us Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero labore, ipsum reiciendis iusto in quibusdam quidem. Velit totam eligendi praesentium asperiores veniam incidunt. Laudantium quidem distinctio impedit sint. Iusto!
                                    </p>
                                )}
                            </div>
                            <div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end mb-2">
                                <IoCopy className="cursor-pointer text-white hover:text-blue-400" onClick={copyCode} title="Copy Code" />
                            </div>
                            <pre className="p-4 text-xs text-indigo-100 bg-transparent whitespace-pre-wrap">{codeSnippet}</pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NumberedTabs