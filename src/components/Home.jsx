import React from "react";
import SlaiderCesar from "./SlaiderCesar";
import MainHeader from "./HeaderIgnacio";
import Footer from "./Footer";
import Testimonios from "./Testimonios";
import Contacto from "./Contacto";
import { Service } from "./Service";

const Home =  () => {

  return (
    <div >
      <MainHeader/>
      <SlaiderCesar/>
      <Service/>
      <Testimonios/>
      <Contacto/>
      <Footer/>    
    </div>
  )
}

export default Home;