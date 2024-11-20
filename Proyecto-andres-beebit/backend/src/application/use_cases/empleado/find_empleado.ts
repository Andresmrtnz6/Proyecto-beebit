import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadoEntity } from '../../../domain/entities/empleado/empleado.entity';

@Injectable()
export class FindEmpleado {
  constructor(
    @InjectRepository(EmpleadoEntity)
    private readonly empleadoRepository: Repository<EmpleadoEntity>,
  ) {}

  // Buscar empleado por nombre de usuario o email
  async findByUsernameOrEmail(usernameOrEmail: string): Promise<EmpleadoEntity | undefined> {
    const empleado = await this.empleadoRepository
      .createQueryBuilder('empleado')
      .where('empleado.username = :usernameOrEmail', { usernameOrEmail })
      .orWhere('empleado.email = :usernameOrEmail', { usernameOrEmail })
      .getOne();

    if (!empleado) {
      throw new Error('Empleado no encontrado');
    }

    return empleado;
  }

}
