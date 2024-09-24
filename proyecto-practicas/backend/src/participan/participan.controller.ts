import { Controller, Post, Delete, Param, Body } from '@nestjs/common';
import { ParticipanService } from './participan.service';

@Controller('participan')
export class ParticipanController {
  constructor(private readonly participanService: ParticipanService) {}

  @Post('proyectos/:proyectoId/asignar-staff')
  assignStaff(
    @Param('proyectoId') proyectoId: string, 
    @Body('staffId') staffId: string
  ) {
    return this.participanService.assignStaffToProject(proyectoId, staffId);
  }

  @Delete('proyectos/:proyectoId/desasignar-staff')
  unassignStaff(
    @Param('proyectoId') proyectoId: string, 
    @Body('staffId') staffId: string
  ) {
    return this.participanService.removeStaffFromProject(proyectoId, staffId);
  }
}
