import { Injectable } from '@nestjs/common';
import { TareaService } from '../../services/tarea/tarea.service';
import { TareaEntity } from '../../../domain/entities/tarea/tarea.entity';

@Injectable()
export class FindTarea {
  constructor(private readonly tareaService: TareaService) {}

  async execute(uuid: string): Promise<TareaEntity> {
    return await this.tareaService.findOneTarea(uuid);
  }
}
