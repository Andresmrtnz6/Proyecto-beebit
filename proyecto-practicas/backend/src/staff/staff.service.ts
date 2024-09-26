import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from '../entities/Staff';
import { CreateStaffDto } from 'src/dto/create-staff.dto';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>,
  ) {}

  async create(nuevoStaff: CreateStaffDto): Promise<Staff> {
    const staffEntity = this.staffRepository.create(nuevoStaff);
    return await this.staffRepository.save(staffEntity);
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


