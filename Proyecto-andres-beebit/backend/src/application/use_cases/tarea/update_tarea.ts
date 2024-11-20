import { Injectable } from '@nestjs/common';
import { TareaService } from '../../services/tarea/tarea.service';
import { UpdateTareaDto } from '../../../infrastructure/controllers/tarea/dto/update_tarea.dto';
import { TareaEntity } from '../../../domain/entities/tarea/tarea.entity';

@Injectable()
export class UpdateTarea {
  constructor(private readonly tareaService: TareaService) {}

  async execute(uuid: string, updateTareaDto: UpdateTareaDto): Promise<TareaEntity> {
    return await this.tareaService.updateTarea(uuid, updateTareaDto);
  }
}
