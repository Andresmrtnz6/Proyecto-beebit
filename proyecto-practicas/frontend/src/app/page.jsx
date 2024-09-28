import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 
import Layout from '../components/layout';
import { Button } from 'primereact/button';
import Link from 'next/link';


const Home = () => {
  return (


    <Layout>

      <section className="flex flex-col items-center justify-center text-center p-8 space-y-6">
        <h1 className="text-5xl font-bold text-primary text-white">Bienvenido a Beebit Solutions</h1>
        <p className="text-xl text-gray-500">
          Nos especializamos en soluciones de software para su negocio.
        </p>
          <Link href="/proyectos">
            <Button label="Ver proyectos" className="bg-blue-500 hover:bg-blue-700  btn btn-primary"></Button>
          </Link>

      </section>


       {/* Sección de Proyectos destacados */}
       <section className="mt-12 p-8 bg-blue-400">
        <h2 className="text-3xl font-bold text-center text-white">PRROYECTOS DESTACADOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {/* Aquí puedes agregar los proyectos destacados */}
          <div className="shadow-lg p-4 bg-white">
            <h3 className="font-bold text-lg">Proyecto A</h3>
            <p>Descripción del Proyecto A</p>
          </div>
          <div className="shadow-lg p-4 bg-white">
            <h3 className="font-bold text-lg">Proyecto B</h3>
            <p>Descripción del Proyecto B</p>
          </div>
          <div className="shadow-lg p-4 bg-white">
            <h3 className="font-bold text-lg">Proyecto B</h3>
            <p>Descripción del Proyecto B</p>
          </div>
        </div>
      </section>

      {/* Sección de Nuestro Equipo */}
      <section className="mt-12 p-8">
        <h2 className="text-3xl font-bold text-center text-white">NUESTRO EQUIPO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {/* Aquí puedes agregar información del equipo */}
          <div className="shadow-lg p-4 bg-white">
            <h3 className="font-bold text-lg">Alejandro Cantón</h3>
            <p>Desarrollador Senior</p>
          </div>
          <div className="shadow-lg p-4 bg-white">
            <h3 className="font-bold text-lg">Andrés Lorente</h3>
            <p>Gerente de Proyecto</p>
          </div>
          <div className="shadow-lg p-4 bg-white">
            <h3 className="font-bold text-lg">María Salvador</h3>
            <p>Gerente de Proyecto</p>
          </div>
        </div>
      </section>

    </Layout>

    
  );
};

export default Home;
