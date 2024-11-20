import { ApiProperty } from '@nestjs/swagger';

export class FindTareaDto {
  @ApiProperty({ description: 'UUID de la tarea a encontrar', example: 'uuid-v4' })
  uuid: string;
}
