
import AddToCart from "../../NavbarUi/AddToCart";
import DashboardMenu from "../../NavbarUi/DashboardMenu";
import DropdownMenu from "../../NavbarUi/DropdownMenu";
import NavbarCenterLogo from "../../NavbarUi/NavbarCenterLogo";
import SideBarMenu from "../../NavbarUi/SideBarMenu";
import SimpleNavbar from "../../NavbarUi/SimpleNavbar";
import SmartMenu from "../../NavbarUi/SmartMenu";
import '../../NavbarUi/Dashboard.css'
import NavbarwithTopHeader from "../../NavbarUi/NavbarwithTopHeader";
const AppUINavbar = () => {
    return (
        <div className="hide-scrollbar">
            <SimpleNavbar />
            <AddToCart />
            <NavbarCenterLogo />
            <DropdownMenu />
            <SideBarMenu />
            <SmartMenu />
            <DashboardMenu />
            <NavbarwithTopHeader />
        </div>
    );
};

export default AppUINavbar;
