import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from '../../dto/staff/create-staff.dto';
import { UpdateStaffDto } from '../../dto/staff/update-staff.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger'; // Añadido para Swagger

@ApiTags('STAFF') 
@Controller('api/staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todo el personal' })
  @ApiResponse({ status: 200, description: 'Lista de personal obtenida con éxito.', schema: {
      example: [
        { id: 1, nombre: 'Juan Pérez', apellidos: 'Rodríguez', dni: '12345678A', telefono: '666777888', fecha_nacimiento: '1990-05-20' }
      ]
    }
  })
  findAll() {
    return this.staffService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un miembro del personal por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del miembro del personal.', schema: {
      example: { id: 1, nombre: 'Juan Pérez', apellidos: 'Rodríguez', dni: '12345678A', telefono: '666777888', fecha_nacimiento: '1990-05-20' }
    }
  })
  findOne(@Param('id') id: string) {
    return this.staffService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo miembro del personal' })
  @ApiBody({ description: 'Datos para crear un nuevo miembro del personal', schema: {
      example: { nombre: 'Juan', apellidos: 'Pérez', dni: '12345678A', telefono: '666777888', fecha_nacimiento: '1990-05-20' }
    }
  })
  @ApiResponse({ status: 201, description: 'Miembro del personal creado con éxito.' })
  create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un miembro del personal por ID' })
  @ApiBody({ description: 'Datos para actualizar el miembro del personal', schema: {
      example: { nombre: 'Juan', apellidos: 'Pérez', dni: '12345678A', telefono: '666777888', fecha_nacimiento: '1990-05-20' }
    }
  })
  @ApiResponse({ status: 200, description: 'Miembro del personal actualizado con éxito.' })
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.update(+id, updateStaffDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un miembro del personal por ID' })
  @ApiResponse({ status: 200, description: 'Miembro del personal eliminado con éxito.' })
  delete(@Param('id') id: string) {
    return this.staffService.delete(+id);
  }
}
