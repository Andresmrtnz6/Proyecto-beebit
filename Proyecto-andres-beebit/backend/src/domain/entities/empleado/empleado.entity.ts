import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { EmpresaEntity } from '../empresa/empresa.entity';
import { TareaEntity } from '../tarea/tarea.entity';

@Entity('empleado')
export class EmpleadoEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ length: 255 })
  nombre: string;

  @Column({ length: 255 })
  apellidos: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 20, nullable: true })
  telefono: string;

  @Column()
  fechacontratacion: Date;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255, unique: true })
  username: string;

  @ManyToOne(() => EmpresaEntity, (empresa) => empresa.empleados)
  @JoinColumn({ name: 'empresa_id' })
  empresa: EmpresaEntity;

  @OneToMany(() => TareaEntity, (tarea) => tarea.empleado)
  tareas: TareaEntity[];
}
