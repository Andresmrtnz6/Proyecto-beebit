import { Injectable } from '@nestjs/common';
import { TareaService } from '../../services/tarea/tarea.service';

@Injectable()
export class DeleteTarea {
  constructor(private readonly tareaService: TareaService) {}

  async execute(uuid: string): Promise<void> {
    return await this.tareaService.deleteTarea(uuid);
  }
}
