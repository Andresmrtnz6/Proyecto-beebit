import { EmpleadoEntity } from "../../../domain/entities/empleado/empleado.entity";
import { DataSource } from "typeorm";


export const EmpleadoRepository = (dataSource: DataSource) => 
  dataSource.getRepository(EmpleadoEntity).extend({
  });