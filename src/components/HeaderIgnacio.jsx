import React, { useState } from 'react';

const MainHeader = () => {

  return (

    <nav className="bg-emerald-500 w-full h-14 flex justify-between items-center fixed top-0 z-50 ">

    <a className='flex text-xl text-white' href="#"><img className='h-8 ml-16 mr-2' src="src\asset\healthstyleLogo.svg" alt="" />Healthstyle</a>
    <div className='flex justify-end items-center'>
      <div className='text-white mr-16 text-xl'><a href="#homeLink">Home</a></div>
      <div className='text-white mr-16 text-xl'><a href="#serviciosLink">Servicios</a></div>
      <div className='text-white mr-16 text-xl'><a href="#">Planes</a></div>
      <div className='text-white mr-16 text-xl'><a href="#testimonioLink">Testimonios</a></div>
      <div className='text-white mr-16 text-xl'><a href="#">Nosotros</a></div>
      <div className='text-white mr-24 text-xl'> <a href="#contactoLink">Contacto</a></div>
    </div>

  </nav>

  )
}

export default MainHeader
