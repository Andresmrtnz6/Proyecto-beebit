import { Injectable } from '@nestjs/common';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { CreateProyectoDto } from '../../../infrastructure/controllers/proyecto/dto/create_proyecto.dto';
import { ProyectoEntity } from '../../../domain/entities/proyecto/proyecto.entity';

@Injectable()
export class CreateProyecto {
  constructor(private readonly proyectoService: ProyectoService) {}

  async execute(createProyectoDto: CreateProyectoDto): Promise<ProyectoEntity> {
    return await this.proyectoService.createProyecto(createProyectoDto);
  }
}
