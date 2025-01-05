import { assets } from "../assets/ApplicationUi-Image/assets.js";
import { NavLink } from "react-router-dom"

const AllUI = () => {
    return (
        <div className="px-10 py-5">
            <p className="text-white text-4xl font-mono font-semibold">Application UI</p>
            <p className="my-5 text-white text-lg text-justify">
                Build complete web applications with our collection of stunning Tailwind UI components
                designed specifically for web apps. Tailgrids Application UI consists of - blogs,
                cards, contact sections, special pages, footer sections, modals, navbar & menus,
                paginations, auth pages, data tables, and more.
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-5 gap-y-6">
                <NavLink to='/components/Navbar'>
                    <div className="bg-[#1C1F26] border-2 border-[#343942] shadow-2xl hover:drop-shadow-lg hover:shadow-lg rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 pb-2">
                        <img src={assets.navbar_img} />
                        <hr className="py-1" />
                        <p className="text-medium text-white font-mono text-lg px-4">Navbar</p>
                        <p className="px-4 text-medium text-white font-mono text-lg">8 components</p>
                    </div>
                </NavLink>
                <NavLink to='/components/Banner'>
                    <div className="bg-[#1C1F26] border-2 border-[#343942] shadow-2xl hover:drop-shadow-lg hover:shadow-lg rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 pb-2">
                        <img src={assets.navbar_img} />
                        <hr className="py-1" />
                        <p className="text-medium text-white font-mono text-lg px-4">Banner</p>
                        <p className="px-4 text-medium text-white font-mono text-lg">2 components</p>
                    </div>
                </NavLink>
                <NavLink to="/components/Card">
                    <div className="bg-[#1C1F26] border-2 border-[#343942] shadow-2xl hover:drop-shadow-lg hover:shadow-lg rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 pb-2">
                        <img src={assets.navbar_img} />
                        <hr className="py-1" />
                        <p className="text-medium text-white font-mono text-lg px-4">Card</p>
                        <p className="px-4 text-medium text-white font-mono text-lg">8 components</p>
                    </div>
                </NavLink>
                <div className="bg-[#1C1F26] border-2 border-[#343942] shadow-2xl hover:drop-shadow-lg hover:shadow-lg rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 pb-2">
                    <img src={assets.navbar_img} />
                    <hr className="py-1" />
                    <p className="text-medium text-white font-mono text-lg px-4">Card</p>
                    <p className="px-4 text-medium text-white font-mono text-lg">8 components</p>
                </div>
                <div className="bg-[#1C1F26] border-2 border-[#343942] shadow-2xl hover:drop-shadow-lg hover:shadow-lg rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 pb-2">
                    <img src={assets.navbar_img} />
                    <hr className="py-1" />
                    <p className="text-medium text-white font-mono text-lg px-4">Card</p>
                    <p className="px-4 text-medium text-white font-mono text-lg">8 components</p>
                </div>
                <div className="bg-[#1C1F26] border-2 border-[#343942] shadow-2xl hover:drop-shadow-lg hover:shadow-lg rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 pb-2">
                    <img src={assets.navbar_img} />
                    <hr className="py-1" />
                    <p className="text-medium text-white font-mono text-lg px-4">Card</p>
                    <p className="px-4 text-medium text-white font-mono text-lg">8 components</p>
                </div>
            </div>
        </div>
    )
}

export default AllUI