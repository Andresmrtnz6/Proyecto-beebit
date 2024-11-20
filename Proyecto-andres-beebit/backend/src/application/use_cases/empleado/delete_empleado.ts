import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadoEntity } from '../../../domain/entities/empleado/empleado.entity';

@Injectable()
export class DeleteEmpleado {
  constructor(
    @InjectRepository(EmpleadoEntity)
    private readonly empleadoRepository: Repository<EmpleadoEntity>,
  ) {}

  async execute(uuid: string): Promise<void> {
    const empleado = await this.empleadoRepository.findOne({ where: { uuid } });
    if (!empleado) {
      throw new Error('Empleado no encontrado');
    }
    await this.empleadoRepository.delete(uuid);
  }
}
