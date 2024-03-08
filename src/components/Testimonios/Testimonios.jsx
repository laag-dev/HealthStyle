import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonios.css';

const testimonios = [
  {
    nombre: 'María González',
    foto: 'https://randomuser.me/api/portraits/women/1.jpg',
    contenido: '¡Increíble servicio! Los resultados superaron todas nuestras expectativas. Definitivamente recomendaré a HealthStyle a todos mis amigos y colegas. Estoy muy contenta con la atención recibida y con los cambios positivos que he experimentado en mi salud.',
    fecha: '12 de febrero de 2024' 
  },
  {
    nombre: 'Juan Pérez',
    foto: 'https://randomuser.me/api/portraits/men/1.jpg',
    contenido: 'He probado muchos servicios similares en el pasado, pero ninguno se compara con HealthStyle. Su atención al cliente y resultados son incomparables. ¡Totalmente recomendado! Gracias a HealthStyle he logrado mejorar mi condición física y sentirme mejor conmigo mismo.',
    fecha: '15 de febrero de 2024' 
  },
  {
    nombre: 'Ana Martínez',
    foto: 'https://randomuser.me/api/portraits/women/2.jpg',
    contenido: 'HealthStyle no solo mejoró mi salud física, sino también mi bienestar mental. Estoy eternamente agradecido por el apoyo y la atención que recibí de su equipo. Recomiendo encarecidamente los servicios de HealthStyle a cualquiera que esté buscando mejorar su calidad de vida.',
    fecha: '18 de febrero de 2024' 
  }
];

const Testimonios = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div id="testimonioLink" className="bg-gradient-to-r from-gray-400 to-gray-100 py-12">
      <h1 className='text-3xl text-[#216651] font-bold mb-10 md:mb-0 text-center uppercase'>Testimonios</h1>
      <div className="max-w-screen-lg mx-auto px-4"> 
        <Slider {...settings}>
          {testimonios.map((testimonio, index) => (
            <div key={index} className="p-4 md:p-8">
              <div className="bg-white shadow-md rounded-lg p-4 md:p-8 flex flex-col md:flex-row">
                <div className="flex flex-col items-center md:items-center md:mr-8">
                  <h2 className="text-lg font-semibold mb-2">{testimonio.nombre}</h2>
                  <img className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full mb-4" src={testimonio.foto} alt={testimonio.nombre} /> {/* Cambio de tamaño de la imagen */}
                  <p className="text-sm text-gray-500 mb-2">Fecha: {testimonio.fecha}</p>
                </div>
                <p className="text-base text-gray-700 text-center md:text-left flex-1 flex items-center justify-center md:justify-start">{testimonio.contenido}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonios;
