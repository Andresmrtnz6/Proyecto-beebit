import { ApiProperty } from '@nestjs/swagger';

export class CreateProyectoDto {
  @ApiProperty({ description: 'Nombre del proyecto', example: 'Proyecto A' })
  nombre: string;

  @ApiProperty({ description: 'Descripción del proyecto', example: 'Descripción del proyecto A' })
  descripcion: string;

  @ApiProperty({ description: 'Fecha de inicio del proyecto', example: '2023-10-01' })
  fecha_inicio: Date;

  @ApiProperty({ description: 'Fecha de finalización del proyecto', example: '2023-12-31' })
  fecha_fin: Date;

  @ApiProperty({ description: 'Presupuesto del proyecto', example: 50000 })
  presupuesto: number;

  @ApiProperty({ description: 'Estado del proyecto', example: 'activo' })
  estado: string;

  @ApiProperty({ description: 'UUID de la empresa que gestiona el proyecto', example: 'uuid-v4' })
  empresa_id: string;
}
