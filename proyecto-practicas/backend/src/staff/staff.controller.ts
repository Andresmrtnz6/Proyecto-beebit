import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StaffService } from './staff.service';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post()
  createStaff(@Body() createStaffDto: any) {
    return this.staffService.create(createStaffDto);
  }

  @Get(':id')
  getStaff(@Param('id') id: string) {
    return this.staffService.findOne(id);
  }

  @Put(':id')
  updateStaff(@Param('id') id: string, @Body() updateStaffDto: any) {
    return this.staffService.update(id, updateStaffDto);
  }

  @Delete(':id')
  deleteStaff(@Param('id') id: string) {
    return this.staffService.delete(id);
  }
}
