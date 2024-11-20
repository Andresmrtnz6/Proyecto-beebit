import { Injectable } from '@nestjs/common';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { ProyectoEntity } from '../../../domain/entities/proyecto/proyecto.entity';

@Injectable()
export class FindProyecto {
  constructor(private readonly proyectoService: ProyectoService) {}

  async execute(uuid: string): Promise<ProyectoEntity> {
    return await this.proyectoService.findOneProyecto(uuid);
  }
}
