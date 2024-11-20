import { Injectable } from '@nestjs/common';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { UpdateProyectoDto } from '../../../infrastructure/controllers/proyecto/dto/update_proyecto.dto';
import { ProyectoEntity } from '../../../domain/entities/proyecto/proyecto.entity';

@Injectable()
export class UpdateProyecto {
  constructor(private readonly proyectoService: ProyectoService) {}

  async execute(uuid: string, updateProyectoDto: UpdateProyectoDto): Promise<ProyectoEntity> {
    return await this.proyectoService.updateProyecto(uuid, updateProyectoDto);
  }
}
