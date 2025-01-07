import { useState } from 'react'
import { FaRegEye, FaCode } from "react-icons/fa";
import CardImg1 from '../assets/BannerUI-Image/cardImg1.webp'
import CardImg2 from '../assets/BannerUI-Image/cardImg2.webp'
import CardImg3 from '../assets/BannerUI-Image/cardImg3.webp'
import CardImg4 from '../assets/BannerUI-Image/cardImg4.webp'
import { FaUserSecret } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";

const ZigZagCardImg = () => {
    const [showPreview, setShowPreview] = useState(true)
    const copyCardCode = () => {
        const copyCode = document.getElementById('CardCode').innerText;
        navigator.clipboard.writeText(copyCode)
            .then(() => alert('Code Copied'));
    };
    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Zig-Zag Card Image</h1>
            <p className="text-lg text-justify">This sleek and modern card component highlights key content.
                It features an image at the top, followed by a bold title and a paragraph.
                Ideal for showcasing various types of content, such as blog posts, portfolio items,
                or product features, this card layout ensures a visually engaging presentation that captures attention.
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
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-4 gap-4'>
                            <div
                                className="border-2 border-white py-2 px-2 rounded-md"
                                style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                            >
                                <div className='w-full flex gap-4 px-2'>
                                    <div className='w-1/2 py-2'>
                                        <img src={CardImg1} alt="" />
                                    </div>
                                    <div className='w-1/2 px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <FaUserSecret className='bg-white text-black text-4xl rounded-full px-2 py-2' />
                                            <h1 className='font-semibold'>Thomas Layer
                                                <p className='font-bold text-slate-600 text-sm'>UI/UX Designer</p>
                                            </h1>
                                        </div>
                                        <p className='py-2 text-lg font-semibold'>Traveller Bags</p>
                                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores reiciendis in fugit laudantium nesciunt odit, soluta unde non repellat quam! Quasi eum ducimus vel similique delectus qui! Aliquam, rem.</p>
                                    </div>

                                </div>
                            </div>
                            <div
                                className="border-2 border-white py-2 px-2 rounded-md"
                                style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                            >
                                <div className='w-full flex gap-4 px-2'>
                                    <div className='w-1/2 px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <FaUserSecret className='bg-white text-black text-4xl rounded-full px-2 py-2' />
                                            <h1 className='font-semibold'>Thomas Layer
                                                <p className='font-bold text-slate-600 text-sm'>UI/UX Designer</p>
                                            </h1>
                                        </div>
                                        <p className='py-2 text-lg font-semibold'>Traveller Bags</p>
                                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores reiciendis in fugit laudantium nesciunt odit, soluta unde non repellat quam! Quasi eum ducimus vel similique delectus qui! Aliquam, rem.</p>
                                    </div>
                                    <div className='w-1/2 py-2'>
                                        <img src={CardImg2} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div
                                className="border-2 border-white py-2 px-2 rounded-md"
                                style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                            >
                                <div className='w-full flex gap-4 px-2'>
                                    <div className='w-1/2 py-2'>
                                        <img src={CardImg3} alt="" />
                                    </div>
                                    <div className='w-1/2 px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <FaUserSecret className='bg-white text-black text-4xl rounded-full px-2 py-2' />
                                            <h1 className='font-semibold'>Thomas Layer
                                                <p className='font-bold text-slate-600 text-sm'>UI/UX Designer</p>
                                            </h1>
                                        </div>
                                        <p className='py-2 text-lg font-semibold'>Traveller Bags</p>
                                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores reiciendis in fugit laudantium nesciunt odit, soluta unde non repellat quam! Quasi eum ducimus vel similique delectus qui! Aliquam, rem.</p>
                                    </div>

                                </div>
                            </div>
                            <div
                                className="border-2 border-white py-2 px-2 rounded-md"
                                style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                            >
                                <div className='w-full flex gap-4 px-2'>
                                    <div className='w-1/2 px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <FaUserSecret className='bg-white text-black text-4xl rounded-full px-2 py-2' />
                                            <h1 className='font-semibold'>Thomas Layer
                                                <p className='font-bold text-slate-600 text-sm'>UI/UX Designer</p>
                                            </h1>
                                        </div>
                                        <p className='py-2 text-lg font-semibold'>Traveller Bags</p>
                                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores reiciendis in fugit laudantium nesciunt odit, soluta unde non repellat quam! Quasi eum ducimus vel similique delectus qui! Aliquam, rem.</p>
                                    </div>
                                    <div className='w-1/2 py-2'>
                                        <img src={CardImg4} alt="" />
                                    </div>

                                </div>
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
 <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-4 gap-4'>
                            <div
                                className="border-2 border-white py-2 px-2 rounded-md"
                                style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                            >
                                <div className='w-full flex gap-4 px-2'>
                                    <div className='w-1/2 py-2'>
                                        <img src={CardImg1} alt="" />
                                    </div>
                                    <div className='w-1/2 px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <FaUserSecret className='bg-white text-black text-4xl rounded-full px-2 py-2' />
                                            <h1 className='font-semibold'>Thomas Layer
                                                <p className='font-bold text-slate-600 text-sm'>UI/UX Designer</p>
                                            </h1>
                                        </div>
                                        <p className='py-2 text-lg font-semibold'>Traveller Bags</p>
                                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores reiciendis in fugit laudantium nesciunt odit, soluta unde non repellat quam! Quasi eum ducimus vel similique delectus qui! Aliquam, rem.</p>
                                    </div>

                                </div>
                            </div>
                            <div
                                className="border-2 border-white py-2 px-2 rounded-md"
                                style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                            >
                                <div className='w-full flex gap-4 px-2'>
                                    <div className='w-1/2 px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <FaUserSecret className='bg-white text-black text-4xl rounded-full px-2 py-2' />
                                            <h1 className='font-semibold'>Thomas Layer
                                                <p className='font-bold text-slate-600 text-sm'>UI/UX Designer</p>
                                            </h1>
                                        </div>
                                        <p className='py-2 text-lg font-semibold'>Traveller Bags</p>
                                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores reiciendis in fugit laudantium nesciunt odit, soluta unde non repellat quam! Quasi eum ducimus vel similique delectus qui! Aliquam, rem.</p>
                                    </div>
                                    <div className='w-1/2 py-2'>
                                        <img src={CardImg2} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div
                                className="border-2 border-white py-2 px-2 rounded-md"
                                style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                            >
                                <div className='w-full flex gap-4 px-2'>
                                    <div className='w-1/2 py-2'>
                                        <img src={CardImg3} alt="" />
                                    </div>
                                    <div className='w-1/2 px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <FaUserSecret className='bg-white text-black text-4xl rounded-full px-2 py-2' />
                                            <h1 className='font-semibold'>Thomas Layer
                                                <p className='font-bold text-slate-600 text-sm'>UI/UX Designer</p>
                                            </h1>
                                        </div>
                                        <p className='py-2 text-lg font-semibold'>Traveller Bags</p>
                                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores reiciendis in fugit laudantium nesciunt odit, soluta unde non repellat quam! Quasi eum ducimus vel similique delectus qui! Aliquam, rem.</p>
                                    </div>

                                </div>
                            </div>
                            <div
                                className="border-2 border-white py-2 px-2 rounded-md"
                                style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                            >
                                <div className='w-full flex gap-4 px-2'>
                                    <div className='w-1/2 px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <FaUserSecret className='bg-white text-black text-4xl rounded-full px-2 py-2' />
                                            <h1 className='font-semibold'>Thomas Layer
                                                <p className='font-bold text-slate-600 text-sm'>UI/UX Designer</p>
                                            </h1>
                                        </div>
                                        <p className='py-2 text-lg font-semibold'>Traveller Bags</p>
                                        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores reiciendis in fugit laudantium nesciunt odit, soluta unde non repellat quam! Quasi eum ducimus vel similique delectus qui! Aliquam, rem.</p>
                                    </div>
                                    <div className='w-1/2 py-2'>
                                        <img src={CardImg4} alt="" />
                                    </div>

                                </div>
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

export default ZigZagCardImg