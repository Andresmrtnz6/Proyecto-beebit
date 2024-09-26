import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './ormconfig';
import { ProyectosModule } from './proyectos/proyectos.module';
import { StaffModule } from './staff/staff.module';
import { ParticipanModule } from './participan/participan.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProyectosModule,
    StaffModule,
    ParticipanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
