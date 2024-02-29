import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Contacto from "./Contacto";
import { Service } from "./Service";
import Header from "./Header";
import Testimonios from "./Testimonios/Testimonios";
import AboutUs from "./AboutUs";

const Home =  () => {

  return (
    <div >
      <NavBar/>
      <Header/>
      <AboutUs/>
      <Service/>
      <Testimonios/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default Home;