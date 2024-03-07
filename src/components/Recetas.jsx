import React from 'react';
import imagenSmall from "../assets/receta2.png";
import imagenLarge from "../assets/receta1.jpg";

const Recetas = () => {
    return (
        <div className='flex flex-col items-center space-y-4 text-left px-4 py-12'>
            <div>
                <h1 className='text-2xl lg:text-4xl text-green-600 font-bold'>Consegui recetas personalizadas para vos</h1>
            </div>
            <p className='lg:text-1xl lg:px-40'>Descubre recetas sabrosas y saludables, adaptadas a tus gustos y necesidades. Desde platos reconfortantes hasta opciones saludables, te ofrecemos una variedad de recetas deliciosas y nutritivas para satisfacer tu paladar.</p>
            <img
                className="max-w-full lg:max-w-5xl"
                src={imagenSmall} // Use small image by default
                srcSet={`${imagenLarge} 1024w`} // Use large image for screens larger than 1024px
                alt=""
            />
            <button className='ml-0 mr-auto lg:mr-4 md:mr-4 lg:text-xl md:text-lg font-bold text-white rounded-full bg-green-600 hover:bg-green-800 px-5 py-3'>Conoce más</button>
        </div>
    );
}

export default Recetas;