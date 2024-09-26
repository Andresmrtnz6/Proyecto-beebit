import { ApiProperty } from '@nestjs/swagger';

export class CreateStaffDto {
  @ApiProperty({ description: 'Nombre del staff' })
  nombre: string;

  @ApiProperty({ description: 'Apellidos del staff' })
  apellidos: string;

  @ApiProperty({ description: 'DNI del staff' })
  dni: string;

  @ApiProperty({ description: 'Teléfono del staff' })
  telefono: string;

  @ApiProperty({
    description: 'Fecha de nacimiento del staff',
    example: '1980-01-01',
  })
  fecha_nacimiento: Date;
}
