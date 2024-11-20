import { ApiProperty } from '@nestjs/swagger';

export class CreateTareaDto {
  @ApiProperty({ description: 'Nombre de la tarea', example: 'Tarea 1' })
  nombre: string;

  @ApiProperty({ description: 'Descripción de la tarea', example: 'Descripción de la tarea 1' })
  descripcion: string;

  @ApiProperty({ description: 'Fecha de inicio de la tarea', example: '2023-10-05' })
  fecha_inicio: Date;

  @ApiProperty({ description: 'Fecha de finalización de la tarea', example: '2023-10-15' })
  fecha_fin: Date;

  @ApiProperty({ description: 'UUID del proyecto al que pertenece la tarea', example: 'uuid-v4' })
  proyecto_id: string;

  @ApiProperty({ description: 'UUID del empleado asignado a la tarea', example: 'uuid-v4' })
  empleado_id: string;
}
