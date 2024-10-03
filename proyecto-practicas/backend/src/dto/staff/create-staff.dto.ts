import { IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Añadido para Swagger

export class CreateStaffDto {
  @ApiProperty({ example: '12345678A', description: 'DNI del miembro del personal' })
  @IsString()
  dni: string;

  @ApiProperty({ example: 'Juan', description: 'Nombre del miembro del personal' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Pérez', description: 'Apellidos del miembro del personal' })
  @IsString()
  apellidos: string;

  @ApiProperty({ example: '666777888', description: 'Teléfono del miembro del personal' })
  @IsString()
  telefono: string;

  @ApiProperty({ example: '1990-05-20', description: 'Fecha de nacimiento del miembro del personal' })
  @IsDate()
  fecha_nacimiento: Date;
}
