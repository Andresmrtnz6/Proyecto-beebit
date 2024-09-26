import { Module } from '@nestjs/common';
import { ParticipanController } from '../participan/participan.controller';
import { ParticipanService } from '../participan/participan.service';
import { ProyectosController } from './proyectos.controller';
import { ProyectosService } from './proyectos.service';
import { Proyecto } from '../entities/Proyecto';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Proyecto])],
  controllers: [ProyectosController],
  providers: [ProyectosService],
})
export class ProyectosModule {}
