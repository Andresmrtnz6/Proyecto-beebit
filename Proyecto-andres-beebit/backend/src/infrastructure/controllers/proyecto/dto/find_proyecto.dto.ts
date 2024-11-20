import { ApiProperty } from '@nestjs/swagger';

export class FindProyectoDto {
  @ApiProperty({ description: 'UUID del proyecto a encontrar', example: 'uuid-v4' })
  uuid: string;
}
