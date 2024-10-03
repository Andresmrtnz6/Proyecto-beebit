import { IsString, IsDate, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProyectoDto {
  
  @ApiProperty({ example: 'Proyecto A', description: 'Nombre del proyecto' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Descripción detallada del proyecto A', description: 'Descripción del proyecto' })
  @IsString()
  descripcion: string;

  @ApiProperty({ example: '2024-01-01', description: 'Fecha de inicio del proyecto' })
  @IsDate()
  fecha_inicio: Date;

  @ApiProperty({ example: '2024-12-31', description: 'Fecha de finalización del proyecto' })
  @IsDate()
  fecha_fin: Date;

  @ApiProperty({ example: 50000, description: 'Presupuesto del proyecto' })
  @IsNumber()
  presupuesto: number;
}
