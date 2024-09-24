// DTO para validar los datos de entrada para crear un proyecto
export class CreateProyectoDto {
    nombre: string;
    descripcion: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    presupuesto: number;
  }
  