import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EmpresaService } from '../../../application/services/empresa/empresa.service';
import { CreateEmpresaDto } from './dto/create_empresa.dto';
import { UpdateEmpresaDto } from './dto/update_empresa.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('EMPRESAS')
@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva empresa' })
  @ApiResponse({ status: 201, description: 'Empresa creada exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  createEmpresa(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresaService.createEmpresa(createEmpresaDto);
  }

  @Put(':uuid')
  @ApiOperation({ summary: 'Actualizar una empresa existente' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID de la empresa' })
  @ApiResponse({ status: 200, description: 'Empresa actualizada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Empresa no encontrada.' })
  updateEmpresa(@Param('uuid') uuid: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.updateEmpresa(uuid, updateEmpresaDto);
  }

  @Get(':uuid')
  @ApiOperation({ summary: 'Obtener una empresa por su UUID' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID de la empresa' })
  @ApiResponse({ status: 200, description: 'Empresa obtenida exitosamente.' })
  @ApiResponse({ status: 404, description: 'Empresa no encontrada.' })
  findEmpresa(@Param('uuid') uuid: string) {
    return this.empresaService.findOneEmpresa(uuid);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Eliminar una empresa por su UUID' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID de la empresa' })
  @ApiResponse({ status: 200, description: 'Empresa eliminada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Empresa no encontrada.' })
  deleteEmpresa(@Param('uuid') uuid: string) {
    return this.empresaService.deleteEmpresa(uuid);
  }
}
