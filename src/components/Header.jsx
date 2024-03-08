import React from 'react';
import header from "../assets/header.jpg";




const Header = () => {

    const imageStyle = {
        objectFit: 'cover',
        objectPosition: 'center bottom',
        width: '100%',
        height: 'auto'
    };

    const containerStyle = {
        position: 'relative',
        maxHeight: '550px', // Adjust the maximum height here
        overflow: 'hidden',
    };

    const headingStyle = {
        position: 'absolute',
        left: '4%', // Adjust the left position as needed
        bottom: '80%', // Adjust the bottom position as needed
        transform: 'translateY(50%)', // Center vertically
       
        
       
    };
    const paragraphStyle ={
        position: 'absolute',
        left: '4%', // Adjust the left position as needed
        bottom: '55%', // Adjust the bottom position as needed
        transform: 'translateY(50%)', // Center vertically
        fontSize: '10px',
        
        
    };

    const buttonStyle = {
        position: 'absolute',
        bottom: '-10%', // Adjust the vertical position of the button
        left: '1%', // Center the button horizontally
        transform: 'translateY(50%)', // Center the button horizontally
        
    };

    return (
        <div style={containerStyle}>
            <img src={header} alt="Your image" style={imageStyle} />
            <div style={headingStyle}>
                <h1 className="text-[#216651] text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:mb-6  font-bold mb-4" style={{ lineHeight: '1' }}> {/* Adjust line height here */}
                    <span>Alcanza tu</span>
                    <br />
                    <span>mejor versión</span>
                </h1>
            </div>
            <div style={paragraphStyle}>
                <p className="text-gray-800 sm:text-sm sm:ml-6  md:text-xl md:ml-1 lg:text-2xl lg:ml-6 xl:text-2xl mb-6 xl:ml-12  ">
                    <span>¿Listo para superarte?</span>
                    <br />
                    <span>Descubre cómo alcanzar </span>
                    <br />
                    <span>tu máximo potencial</span>
                    <br />
                    <span>y lograr tus objetivos.</span>
                    </p>
                <button className="  text-xs md:text-sm xl:text-2xl xl:ml-14  xl:px-8 lg:ml-14 sm:ml-12 lg:text-2xl md:ml-14 bg-[#216651]  hover:bg-gray-400 text-white font-bold py-2 px-2 rounded-full" style={buttonStyle}>Comenzar ahora</button>
            </div>
        </div>
    );
};

export default Header;
