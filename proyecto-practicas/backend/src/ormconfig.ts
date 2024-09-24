import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Proyecto } from './entities/Proyecto';
import { Staff } from './entities/Staff';
import { Participan } from './entities/Participan';
import { DataSource } from 'typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db',  
  port: 5432,
  username: 'bdbeebit',
  password: 'esp93w5438',
  database: 'beebit',
  entities: [Proyecto, Staff, Participan],
  synchronize: true,  
};
