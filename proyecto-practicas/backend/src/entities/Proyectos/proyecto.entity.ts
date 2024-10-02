import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Participan } from '../Participan/participan.entity';

@Entity('proyectos')
export class Proyecto {
  @PrimaryGeneratedColumn()
  id_proyecto: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ type: 'date' })
  fecha_inicio: Date;

  @Column({ type: 'date' })
  fecha_fin: Date;

  @Column('decimal', { precision: 15, scale: 2 })
  Presupuesto: number;

  @OneToMany(() => Participan, participan => participan.proyecto)
  participantes: Participan[];
}
