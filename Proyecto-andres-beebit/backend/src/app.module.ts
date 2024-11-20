import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Importación de controladores
import { EmpresaController } from './infrastructure/controllers/empresa/empresa.controller';
import { EmpleadoController } from './infrastructure/controllers/empleado/empleado.controller';
import { ProyectoController } from './infrastructure/controllers/proyecto/proyecto.controller';
import { TareaController } from './infrastructure/controllers/tarea/tarea.controller';
import { StaffController } from './infrastructure/controllers/staff/staff.controller';

// Importación de entidades
import { EmpresaEntity } from './domain/entities/empresa/empresa.entity';
import { EmpleadoEntity } from './domain/entities/empleado/empleado.entity';
import { ProyectoEntity } from './domain/entities/proyecto/proyecto.entity';
import { TareaEntity } from './domain/entities/tarea/tarea.entity';
import { StaffEntity } from './domain/entities/staff/staff.entity';

// Importación de servicios
import { EmpleadoService } from './application/services/empleado/empleado.service';
import { EmpresaService } from './application/services/empresa/empresa.service';
import { ProyectoService } from './application/services/proyecto/proyecto.service';
import { TareaService } from './application/services/tarea/tarea.service';
import { StaffService } from './application/services/staff/staff.service';

// Importación de casos de uso
import { CreateEmpleado } from './application/use_cases/empleado/create_empleado';
import { UpdateEmpleado } from './application/use_cases/empleado/update_empleado';
import { FindEmpleado } from './application/use_cases/empleado/find_empleado';
import { DeleteEmpleado } from './application/use_cases/empleado/delete_empleado';
import { LoginEmpleado } from './application/use_cases/empleado/login_empleado';

import { CreateStaff } from './application/use_cases/staff/create_staff';
import { UpdateStaff } from './application/use_cases/staff/update_staff';
import { FindStaff } from './application/use_cases/staff/find_staff';
import { DeleteStaff } from './application/use_cases/staff/delete_staff';
import { LoginStaff } from './application/use_cases/staff/login_staff';

import { CreateEmpresa } from './application/use_cases/empresa/create_empresa';
import { UpdateEmpresa } from './application/use_cases/empresa/update_empresa';
import { FindEmpresa } from './application/use_cases/empresa/find_empresa';
import { DeleteEmpresa } from './application/use_cases/empresa/delete_empresa';

import { CreateProyecto } from './application/use_cases/proyecto/create_proyecto';
import { UpdateProyecto } from './application/use_cases/proyecto/update_proyecto';
import { FindProyecto } from './application/use_cases/proyecto/find_proyecto';
import { DeleteProyecto } from './application/use_cases/proyecto/delete_proyecto';

import { CreateTarea } from './application/use_cases/tarea/create_tarea';
import { UpdateTarea } from './application/use_cases/tarea/update_tarea';
import { FindTarea } from './application/use_cases/tarea/find_tarea';
import { DeleteTarea } from './application/use_cases/tarea/delete_tarea';

// Importación de repositorios
import { EmpleadoRepository } from './infrastructure/repositories/empleado/empleado.repository';
import { StaffRepository } from './infrastructure/repositories/staff/staff.repository';
import { EmpresaRepository } from './infrastructure/repositories/empresa/empresa.repository';
import { ProyectoRepository } from './infrastructure/repositories/proyecto/proyecto.repository';
import { TareaRepository } from './infrastructure/repositories/tarea/tarea.repository';

import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthEmpleadoService } from './application/services/empleado/auth.service';
import { AuthStaffService } from './application/services/staff/auth.service';

@Module({

  imports:[

    JwtModule.register({
      secret: process.env.JWT_SECRET || 'mysecret',
      signOptions: { expiresIn: '60m' },
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'beebit',
      password: process.env.DB_PASSWORD || 'esp93w5438',
      database: process.env.DB_DATABASE || 'dbbeebit',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: ['./src/migrations/*.ts'],
      synchronize: false,
      logging: false,
    }),

    TypeOrmModule.forFeature([
      EmpresaEntity,
      EmpleadoEntity,
      ProyectoEntity,
      TareaEntity,
      StaffEntity,
      EmpleadoEntity,
      EmpresaEntity,
    ]),

  ],

  controllers:[
    AppController,
    EmpresaController,
    EmpleadoController,
    ProyectoController,
    TareaController,
    StaffController,
  ],

  providers:[
    AuthEmpleadoService,
    AuthStaffService,
    AppService,
    EmpleadoService,
    EmpresaService,
    ProyectoService,
    TareaService,
    StaffService,

    {
      provide:'EmpresaRepository',
      useFactory:(dataSource:DataSource) =>
        dataSource.getRepository(EmpresaEntity).extend(EmpresaRepository),
      inject: [DataSource],
    },

    {
      provide:'EmpleadoRepository',
      useFactory:(dataSource:DataSource) =>
        dataSource.getRepository(EmpleadoEntity).extend(EmpleadoRepository),
      inject:[DataSource],
    },

    {
      provide:'ProyectoRepository',
      useFactory:(dataSource:DataSource) =>
        dataSource.getRepository(ProyectoEntity).extend(ProyectoRepository),
      inject:[DataSource],
    },

    {
      provide:'TareaRepository',
      useFactory:(dataSource:DataSource) =>
        dataSource.getRepository(TareaEntity).extend(TareaRepository),
      inject:[DataSource],
    },

    {
      provide:'StaffRepository',
      useFactory:(dataSource:DataSource) =>
        dataSource.getRepository(StaffEntity).extend(StaffRepository),
      inject:[DataSource],
    },

    CreateEmpleado,
    UpdateEmpleado,
    FindEmpleado,
    DeleteEmpleado,
    LoginEmpleado,
    CreateStaff,
    UpdateStaff,
    FindStaff,
    DeleteStaff,
    LoginStaff,
    CreateEmpresa,
    UpdateEmpresa,
    FindEmpresa,
    DeleteEmpresa,
    CreateProyecto,
    UpdateProyecto,
    FindProyecto,
    DeleteProyecto,
    CreateTarea,
    UpdateTarea,
    FindTarea,
    DeleteTarea,
  ],
  
})

export class AppModule {}
