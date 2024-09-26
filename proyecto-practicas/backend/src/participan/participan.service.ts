import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Participan } from '../entities/Participan';

@Injectable()
export class ParticipanService {
  constructor(
    @InjectRepository(Participan)
    private readonly participanRepository: Repository<Participan>,
  ) {}

  // Asignar un miembro del staff a un proyecto
  async assignStaffToProject(
    proyectoId: string,
    staffId: string,
  ): Promise<Participan> {
    const nuevaParticipacion = this.participanRepository.create({
      proyecto: { id_proyecto: +proyectoId },
      staff: { id_staff: +staffId },
      fecha_participacion: new Date(),
    });
    return await this.participanRepository.save(nuevaParticipacion);
  }

  // Desasignar un miembro del staff de un proyecto
  async removeStaffFromProject(
    proyectoId: string,
    staffId: string,
  ): Promise<void> {
    await this.participanRepository.delete({
      proyecto: { id_proyecto: +proyectoId },
      staff: { id_staff: +staffId },
    });
  }
}
