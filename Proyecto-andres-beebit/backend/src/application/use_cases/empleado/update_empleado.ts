import { Injectable } from '@nestjs/common';
import { EmpleadoService } from '../../services/empleado/empleado.service';
import { UpdateEmpleadoDto } from '../../../infrastructure/controllers/empleado/dto/update_empleado.dto';
import { EmpleadoEntity } from '../../../domain/entities/empleado/empleado.entity';

@Injectable()
export class UpdateEmpleado {
  constructor(private readonly empleadoService: EmpleadoService) {}

  async execute(uuid: string, updateEmpleadoDto: UpdateEmpleadoDto): Promise<EmpleadoEntity> {
    return await this.empleadoService.updateEmpleado(uuid, updateEmpleadoDto);
  }
}
