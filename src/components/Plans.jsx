import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Cart from './Cart';

const Planes = ({ titulo, precio, plan, boton, addToCart, message, setMessage, selected }) => {
  const handleAddToCart = () => {
    addToCart();
    // setMessage(`¡${plan} añadido al carrito!`); // Asigna el mensaje adecuado
    if (!selected) {
      addToCart();
      setMessage(`¡${plan} añadido al carrito!`); // Asigna el mensaje adecuado al plan actual
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: `¡${plan} ya ha sido agregado al carrito!`,
      });
    }
  };

  // Texto descriptivo de cada plan
  const descripcionPlan = {
    Beginners: 'Ideal para quienes recién comienzan su viaje en este campo.',
    Basic: 'Una opción perfecta para aquellos que buscan funcionalidades esenciales.',
    Advanced: 'Para usuarios avanzados que necesitan herramientas y recursos adicionales.'
  };

  return (
    <div className='planes bg-[black] h-[320px] w-[250px] text-[white] rounded-[20px] hover:bg-[#216651] text-center'>
      <h3 className='text-[15px] m-2.5'>{titulo}</h3>
      <span className='text-[45px] font-bold'>{precio}</span>
      <h3 className='text-[26px]'>{plan}</h3>
      <p className='text-center text-[15px]'>{descripcionPlan[plan]}</p> {/* Muestra la descripción del plan */}
      <button 
        className={`bg-[#74BAA0] hover:bg-[#D1E1D4] hover:text-black text-white font-bold py-4 px-6 lg:py-3 lg:px-6 rounded-full mt-2 lg:mt-4 mb-4 lg:mb-0 inline-block`} 
        onClick={handleAddToCart} 
      >
        {boton}
      </button>
      {message && <p className="text-[#74BAA0] tb-2">{message}</p>} {/* Muestra el mensaje si está presente */}
    </div>
  );
};

function Plans() {
  const [cart, setCart] = useState([]);
  const [messages, setMessages] = useState({}); // Estado para almacenar los mensajes específicos de cada plan
  const [selectedPlans, setSelectedPlans] = useState([]); // Estado para almacenar los planes seleccionados

  const addToCart = (item) => {
    setCart([...cart, item]);
    setMessages({ ...messages, [item.plan]: `¡${item.plan} añadido al carrito!` }); // Asigna el mensaje adecuado al plan actual
    setSelectedPlans([...selectedPlans, item.plan]); // Agregar el plan a la lista de planes seleccionados
  };

  const emptyCart = () => {
    setCart([]); // Vaciar el carrito estableciendo el estado a un array vacío
    setMessages({}); // Limpiar todos los mensajes
    setSelectedPlans([]); // Limpiar la lista de planes seleccionados
  };

  return (
    <div id="costosLink" className="flex flex-col bg-gradient-to-r from-gray-100 to-gray-400 text-center ">
      <div className="mx-auto px-8 text-center">
        <h3 className="text-lg font-bold mb-4 relative mt-[40px]">
        Costo de nuestros planes
          <div className="absolute bottom-[-20%] pt-1 mt-20 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#216651] w-72"></div>
        </h3>
        <h3 className="text-4xl font-bold py-8 mb-4">
          ELEGI  UNO DE NUESTROS
          <span className="text-[#216651] text-4xl font-bold py-8 mb-4"> PLANES</span>
        </h3>
      </div>
      <div className='Plans flex-wrap flex flex-row justify-center gap-3 mb-[50px] md:flex-row  sm:content-center'>
        <Planes 
          titulo="Facturado por mes" 
          precio="$25" 
          plan="Beginners" 
          boton="Comprar" 
          addToCart={() => addToCart({ title: "Facturado por mes", price: "$25", plan: "Beginners" })} 
          message={messages["Beginners"]} 
          setMessage={(message) => setMessages({ ...messages, "Beginners": message })} 
          selected={selectedPlans.includes("Beginners")} 
        />
        <Planes 
          titulo="Facturado por mes" 
          precio="$49" 
          plan="Basic" 
          boton="Comprar" 
          addToCart={() => addToCart({ title: "Facturado por mes", price: "$49", plan: "Basic" })} 
          message={messages["Basic"]} 
          setMessage={(message) => setMessages({ ...messages, "Basic": message })} 
          selected={selectedPlans.includes("Basic")} 
        />
        <Planes 
          titulo="Facturado por mes" 
          precio="$99" 
          plan="Advanced" 
          boton="Comprar" 
          addToCart={() => addToCart({ title: "Facturado por mes", price: "$99", plan: "Advanced" })} 
          message={messages["Advanced"]} 
          setMessage={(message) => setMessages({ ...messages, "Advanced": message })} 
          selected={selectedPlans.includes("Advanced")} 
        />
      </div>
      <Cart cart={cart} emptyCart={emptyCart} /> {/* Pasa la función emptyCart como prop */}
    </div>
  );
}

export default Plans;
