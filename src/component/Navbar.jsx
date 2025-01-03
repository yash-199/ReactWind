import logo from '../assets/REACTWIND.png'
import { LuMoonStar } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom"
import { FaDochub } from "react-icons/fa";
import { RxComponent2 } from "react-icons/rx";
import { RiBloggerFill } from "react-icons/ri";
import { RiSlideshowView } from "react-icons/ri";
const Navbar = () => {
    return (
        <>
            {/*  backdrop-blur-md bg-glass/30 border border-white/1000  */}
            <div className="fixed top-0 left-0 w-full h-16 flex items-center backdrop-blur-md  bg-[#0E1217] border-2 border-[#2A2F37] rounded-xl justify-between px-4 drop-shadow-xl z-50">
                {/* <img className='w-16' src={logo} alt="" /> */}
                <p className='text-black font-semibold rounded-full font-mono uppercase  bg-white drop-shadow-lg px-6 py-2'>Logo</p>
                <ul className='hidden md:flex text-white font-serif font-medium items-start gap-5 uppercase text-sm'>
                    <NavLink to='/docs'>
                        <li className='hover:translate-y-[-2px] duration-500 transition-all'>Docs</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to='/components'>
                        <li className='hover:translate-y-[-2px] duration-500 transition-all'>Components</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink>
                        <li className='hover:translate-y-[-2px] duration-500 transition-all'>Blog</li>
                    </NavLink>
                    <NavLink>
                        <li className='hover:translate-y-[-2px] duration-500 transition-all'>Showcase</li>
                    </NavLink>
                </ul>
                <div className='flex items-center justify-between gap-5 pr-5'>
                    <LuMoonStar className='m-2 text-black bg-white drop-shadow-xl p-2 text-4xl rounded-full cursor-pointer hover:translate-y-[-2px] duration-500 transition-all' />
                    <FaGithub className='m-2 text-black bg-white drop-shadow-xl p-2 text-4xl rounded-full cursor-pointer hover:translate-y-[-2px] duration-500 transition-all' />
                </div>
            </div>

            <div className="md:hidden fixed bottom-0 w-full bg-white z-10">
                <ul className="flex justify-around items-center py-3">
                    <NavLink to="/docs">
                        <li className="text-xl flex flex-col items-center">
                            <FaDochub className='m-2 text-black bg-white rounded-full drop-shadow-lg px-2 py-2 text-4xl' />
                            <hr className="border-none h-1  bg-black w-4/5 m-auto hidden" />
                        </li>
                    </NavLink>
                    <NavLink to="/components">
                        <li className="text-xl flex flex-col items-center">
                            <RxComponent2 className='m-2 text-black bg-white rounded-full drop-shadow-lg px-2 py-2 text-4xl' />
                            <hr className="border-none h-1  bg-black w-4/5 m-auto hidden" />
                        </li>
                    </NavLink>
                    <NavLink to="/blog">
                        <li className="text-xl flex flex-col items-center">
                            <RiBloggerFill className='m-2 text-black bg-white rounded-full drop-shadow-lg px-2 py-2 text-4xl' />
                            <hr className="border-none h-1  bg-black w-4/5 m-auto hidden" />
                        </li>
                    </NavLink>
                    <NavLink to="/slides">
                        <li className="text-xl flex flex-col items-center">
                            <RiSlideshowView className='m-2 text-black bg-white rounded-full drop-shadow-lg px-2 py-2 text-4xl' />
                            <hr className="border-none h-1  bg-black w-4/5 m-auto hidden" />
                        </li>
                    </NavLink>
                </ul>
            </div>


        </>

    )
}

export default Navbar