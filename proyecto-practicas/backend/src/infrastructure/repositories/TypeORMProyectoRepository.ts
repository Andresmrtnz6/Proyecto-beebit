import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProyectoRepository } from '../../domain/proyectos/ProyectoRepository';
import { Proyecto } from '../../domain/proyectos/ProyectoRepository';
import { ProyectoEntity } from '../../entities/Proyectos/proyecto.entity'; // Aquí se usa la entidad de TypeORM

@Injectable()
export class TypeORMProyectoRepository implements ProyectoRepository {
  constructor(
    @InjectRepository(ProyectoEntity)
    private readonly proyectoRepository: Repository<ProyectoEntity>,
  ) {}

  async findAll(): Promise<Proyecto[]> {
    const proyectos = await this.proyectoRepository.find();
    return proyectos.map((entity) => this.toDomain(entity));
  }

  async findById(id: number): Promise<Proyecto | null> {
    const proyecto = await this.proyectoRepository.findOne({ where: { id } });
    if (!proyecto) {
      return null;
    }
    return this.toDomain(proyecto);
  }

  async save(proyecto: Proyecto): Promise<Proyecto> {
    const savedEntity = await this.proyectoRepository.save(proyecto);
    return this.toDomain(savedEntity);
  }

  async delete(id: number): Promise<void> {
    await this.proyectoRepository.delete(id);
  }

  // Método para convertir de la entidad de TypeORM al dominio
  private toDomain(entity: ProyectoEntity): Proyecto {
    return new Proyecto(entity.id, entity.nombre, entity.descripcion, entity.fechaInicio, entity.fechaFin, entity.presupuesto);
  }
}
