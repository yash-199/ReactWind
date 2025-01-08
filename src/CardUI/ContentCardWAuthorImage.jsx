import { useState } from "react"
import { FaRegEye, FaCode } from "react-icons/fa";
import profile from '../assets/BannerUI-Image/Avatar.png'
import { IoCopy } from "react-icons/io5";
const ContentCardWAuthorImage = () => {
    const [showPreview, setShowPreview] = useState(true)
    const copyCardCode = () => {
        const copyCode = document.getElementById('CardCode').innerText;
        navigator.clipboard.writeText(copyCode)
            .then(() => alert('Code Copied'));
    };
    return (
        <div>
            <h1 className="font-semibold text-2xl mt-4">Content Card With Author Image</h1>
            <p className="text-lg text-justify">This sleek and informative card component highlights essential content details such as a title, description, and author information for added credibility. This layout includes the author’s name with image and title, making it perfect for showcasing blog posts, articles, or other content.</p>
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

                <div className="bg-slate-900 rounded-lg overflow-hidden py-4">
                    {showPreview ? (
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4 gap-4">
                            <div
                                className="border-2 border-white py-2 px-4 rounded-md"
                                style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                            >
                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores iure enim sit eius doloremque labore. Animi, nemo velit consequuntur veniam hic architecto, delectus aliquam repellendus facere officiis, atque enim?</p>
                                <div className="flex justify-between items-center py-4">
                                    <div className="w-1/2">
                                        <h1 className="font-bold">Aadi Benegas</h1>
                                        <p className="font-thin text-sm">CEO/ On World</p>
                                    </div>
                                    <div className="w-1/2 flex justify-end">
                                        <img src={profile} className="bg-white rounded-full w-2/6" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="border-2 border-white py-2 px-4 rounded-md"
                                style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                            >
                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores iure enim sit eius doloremque labore. Animi, nemo velit consequuntur veniam hic architecto, delectus aliquam repellendus facere officiis, atque enim?</p>
                                <div className="flex justify-between items-center py-4">
                                    <div className="w-1/2">
                                        <h1 className="font-bold">Aadi Benegas</h1>
                                        <p className="font-thin text-sm">CEO/ On World</p>
                                    </div>
                                    <div className="w-1/2 flex justify-end">
                                        <img src={profile} className="bg-white rounded-full w-2/6" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="border-2 border-white py-2 px-4 rounded-md"
                                style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
                            >
                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores iure enim sit eius doloremque labore. Animi, nemo velit consequuntur veniam hic architecto, delectus aliquam repellendus facere officiis, atque enim?</p>
                                <div className="flex justify-between items-center py-4">
                                    <div className="w-1/2">
                                        <h1 className="font-bold">Aadi Benegas</h1>
                                        <p className="font-thin text-sm">CEO/ On World</p>
                                    </div>
                                    <div className="w-1/2 flex justify-end">
                                        <img src={profile} className="bg-white rounded-full w-2/6" alt="" />
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
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4 gap-4">
    <div
        className="border-2 border-white py-2 px-4 rounded-md"
        style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
    >
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores iure enim sit eius doloremque labore. Animi, nemo velit consequuntur veniam hic architecto, delectus aliquam repellendus facere officiis, atque enim?</p>
        <div className="flex justify-between items-center py-4">
            <div className="w-1/2">
                <h1 className="font-bold">Aadi Benegas</h1>
                <p className="font-thin text-sm">CEO/ On World</p>
            </div>
            <div className="w-1/2 flex justify-end">
                <img src={profile} className="bg-white rounded-full w-2/6" alt="" />
            </div>
        </div>
    </div>
    <div
        className="border-2 border-white py-2 px-4 rounded-md"
        style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
    >
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores iure enim sit eius doloremque labore. Animi, nemo velit consequuntur veniam hic architecto, delectus aliquam repellendus facere officiis, atque enim?</p>
        <div className="flex justify-between items-center py-4">
            <div className="w-1/2">
                <h1 className="font-bold">Aadi Benegas</h1>
                <p className="font-thin text-sm">CEO/ On World</p>
            </div>
            <div className="w-1/2 flex justify-end">
                <img src={profile} className="bg-white rounded-full w-2/6" alt="" />
            </div>
        </div>
    </div>
    <div
        className="border-2 border-white py-2 px-4 rounded-md"
        style={{ boxShadow: '0 4px 6px 0 rgba(255, 255, 255, 0.6)' }}
    >
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores iure enim sit eius doloremque labore. Animi, nemo velit consequuntur veniam hic architecto, delectus aliquam repellendus facere officiis, atque enim?</p>
        <div className="flex justify-between items-center py-4">
            <div className="w-1/2">
                <h1 className="font-bold">Aadi Benegas</h1>
                <p className="font-thin text-sm">CEO/ On World</p>
            </div>
            <div className="w-1/2 flex justify-end">
                <img src={profile} className="bg-white rounded-full w-2/6" alt="" />
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

export default ContentCardWAuthorImage