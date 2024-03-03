import React, { useState, useEffect } from 'react';
import header from "../assets/header.jpg";

const Header = () => {
    const [buttonPosition, setButtonPosition] = useState({}); 

    const calculateButtonPosition = () => {
        if (window.innerWidth <= 450) { 
            return {
                position: 'relative',
                top: '-120px',
                left: '180px',
                fontSize: '0.6rem',
                padding: '0.5rem 1rem'
            };
        } else {
            return {};
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setButtonPosition(calculateButtonPosition());
        };

        window.addEventListener('resize', handleResize);

        setButtonPosition(calculateButtonPosition());

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="relative w-full sm:pb-64">
            <div className="w-full h-auto">
                <img src={header} alt="Your image" className="w-full h-auto mb-[-10%] sm:mb-[-20%] md:mb-[-25%] lg:mb-[-30%] xl:mb-[-35%]" />
            </div>
            <div className="absolute top-0 left-0 text-white text-left p-5 md:p-10">
                <div className="max-w-[45%]">
                    <h1 className={`text-xl sm:text-2xl md:text-4xl font-bold text-emerald-500 mb-4 sm:w-30vw md:w-30vw lg:w-30vw xl:w-30vw ${window.innerWidth <= 450 ? 'mt-[-15%] sm:mt-[-7%]' : ''} ${window.innerWidth > 768 ? 'lg:text-5xl' : ''}`}>
                        Alcanza tu mejor versión
                    </h1>
                </div>
                <div className={`mb-4 max-w-[35%] overflow-hidden ${window.innerWidth <= 450 ? 'mt-[-5%] sm:mt-[-3%]' : ''}`}>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg text-gray-700 leading-[1.2] sm:text-xs">
                        ¿Listo para superarte? Descubre cómo alcanzar tu máximo potencial{' '}
                        y lograr tus objetivos. 
                    </p>                    
                </div>
                <button style={{...buttonPosition, marginBottom: window.innerWidth <= 450 ? '30px' : '0'}} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 xl:py-5 xl:px-12 rounded text-xs sm:text-sm lg:text-lg">
                    Empezar ahora
                </button>
            </div>
        </div>
    );
};

export default Header;
