import { Injectable } from '@nestjs/common';
import { StaffService } from '../../services/staff/staff.service';
import { CreateStaffDto } from '../../../infrastructure/controllers/staff/dto/create_staff.dto';
import { StaffEntity } from '../../../domain/entities/staff/staff.entity';

@Injectable()
export class CreateStaff {
  constructor(private readonly staffService: StaffService) {}

  async execute(createStaffDto: CreateStaffDto): Promise<StaffEntity> {
    return await this.staffService.createStaff(createStaffDto);
  }
}
