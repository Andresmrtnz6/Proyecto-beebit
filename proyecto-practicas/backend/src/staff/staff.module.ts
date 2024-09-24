import { Module } from '@nestjs/common';
import { StaffController } from './staff.controller';  // Ruta correcta
import { StaffService } from './staff.service';  // Ruta correcta
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from '../entities/Staff';

@Module({
  imports: [TypeOrmModule.forFeature([Staff])],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule {}
