import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [visible, setVisible] = useState(false);
  const [miembro, setMiembro] = useState({ nombre: '', apellidos: '', dni: '', telefono: '' });

  useEffect(() => {
    fetch('/api/staff')
      .then((res) => res.json())
      .then((data) => setStaff(data));
  }, []);

  const handleCreate = () => {
    fetch('/api/staff', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(miembro),
    }).then(() => {
      setVisible(false);
      setMiembro({ nombre: '', apellidos: '', dni: '', telefono: '' });
      fetch('/api/staff')
        .then((res) => res.json())
        .then((data) => setStaff(data));
    });
  };

  return (
    <div className="p-5">
      <h1 className="text-4xl mb-5">Gestión de Staff</h1>
      <Button label="Agregar Miembro" icon="pi pi-plus" className="p-button-success mb-4" onClick={() => setVisible(true)} />

      <Dialog header="Agregar Miembro" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="nombre">Nombre</label>
            <InputText id="nombre" value={miembro.nombre} onChange={(e) => setMiembro({ ...miembro, nombre: e.target.value })} />
          </div>
          <div className="p-field">
            <label htmlFor="apellidos">Apellidos</label>
            <InputText id="apellidos" value={miembro.apellidos} onChange={(e) => setMiembro({ ...miembro, apellidos: e.target.value })} />
          </div>
          <div className="p-field">
            <label htmlFor="dni">DNI</label>
            <InputText id="dni" value={miembro.dni} onChange={(e) => setMiembro({ ...miembro, dni: e.target.value })} />
          </div>
          <div className="p-field">
            <label htmlFor="telefono">Teléfono</label>
            <InputText id="telefono" value={miembro.telefono} onChange={(e) => setMiembro({ ...miembro, telefono: e.target.value })} />
          </div>
        </div>
        <Button label="Guardar" icon="pi pi-check" className="p-button-success" onClick={handleCreate} />
      </Dialog>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>DNI</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((miembro) => (
            <tr key={miembro.id_staff}>
              <td>{miembro.nombre}</td>
              <td>{miembro.apellidos}</td>
              <td>{miembro.dni}</td>
              <td>{miembro.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Staff;
