import { IsDate, IsInt } from 'class-validator';

export class CreateParticipanDto {
  @IsInt()
  id_proyecto: number;

  @IsInt()
  id_staff: number;

  @IsDate()
  fecha_participacion: Date;
}
