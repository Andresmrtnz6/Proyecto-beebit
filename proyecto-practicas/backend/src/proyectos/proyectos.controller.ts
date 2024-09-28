import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { CreateProyectoDto } from '../dto/create-proyecto.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('proyectos')
@Controller('proyectos')
export class ProyectosController {
  constructor(private readonly proyectosService: ProyectosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo proyecto' })
  @ApiResponse({ status: 201, description: 'El proyecto ha sido creado.' })
  createProyecto(@Body() createProyectoDto: CreateProyectoDto) {
    return this.proyectosService.create(createProyectoDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un proyecto por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del proyecto.' })
  getProyecto(@Param('id') id: string) {
    return this.proyectosService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un proyecto por ID' })
  @ApiResponse({ status: 200, description: 'El proyecto ha sido actualizado.' })
  updateProyecto(
    @Param('id') id: string,
    @Body() updateProyectoDto: CreateProyectoDto,
  ) {
    return this.proyectosService.update(id, updateProyectoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un proyecto por ID' })
  @ApiResponse({ status: 200, description: 'El proyecto ha sido eliminado.' })
  deleteProyecto(@Param('id') id: string) {
    return this.proyectosService.delete(id);
  }

  @Get()
  findAll() {
    return this.proyectosService.findAll();  
  }

}




