import { Injectable } from '@nestjs/common';
import { ProyectoService } from '../../services/proyecto/proyecto.service';

@Injectable()
export class DeleteProyecto {
  constructor(private readonly proyectoService: ProyectoService) {}

  async execute(uuid: string): Promise<void> {
    return await this.proyectoService.deleteProyecto(uuid);
  }
}
