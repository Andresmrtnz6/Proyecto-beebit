import { Injectable } from '@nestjs/common';
import { StaffService } from '../../services/staff/staff.service';

@Injectable()
export class DeleteStaff {
  constructor(private readonly staffService: StaffService) {}

  async execute(uuid: string): Promise<void> {
    return await this.staffService.deleteStaff(uuid);
  }
}
