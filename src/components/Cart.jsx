import React from 'react';

const Cart = ({ cart, emptyCart }) => {
  // Función para calcular el total de los precios en el carrito
  const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += parseFloat(item.price.replace('$', ''));
    });
    return total.toFixed(2); // Redondear el total a 2 decimales
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-20 bg-gradient-to-r from-gray-100 to-gray-400 rounded-lg">
      <div className="lg:w-1/2 lg:mr-4">
        <h2 className="text-3xl font-bold mb-4 lg:mb-8">Tu compra</h2>
        <hr className="border-t-4 border-[#216651] mb-4 lg:mb-8" />
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-2">{item.title} - {item.price}</li>
          ))}
        </ul>
      </div>
      {/* Mostrar el total calculado */}
      <div className="mt-8 lg:mt-0 lg:self-end">
        <p className="text-2xl mb-2  font-bold">Total: ${calculateTotal()}</p>
        <div className="text-left mt-4 lg:mt-0">

          <button onClick={emptyCart} className="bg-[#216651] hover:bg-gray-600 text-white font-bold py-2 px-4 lg:py-3 lg:px-6 rounded-full mb-4 lg:mb-0 inline-block w-full lg:w-auto">
            Vaciar Carrito
          </button>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-[#216651] hover:bg-gray-600 text-white text-center font-bold py-2 ml-2 px-4 lg:py-3  lg:px-6 rounded-full inline-block w-full lg:w-auto">

            Comprar en WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
