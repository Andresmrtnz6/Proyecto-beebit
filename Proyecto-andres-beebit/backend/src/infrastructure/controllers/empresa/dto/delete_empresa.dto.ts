import { ApiProperty } from '@nestjs/swagger';

export class DeleteEmpresaDto {
  @ApiProperty({ description: 'UUID de la empresa a eliminar', example: 'uuid-v4' })
  uuid: string;
}
