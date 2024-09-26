import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Participan } from './Participan';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id_staff: number;

  @Column()
  dni: string;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  telefono: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date;

  @OneToMany(() => Participan, (participan) => participan.staff)
  participaciones: Participan[];
}
