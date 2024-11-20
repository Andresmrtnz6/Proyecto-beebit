import { ApiProperty } from '@nestjs/swagger';

export class DeleteTareaDto {
  @ApiProperty({ description: 'UUID de la tarea a eliminar', example: 'uuid-v4' })
  uuid: string;
}
