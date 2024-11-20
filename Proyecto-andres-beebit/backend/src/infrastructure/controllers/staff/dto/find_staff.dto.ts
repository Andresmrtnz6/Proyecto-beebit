import { ApiProperty } from '@nestjs/swagger';

export class FindStaffDto {
  @ApiProperty({ description: 'UUID del staff a encontrar', example: 'uuid-v4' })
  uuid: string;
}
