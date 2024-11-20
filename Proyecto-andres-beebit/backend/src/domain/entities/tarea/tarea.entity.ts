import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProyectoEntity } from '../proyecto/proyecto.entity';
import { EmpleadoEntity } from '../empleado/empleado.entity';

@Entity('tarea')
export class TareaEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ length: 255 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'date', nullable: true })
  fecha_inicio: Date;

  @Column({ type: 'date', nullable: true })
  fecha_fin: Date;

  @ManyToOne(() => ProyectoEntity, (proyecto) => proyecto.tareas)
  proyecto: ProyectoEntity;

  @ManyToOne(() => EmpleadoEntity, (empleado) => empleado.tareas)
  empleado: EmpleadoEntity;
}
