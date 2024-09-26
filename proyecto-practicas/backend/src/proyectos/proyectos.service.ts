import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from '../entities/Proyecto';
import { CreateProyectoDto } from '../dto/create-proyecto.dto';

@Injectable()
export class ProyectosService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly proyectosRepository: Repository<Proyecto>,
  ) {}

  // Crear un nuevo proyecto
  async create(data: CreateProyectoDto): Promise<Proyecto> {
    const nuevoProyecto = this.proyectosRepository.create(data);
    return await this.proyectosRepository.save(nuevoProyecto);
  }

  // Obtener un proyecto por ID
  async findOne(id: string): Promise<Proyecto> {
    return await this.proyectosRepository.findOne({
      where: { id_proyecto: +id },
    });
  }

  // Actualizar un proyecto
  async update(id: string, data: any): Promise<Proyecto> {
    await this.proyectosRepository.update({ id_proyecto: +id }, data);
    return this.findOne(id);
  }

  // Eliminar un proyecto
  async delete(id: string): Promise<void> {
    await this.proyectosRepository.delete({ id_proyecto: +id });
  }
}
