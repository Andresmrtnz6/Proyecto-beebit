import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProyectoService } from '../../../application/services/proyecto/proyecto.service';
import { CreateProyectoDto } from './dto/create_proyecto.dto';
import { UpdateProyectoDto } from './dto/update_proyecto.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('PROYECTOS')
@Controller('proyecto')
export class ProyectoController {
  constructor(private readonly proyectoService: ProyectoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo proyecto' })
  @ApiResponse({ status: 201, description: 'Proyecto creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  createProyecto(@Body() createProyectoDto: CreateProyectoDto) {
    return this.proyectoService.createProyecto(createProyectoDto);
  }

  @Put(':uuid')
  @ApiOperation({ summary: 'Actualizar un proyecto existente' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID del proyecto' })
  @ApiResponse({ status: 200, description: 'Proyecto actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Proyecto no encontrado.' })
  updateProyecto(@Param('uuid') uuid: string, @Body() updateProyectoDto: UpdateProyectoDto) {
    return this.proyectoService.updateProyecto(uuid, updateProyectoDto);
  }

  @Get(':uuid')
  @ApiOperation({ summary: 'Obtener un proyecto por su UUID' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID del proyecto' })
  @ApiResponse({ status: 200, description: 'Proyecto obtenido exitosamente.' })
  @ApiResponse({ status: 404, description: 'Proyecto no encontrado.' })
  findProyecto(@Param('uuid') uuid: string) {
    return this.proyectoService.findOneProyecto(uuid);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Eliminar un proyecto por su UUID' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID del proyecto' })
  @ApiResponse({ status: 200, description: 'Proyecto eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Proyecto no encontrado.' })
  deleteProyecto(@Param('uuid') uuid: string) {
    return this.proyectoService.deleteProyecto(uuid);
  }
}
