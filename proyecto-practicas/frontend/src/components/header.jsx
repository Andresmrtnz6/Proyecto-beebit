import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-400 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Beebit Solutions</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/proyectos">Proyectos</Link></li>
          <li><Link href="/staff">Staff</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
