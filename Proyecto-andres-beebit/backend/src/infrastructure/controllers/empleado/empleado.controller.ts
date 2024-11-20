import {Controller,Get,Post,Put,Delete,Body,Param,HttpStatus,HttpCode} from '@nestjs/common';
import { EmpleadoService } from '../../../application/services/empleado/empleado.service';
import { CreateEmpleadoDto } from './dto/create_empleado.dto';
import { UpdateEmpleadoDto } from './dto/update_empleado.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { LoginEmpleadoDto } from './dto/login.dto';
import { AuthEmpleadoService } from '../../../application/services/empleado/auth.service';

@ApiTags('EMPLEADOS')
@Controller('empleado')
export class EmpleadoController {
  constructor(
    private readonly empleadoService: EmpleadoService,
    private readonly authEmpleadoService: AuthEmpleadoService, // Inyección del servicio de autenticación
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Inicio de sesión para empleados' })
  @ApiResponse({ status: 200, description: 'Inicio de sesión exitoso.' })
  @ApiResponse({ status: 401, description: 'Credenciales incorrectas.' })
  async login(@Body() loginEmpleadoDto: LoginEmpleadoDto): Promise<{ access_token: string }> {
    try {
      const { access_token } = await this.authEmpleadoService.login(loginEmpleadoDto); // Asegúrate de que el servicio devuelva este formato
      return { access_token }; // Devuelve el token en el formato esperado
    } catch (error) {
      throw error; // Deja que NestJS maneje las excepciones
    }
  }
  

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crear un nuevo empleado' })
  @ApiResponse({ status: 201, description: 'Empleado creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  async createEmpleado(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    try {
      const empleado = await this.empleadoService.createEmpleado(createEmpleadoDto);
      return { message: 'Empleado creado exitosamente', empleado };
    } catch (error) {
      throw error; // Deja que NestJS maneje las excepciones
    }
  }

  @Put(':uuid')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Actualizar un empleado existente' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID del empleado' })
  @ApiResponse({ status: 200, description: 'Empleado actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Empleado no encontrado.' })
  async updateEmpleado(
    @Param('uuid') uuid: string,
    @Body() updateEmpleadoDto: UpdateEmpleadoDto,
  ) {
    try {
      const empleado = await this.empleadoService.updateEmpleado(
        uuid,
        updateEmpleadoDto,
      );
      return { message: 'Empleado actualizado exitosamente', empleado };
    } catch (error) {
      throw error;
    }
  }

  @Get(':uuid')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtener un empleado por su UUID' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID del empleado' })
  @ApiResponse({ status: 200, description: 'Empleado obtenido exitosamente.' })
  @ApiResponse({ status: 404, description: 'Empleado no encontrado.' })
  async findEmpleado(@Param('uuid') uuid: string) {
    try {
      const empleado = await this.empleadoService.findEmpleadoByUuid(uuid);
      return { message: 'Empleado encontrado', empleado };
    } catch (error) {
      throw error;
    }
  }

  @Delete(':uuid')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Eliminar un empleado por su UUID' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID del empleado' })
  @ApiResponse({ status: 200, description: 'Empleado eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Empleado no encontrado.' })
  async deleteEmpleado(@Param('uuid') uuid: string) {
    try {
      await this.empleadoService.deleteEmpleado(uuid);
      return { message: 'Empleado eliminado exitosamente' };
    } catch (error) {
      throw error;
    }
  }
}
