import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000', 
    methods: 'GET,POST,PUT,DELETE',  
    allowedHeaders: 'Content-Type,Authorization', 
  });

  const config = new DocumentBuilder()
    .setTitle('Beebit API')
    .setDescription('Documentación de la API para el sistema de gestión de proyectos de Andrés')
    .setVersion('0.1.2')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
