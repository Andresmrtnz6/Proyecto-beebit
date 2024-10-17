import { Proyecto } from './Proyecto';

export interface ProyectoRepository {
  findAll(): Promise<Proyecto[]>;
  findById(id: number): Promise<Proyecto | null>;
  save(proyecto: Proyecto): Promise<Proyecto>;
  delete(id: number): Promise<void>;
}
