import { ApiProperty } from '@nestjs/swagger';

export class LoginEmpleadoDto {
  @ApiProperty({ description: 'Nombre de usuario o correo del empleado', example: 'admin123 o admin@example.com' })
  usernameOrEmail: string;

  @ApiProperty({ description: 'Contraseña del empleado', example: 'securepassword' })
  password: string;
}
