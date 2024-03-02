import React, { useState, useEffect } from 'react';

const Header = () => {
    const [fontSize, setFontSize] = useState('4.5vw'); // Initial font size for responsive text
    const [buttonFontSize, setButtonFontSize] = useState('2.5vw'); // Initial font size for button
    const [textPosition, setTextPosition] = useState({ top: '30px', left: '10%' }); // Initial text position

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            
            // Adjust font size and text position based on window width
            if (windowWidth <= 1010) {
                const baseFontSize = 4.5; // Base font size in vw
                const baseButtonFontSize = 2.5; // Base button font size in vw
                
                // Calculate font size and button font size
                const calculatedFontSize = baseFontSize - (0.002 * (1010 - windowWidth)); // Adjust font size for smaller screens
                const calculatedButtonFontSize = baseButtonFontSize - (0.002 * (1010 - windowWidth)); // Adjust button font size for smaller screens
                
                setFontSize(`calc(${calculatedFontSize}vw - 0.1vw)`); // Set the calculated font size for the text elements
                setButtonFontSize(`calc(${calculatedButtonFontSize}vw - 0.1vw)`); // Set the calculated button font size
                setTextPosition({ top: '30px', left: '5%' }); // Adjust text position for smaller screens
            } else if (windowWidth >= 768) {
                setFontSize('3rem'); // Adjust font size for medium screens
                setButtonFontSize('1.75rem'); // Adjust button font size for medium screens
                setTextPosition({ top: '20px', left: '5%' }); // Adjust text position for medium screens
            } else {
                setFontSize('2.5rem'); // Adjust font size for larger screens
                setButtonFontSize('1.5rem'); // Adjust button font size for larger screens
                setTextPosition({ top: '10px', left: '2%' }); // Adjust text position for larger screens
            }
        };

        // Call handleResize initially
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures that effect runs only once on component mount

    return (
        <div style={{ position: 'relative', height: '600px' }} className="w-full">
            <img src="src\assets\header.jpg" alt="Your image" className="w-full object-scale-down" />
            <div className="absolute" style={{ ...textPosition, color: 'white', textAlign: 'center' }}>
                <div>
                    <h1 style={{ fontSize }} className="font-bold text-emerald-500">Alcanza tu</h1>
                    <h1 style={{ fontSize }} className="font-bold text-emerald-500">mejor versión</h1>
                    <button style={{ fontSize: buttonFontSize }} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded mt-8">
                        Empezar ahora
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;