import { ApiProperty } from '@nestjs/swagger';

export class DeleteProyectoDto {
  @ApiProperty({ description: 'UUID del proyecto a eliminar', example: 'uuid-v4' })
  uuid: string;
}
