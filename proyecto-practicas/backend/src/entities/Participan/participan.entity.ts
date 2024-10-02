import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Proyecto } from '../Proyectos/proyecto.entity';
import { Staff } from '../Staff/staff.entity';


@Entity('participan')
export class Participan {
  @PrimaryColumn()
  id_proyecto: number;

  @PrimaryColumn()
  id_staff: number;

  @ManyToOne(() => Proyecto, proyecto => proyecto.id_proyecto)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @ManyToOne(() => Staff, staff => staff.id_staff)
  @JoinColumn({ name: 'id_staff' })
  staff: Staff;

  @Column({ type: 'date' })
  fecha_participacion: Date;
}
