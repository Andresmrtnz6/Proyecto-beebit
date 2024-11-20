import { Injectable } from '@nestjs/common';
import { TareaService } from '../../services/tarea/tarea.service';
import { CreateTareaDto } from '../../../infrastructure/controllers/tarea/dto/create_tarea.dto';
import { TareaEntity } from '../../../domain/entities/tarea/tarea.entity';

@Injectable()
export class CreateTarea {
  constructor(private readonly tareaService: TareaService) {}

  async execute(createTareaDto: CreateTareaDto): Promise<TareaEntity> {
    return await this.tareaService.createTarea(createTareaDto);
  }
}
