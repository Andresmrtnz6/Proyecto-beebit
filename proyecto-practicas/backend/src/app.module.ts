import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectosModule } from './Proyectos/proyectos.module';
import { StaffModule } from './Staff/staff.module';
import { ParticipanModule } from './Participan/participan.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'db',
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USER || 'beebit',
      password: process.env.DATABASE_PASSWORD || 'esp93w5438',
      database: process.env.DATABASE_NAME || 'beebit',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProyectosModule,
    StaffModule,
    ParticipanModule,
  ],
})
export class AppModule {}
