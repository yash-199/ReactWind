
import AddToCart from "../../NavbarUi/AddToCart";
import DashboardMenu from "../../NavbarUi/DashboardMenu";
import DropdownMenu from "../../NavbarUi/DropdownMenu";
import NavbarCenterLogo from "../../NavbarUi/NavbarCenterLogo";
import SideBarMenu from "../../NavbarUi/SideBarMenu";
import SimpleNavbar from "../../NavbarUi/SimpleNavbar";
// import SmartMenu from "../../NavbarUi/SmartMenu";
import '../../NavbarUi/Dashboard.css'
import NavbarwithTopHeader from "../../NavbarUi/NavbarwithTopHeader";
import { NavLink } from "react-router-dom";
const AppUINavbar = () => {
    return (
        <div className="hide-scrollbar w-10/12 mx-auto pt-20">
            <div className='mx-auto text-center'>
                <h1 className="mt-10 text-white mb-6 text-center text-4xl font-semibold leading-relaxed">ReCom Navbars UI Build Faster! </h1>
                <p className='text-white'>
                    Over 600+ free & premium Tailwind CSS UI components, blocks, sections, and templates to
                    <br /> quickly create beautiful web user interfaces for your web projects.
                    <br /> From Marketing and Dashboard to E-commerce, Application, and Core components, each
                    high-quality UI element is handcrafted to <br /> solve your design and coding challenges
                    and bring your web project closer to launch. All components are available in HTML, React,
                    and Vue.
                </p>
            </div>
            <div className='flex sm:justify-center gap-10 pt-5 w-full overflow-x-auto'>
                <NavLink to='/components/Banner'>
                    <p className='text-white hover:bg-white duration-300 transition-all hover:text-black border border-white font-bold py-3 px-5 uppercase rounded'>
                        Banner
                    </p>
                </NavLink>
                <NavLink to='/components/Card'>
                    <p className='text-white hover:bg-white duration-300 transition-all hover:text-black border border-white font-bold py-3 px-5 uppercase rounded'>
                        Card
                    </p>
                </NavLink>
                <NavLink to='/components/Auth'>
                    <p className='text-white hover:bg-white duration-300 transition-all hover:text-black border border-white font-bold py-3 px-5 uppercase rounded'>
                        Auth/Sign/Login/Forget
                    </p>
                </NavLink>
                <NavLink to='/components/Cookie'>
                    <p className='text-white hover:bg-white duration-300 transition-all hover:text-black border border-white font-bold py-3 px-5 uppercase rounded'>
                        Cookie
                    </p>
                </NavLink>
                <NavLink to='/components/Contact'>
                    <p className='text-white hover:bg-white duration-300 transition-all hover:text-black border border-white font-bold py-3 px-5 uppercase rounded'>
                        Contact
                    </p>
                </NavLink>
                <NavLink to='/components/Table'>
                    <p className='text-white hover:bg-white duration-300 transition-all hover:text-black border border-white font-bold py-3 px-5 uppercase rounded'>
                        Table
                    </p>
                </NavLink>

            </div>
            <SimpleNavbar />
            <AddToCart />
            <NavbarCenterLogo />
            <DropdownMenu />
            <SideBarMenu />
            {/* <SmartMenu /> */}
            <DashboardMenu />
            <NavbarwithTopHeader />
        </div>
    );
};

export default AppUINavbar;
