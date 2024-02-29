export function validation (input) {
    
  let errors = {};
  const phoneRegex = /^[+\s-]*[\d\s-]+$/;
  const nameRegex = /^[a-zA-Z ]+$/;
  const emailRegex = /^[\w\.-]+@[\w\.-]+\.[a-z]{2,}$/;
   
  // Validate name
  errors.name = "";
  if (input.name.trim() !== "") {
    if (input.name.length > 30) {
      errors.name = "El Nombre no debe exceder los 30 caracteres";
    } else if (!nameRegex.test(input.name)) {
      errors.name = "El Nombre debe contener únicamente caracteres alfabéticos";
    }
  }
    
  // Validate lastname
  errors.lastname = "";
  if (input.lastname.trim() !== "") {
    if (input.lastname.length > 30) {
      errors.lastname = "El Apellido no debe exceder los 30 caracteres";
    } else if (!nameRegex.test(input.lastname)) {
      errors.lastname = "El Apellido debe contener únicamente caracteres alfabéticos";
    }
  }
  
  // Validate mail
  errors.email = ""
  if (input.email.trim() !== "") {
    if (!emailRegex.test(input.email)) {
      errors.email = "Formato de email incorrecto";
    } else if (input.email.length > 40) {
      errors.email = "El email no debe contar con mas de 40 caracteres";
    }
  }
  
  // Validate country
  errors.country = "";
  if (input.country.trim() !== "") {
    if (input.lastname.length > 30) {
      errors.country = "El país de residencia no debe exceder los 30 caracteres";
    } else if (!nameRegex.test(input.country)) {
      errors.country = "El nombre del país debe contener únicamente caracteres alfabéticos";
    }
  }

  // Validate phone
  errors.phone = "";
  if (input.phone.trim() !== "") {
    if (input.phone.length > 30) {
      errors.phone = "El número telefónico no debe exceder los 30 caracteres";
    } else if (!phoneRegex.test(input.phone)) {
      errors.phone = "El número telefónico debe contener unicamente caracteres numéricos";
    }
  }

  // Validate Message
  errors.message = "";
  if (input.message.trim() !== "") {
    if (input.message.length > 250 || input.message.length < 20) {
      errors.message = "El mensaje debe contener entre 20 y 250 caracteres";
    }
  }
  
  return errors;
  }
  