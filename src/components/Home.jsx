import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Testimonios from "./Testimonios";
import Contacto from "./Contacto";
import { Service } from "./Service";
import Header from "./Header";

const Home =  () => {

  return (
    <div >
      <NavBar/>
      <Header/>
      <Service/>
      <Testimonios/>
      <Contacto/>
      <Footer/>    
    </div>
  )
}

export default Home;