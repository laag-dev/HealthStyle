import React, {useState} from "react";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";
import { FaPhoneVolume, FaLocationDot, FaEnvelope } from "react-icons/fa6"
import { validation } from "./validation.js";

const Contacto = () => {
  
  const [errors, setErrors] = useState({ })
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email:  "",
    country: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
        [e.target.name]: e.target.value
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      emailjs.sendForm("service_7p64wk7", "template_ml6tpib", e.target, "l7M96__4X3gcfBedn")
        .then((result) => {
          console.log(result.text);
          showSuccessAlert("Mensaje enviado correctamente a nuestro staff...!");
        // Limpiar el formulario después del envío
        setInput({
          name: "",
          lastname: "",
          email:  "",
          country: "",
          phone: "",
          message: "",
        });
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
      confirmButtonColor: "rgb(33 102 81)",
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
  
  //-----------Campos llenos--------------------------------------------------------------------------------------------------------------------------------
  const inputLleno = input.name !== '' && input.lastname !== '' && input.email !== '' && input.country !== '' && input.phone !== '' && input.message !== '';
  //--------------------------------------------------------------------------------------------------------------------------------------------------------
  
  return (

  <div id="contactoLink" className="flex flex-col md:flex-row justify-between text-black py-12 pt-2 pb-8 bg-gradient-to-r from-gray-400 to-gray-100">
    
    {/* <!-- Contenedor izquierdo --> */}
  
    <div className="w-full md:w-1/2 relative" >
         
      <div className="xs:mt-6 md:mt-28 lg:mt-32 xl:mt-36 flex items-center justify-center">
        <p className="font-bold xs:text-2xl xsm:text-[28px] xsl:text-[32px] sm:text-5xl md:text-[26px] lg:text-4xl xl:text-[50px] 2xl:text-5xl">Ponete en</p>
        <p className="font-bold xs:text-2xl xsm:text-[28px] xsl:text-[32px] sm:text-5xl md:text-[26px] lg:text-4xl xl:text-[50px] 2xl:text-5xl ml-3 text-[#216651]">CONTACTO</p>
      </div>
      
      <div className="mx-auto w-[90%] xs:mt-8 xl:mt-16 flex flex-row">        
        <div className="w-[20%] flex flex-col xs:justify-center xs:items-center xl:justify-center xl:items-center 2xl:justify-end 2xl:items-end">  
          <a onClick={handleMapClick} rel="noreferrer">
            <FaLocationDot className="xs:h-6 xs:w-6 sm:h-8 sm:w-8 md:h-8 md:w-8 xl:h-12 xl:w-12 
            text-[#216651] hover:text-orange-600 transition-transform hover:scale-125 duration-500 cursor-pointer 
            xs:mt-2  xsm:mt-2  xsl:mt-2  sm:mt-4  md:mt-2 lg:mt-2 xl:mt-2 
            xs:mb-28 xsm:mb-24 xsl:mb-16 sm:mb-16 md:mb-22 lg:mb-22 xl:mb-20" />
          </a> 
                 
          <a href="tel:+5492915032061" target="_blank" rel="noreferrer">
            <FaPhoneVolume className="xs:h-6 xs:w-6 sm:h-8 sm:w-8 md:h-8 md:w-8 xl:h-12 xl:w-12 
            text-[#216651] hover:text-orange-600 transition-transform hover:scale-125 duration-500 cursor-pointer 
            xs:mt-0 xsm:mt-4 xsl:mt-2 sm:mt-12 md:mt-14 lg:mt-10 xl:mt-2
            xs:mb-8 xsm:mb-8 xsl:mb-8 sm:mb-4 md:mb-10 lg:mb-8 xl:mb-6"/>
          </a>  

          <a href="mailto:staff.healthstyle@hotmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope className="xs:h-6 xs:w-6 sm:h-8 sm:w-8 md:h-8 md:w-8 xl:h-12 xl:w-12 
            text-[#216651] hover:text-orange-600 transition-transform hover:scale-125 duration-500 scursor-pointer"/>
          </a>   
        </div>

        <div className="xs:w-[75%] xsm:w-[75%] xsl:w-[75%] sm:w-[75%] md:w-[70%] lg:w-[70%] xl:w-[80%]">
          <p className="text-left xs:text-[18px] xsl:text-[16px] sm:text-2xl md:text-[18px] lg:text-xl xl:text-2xl xs:ml-0 xl:ml-0 2xl:ml-[4%]
                        xs:text-center xsm:text-center xsl:text-center sm:text-center md:text-center lg:text-center xl:text-left">Dirección: Av. Malvinas Argentinas 1982</p>
          <p className="text-left xs:text-[18px] xsl:text-[16px] sm:text-2xl md:text-[18px] lg:text-xl xl:text-2xl xs:ml-0 xl:ml-0 2xl:ml-[4%] 
                        xs:text-center xsm:text-center xsl:text-center sm:text-center md:text-center lg:text-center xl:text-left">CABA - Provincia de Buenos Aires</p>
          <p className="text-left xs:text-[18px] xsl:text-[16px] sm:text-2xl md:text-[18px] lg:text-xl xl:text-2xl xs:ml-0 xl:ml-0 2xl:ml-[4%] xs:mb-4 xl:mb-12 
                        xs:text-center xsm:text-center xsl:text-center sm:text-center md:text-center lg:text-center xl:text-left">Argentina</p>
          
          <p className="text-left xs:text-[18px] xsl:text-[16px] sm:text-2xl md:text-[18px] lg:text-xl xl:text-2xl xs:ml-0 xl:ml-0 2xl:ml-[4%] xs:mb-4 xl:mb-12 
                        xs:text-center xsm:text-center xsl:text-center sm:text-center md:text-center lg:text-center xl:text-left">Tel.: +54 11 4762 3434</p>
          
          <p className="text-left xs:text-[14px] xsm:text-[16px] xsl:text-[16px] sm:text-2xl md:text-[16px] lg:text-xl xl:text-2xl xs:ml-0 xl:ml-0 2xl:ml-[4%] 
                        xs:text-center xsm:text-center xsl:text-center sm:text-center md:text-center lg:text-center xl:text-left">Email: staff.healthstyle@hotmail.com</p>
        </div> 
      </div>
  
    </div>
 
    {/* <!-- Contenedor derecho --> */}
  
    <div className="w-full md:w-1/2 relative ">
      
      <form onSubmit={handleSubmit} className="w-full space-y-4 mt-[8%] 
       xs:border-t xs:border-gray-500 xsm:border-t xs:border-gray-500 xsl:border-t xs:border-gray-500 md:border-t md:border-none">
        
        <div className="w-[90%] mx-auto flex"> 
          <div className="w-[50%]">
            <label htmlFor="name" className="flex italic block font-bold text-black
            xs:mt-4
            xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={input.name}
              onChange={handleChange}
              placeholder="Nombre"
              required

              autoComplete="nope"
              className={`flex mt-1 p-2 border-b-4 text-black italic border-[#216651] bg-transparent placeholder-gray-500 w-[95%] focus:outline-none 
              xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base  ${errors.name ? 'border-red-700' : 'border-[#216651]'}`}             
 
            />
              {errors.name && <span className="text-red-800">{errors.name}</span>}
          </div>  
              
          <div className="w-[50%] mx-auto">
            <label htmlFor="lastname" className="flex italic block text-base font-bold text-black
            xs:mt-4
            xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base">
              Apellido
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={input.lastname}
              onChange={handleChange}
              placeholder="Apellido"
              required

              autoComplete="nope"
              className={`mt-1 p-2 border-b-4 text-black italic border-[#216651] bg-transparent placeholder-gray-500 w-full focus:outline-none
              xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base ${errors.lastname ? 'border-red-700' : 'border-[#216651]'}`}             

            />
              {errors.lastname && <span className="text-red-800">{errors.lastname}</span>}
          </div>  
        </div>

        <div className="w-[90%] mx-auto">
          <label htmlFor="email" className="flex block font-bold text-black
          xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={input.email}
            onChange={handleChange}
            placeholder="Ingrese su email - Ej.: email@mail.com"
            required

            autoComplete="nope"
            className={`mt-1 p-2 border-b-4 text-black italic border-[#216651] bg-transparent placeholder-gray-500 w-full focus:outline-none
            xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base ${errors.email ? 'border-red-700' : 'border-[#216651]'}`}             

            />
            {errors.email && <span className="text-red-800">{errors.email}</span>}
        </div>
        
        <div className="w-[90%] mx-auto">
          <label htmlFor="country" className="flex block font-bold text-black
          xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base">
            País de Residencia
          </label>          
          <input
            type="text"
            name="country"
            id="country"
            value={input.country}
            onChange={handleChange}
            placeholder="Ej.: Argentina"
            required
            autoComplete="nope"
            className={`mt-1 p-2 border-b-4 text-black italic border-[#216651] bg-transparent placeholder-gray-500 w-full focus:outline-none 
            xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base ${errors.country ? 'border-red-700' : 'border-[#216651]'}`}
            />
            {errors.country && <span className="text-red-800">{errors.country}</span>}
        </div>

        <div className="w-[90%] mx-auto">
          <label htmlFor="phone" className="flex block font-bold text-black
          xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base">
            Número de teléfono
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={input.phone}
            onChange={handleChange}
            placeholder="Ej.: +54 011 444-3345"
            required
            autoComplete="nope"
            className={`mt-1 p-2 border-b-4 text-lg text-black italic border-[#216651] bg-transparent placeholder-gray-500 w-full focus:outline-none 
            xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base ${errors.phone ? 'border-red-700' : 'border-[#216651]'}`}
            />
            {errors.phone && <span className="text-red-800">{errors.phone}</span>}
        </div>

        <div className="w-[90%] mx-auto">
          <label htmlFor="message" className="flex block font-bold text-black
          xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={input.message}
            onChange={handleChange}
            placeholder="Hacenos llegar tu mensaje"
            required

            autoComplete="nope"
            className={`mt-1 p-2 border-b-4 text-lg text-black italic border-[#216651] bg-transparent placeholder-gray-500 w-full focus:outline-none 
            xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base ${errors.message ? 'border-red-700' : 'border-[#216651]'}`}
></textarea>
            {errors.message && <span className="text-red-800">{errors.message}</span>}
        </div>
       
        <div className="w-[90%] mx-auto">
          <button
            type="submit"
            className={`mb-4 mt-8 block w-full text-white font-bold py-3 px-4 rounded-full ${Object.values(errors).some(error => error !== "") || !inputLleno ? "bg-gray-600 cursor-not-allowed" : "bg-[#216651] hover:bg-[#3E9278] hover:text-black"}`}
            disabled={Object.values(errors).some(error => error !== "") || !inputLleno}
            title={Object.values(errors).some(error => error !== "") ? Object.values(errors).join(", ") : !inputLleno ? "Por favor, completa todos los campos correctamente" : ""}
            style={{
              boxShadow: "4px 4px 8px 0 rgba(0, 0, 0, 0.5), 10px 2px 4px 1px rgba(0, 0, 0, 0.06)"
            }}
            >ENVIAR
          </button>
        </div>  
                
      </form>

    </div>

  </div>
  
  );
    
}

export default Contacto;
