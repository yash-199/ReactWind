import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home.jsx';
import Components from './page/components.jsx';
import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer.jsx';
import AppUINavbar from './component/ApplicationUI/AppUINavbar.jsx';
import AppUIBanner from './component/ApplicationUI/AppUIBanner.jsx';
import AppCardUI from './component/ApplicationUI/AppCardUI.jsx';
import AppAuthUI from './component/ApplicationUI/AppAuthUI.jsx';
import AppCookieUI from './component/ApplicationUI/AppCookieUI.jsx';
import AppContactUI from './component/ApplicationUI/AppContactUI.jsx';
import AppTable from './component/ApplicationUI/AppTable.jsx';
import Accordion from './component/CoreComponents/Accordion.jsx';
import Tab from './component/CoreComponents/Tab.jsx';
import HeroSection from './component/CoreComponents/HeroSection.jsx';


const App = () => {
  return (
    <div className="glassmorphic backdrop-blur-md bg-[#0E1217]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/components/Navbar" element={<AppUINavbar />} />
        <Route path="/components/Banner" element={<AppUIBanner />} />
        <Route path="/components/Card" element={<AppCardUI />} />
        <Route path="/components/Auth" element={<AppAuthUI />} />
        <Route path="/components/Cookie" element={<AppCookieUI />} />
        <Route path="/components/Contact" element={<AppContactUI />} />
        <Route path="/components/Table" element={<AppTable />} />
        <Route path="/components/Accordion" element={<Accordion />} />
        <Route path="/components/Tab" element={<Tab />} />
        <Route path='/components/HeroSection' element={<HeroSection />} />
        {/* Add more child routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
