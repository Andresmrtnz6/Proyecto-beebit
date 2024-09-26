import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 
import Layout from '../components/layout';
import { Button } from 'primereact/button';

const Home = () => {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center text-center p-8 space-y-6">
        <h1 className="text-5xl font-bold text-primary text-white">Bienvenido a Beebit Solutions</h1>
        <p className="text-xl text-gray-500">
          Nos especializamos en soluciones de software para su negocio.
        </p>
        <a href="./proyectos/index.jsx"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Ver Proyectos
        </a>
      </section>
    </Layout>
  );
};

export default Home;
