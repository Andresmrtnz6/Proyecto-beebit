import { ApiProperty } from '@nestjs/swagger';

export class CreateParticipanDto {
  @ApiProperty({ description: 'ID del proyecto al que se asigna el staff' })
  id_proyecto: string;

  @ApiProperty({ description: 'ID del miembro del staff asignado' })
  id_staff: string;

  @ApiProperty({ description: 'Fecha de participación en el proyecto', example: '2023-01-01' })
  fecha_participacion: Date;
}
