import React from 'react'

const AboutUs = () => {
  return (
    <div className="container mx-auto px-8 text-center">
      <h3 id="serviciosLink" className="text-lg font-bold mb-4 relative">
        Sobre nosotros
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#216651] w-40"></div>
      </h3>
      <h1 className="text-5xl font-bold py-8 mb-4">
        Nuestros
        <span className="text-[#216651]"> Servicios</span>
      </h1>
    </div>
  )
}

export default AboutUs