import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmpresaDto {
  @ApiProperty({ description: 'Nombre de la empresa', example: 'Empresa de Prueba' })
  nombre?: string;

  @ApiProperty({ description: 'Dirección de la empresa', example: '123 Calle Falsa' })
  direccion?: string;

  @ApiProperty({ description: 'Email de la empresa', example: 'empresa@correo.com' })
  email?: string;

  @ApiProperty({ description: 'Teléfono de la empresa', example: '912345678' })
  telefono?: string;
}
