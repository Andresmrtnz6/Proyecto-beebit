import { IsString, IsDate, IsNumber } from 'class-validator';

export class CreateProyectoDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsDate()
  fecha_inicio: Date;

  @IsDate()
  fecha_fin: Date;

  @IsNumber()
  presupuesto: number;
}
