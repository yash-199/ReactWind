import { useState, useEffect } from "react";
import { FaRegEye, FaCode } from "react-icons/fa";
import image1 from "../assets/BannerUI-Image/thumbslider-1.webp";
import image2 from "../assets/BannerUI-Image/thumbslider-2.webp";
import image3 from "../assets/BannerUI-Image/thumbslider-3.webp";
import image4 from "../assets/BannerUI-Image/thumbslider-4.webp";
import image5 from "../assets/BannerUI-Image/thumb-slide-5.webp";
import "./Banner.css";

const Banner = () => {
    const [showPreview, setShowPreview] = useState(true);
    const images = [image1, image2, image3, image4, image5];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    // Automatic Image Change
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    // Handle Next Image
    const handleNextImage = () => {
        setFade(true);
        setTimeout(() => {
            setFade(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 300); // Matches CSS fade duration
    };

    // Handle Image Click
    const handleImageClick = (index) => {
        setFade(true);
        setTimeout(() => {
            setFade(false);
            setCurrentIndex(index);
        }, 300);
    };

    return (
        <div className="text-white">
            <div className="flex flex-col justify-center px-0">
                <p className="text-white text-4xl font-mono font-semibold">Banner</p>
                <p className="my-5 text-white text-lg text-justify">
                    The Banner component is a responsive and interactive navigation bar built with Tailwind CSS and React, featuring a toggleable code preview, copy-to-clipboard functionality, and a collapsible sidebar for smaller screens.
                </p>
                <div className="py-4 px-4 sm:py-6 sm:px-8 rounded-lg drop-shadow-lg w-full backdrop-blur-lg bg-[#1C1F26] border-2 border-[#343942] shadow-2xl">
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
                    {showPreview && (
                        <div className="bg-slate-900 rounded-lg overflow-hidden">
                            <div>
                                <img
                                    src={images[currentIndex]}
                                    className={`rounded w-full transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"
                                        }`}
                                    alt="Preview"
                                />
                            </div>
                            <div className="flex mt-6 gap-4 overflow-auto hide-scrollbar">
                                {images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        className="rounded w-52 cursor-pointer"
                                        alt={`Thumbnail ${index + 1}`}
                                        onClick={() => handleImageClick(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {!showPreview && (
                        <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
                            <div>
                                {`
                                    
                                `}
                            </div>
                        </pre>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Banner;
