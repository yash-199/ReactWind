import { useState } from "react";
import ButtonGradient from "./Library/ButtonGradient";
import Card from "./Library/Card";
import Register from "./Library/Register";
import Scrollbar from "./Library/Scrollbar";

const ComponentLibrary = () => {
    const [activeComponent, setActiveComponent] = useState("register");

    const getButtonClass = (component) => {
        const baseClass =
            "bg-white text-black font-medium py-2 px-4 rounded drop-shadow-lg w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] text-center cursor-pointer";
        const activeClass =
            "text-white border-2 border-white bg-transparent !bg-transparent";


        return activeComponent === component
            ? `${baseClass} ${activeClass}`
            : baseClass;
    };

    return (
        <div className="mx-auto w-3/4 py-10">
            <div className="text-white my-14 text-center">
                <p className="font-bold text-md my-2 uppercase text-md">
                    Form Component Library
                </p>
                <h1 className="text-4xl font-medium leading-1 my-2">
                    5+ Building Block Components
                </h1>
                <p className="font-normal text-md">
                    Explore Tailwind CSS components for HTML, Tailwind CSS and React.<br /> Effortlessly convert to other frameworks without rewriting the entire component. Elevate your development journey Now!
                </p>

                {/* Button Section visible on larger screens */}
                <div className="hidden sm:flex flex-wrap items-center justify-center gap-4 p-4">
                    <p
                        className={getButtonClass("register")}
                        onClick={() => setActiveComponent("register")}
                    >
                        Register / Login
                    </p>
                    <p
                        className={getButtonClass("scrollbar")}
                        onClick={() => setActiveComponent("scrollbar")}
                    >
                        Scroll Bar
                    </p>
                    <p
                        className={getButtonClass("gradientButton")}
                        onClick={() => setActiveComponent("gradientButton")}
                    >
                        Gradient Button
                    </p>
                    <p
                        className={getButtonClass("card")}
                        onClick={() => setActiveComponent("card")}
                    >
                        Card
                    </p>
                </div>

                {/* Show All Components on Small Screens */}
                <div className="mt-10 sm:hidden">
                    <div className="p-0 md:p-4">
                        <Register />
                    </div>
                    <div className="p-0 md:p-4 my-6">
                        <Scrollbar />
                    </div>
                    <div className="p-0 md:p-4 my-6">
                        <ButtonGradient />
                    </div>
                    <div className="p-0 md:p-4 my-6">
                        <Card />
                    </div>
                </div>

                {/* Display Active Component on Larger Screens */}
                <div className="mt-10 sm:block hidden">
                    {activeComponent === "register" && <Register />}
                    {activeComponent === "scrollbar" && <Scrollbar />}
                    {activeComponent === "gradientButton" && <ButtonGradient />}
                    {activeComponent === "card" && <Card />}
                </div>
                <div className="flex items-center justify-center mt-20">
                    <center>
                        <p className="text-white font-semibold mb-10">Simply Copy and Paste Into Your Project – No Hassle, All Ease!</p>
                        <p className="bg-white text-black py-2 px-4 rounded drop-shadow-lg font-semibold cursor-pointer">Much More Components</p>
                    </center>
                </div>
            </div>
        </div>
    );
};

export default ComponentLibrary;
