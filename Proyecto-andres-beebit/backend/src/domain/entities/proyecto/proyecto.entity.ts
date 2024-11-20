import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { EmpresaEntity } from '../empresa/empresa.entity';
import { TareaEntity } from '../tarea/tarea.entity';

@Entity('proyecto')
export class ProyectoEntity {
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

  @Column({ type: 'float', nullable: true })
  presupuesto: number;

  @Column({ length: 50, nullable: true })
  estado: string;

  @ManyToOne(() => EmpresaEntity, (empresa) => empresa.proyectos)
  empresa: EmpresaEntity;

  @OneToMany(() => TareaEntity, (tarea) => tarea.proyecto)
  tareas: TareaEntity[];
}
