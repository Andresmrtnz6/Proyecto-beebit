import { IsString, IsDate } from 'class-validator';

export class CreateStaffDto {
  @IsString()
  dni: string;

  @IsString()
  nombre: string;

  @IsString()
  apellidos: string;

  @IsString()
  telefono: string;

  @IsDate()
  fecha_nacimiento: Date;
}
