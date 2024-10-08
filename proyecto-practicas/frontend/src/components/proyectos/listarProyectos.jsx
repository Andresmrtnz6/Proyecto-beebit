import EditarProyecto from '../proyectos/editarProyecto';
import EliminarProyecto from '../proyectos/eliminarProyecto';

const Proyectos = ({ proyectos }) => {
  return (
    <table className="table-auto w-full mt-5">
      <thead>
        <tr className="text-left text-gray-400">
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Fecha Inicio</th>
          <th>Fecha Fin</th>
          <th>Presupuesto</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {proyectos.map((proyecto) => (
          <tr key={proyecto.id_proyecto} className="text-white">
            <td>{proyecto.nombre}</td>
            <td>{proyecto.descripcion}</td>
            <td>{proyecto.fecha_inicio}</td>
            <td>{proyecto.fecha_fin}</td>
            <td>{proyecto.presupuesto}</td>
            <td>
              <EditarProyecto proyectoId={proyecto.id_proyecto} />
              <EliminarProyecto proyectoId={proyecto.id_proyecto} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Proyectos;
