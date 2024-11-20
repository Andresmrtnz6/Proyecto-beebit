import { Injectable } from '@nestjs/common';
import { CreateEmpleadoDto } from '../../../infrastructure/controllers/empleado/dto/create_empleado.dto';
import { EmpleadoEntity } from '../../../domain/entities/empleado/empleado.entity';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class CreateEmpleado {
  constructor(
    @InjectRepository(EmpleadoEntity) // Inyecta el repositorio de Empleado
    private readonly empleadoRepository: Repository<EmpleadoEntity>,
  ) {}

  async createEmpleado(createEmpleadoDto: CreateEmpleadoDto): Promise<EmpleadoEntity> {
    const salt = await bcrypt.genSalt(10); // Genera el salt
    const hashedPassword = await bcrypt.hash(createEmpleadoDto.password, salt); // Hashea la contraseña con el salt

    const empleado = this.empleadoRepository.create({
      ...createEmpleadoDto,
      password: hashedPassword, // Almacena la contraseña hasheada
    });

    return await this.empleadoRepository.save(empleado); // Guarda el empleado en la base de datos
  }
}
