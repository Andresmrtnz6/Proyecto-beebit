import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-400 p-4 text-white">
      <div className="container mx-auto flex flex-col items-center text-center space-y-4">

        {/* Redes sociales centradas */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-white hover:text-gray-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter className="text-white hover:text-gray-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className="text-white hover:text-gray-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram className="text-white hover:text-gray-300" />
          </a>
        </div>        

        {/* Sección centralizada con el título y derechos reservados */}
        <div>
          {/* Logo y nombre con colores del logo */}
          <h1 className="text-2xl font-bold">
            <span style={{ color: '#E3B400' }}>BEE</span>
            <span style={{ color: '#A4510F' }}>BIT</span> 
          </h1>
          <p>© 2024 Beebit Solutions. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
