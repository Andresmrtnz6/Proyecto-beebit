import { ApiProperty } from '@nestjs/swagger';

export class FindEmpleadoDto {
  @ApiProperty({ description: 'UUID del empleado a encontrar', example: 'uuid-v4' })
  uuid: string;
}
