import { Button } from 'primereact/button';  
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 

const PáginaInicio = () => {
  return (
    <div className="container mx-auto p-4"> {/* DaisyUI + TailwindCSS para el responsive */}
      <h1 className="text-4xl text-center">Gestor de Proyectos Prueba</h1>
      <div className="flex justify-center mt-4">
        <Button label="Crear Proyecto" className="p-button-success" /> {/* PrimeReact Botón */}
      </div>
    </div>
  );
};

export default PáginaInicio;
