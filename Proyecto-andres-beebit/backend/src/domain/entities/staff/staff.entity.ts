import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { EmpresaEntity } from '../empresa/empresa.entity';

@Entity('staff')
export class StaffEntity {
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

  @Column({ length: 100 })
  puesto: string;

  @Column({ length: 255, unique: true })
  username: string;

  @Column({ length: 255 })
  password: string;

  @ManyToOne(() => EmpresaEntity, (empresa) => empresa.staff)
  empresa: EmpresaEntity;
}
