import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { CreateProyectoDto } from '../dto/create-proyecto.dto';


@Controller('proyectos')
export class ProyectosController {
  constructor(private readonly proyectosService: ProyectosService) {}

  @Post()
  createProyecto(@Body() createProyectoDto: CreateProyectoDto) {
    return this.proyectosService.create(createProyectoDto);
  }  

  @Get(':id')
  getProyecto(@Param('id') id: string) {
    return this.proyectosService.findOne(id);
  }

  @Put(':id')
  updateProyecto(@Param('id') id: string, @Body() updateProyectoDto: CreateProyectoDto) {
    return this.proyectosService.update(id, updateProyectoDto);
  }  

  @Delete(':id')
  deleteProyecto(@Param('id') id: string) {
    return this.proyectosService.delete(id);
  }


}
