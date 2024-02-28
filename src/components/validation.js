export function validation (input) {
    
    let errors = {};
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[\w\.-]+@[\w\.-]+\.[a-z]{2,}$/;
   
    // Validate name
    if (input.name.length > 30) {
      errors.name = "El nombre no debe exceder los 30 caracteres";
    }
    if (!nameRegex.test(input.name)) {
      errors.name = "El nombre debe ser alfabético";
    }
    if (!input.name) {
      errors.name = "El campo nombre no debe estar vacio";
    }
    // Validate mail
    if (!emailRegex.test(input.email)) {
      errors.email = "Formato de email incorrecto";
    }
    if (input.email.length > 40) {
      errors.email = "El email no debe contar con mas de 40 caracteres";
    }
    if (!input.email) {
      errors.email = "El campo email no debe estar vacio";
    }
    
    return errors;
  }
  