import { ApiProperty } from '@nestjs/swagger';

export class DeleteStaffDto {
  @ApiProperty({ description: 'UUID del staff a eliminar', example: 'uuid-v4' })
  uuid: string;
}
