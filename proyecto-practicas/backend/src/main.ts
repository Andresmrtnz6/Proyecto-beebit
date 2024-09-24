import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { AppDataSource } from './ormconfig';


AppDataSource.initialize()
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((error) => console.log("Error al conectar a la base de datos", error));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3001);
}
bootstrap();

