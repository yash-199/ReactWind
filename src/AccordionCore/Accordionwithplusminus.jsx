import React, { useState } from 'react'
import { IoCopy } from "react-icons/io5";
import { FaRegEye, FaCode } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
const Accordionwithplusminus = () => {
    const [showPreview, setShowPreview] = useState(true);
    const [openAccordion, setOpenAccordion] = useState(null)

    const toogleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? "null" : index)
    }

    const faqs = [
        { question: "Which is the best website for React Components?", answer: "The best website for React components is Recom." },
        { question: "How to improve React performance?", answer: "Use memoization, lazy loading, and avoid unnecessary re-renders." },
        { question: "What is the best way to manage state in React?", answer: "Using React Context, Redux, or Zustand for complex state management." }
    ];
    const CopyCode = () => {
        const textToCopy = document.getElementById('CopyCode').innerText;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };

    const codeText = `
    import React, { useState } from 'react'
    import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
const Accordionwithplusminus = () => {
    const [openAccordion,setOpenAccordion] = useState(null)

    const toogleAccordion=(index)=>{
        setOpenAccordion(openAccordion === index ? "null" : index)
        }
    }

    const faqs = [
        { question: "Which is the best website for React Components?", answer: "The best website for React components is Recom." },
        { question: "How to improve React performance?", answer: "Use memoization, lazy loading, and avoid unnecessary re-renders." },
        { question: "What is the best way to manage state in React?", answer: "Using React Context, Redux, or Zustand for complex state management." }
    ];
    return(
     <div className="bg-slate-900 rounded-lg overflow-hidden py-4 px-6">
                    <>
<p className='text-center font-semibold text-lg mt-10'>FAQ's</p>
<h3 className='text-3xl text-center font-bold py-4'>Any Questions? Look Here</h3>
<p className='text-center py-1'>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
<div className='grid lg:grid-cols-1 w-10/12 mx-auto'>
    {faqs.map((faq, index) => (
        <div key={index} className={\`bg-white shadow-lg w-full rounded-lg mt-4 mb-5 transition-all duration-300 ease-in-out
        \${openAccordion === index ? "h-auto p-2" : "h-14 p-2"}\`}
            onClick={() => toogleAccordion(index)}
        >
            <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-semibold text-black w-10/12">
                    {faq.question}
                </h3>
                <div className='w-10'>
                    {openAccordion === index ? (
                        <CiCircleMinus className='text-blue-600 bg-gray-200 p-2 text-4xl font-bold rounded-full' />
                    ) : (
                        < CiCirclePlus className='text-blue-600 bg-gray-200 p-2 text-4xl font-bold rounded-full' />
                    )}
                </div>
            </div>
            <div className={\`overflow-hidden transition-all duration-300 \${openAccordion === index ? "mt-4 opacity-100" : "h-0 opacity-0"
                }\`}>
                <p className="text-gray-600 mb-4">{faq.answer}</p>
            </div>
        </div>
    ))}
</div>
  </>
                </div>
    )
`

    return (
        <div>
            <h1 className='font-bold my-10 text-3xl'>Accordion with Plus Minus Icon</h1>
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
                        <>
                            <p className='text-center font-semibold text-lg mt-10'>FAQ's</p>
                            <h3 className='text-3xl text-center font-bold py-4'>Any Questions? Look Here</h3>
                            <p className='text-center py-1'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className='grid lg:grid-cols-1 w-10/12 mx-auto'>
                                {faqs.map((faq, index) => (
                                    <div key={index} className={`bg-white shadow-lg w-full rounded-lg mt-4 mb-5 transition-all duration-300 ease-in-out
                              ${openAccordion === index ? "h-auto p-2" : "h-14 p-2"}`}
                                        onClick={() => toogleAccordion(index)}
                                    >
                                        <div className="flex justify-between items-center cursor-pointer">
                                            <h3 className="text-lg font-semibold text-black w-10/12">
                                                {faq.question}
                                            </h3>
                                            <div className='w-10'>
                                                {openAccordion === index ? (
                                                    <CiCircleMinus className='text-blue-600 bg-gray-200 p-2 text-4xl font-bold rounded-full' />
                                                ) : (
                                                    < CiCirclePlus className='text-blue-600 bg-gray-200 p-2 text-4xl font-bold rounded-full' />
                                                )}
                                            </div>
                                        </div>
                                        <div className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? "mt-4 opacity-100" : "h-0 opacity-0"
                                            }`}>
                                            <p className="text-gray-600 mb-4">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="p-4 sm:p-6 h-64 sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words" id="codeText">
                            <div className="flex justify-end mb-2">
                                <IoCopy
                                    className="cursor-pointer text-white hover:text-blue-400"
                                    onClick={CopyCode}
                                    title="Copy Code"
                                />
                            </div>
                            <pre className="whitespace-pre-wrap break-words">{codeText}</pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Accordionwithplusminus