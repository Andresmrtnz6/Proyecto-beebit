import { ApiProperty } from '@nestjs/swagger';

export class CreateStaffDto {
  @ApiProperty({ description: 'Nombre del staff', example: 'Admin' })
  nombre: string;

  @ApiProperty({ description: 'Apellidos del staff', example: 'Doe' })
  apellidos: string;

  @ApiProperty({ description: 'Email del staff', example: 'admin@empresa.com' })
  email: string;

  @ApiProperty({ description: 'Teléfono del staff', example: '912345678' })
  telefono: string;

  @ApiProperty({ description: 'Puesto del staff', example: 'Manager' })
  puesto: string;

  @ApiProperty({ description: 'Nombre de usuario del staff', example: 'admin123' })
  username: string;

  @ApiProperty({ description: 'Contraseña del staff', example: 'securepassword' })
  password: string;

  @ApiProperty({ description: 'UUID de la empresa a la que pertenece el staff', example: 'uuid-v4' })
  empresa_id: string;
}
