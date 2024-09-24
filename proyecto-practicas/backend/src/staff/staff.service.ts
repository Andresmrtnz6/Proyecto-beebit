import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from '../entities/Staff';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>,
  ) {}

  // Crear un nuevo miembro del staff
  async create(data: any): Promise<Staff> {
    const nuevoStaff = this.staffRepository.create(data);
    return await this.staffRepository.save(nuevoStaff);
  }

  // Obtener un miembro del staff por ID
  async findOne(id: string): Promise<Staff> {
    return await this.staffRepository.findOne({
      where: { id_staff: +id }, // Convierte el id a número
    });
  }

  // Actualizar un miembro del staff
  async update(id: string, data: any): Promise<Staff> {
    await this.staffRepository.update({ id_staff: +id }, data);
    return this.findOne(id);
  }

  // Eliminar un miembro del staff
  async delete(id: string): Promise<void> {
    await this.staffRepository.delete({ id_staff: +id });
  }
}


