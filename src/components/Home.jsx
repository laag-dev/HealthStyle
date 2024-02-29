import React from "react";
import MainHeader from "./HeaderIgnacio";
import Footer from "./Footer";
import Testimonios from "./Testimonios";
import Contacto from "./Contacto";
import { Service } from "./Service";
import Home2 from "./Home2";

const Home =  () => {

  return (
    <div id="HomeLink">
      <MainHeader/>
      <Home2/>
      <Service/>
      <Testimonios/>
      <Contacto/>
      <Footer/>    
    </div>
  )
}

export default Home;