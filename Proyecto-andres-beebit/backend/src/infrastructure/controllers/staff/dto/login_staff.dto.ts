import { ApiProperty } from '@nestjs/swagger';

export class LoginStaffDto {
  @ApiProperty({ description: 'Nombre de usuario o correo del staff', example: 'admin123 o admin@empresa.com' })
  usernameOrEmail: string;

  @ApiProperty({ description: 'Contraseña del staff', example: 'securepassword' })
  password: string;
}
