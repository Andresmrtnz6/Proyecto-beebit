import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Proyecto } from './Proyecto';  
import { Staff } from './Staff';  

@Entity()
export class Participan {
  @PrimaryGeneratedColumn()
  id_participacion: number;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.participaciones)
  proyecto: Proyecto;

  @ManyToOne(() => Staff, (staff) => staff.participaciones)
  staff: Staff;

  @Column({ type: 'date' })
  fecha_participacion: Date;
}
