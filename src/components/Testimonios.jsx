

const Testimonios = () => {
  return (
    <div id="testimonioLink" className="bg-gray-100 py-8 pt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="bg-white shadow-md rounded-lg p-8 transition duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <img className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/1.jpg" alt="Cliente 1" />
              <h2 className="text-lg font-semibold">María González</h2>
            </div>
            <p className="text-gray-700 mb-6">¡Increíble servicio! Los resultados superaron todas nuestras expectativas. Definitivamente recomendaré a HealthStyle a todos mis amigos y colegas.</p>
          </div>
          
         
          <div className="bg-white shadow-md rounded-lg p-8 transition duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <img className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Cliente 2" />
              <h2 className="text-lg font-semibold">Juan Pérez</h2>
            </div>
            <p className="text-gray-700 mb-6">He probado muchos servicios similares en el pasado, pero ninguno se compara con HealthStyle. Su atención al cliente y resultados son incomparables. ¡Totalmente recomendado!</p>
          </div>
          
          
          <div className="bg-white shadow-md rounded-lg p-8 transition duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <img className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/2.jpg" alt="Cliente 3" />
              <h2 className="text-lg font-semibold">Ana Martínez</h2>
            </div>
            <p className="text-gray-700 mb-6">HealthStyle no solo mejoró mi salud física, sino también mi bienestar mental. Estoy eternamente agradecido por el apoyo y la atención que recibí de su equipo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
