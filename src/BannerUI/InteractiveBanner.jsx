import { useState } from "react";
import { FaRegEye, FaCode } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoCopy } from "react-icons/io5";
import image1 from "../assets/BannerUI-Image/full-screen-1.webp";
import image2 from "../assets/BannerUI-Image/full-screen-2.webp";
import image3 from "../assets/BannerUI-Image/full-screen-3.webp";
import image4 from "../assets/BannerUI-Image/full-screen-4.webp";
import image5 from "../assets/BannerUI-Image/full-screen-5.webp";

const InteractiveBanner = () => {

    const [showPreview, setShowPreview] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const items = [
        { title: "Creative", subtitle: "Images", img: image1, desc: "Add Your Text 01", link: "#creative" },
        { title: "Shooting", subtitle: "Animation", img: image2, desc: "Add Your Text 02", link: "#shooting" },
        { title: "Branding", subtitle: "Videos", img: image3, desc: "Add Your Text 03", link: "#branding" },
        { title: "Portraits", subtitle: "Designing", img: image4, desc: "Add Your Text 04", link: "#portraits" },
        { title: "Printing", subtitle: "Marketing", img: image5, desc: "Add Your Text 05", link: "#printing" },
    ];

    const CopyCode = () => {
        const textToCopy = document.getElementById('CopyCode').innerText;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => alert('Code copied successfully!'))
            .catch(() => alert('Failed to copy!'));
    };

    return (
        <div className="text-white mt-20">
            <div className="flex flex-col justify-between px-0">
                <p className="text-white text-4xl font-mono font-semibold">Banner</p>
                <p className="my-5 text-white text-lg text-justify">
                    The Interactive Banner component is a responsive and interactive navigation bar built with Tailwind CSS and React, featuring a toggleable code preview, copy-to-clipboard functionality, and a collapsible sidebar for smaller screens.
                </p>
                <div className="py-4 px-4 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
                    {/* header */}
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
                    <div className="bg-slate-900 rounded-lg overflow-hidden">
                        {showPreview ? (
                            <div className="hidden">
                                <div>
                                    <img
                                        src={hoveredIndex !== null ? items[hoveredIndex].img : items[0].img}
                                        alt="Background"
                                        className="w-full h-full object-cover transition duration-500 ease-in-out"
                                    />
                                </div>

                                {/* bottom Menu */}
                                <div className="absolute z-10 flex justify-between w-full h-1/6 bottom-1">
                                    <div className="flex justify-between px-2 mb-3 gap-6 cursor-pointer">
                                        {items.map((item, index) => (
                                            <a
                                                key={index}
                                                href={`#section-${index}`} // Dynamically set the href using index
                                                className="flex gap-4 items-center justify-between group relative"
                                                onMouseEnter={() => setHoveredIndex(index)}
                                                onMouseLeave={() => setHoveredIndex(null)}
                                            >
                                                <div
                                                    key={index}
                                                    className="flex gap-4 items-center justify-between group relative"
                                                    onMouseEnter={() => setHoveredIndex(index)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                >
                                                    <div>
                                                        <div className="border-2 border-white font-semibold text-2xl rounded-full px-4 py-3 flex items-center justify-center transition duration-300 ease-in-out group-hover:bg-white group-hover:text-black w-16 h-16">
                                                            {hoveredIndex === index ? (
                                                                <span><HiArrowUpRight /></span> // Replace number with arrow
                                                            ) : (
                                                                `0${index + 1}` // Show number by default
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h1 className="text-2xl font-semibold">{item.title}</h1>
                                                        <p className="text-lg">{item.subtitle}</p>
                                                    </div>
                                                    {/* Overlay description */}
                                                    {hoveredIndex === index && (
                                                        <div className="absolute bottom-full mb-4 left-1/2 w-full transform -translate-x-1/2 bg-black/75 text-white p-4 rounded-lg shadow-lg">
                                                            <p>{item.desc}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </a>
                                        ))}
                                    </div>

                                    {/* tablet view design */}
                                    <div>

                                    </div>
                                </div>
                            </div>

                        ) : (
                            <div
                                className="p-4 sm:p-6 h-full sm:h-96 text-justify overflow-y-auto text-xs sm:text-sm text-indigo-100 bg-transparent whitespace-pre-wrap break-words"
                                id="CopyCode"
                            >
                                <div className="flex justify-end mb-2">
                                    <IoCopy
                                        className="cursor-pointer text-white hover:text-blue-400"
                                        onClick={CopyCode}
                                        title="Copy Code"
                                    />
                                </div>
                                <pre className="language-javascript">
                                    <code>
                                        {`
import { useState } from "react";
import { FaRegEye, FaCode } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoCopy } from "react-icons/io5";
import image1 from "../assets/BannerUI-Image/full-screen-1.webp";
import image2 from "../assets/BannerUI-Image/full-screen-2.webp";
import image3 from "../assets/BannerUI-Image/full-screen-3.webp";
import image4 from "../assets/BannerUI-Image/full-screen-4.webp";
import image5 from "../assets/BannerUI-Image/full-screen-5.webp";

const InteractiveBanner = () => {
  const items = [
    { title: "Creative", subtitle: "Images", img: image1, desc: "Add Your Text 01", link: "#creative" },
    { title: "Shooting", subtitle: "Animation", img: image2, desc: "Add Your Text 02", link: "#shooting" },
    { title: "Branding", subtitle: "Videos", img: image3, desc: "Add Your Text 03", link: "#branding" },
    { title: "Portraits", subtitle: "Designing", img: image4, desc: "Add Your Text 04", link: "#portraits" },
    { title: "Printing", subtitle: "Marketing", img: image5, desc: "Add Your Text 05", link: "#printing" },
  ];
  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden">
      <div>
        <img
          src={hoveredIndex !== null ? items[hoveredIndex].img : items[0].img}
          alt="Background"
          className="w-full h-full object-cover transition duration-500 ease-in-out"
        />
      </div>
      <div className="absolute z-10 flex justify-between w-full h-1/6 bottom-1">
        <div className="flex justify-between px-2 mb-3 gap-6 cursor-pointer">
          {items.map((item, index) => (
            <a
              key={index}
              href={\`#section-\${index}\`}
              className="flex gap-4 items-center justify-between group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex gap-4 items-center justify-between group relative">
                <div>
                  <div className="border-2 border-white font-semibold text-2xl rounded-full px-4 py-3 flex items-center justify-center transition duration-300 ease-in-out group-hover:bg-white group-hover:text-black w-16 h-16">
                    {hoveredIndex === index ? (
                      <span><HiArrowUpRight /></span>
                    ) : (
                      \`0\${index + 1}\`
                    )}
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">{item.title}</h1>
                  <p className="text-lg">{item.subtitle}</p>
                </div>
                {hoveredIndex === index && (
                  <div className="absolute bottom-full mb-4 left-1/2 w-full transform -translate-x-1/2 bg-black/75 text-white p-4 rounded-lg shadow-lg">
                    <p>{item.desc}</p>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
`}
                                    </code>
                                </pre>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveBanner;
