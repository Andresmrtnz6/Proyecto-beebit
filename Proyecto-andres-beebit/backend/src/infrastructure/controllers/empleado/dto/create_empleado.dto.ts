import { ApiProperty } from '@nestjs/swagger';

export class CreateEmpleadoDto {
  @ApiProperty({ description: 'Nombre del empleado', example: 'Juan' })
  nombre: string;

  @ApiProperty({ description: 'Apellidos del empleado', example: 'Pérez' })
  apellidos: string;

  @ApiProperty({ description: 'Email del empleado', example: 'juan.perez@empresa.com' })
  email: string;

  @ApiProperty({ description: 'Teléfono del empleado', example: '912345678' })
  telefono: string;

  @ApiProperty({ description: 'Fecha de contratación del empleado', example: '2023-10-01' })
  fechacontratacion: Date;

  @ApiProperty({ description: 'Contraseña del empleado', example: 'password123' })
  password: string;

  @ApiProperty({ description: 'Nombre de usuario del empleado', example: 'juanperez' })
  username: string;

  @ApiProperty({ description: 'UUID de la empresa a la que pertenece el empleado', example: 'uuid-v4' })
  empresa_id: string;
}
