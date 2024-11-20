import { Injectable } from '@nestjs/common';
import { StaffService } from '../../services/staff/staff.service';
import { StaffEntity } from '../../../domain/entities/staff/staff.entity';

@Injectable()
export class FindStaff {
  constructor(private readonly staffService: StaffService) {}

  async execute(uuid: string): Promise<StaffEntity> {
    return await this.staffService.findOneStaff(uuid);
  }
}
