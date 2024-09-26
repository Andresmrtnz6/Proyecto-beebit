import { Participan } from './Participan'; 
import { Entity, PrimaryGeneratedColumn, Column ,  OneToMany } from 'typeorm';


@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn()
  id_proyecto: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({ type: 'date' })
  fecha_inicio: Date;

  @Column({ type: 'date' })
  fecha_fin: Date;

  @Column('float')
  presupuesto: number;

  @OneToMany(() => Participan, (participan) => participan.proyecto)
  participaciones: Participan[];
}

