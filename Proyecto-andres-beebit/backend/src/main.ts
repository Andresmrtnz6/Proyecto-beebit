import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap(){

  const app=await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: 'http://localhost:3000', 
    credentials: true,
  });

  const config=new DocumentBuilder()
    .setTitle('Gestor de Proyectos Andrés API')
    .setDescription('API para gestionar proyectos, empresas, empleados y tareas')
    .setVersion('7.7.7')
    .addTag('EMPRESAS')
    .addTag('EMPLEADOS')
    .addTag('PROYECTOS')
    .addTag('TAREAS')
    .addTag('STAFF')
    .build();

  const document=SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);

  await app.listen(4000);

}

bootstrap();
