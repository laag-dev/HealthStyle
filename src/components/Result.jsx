import React from 'react';
import ImgAntes from '../assets/antes.jpg';
import ImgDespues from '../assets/despues.jpg';

const Result = () => {
  return (
    <div id='resultadosLink' className="bg-gradient-to-r from-gray-400 to-gray-100 flex flex-col max-w-[1600px] mx-auto lg:flex-row justify-between items-start p-4 lg:p-20">
      <div className=" lg:ml-6 lg:mr-4 w-full lg:w-1/2 pr-0 lg:pr-4">
        <div className="flex items-center mb-0">
          <p className="text-2xl font-bold mr-4 ml-2">Resultados</p>
        </div>
        <hr className="border-t-4 border-[#216651] mb-8 w-[155px]" />
        <h1 className="text-xl xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-bold mb-0 text-left">CONSTRUIDO PARA OBTENER</h1>

        <h1 className="text-xl xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-bold mb-6 text-left">
        LOS MEJORES <span className='text-[#216651]'>RESULTADOS</span>
        </h1>

        <p className="text-left mb-4 lg:max-w-[600px]">Nuestro enfoque único y personalizado te ayuda a alcanzar tus objetivos de salud y bienestar de la manera más efectiva posible. Con el apoyo de nuestro equipo dedicado de expertos, te guiaremos en cada paso del camino para que puedas lograr tus metas y transformar tu vida.</p>
        <div className="text-left">
          <a href="#contactoLink" className="bg-[#216651] hover:bg-gray-600 text-xl text-white font-bold py-2 px-4 lg:py-3 lg:px-6 rounded-full mt-2 lg:mt-4 mb-4 lg:mb-0 inline-block">
            Contactanos
          </a>
        </div>
      </div>
      <div className="  lg:ml-4 lg:mr-6 w-full lg:w-1/2 flex justify-center items-center h-full">
        <div className="flex flex-col items-center transform transition-transform duration-500 hover:rotate-12">
          <img className="w-64 lg:w-58 h-auto rounded-lg mb-4 lg:mb-0" src={ImgAntes} alt="Antes" />
          <span className="text-sm">Antes</span>
        </div>
        <div className="flex flex-col items-center ml-4 transform transition-transform duration-500 hover:-rotate-12">
          <img className="w-64 lg:w-58 h-auto rounded-lg mb-4 lg:mb-0" src={ImgDespues} alt="Después" />
          <span className="text-sm">Después</span>
        </div>
      </div>
    </div>
  );
};

export default Result;
