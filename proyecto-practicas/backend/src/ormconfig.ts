import { DataSource } from 'typeorm';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'bdbeebit',         
  password: 'esp93w5438',      
  database: 'beebit',           
  synchronize: true,
  logging: true,
  entities: [User],
  migrations: [],
  subscribers: [],
});
