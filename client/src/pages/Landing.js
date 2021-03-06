import React, { useContext, useEffect } from 'react';
// import { PosGlobalContext } from '../context/POS/PosContext';
import Portfolio from '../components/Landing/Portfolio';
import Nav from '../components/Landing/Navbar';
import Main from '../components/Landing/Main';
import Services from '../components/Landing/Services';
import Team from '../components/Landing/Team';
import Contact from '../components/Landing/Contact';
import Footer from '../components/Landing/Footer';
import Map from '../components/Landing/Map-Customer';
import Demo from '../components/Landing/Demo';
import { LocationGlobalContext } from '../context/Location/LocationsContext';

// import Form from '../components/Checkout/MainForm';

export default function Landing() {
  const { activeLocation, pinnedStatusCheck } = useContext(
    LocationGlobalContext
  );

  useEffect(() => {
    pinnedStatusCheck();
  }, []);

  return (
    <div className="App" id="page-top">
      <Main />
      <Services />
      <Map />
      <Portfolio />
      <Team />
      <Contact />
      {/* <Footer />     */}
    </div>
  );
}
