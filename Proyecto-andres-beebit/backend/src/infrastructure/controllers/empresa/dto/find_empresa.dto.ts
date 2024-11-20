import { ApiProperty } from '@nestjs/swagger';

export class FindEmpresaDto {
  @ApiProperty({ description: 'UUID de la empresa a encontrar', example: 'uuid-v4' })
  uuid: string;
}
