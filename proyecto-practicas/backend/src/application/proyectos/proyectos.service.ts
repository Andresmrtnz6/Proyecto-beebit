import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from '../../entities/Proyectos/proyecto.entity';
import { CreateProyectoDto } from '../../dto/proyecto/create-proyecto.dto';
import { UpdateProyectoDto } from '../../dto/proyecto/update-proyecto.dto';

@Injectable()
export class ProyectosService {
  constructor(
    @InjectRepository(Proyecto)
    private proyectosRepository: Repository<Proyecto>,
  ) {}

  async findAll(): Promise<Proyecto[]> {
    return this.proyectosRepository.find();
  }

  findOne(id: number): Promise<Proyecto> {
    return this.proyectosRepository.findOne({ where: { id_proyecto: id } });
  }

  create(createProyectoDto: CreateProyectoDto): Promise<Proyecto> {
    const proyecto = this.proyectosRepository.create(createProyectoDto);
    return this.proyectosRepository.save(proyecto);
  }

  async update(id: number, updateProyectoDto: UpdateProyectoDto): Promise<Proyecto> {
    await this.proyectosRepository.update(id, updateProyectoDto);
    return this.proyectosRepository.findOne({ where: { id_proyecto: id } });
  }

  async delete(id: number): Promise<void> {
    await this.proyectosRepository.delete(id);
  }
}
