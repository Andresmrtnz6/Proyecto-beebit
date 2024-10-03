import { IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Añadido para Swagger

export class CreateParticipanDto {
  @ApiProperty({ example: 1, description: 'ID del proyecto' })
  @IsInt()
  id_proyecto: number;

  @ApiProperty({ example: 1, description: 'ID del miembro del staff' })
  @IsInt()
  id_staff: number;

  @ApiProperty({ example: '2023-01-15', description: 'Fecha de participación' })
  @IsDate()
  fecha_participacion: Date;
}
