import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from '../entities/Staff/staff.entity';
import { CreateStaffDto } from '../dto/staff/create-staff.dto';
import { UpdateStaffDto } from '../dto/staff/update-staff.dto';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
  ) {}

  findAll(): Promise<Staff[]> {
    return this.staffRepository.find();
  }

  findOne(id: number): Promise<Staff> {
    return this.staffRepository.findOneBy({ id_staff: id });
  }

  create(createStaffDto: CreateStaffDto): Promise<Staff> {
    const staff = this.staffRepository.create(createStaffDto);
    return this.staffRepository.save(staff);
  }

  async update(id: number, updateStaffDto: UpdateStaffDto): Promise<Staff> {
    await this.staffRepository.update(id, updateStaffDto);
    return this.staffRepository.findOneBy({ id_staff: id });
  }

  async delete(id: number): Promise<void> {
    await this.staffRepository.delete(id);
  }
}
