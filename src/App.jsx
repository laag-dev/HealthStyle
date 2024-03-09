import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contacto from "./components/Contacto";
import { Service } from "./components/Service";
import { AuthProvider } from "./context/AuthContext";
import UserLogin from "./components/UserLogin";
import UserRegistration from "./components/UserRegistration";
import NavBar from "./components/NavBar";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const openLoginModal = () => {
    console.log("Abriendo modal de inicio de sesión");
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openRegistrationModal = () => {
    console.log("Abriendo modal de registro de usuario");
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  return (
    <AuthProvider>
      <div className="App">
        <NavBar
          openLoginModal={openLoginModal}
          openRegistrationModal={openRegistrationModal}
        />
        <Routes>
          <Route
            path="/login"
            element={
              <UserLogin
                isOpenL={isLoginModalOpen}
                onCloseL={closeLoginModal}
              />
            }
          />
          <Route
            path="/registration"
            element={
              <UserRegistration
                isOpen={isRegistrationModalOpen}
                onClose={closeRegistrationModal}
              />
            }
          />
          <Route exact path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}