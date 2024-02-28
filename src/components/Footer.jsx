import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <footer className="text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p>Dirección: Calle Principal, Ciudad, País</p>
            <p>Email: staff.healthstyle@hotmail.com</p>
            <p>Teléfono: +123456788</p>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Síguenos en redes sociales</h3>
            <ul className="flex justify-center items-center space-x-4">
              <li><a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#" className="text-white"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#" className="text-white"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="text-white"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center">&copy; 2024 HealthStyle | Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
