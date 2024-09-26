import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [visible, setVisible] = useState(false);
  const [proyecto, setProyecto] = useState({ nombre: '', descripcion: '', fecha_inicio: null, fecha_fin: null, presupuesto: '' });

  // Simulación de llamada a la API para obtener proyectos
  useEffect(() => {
    fetch('/api/proyectos')
      .then((res) => res.json())
      .then((data) => setProyectos(data));
  }, []);

  const handleCreate = () => {
    // Lógica para crear un nuevo proyecto
    fetch('/api/proyectos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(proyecto),
    }).then(() => {
      setVisible(false);
      setProyecto({ nombre: '', descripcion: '', fecha_inicio: null, fecha_fin: null, presupuesto: '' });
      // Actualiza la lista de proyectos
      fetch('/api/proyectos')
        .then((res) => res.json())
        .then((data) => setProyectos(data));
    });
  };

  return (
    <div className="p-5">
      <h1 className="text-4xl mb-5">Gestión de Proyectos</h1>
      <Button label="Crear Proyecto" icon="pi pi-plus" className="p-button-success mb-4" onClick={() => setVisible(true)} />

      <Dialog header="Crear Proyecto" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="nombre">Nombre</label>
            <InputText id="nombre" value={proyecto.nombre} onChange={(e) => setProyecto({ ...proyecto, nombre: e.target.value })} />
          </div>
          <div className="p-field">
            <label htmlFor="descripcion">Descripción</label>
            <InputText id="descripcion" value={proyecto.descripcion} onChange={(e) => setProyecto({ ...proyecto, descripcion: e.target.value })} />
          </div>
          <div className="p-field">
            <label htmlFor="fecha_inicio">Fecha de Inicio</label>
            <Calendar id="fecha_inicio" value={proyecto.fecha_inicio} onChange={(e) => setProyecto({ ...proyecto, fecha_inicio: e.target.value })} />
          </div>
          <div className="p-field">
            <label htmlFor="fecha_fin">Fecha de Fin</label>
            <Calendar id="fecha_fin" value={proyecto.fecha_fin} onChange={(e) => setProyecto({ ...proyecto, fecha_fin: e.target.value })} />
          </div>
          <div className="p-field">
            <label htmlFor="presupuesto">Presupuesto</label>
            <InputText id="presupuesto" value={proyecto.presupuesto} onChange={(e) => setProyecto({ ...proyecto, presupuesto: e.target.value })} />
          </div>
        </div>
        <Button label="Guardar" icon="pi pi-check" className="p-button-success" onClick={handleCreate} />
      </Dialog>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
            <th>Presupuesto</th>
          </tr>
        </thead>
        <tbody>
          {proyectos.map((proyecto) => (
            <tr key={proyecto.id_proyecto}>
              <td>{proyecto.nombre}</td>
              <td>{proyecto.descripcion}</td>
              <td>{proyecto.fecha_inicio}</td>
              <td>{proyecto.fecha_fin}</td>
              <td>{proyecto.presupuesto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Proyectos;
