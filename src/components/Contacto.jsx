import React, {useState, useMemo} from "react";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CountryList from "react-select-country-list";
import Select from 'react-select';
import CountryFlag from "react-country-flag";
import { FaPhoneVolume, FaLocationDot, FaEnvelope } from "react-icons/fa6"
import { Ripple, initTE } from "tw-elements";
import { validation } from "./validation.js";

const Contacto = () => {
  
  initTE({ Ripple });
  
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const options = useMemo(() => CountryList().getData(), [])
 
  const [form, setForm] = useState({
    name: "",
    email:  "",
    country: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "", 
    country: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setForm({
      ...form,
        [e.target.name]: e.target.value
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value); 
  };


  const handleSubmit = (e) => {
    e.preventDefault();
      emailjs.sendForm("service_7p64wk7", "template_ml6tpib", e.target, "l7M96__4X3gcfBedn")
        .then((result) => {
          console.log(result.text);
          showSuccessAlert("Mensaje enviado correctamente a nuestro staff...!");
        // Limpiar el formulario después del envío
        setForm({
          name: "",
          email:  "",
          country: "",
          phone: "",
          message: "",
        });
        setPhoneNumber(""); // Limpiar el campo de teléfono
        setSelectedCountry(""); // Limpiar la selección de país
        }, (error) => {
          console.log(error.text);
          showErrorAlert("Hubo un error al enviar el mensaje");
        });
  };

  const handleMapClick = () => {
    const direccion = "Malvinas Argentinas 1982, C1406CXT Buenos Aires"; // Reemplaza "Dirección aquí" con la dirección proporcionada por ti
    const direccionFormateada = encodeURIComponent(direccion);
    const url = `https://www.google.com/maps/search/?api=1&query=${direccionFormateada}`;
    window.open(url, "_blank");
  };
    
  //------Mensajes de Alerta-------------------------------------
  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: "Enviado",
      confirmButtonColor: "rgb(94 195 191)",
      text: `${message}`,
    });
  };
    
  const showErrorAlert = (message) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${message}`,
    });
  };
  //---------------------------------------------------------------
  

  return (

  <div id="contactoLink" className="flex flex-col md:flex-row justify-between text-black py-12 pt-8 pb-8 bg-gradient-to-r from-gray-400 to-gray-300">
    
  
    {/* <!-- Contenedor izquierdo --> */}
  
    <div className="w-full md:w-1/2 relative" >
         
      <div className="mt-20 flex items-center justify-center">
        <p className="font-bold text-5xl">Ponete en</p>
        <p className="font-bold text-5xl ml-3 text-green-700">CONTACTO</p>
      </div>
      
      <div className="mx-auto w-[90%] mt-16 flex flex-row">
        
        <div className="w-[20%] flex flex-col justify-end items-end">
        
          <a onClick={handleMapClick} rel="noreferrer">
            <FaLocationDot className="h-12 w-12 text-green-700 hover:text-orange-600 transition-transform hover:scale-125 duration-500 cursor-pointer mt-2 mb-20" />
          </a> 
                 
          <a href="tel:+5492915032061" target="_blank" rel="noreferrer">
            <FaPhoneVolume className="h-12 w-12 text-green-700 hover:text-orange-600 transition-transform hover:scale-125 duration-500 cursor-pointer mb-8"/>
          </a>  

          <a href="mailto:staff.healthstyle@hotmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope className="h-12 w-12 text-green-700 hover:text-orange-600 transition-transform hover:scale-125 duration-500 scursor-pointer"/>
          </a>  
        
        </div>

        <div className="w-[80%]">
          <p className="text-left text-2xl ml-[8%]">Dirección: Av. Malvinas Argentinas 1982</p>
          <p className="text-left text-2xl ml-[8%]">CABA - Provincia de Buenos Aires</p>
          <p className="text-left text-2xl ml-[8%]">Argentina</p>
          <br/>  <br/>
          <p className="text-left text-2xl ml-[8%]">Tel.: +54 11 4762 3434</p>
          <br/>  <br/>
          <p className="text-left text-2xl ml-[8%]">Email: staff.healthstyle@hotmail.com</p>
        </div> 

      </div>
    </div>
 
    {/* <!-- Contenedor derecho --> */}
  
  <div className="w-full md:w-1/2 relative">
      
      {/* <div className="text-white relative">   */}
    
        <form onSubmit={handleSubmit} className="w-full space-y-4">
        
        <div className="w-[90%] mx-auto mt-8 ">
          <label htmlFor="name" className="flex block text-base font-bold text-black">
            Nombre y Apellido
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
            className="mt-1 p-2 border-2 border-green-500 rounded-md w-full focus:outline-none focus:border-green-500"
            style={{
              color: "black",
              WebkitBoxShadow: "0 0 0 1000px white inset", // Anula el color del autocompletado
              WebkitTextFillColor: "black",
            }}
          />
            
              <span className="text-red-800 hover:text-red-700">{errors.name}</span>
            

        </div>
        
        <div className="w-[90%] mx-auto">
          <label htmlFor="email" className="flex block text-base font-bold text-black">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
            className="mt-1 p-2 border-2 border-green-500 rounded-md w-full text-black text-black bg-white focus:outline-none focus:border-green-500"
            style={{
              color: "black",
              WebkitBoxShadow: "0 0 0 1000px white inset", // Anula el color del autocompletado
              WebkitTextFillColor: "black",
            }}
          />
        </div>
        
        <div className="w-[90%] mx-auto">
          <label htmlFor="country" className="flex block text-base font-bold text-black">
            País de Residencia
          </label>          
          <Select
            name="country"
            type="text"
            id="country"
            options={CountryList().getData().map(option => ({
              ...option, icon: 
                <CountryFlag countryCode={option.value} svg />,
            }))}
            value={selectedCountry}
            onChange={handleCountryChange}
            autoComplete="country"
            required
            className="mt-1 border-2 border-green-500 rounded-md w-full bg-white text-black focus:outline-none focus:border-green-500"
            isSearchable
            formatOptionLabel={({ icon, label }) => (
              <div className="flex items-center text-black">
                <div>{icon}</div>
                  <div className="ml-2">{label}</div>
              </div>
            )}
          />
        </div>

        <div className="w-[90%] mx-auto">
          <label htmlFor="phone" className="flex block text-base font-bold text-black">
            Número de teléfono
          </label>
          <PhoneInput
            country={'ar'}
            type="text"
            name="phone"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            autoComplete="phone"
            required
            className="flex w-[100%] h-auto mt-1 border-2 border-green-500 rounded-md font-bold bg-white text-black text-base focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="w-[90%] mx-auto">
          <label htmlFor="message" className="flex block text-base font-bold text-black">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-green-500 rounded-md bg-white text-black w-full focus:outline-none focus:border-green-500"
            
          ></textarea>
        </div>
       
        <div className="w-[90%] mx-auto">
          
          
          <button
            type="submit"
            className="mb-4 block w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
          >Enviar
          </button>
        
        
        </div>  
                
      </form>
      </div>
      {/* </div>    */}
    <button
      type="submit"
      onClick={() => window.open("https://wa.me/+5492915032061")}
      // data-te-ripple-init
      data-te-ripple-color="light"
      className=" fixed bottom-0 right-3 flex bg-green-500 mb-10 rounded-full p-5 text-white hover:bg-green-800 cursor-pointer inline-block animate-bounce "
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-14 w-14"
        fill="currentColor"
        viewBox="0 0 24 24">
          <path
            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    </button>

  </div>
  
  
  );
    
}

export default Contacto;