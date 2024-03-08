import React, { useState } from 'react';
import Cart from './Cart';

const Planes = ({ titulo, precio, plan, loren, boton, addToCart }) => {
  const [message, setMessage] = useState(""); // Estado para almacenar el mensaje

  const handleAddToCart = () => {
    addToCart();
    // setMessage(`¡${plan} añadido al carrito!`); // Asigna el mensaje adecuado
  };

  return (
    <div className='planes bg-[black] h-[320px] w-[250px] text-[white] rounded-[20px] hover:bg-[#216651]'>
      <h3 className='text-[15px] m-2.5'>{titulo}</h3>
      <span className='text-[45px] font-bold'>{precio}</span>
      <h3 className='text-[26px]'>{plan}</h3>
      <p className='text-center text-[15px]'>{loren || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo tempora nisi'}</p>
      <button className="bg-[#74BAA0] hover:bg-[#D1E1D4] hover:text-black text-white font-bold py-4 px-6 lg:py-3 lg:px-6 rounded-full mt-2 lg:mt-4 mb-4 lg:mb-0 inline-block" onClick={handleAddToCart}>{boton}</button>
      {message && <p className="text-[#74BAA0] tb-2">{message}</p>} {/* Muestra el mensaje si está presente */}
    </div>
  );
};

function Plans() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState(""); // Estado para almacenar el mensaje

  const addToCart = (item) => {
    setCart([...cart, item]);
    // setMessage(`¡${item.plan} añadido al carrito!`); // Asigna el mensaje adecuado
  };

  const emptyCart = () => {
    setCart([]); // Vaciar el carrito estableciendo el estado a un array vacío

  };

  return (
    <div id="costosLink" className="flex flex-col bg-gradient-to-r from-gray-100 to-gray-400 ">
      <div className="mx-auto px-8 text-center">
        <h3 className="text-xl font-bold mb-4 relative mt-[40px]">
          Costo de nuestros planes
          <div className="absolute bottom-[-20%] pt-1 mt-20 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#216651] w-72"></div>
        </h3>
        <h3 className="text-4xl font-bold py-8 mb-4">
          ELEGI  UNO DE NUESTROS
          <span className="text-[#216651] text-4xl font-bold py-8 mb-4"> PLANES</span>
          
        </h3>
      </div>
      <div className='Plans flex-wrap flex flex-row justify-center gap-3 mb-[50px] md:flex-row sm:content-center'>
        <Planes titulo="Facturado mensualmente" precio="$25" plan="Basico" boton="Comprar" addToCart={() => addToCart({ title: "Factura mensual", price: "$25", plan: "Basico" })} />
        <Planes titulo="Facturado mensualmente" precio="$49" plan="Intermedio" boton="Comprar" addToCart={() => addToCart({ title: "Factura mensual", price: "$49", plan: "Intermedio" })} />
        <Planes titulo="Facturado mensualmente" precio="$99" plan="Premium" boton="Comprar" addToCart={() => addToCart({ title: "Factura mensual", price: "$99", plan: "Premium" })} />
      </div>
      <Cart cart={cart} emptyCart={emptyCart} /> {/* Pasa la función emptyCart como prop */}
    </div>
  );
}

export default Plans;
