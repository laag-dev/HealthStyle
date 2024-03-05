import React from 'react'
import { FaCheck } from "react-icons/fa6"
import imagen from "../assets/fit.jpg"

const AboutUs = () => {
  return (
    
    <div id="aboutUsLink" className="flex flex-wrap bg-gradient-to-r from-gray-400 to-gray-100">
      
        {/* <!-- Contenedor izquierdo con imagen --> */}
      <div className="w-full md:w-1/2 p-8 relative overflow-hidden">
        <div className="w-full relative">
                <img src={imagen} alt="Equipo de trabajo" className="w-full mt-6 ml-6 object-cover"
                style={{
                  boxShadow: "-20px -20px 0px 0px rgba(33, 102, 81, 0.5)"
                }}/>
        </div>  
      </div>

        {/* <!-- Contenedor derecho con texto --> */}
      <div className="w-full md:w-1/2 px-4 py-8 md:py-0 ">
          
        <div className="w-[90%] mx-auto mt-14 text-black font-bold flex items-center justify-left">
          <hr className="border-t-4 border-[#216651] mr-4 w-[100px]" />
          <h1 className="text-2xl font-semibold">Sobre nosotros</h1>
        </div>

        <div className="w-[90%] mx-auto text-left  ">
          <h1 className="text-4xl font-bold mt-8 mb-8 uppercase leading-normal"> Brindamos entrenamiento y las mejores 
            <span className="text-[#216651]"> motivaciones de fitness</span>
          </h1>
          
          <p className="leading-relaxed mb-8 text-black font-normal text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          
          <ul  className="leading-loose text-black text-xl">
            <li className='flex items-center font-bold text-black' >< FaCheck className="text-[#216651] mr-2"/>Mas de 20 años de experiencia</li>
            <li className='flex items-center font-bold text-black' >< FaCheck className="text-[#216651] mr-2"/>Entrenadores Certificados</li>
            <li className='flex items-center font-bold text-black' >< FaCheck className="text-[#216651] mr-2"/>Calidad de trabajo excepcional</li>
          </ul>
        </div>

      </div>

    </div>

  )
}

export default AboutUs