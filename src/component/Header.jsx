import { motion } from "framer-motion";
import banner from "../assets/banner.png";

const Header = () => {
    return (
        <div className="container">
            <div className="md:mt-20 mt-10">
                <h1 className="text-white md:text-6xl text-2xl text-center font-serif md:leading-loose px-2">
                    Build stunning modern <span className="font-semibold">UI</span> rapidly with just <br /> with <span className="font-semibold">React and Tailwind</span>.
                </h1>
                <center>
                    <p className="content-center text-white text-justify p-10 w-full md:w-1/2 py-10">Reactwind is a modern UI component library seamlessly blending the power of React with the elegance of Tailwind CSS. Designed for developers, it offers a curated collection of responsive, customizable, and reusable components to accelerate your web development journey. Whether you're crafting sleek dashboards, dynamic websites, or engaging user interfaces, Reactwind ensures a seamless, stylish, and efficient experience.</p>

                </center>
            </div>
            <div className="flex items-center justify-center gap-6">
                <button className="text-black font-sans text-md font-semibold bg-white drop-shadow-lg rounded-full py-2 px-5 hover:translate-y-2 duration-700 transition-all">
                    Get Started
                </button>
                <button className="text-black font-sans text-md font-semibold bg-white drop-shadow-lg rounded-full py-2 px-4 hover:translate-y-2 duration-700 transition-all">
                    View Template
                </button>
            </div>
            <motion.div
                className="flex justify-center py-10"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <img className="w-3/4 rounded shadow-2xl" src={banner} alt="Banner" />
            </motion.div>
        </div>
    );
};

export default Header;
