import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Contacto from "./Contacto";
import { Service } from "./Service";
import Header from "./Header";
import Testimonios from "./Testimonios/Testimonios";
import Nosotros from "./Nosotros";

const Home =  () => {

  return (
    <div >
      <NavBar/>
      <Header/>
      <Service/>
      <Nosotros/>
      <Testimonios/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default Home;