import React, { useState, useEffect } from 'react';
import { Ripple, initTE } from "tw-elements";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Contacto from "./Contacto";
import { Service } from "./Service";
import Header from "./Header";
import Testimonios from "./Testimonios/Testimonios";
import Nosotros from "./Nosotros";
import AboutUs from "./AboutUs";
import Result from "./Result";
import Plans from "./Plans";
import logochatbot from "../assets/chatbot.png";
import Recetas from "./Recetas";
import Chatbot from "./Chatbot";

const Home =  () => {
  
  initTE({ Ripple });

  const [popUpOpen, setPopUpOpen] = useState(false);
  
  const togglePopUp = (e) => {
    e.preventDefault();
    setPopUpOpen(!popUpOpen);
    console.log("popUpOpen:", !popUpOpen);
    // document.body.style.overflow = popUpOpen ? 'auto' : 'hidden';
  };

  const handleClosePopUp = (e) => {
    e.preventDefault();
    setPopUpOpen(false);
    console.log("Pop up cerrado:", e);
  };  

  

  return (
    <>
<<<<<<< HEAD
    <div >
      {/* <NavBar/> */}
=======
    <div>
>>>>>>> 310ab007796176d22d23284ebd12567cee297668
      <Header/>
      <AboutUs/>
      <Service/>
      <Result/>
      <Recetas/>
      <Testimonios/>
      <Plans/>
      <Contacto/>
      <Nosotros/>
      <Footer/>
      
      {/* ---------- Boton de Chatbot ---------- */}
      <button
        type="submit"
        // data-te-ripple-init
        data-te-ripple-color="light"
        className="z-50 fixed bottom-32 right-4 flex xl:mb-20 xs:mb-5 lg:mb-4 rounded-full text-white hover:scale-125 duration-500 cursor-pointer inline-block"
        onClick={e=> {togglePopUp(e)}}
      >
        <img
        src={logochatbot}
        alt="Bot"
        className="xl:w-24 xl:h-24 lg:h-18 lg:w-18 md:h-16 md:w-16 xs:h-14 xs:w-14 xsm:h-14 xsm:w-14 xsl:h-14 xsl:w-14"
        />
      </button>

      {/* ---------- Boton de Whatsapp ----------  */}
      <button
        type="submit"
        onClick={() => window.open("https://wa.me/+5492915032061")}
          // data-te-ripple-init
        data-te-ripple-color="light"
        className="z-50 fixed bottom-0 right-4 flex bg-[#25D366] mb-12 rounded-full xs:p-3 md:p-3 lg:p-3 xl:p-5 text-white hover:bg-[#3E9278] cursor-pointer inline-block animate-bounce "
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lg:h-10 lg:w-10 md:h-10 md:w-10 xs:h-8 xs:w-8 xl:w-16 xl:h-16"
          fill="currentColor"
          viewBox="0 0 24 24">
            <path
              d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </button>

      {/* ---------- popUp chatbot ----------  */}
      {popUpOpen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-400 bg-opacity-50 flex justify-center items-center">
        
        <div className="bg-gray-400 w-full h-full overflow-hidden rounded-lg shadow-lg">
            
            <div className="flex justify-end px-4 pt-4">
                <button onClick={e=> {handleClosePopUp(e)}} className="z-50  fixed font-bold text-black">
                  X
                </button>
            </div>
            <Chatbot />   
            {/* form de chatbot */}
            {/* <div className='p-6 relative w-full h-full'>
            </div> */}
        </div>    
    </div>
    )}   
    </div>
    </>
  )
}

export default Home;