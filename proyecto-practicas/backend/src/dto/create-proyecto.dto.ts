import { ApiProperty } from '@nestjs/swagger';

export class CreateProyectoDto {
  @ApiProperty({ description: 'Nombre del proyecto' })
  nombre: string;

  @ApiProperty({ description: 'Descripción del proyecto' })
  descripcion: string;

  @ApiProperty({
    description: 'Fecha de inicio del proyecto',
    example: '2023-01-01',
  })
  fecha_inicio: Date;

  @ApiProperty({
    description: 'Fecha de finalización del proyecto',
    example: '2023-12-31',
  })
  fecha_fin: Date;

  @ApiProperty({ description: 'Presupuesto del proyecto', example: 5000 })
  presupuesto: number;
}
