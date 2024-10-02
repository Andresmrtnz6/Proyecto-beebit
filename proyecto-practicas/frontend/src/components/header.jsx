import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-400 p-4 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          
          <h1 className="text-3xl font-extrabold tracking-tight">
            Beebit Solutions
          </h1>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300 transition-colors duration-300">Inicio</Link>
          </li>
          <li>
            <Link href="/proyectos" className="hover:text-gray-300 transition-colors duration-300">Proyectos</Link>
          </li>
          <li>
            <Link href="/staff" className="hover:text-gray-300 transition-colors duration-300">Staff</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

