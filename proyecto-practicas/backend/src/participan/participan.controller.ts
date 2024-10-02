import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ParticipanService } from './paticipan.service';
import { CreateParticipanDto } from '../dto/participan/create-participan.dto';
import { UpdateParticipanDto } from '../dto/participan/update-participan.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('participan')
@Controller('participan')
export class ParticipanController {
  constructor(private readonly participanService: ParticipanService) {}

  @Get()
  async getParticipan() {
    return this.participanService.findAll();
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las relaciones entre proyectos y personal' })
  @ApiResponse({ status: 200, description: 'Relaciones obtenidas con éxito.' })
  findAll() {
    return this.participanService.findAll();
  }

  @Get(':id_proyecto/:id_staff')
  @ApiOperation({ summary: 'Obtener una relación específica entre proyecto y staff' })
  @ApiResponse({ status: 200, description: 'Relación obtenida con éxito.' })
  findOne(@Param('id_proyecto') id_proyecto: string, @Param('id_staff') id_staff: string) {
    return this.participanService.findOne(+id_proyecto, +id_staff);
  }

  @Post()
  @ApiOperation({ summary: 'Asignar un staff a un proyecto' })
  @ApiResponse({ status: 201, description: 'Relación creada con éxito.' })
  create(@Body() createParticipanDto: CreateParticipanDto) {
    return this.participanService.create(createParticipanDto);
  }

  @Put(':id_proyecto/:id_staff')
  @ApiOperation({ summary: 'Actualizar la relación entre un proyecto y un staff' })
  @ApiResponse({ status: 200, description: 'Relación actualizada con éxito.' })
  update(
    @Param('id_proyecto') id_proyecto: string,
    @Param('id_staff') id_staff: string,
    @Body() updateParticipanDto: UpdateParticipanDto,
  ) {
    return this.participanService.update(+id_proyecto, +id_staff, updateParticipanDto);
  }

  @Delete(':id_proyecto/:id_staff')
  @ApiOperation({ summary: 'Eliminar la relación entre un proyecto y un staff' })
  @ApiResponse({ status: 200, description: 'Relación eliminada con éxito.' })
  delete(@Param('id_proyecto') id_proyecto: string, @Param('id_staff') id_staff: string) {
    return this.participanService.delete(+id_proyecto, +id_staff);
  }
}
