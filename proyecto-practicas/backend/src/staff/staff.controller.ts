import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from '../dto/create-staff.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('staff')
@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post()
  @ApiOperation({ summary: 'Agregar un nuevo miembro del staff' })
  @ApiResponse({
    status: 201,
    description: 'El miembro del staff ha sido agregado.',
  })
  createStaff(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener detalles del staff por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del miembro del staff.' })
  getStaff(@Param('id') id: string) {
    return this.staffService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un miembro del staff por ID' })
  @ApiResponse({
    status: 200,
    description: 'El miembro del staff ha sido actualizado.',
  })
  updateStaff(@Param('id') id: string, @Body() updateStaffDto: CreateStaffDto) {
    return this.staffService.update(id, updateStaffDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un miembro del staff por ID' })
  @ApiResponse({
    status: 200,
    description: 'El miembro del staff ha sido eliminado.',
  })
  deleteStaff(@Param('id') id: string) {
    return this.staffService.delete(id);
  }
}
