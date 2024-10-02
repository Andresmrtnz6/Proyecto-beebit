import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { CreateProyectoDto } from '../dto/proyecto/create-proyecto.dto';
import { UpdateProyectoDto } from '../dto/proyecto/update-proyecto.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('proyectos')
@Controller('proyectos')
export class ProyectosController {
  constructor(private readonly proyectosService: ProyectosService) {}

  @Get()
  async getProyectos() {
    return await this.proyectosService.findAll();
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los proyectos' })
  @ApiResponse({ status: 200, description: 'Lista de proyectos obtenida con éxito.' })
  findAll() {
    return this.proyectosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un proyecto por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del proyecto.' })
  findOne(@Param('id') id: string) {
    return this.proyectosService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo proyecto' })
  @ApiResponse({ status: 201, description: 'Proyecto creado con éxito.' })
  create(@Body() createProyectoDto: CreateProyectoDto) {
    return this.proyectosService.create(createProyectoDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un proyecto por ID' })
  @ApiResponse({ status: 200, description: 'Proyecto actualizado con éxito.' })
  update(@Param('id') id: string, @Body() updateProyectoDto: UpdateProyectoDto) {
    return this.proyectosService.update(+id, updateProyectoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un proyecto por ID' })
  @ApiResponse({ status: 200, description: 'Proyecto eliminado con éxito.' })
  delete(@Param('id') id: string) {
    return this.proyectosService.delete(+id);
  }
}
