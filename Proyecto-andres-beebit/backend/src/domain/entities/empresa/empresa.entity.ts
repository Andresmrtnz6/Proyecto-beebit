import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EmpleadoEntity } from '../empleado/empleado.entity';
import { ProyectoEntity } from '../proyecto/proyecto.entity';
import { StaffEntity } from '../staff/staff.entity';

@Entity('empresa')
export class EmpresaEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ length: 255 })
  nombre: string;

  @Column({ length: 255, nullable: true })
  direccion: string;

  @Column({ length: 100, nullable: true })
  email: string;

  @Column({ length: 20, nullable: true })
  telefono: string;

  @OneToMany(() => EmpleadoEntity, (empleado) => empleado.empresa)
  empleados: EmpleadoEntity[];

  @OneToMany(() => ProyectoEntity, (proyecto) => proyecto.empresa)
  proyectos: ProyectoEntity[];

  @OneToMany(() => StaffEntity, (staff) => staff.empresa)
  staff: StaffEntity[];
}
