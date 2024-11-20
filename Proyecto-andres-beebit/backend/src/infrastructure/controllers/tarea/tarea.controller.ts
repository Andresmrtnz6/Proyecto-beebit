import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TareaService } from '../../../application/services/tarea/tarea.service';
import { CreateTareaDto } from './dto/create_tarea.dto';
import { UpdateTareaDto } from './dto/update_tarea.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('TAREAS')
@Controller('tarea')
export class TareaController {
  constructor(private readonly tareaService: TareaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva tarea' })
  @ApiResponse({ status: 201, description: 'Tarea creada exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  createTarea(@Body() createTareaDto: CreateTareaDto) {
    return this.tareaService.createTarea(createTareaDto);
  }

  @Put(':uuid')
  @ApiOperation({ summary: 'Actualizar una tarea existente' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID de la tarea' })
  @ApiResponse({ status: 200, description: 'Tarea actualizada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada.' })
  updateTarea(@Param('uuid') uuid: string, @Body() updateTareaDto: UpdateTareaDto) {
    return this.tareaService.updateTarea(uuid, updateTareaDto);
  }

  @Get(':uuid')
  @ApiOperation({ summary: 'Obtener una tarea por su UUID' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID de la tarea' })
  @ApiResponse({ status: 200, description: 'Tarea obtenida exitosamente.' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada.' })
  findTarea(@Param('uuid') uuid: string) {
    return this.tareaService.findOneTarea(uuid);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Eliminar una tarea por su UUID' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID de la tarea' })
  @ApiResponse({ status: 200, description: 'Tarea eliminada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada.' })
  deleteTarea(@Param('uuid') uuid: string) {
    return this.tareaService.deleteTarea(uuid);
  }
}
