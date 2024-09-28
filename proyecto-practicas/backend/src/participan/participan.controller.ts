import { Controller, Post, Delete, Param, Body } from '@nestjs/common';
import { ParticipanService } from './participan.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyecto } from '../entities/Proyecto';
import { Repository } from 'typeorm';

@ApiTags('participan')
@Controller('participan')
export class ParticipanController {
  constructor(private readonly participanService: ParticipanService) {}

  @Post('proyectos/:proyectoId/asignar-staff')
  @ApiOperation({ summary: 'Asignar staff a un proyecto' })
  @ApiResponse({ status: 201, description: 'Staff asignado al proyecto.' })
  assignStaff(
    @Param('proyectoId') proyectoId: string,
    @Body('staffId') staffId: string,
  ) {
    return this.participanService.assignStaffToProject(proyectoId, staffId);
  }

  @Delete('proyectos/:proyectoId/desasignar-staff')
  @ApiOperation({ summary: 'Eliminar staff de un proyecto' })
  @ApiResponse({ status: 200, description: 'Staff desasignado del proyecto.' })
  unassignStaff(
    @Param('proyectoId') proyectoId: string,
    @Body('staffId') staffId: string,
  ) {
    return this.participanService.removeStaffFromProject(proyectoId, staffId);
  }
  
}


@Injectable()
export class ProyectosService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,
  ) {}

  async findAll(): Promise<Proyecto[]> {
    return this.proyectoRepository.find();
  }
}