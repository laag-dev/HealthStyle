import React from 'react';
import imagenSmall from "../assets/receta2.png";
import imagenLarge from "../assets/receta1.jpg";

const Recetas = () => {
    return (
        <div id='recetasLink' className='bg-gradient-to-r from-gray-100 to-gray-400 flex flex-col items-center space-y-4 text-left px-4 py-12'>
            <div>
                <h1 className='text-black text-2xl lg:text-3xl text-[#216651] py-2 font-bold uppercase'>
                    Consegui recetas personalizadas 
                <span className="text-[#216651]"> para vos</span>
                </h1>
            </div>
            <p className='lg:text-1xl lg:px-40 '>Descubre recetas sabrosas y saludables, adaptadas a tus gustos y necesidades. Desde platos reconfortantes hasta opciones saludables, te ofrecemos una variedad de recetas deliciosas y nutritivas para satisfacer tu paladar.</p>
            <img
                className="max-w-full lg:max-w-5xl mt-12"
                src={imagenSmall} // Use small image by default
                srcSet={`${imagenLarge} 1024w`} // Use large image for screens larger than 1024px
                alt=""
            />
            <button className='ml-0 mr-auto lg:mr-4 md:mr-4 lg:text-xl md:text-lg font-bold text-white rounded-full bg-[#216651] hover:bg-gray-600 px-5 py-3'>Conoce más</button>
        </div>
    );
}

export default Recetas;