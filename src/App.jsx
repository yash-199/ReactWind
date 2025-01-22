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


const App = () => {
  return (
    <div className="glassmorphic backdrop-blur-md bg-[#0E1217]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />}>
          <Route path="Navbar" element={<AppUINavbar />} />
          <Route path="Banner" element={<AppUIBanner />} />
          <Route path="Card" element={<AppCardUI />} />
          <Route path="Auth" element={<AppAuthUI />} />
          <Route path="Cookie" element={<AppCookieUI />} />
          <Route path="Contact" element={<AppContactUI />} />
          <Route path="Table" element={<AppTable />} />
          {/* Add more child routes as needed */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
