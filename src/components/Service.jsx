import React from "react";
import service1 from "../assets/Service1.jpeg";
import service2 from "../assets/Service2.jpeg";
import service3 from "../assets/Service3.jpeg";

export const Service = () => {
  return (
    <div  id="serviciosLink"    className="bg-gradient-to-r from-gray-100 to-gray-300 py-6 min-h-screen relative pt-12">
    <div className="container mx-auto px-8 text-center">
      <h3 id="serviciosLink" className="text-2xl font-bold mb-8 relative">
        Que ofrecemos
        <div className="absolute bottom-[-20%] pt-1 mt-20 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#216651] w-48"></div>
      </h3>
      <h1 className="text-3xl font-bold py-6 mb-0">
        NUESTROS
        <span className="text-[#216651]"> SERVICIOS</span>
      </h1>
    </div>

      <div className="flex py-12 items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/50 transition-shadow ">
            <div className="h-98 w-72">
              <img
                className="h-full w-full object-cover group-hover:rotate-2 group-hover:scale-110 transition-transform"
                src={service1}
                alt="personal trainer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[70%] group-hover:translate-y-0 transition-all duration-500">
              <h1 className="text-xl mb-2 font-extrabold text-[#BEDEDB] ">
                Entrenamientos personalizados
              </h1>
              <p className="text-2x1 italic font-semibold text-white mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Con nuestros entrenamientos personalizados, te ofrecemos un
                enfoque único y adaptado a tus necesidades y objetivos, para
                maximizar tu progreso y alcanzar tus metas de forma eficiente y
                segura.
              </p>
              <button className="rounded-lg bg-[#BEDEDB] shadow shadow-[#BEDEDB]/60 px-4 py-3 text-sm capitalize text-black font-bold ">
                Ver mas
              </button>
            </div>
          </div>
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/50 transition-shadow ">
            <div className="h-98 w-72">
              <img
                className="h-full w-full object-cover group-hover:rotate-2 group-hover:scale-110 transition-transform"
                src={service2}
                alt="personal trainer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[70%] group-hover:translate-y-0 transition-all duration-500">
              <h1 className="text-xl mb-2 font-extrabold text-[#BEDEDB] ">
                Planes de nutrición personalizados
              </h1>
              <p className="text-2x1 italic font-semibold text-white mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Nuestros planes de nutrición personalizados se diseñan según tus
                necesidades específicas sea perdida de grasa o ganancia muscular
                ayudándote a alcanzar tus metas de salud y bienestar de manera
                efectiva.
              </p>
              <button className="rounded-lg bg-[#BEDEDB] shadow shadow-[#BEDEDB]/60 px-4 py-3 text-sm capitalize text-black font-bold ">
                Ver mas
              </button>
            </div>
          </div>
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/50 transition-shadow ">
            <div className="h-98 w-72">
              <img
                className="h-full w-full object-cover group-hover:rotate-2 group-hover:scale-110 transition-transform"
                src={service3}
                alt="personal trainer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[70%] group-hover:translate-y-0 transition-all duration-500">
              <h1 className="text-xl mb-2 font-extrabold text-[#BEDEDB] ">
                Monitorizamos tu progreso
              </h1>
              <p className="text-2x1 italic font-semibold text-white mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Nuestro seguimiento continuo de tu progreso te brinda
                retroalimentación constante para ajustar tu plan de
                entrenamiento y nutrición, asi garantizar resultados óptimos en
                tu camino hacia tus objetivos.
              </p>
              <button className="rounded-lg bg-[#BEDEDB] shadow shadow-[#BEDEDB]/60 px-4 py-3 text-sm capitalize text-black font-bold ">
                Ver mas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
