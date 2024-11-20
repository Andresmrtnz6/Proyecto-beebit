"use client";


import { useState } from 'react';
import empleadoService from '../api/empleado/empleadoService.jsx';
import staffService from '../api/staff/staffService.jsx';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ usernameOrEmail: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (role) => {
    try {
      let response;
      if (role === 'empleado') {
        response = await empleadoService.login(credentials);
      } else if (role === 'staff') {
        response = await staffService.login(credentials);
      }
  
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        if (role === 'empleado') {
          router.push('/empleado/dashboard');
        } else if (role === 'staff') {
          router.push('/staff/dashboard');
        }
      }
    } catch (error) {
      setError('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/background_login.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Header */}
      <header className="absolute top-0 left-0 w-full bg-black bg-opacity-70 py-4 z-20">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <Image
              src="/images/logo_beebit.png"
              width={150}
              height={100} 
              alt="Logo Beebit"
              className="mr-3"
            />
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="text-white hover:text-yellow-400 transition duration-300">
              Inicio
            </a>
            <a href="#proyectos" className="text-white hover:text-yellow-400 transition duration-300">
              Proyectos
            </a>
            <a href="#contacto" className="text-white hover:text-yellow-400 transition duration-300">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Formulario */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md relative z-10"
      >
        <h1 className="text-4xl text-white font-bold mb-8 text-center">Bienvenido</h1>

        <input
          type="text"
          name="usernameOrEmail"
          placeholder="Usuario o Email"
          value={credentials.usernameOrEmail}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white bg-black bg-opacity-70"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={credentials.password}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-6 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white bg-black bg-opacity-70"
        />

        <button
          onClick={() => handleLogin('empleado')}
          className="w-full bg-yellow-500 text-black px-4 py-2 rounded-lg mb-2 hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
        >
          Iniciar Login Empleado
        </button>
        <button
          onClick={() => handleLogin('staff')}
          className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
        >
          Iniciar Login Staff
        </button>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full py-4 bg-black bg-opacity-70 text-white text-center">
        <p>© 2024 BEEBIT - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LoginPage;
