import { ApiProperty } from '@nestjs/swagger';

export class DeleteEmpleadoDto {
  @ApiProperty({ description: 'UUID del empleado a eliminar', example: 'uuid-v4' })
  uuid: string;
}
