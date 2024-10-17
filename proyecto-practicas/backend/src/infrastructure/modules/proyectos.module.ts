import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoController } from '../controllers/proyectos.controller';
import { ProyectoService } from '../../application/proyectos/proyecto.service';
import { TypeORMProyectoRepository } from '../repositories/TypeORMProyectoRepository';
import { ProyectoEntity } from '../entities/ProyectoEntity'; // La entidad de TypeORM

@Module({
  imports: [TypeOrmModule.forFeature([ProyectoEntity])],
  controllers: [ProyectoController],
  providers: [ProyectoService, { provide: 'ProyectoRepository', useClass: TypeORMProyectoRepository }],
})
export class ProyectoModule {}
