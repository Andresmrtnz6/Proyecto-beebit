import { Injectable } from '@nestjs/common';
import { AuthStaffService } from '../../services/staff/auth.service';
import { LoginStaffDto } from '../../../infrastructure/controllers/staff/dto/login_staff.dto';
import { StaffEntity } from '../../../domain/entities/staff/staff.entity';

@Injectable()
export class LoginStaff {
  constructor(private readonly authService: AuthStaffService) {}

  async execute(loginStaffDto: LoginStaffDto): Promise<{ token: string; staff: StaffEntity }> {
    return await this.authService.login(loginStaffDto);
  }
}
