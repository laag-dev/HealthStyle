import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Contacto from "./Contacto";
import { Service } from "./Service";
import Header from "./Header";
import Testimonios from "./Testimonios/Testimonios";

const Home =  () => {

  return (
    <div >
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