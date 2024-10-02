import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 
import Layout from '../components/layout';
import { Button } from 'primereact/button';
import Link from 'next/link';
import ProyectosPage from './proyectos/page';
import StaffPage from './staff/page';



const Home = () => {
  return (


    <Layout>

      <section className="flex flex-col items-center justify-center text-center p-8 space-y-6">
        <h1 className="text-5xl font-bold text-white">Bienvenido a Beebit Solutions</h1>
        <p className="text-xl text-gray-500">
          Nos especializamos en soluciones de software para su negocio.
        </p>
          <Link href="/proyectos">
            <Button label="Ver proyectos" className="bg-blue-500 hover:bg-blue-700  btn btn-primary"></Button>
          </Link>

      </section>


      {/* Sección de Proyectos destacados */}
      <ProyectosPage/>

      {/* Sección de Nuestro Equipo */}
      <StaffPage/>


    </Layout>

    
  );
};

export default Home;
