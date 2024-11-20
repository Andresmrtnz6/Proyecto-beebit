import { Injectable } from '@nestjs/common';
import { StaffService } from '../../services/staff/staff.service';
import { UpdateStaffDto } from '../../../infrastructure/controllers/staff/dto/update_staff.dto';
import { StaffEntity } from '../../../domain/entities/staff/staff.entity';

@Injectable()
export class UpdateStaff {
  constructor(private readonly staffService: StaffService) {}

  async execute(uuid: string, updateStaffDto: UpdateStaffDto): Promise<StaffEntity> {
    return await this.staffService.updateStaff(uuid, updateStaffDto);
  }
}
