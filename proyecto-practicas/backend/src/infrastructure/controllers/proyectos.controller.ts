import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProyectosService } from '../application/proyectos/proyectos.service';
import { CreateProyectoDto } from '../dto/proyecto/create-proyecto.dto';
import { UpdateProyectoDto } from '../dto/proyecto/update-proyecto.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('PROYECTOS')
@Controller('api/proyectos')
export class ProyectosController {
  constructor(private readonly proyectosService: ProyectosService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los proyectos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de proyectos obtenida con éxito.',
    schema: {
      example: [
        {
          id: 1,
          nombre: 'Proyecto A',
          descripcion: 'Descripción del proyecto A',
          fecha_inicio: '2024-01-01',
          fecha_fin: '2024-12-31',
          presupuesto: 50000,
        },
      ],
    },
  })
  async getProyectos() {
    return await this.proyectosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un proyecto por ID' })
  @ApiResponse({
    status: 200,
    description: 'Detalles del proyecto obtenidos con éxito.',
    schema: {
      example: {
        id: 1,
        nombre: 'Proyecto A',
        descripcion: 'Descripción detallada del proyecto A',
        fecha_inicio: '2024-01-01',
        fecha_fin: '2024-12-31',
        presupuesto: 50000,
      },
    },
  })
  async getProyecto(@Param('id') id: string) {
    return this.proyectosService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo proyecto' })
  @ApiBody({
    description: 'Datos necesarios para crear un proyecto',
    schema: {
      example: {
        nombre: 'Proyecto B',
        descripcion: 'Descripción del proyecto B',
        fecha_inicio: '2024-02-01',
        fecha_fin: '2024-11-30',
        presupuesto: 30000,
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Proyecto creado con éxito.',
  })
  async createProyecto(@Body() createProyectoDto: CreateProyectoDto) {
    return this.proyectosService.create(createProyectoDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un proyecto existente' })
  @ApiResponse({
    status: 200,
    description: 'Proyecto actualizado con éxito.',
    schema: {
      example: {
        id: 1,
        nombre: 'Proyecto A Modificado',
        descripcion: 'Descripción actualizada del proyecto A',
        fecha_inicio: '2024-01-01',
        fecha_fin: '2024-12-31',
        presupuesto: 55000
      }
    }
  })
  update(
    @Param('id') id: string,
    @Body() updateProyectoDto: UpdateProyectoDto,
  ) {
    return this.proyectosService.update(+id, updateProyectoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un proyecto existente' })
  @ApiResponse({
    status: 200,
    description: 'Proyecto eliminado con éxito.',
    schema: {
      example: {
        message: 'Proyecto eliminado con éxito.'
      }
    }
  })
  remove(@Param('id') id: string) {
    return this.proyectosService.delete(+id);
  }


}
