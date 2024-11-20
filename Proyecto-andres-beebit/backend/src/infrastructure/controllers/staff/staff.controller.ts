import {Controller,Get,Post,Put,Delete,Body,Param,HttpCode,HttpStatus} from '@nestjs/common';
import { StaffService } from '../../../application/services/staff/staff.service';
import { CreateStaffDto } from './dto/create_staff.dto';
import { UpdateStaffDto } from './dto/update_staff.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { LoginStaffDto } from './dto/login_staff.dto';
import { AuthStaffService } from '../../../application/services/staff/auth.service';
import { StaffEntity } from '../../../domain/entities/staff/staff.entity';

@ApiTags('STAFF')
@Controller('staff')
export class StaffController {
  constructor(
    private readonly staffService: StaffService,
    private readonly authStaffService: AuthStaffService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Inicio de sesión para staff' })
  @ApiResponse({ status: 200, description: 'Inicio de sesión exitoso.' })
  @ApiResponse({ status: 401, description: 'Credenciales incorrectas.' })
  async login(
    @Body() loginStaffDto: LoginStaffDto,
  ): Promise<{ token: string; staff: StaffEntity }> {
    try {
      const result = await this.authStaffService.login(loginStaffDto);
      return { token: result.token, staff: result.staff };
    } catch (error) {
      throw error;
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crear un nuevo miembro del staff' })
  @ApiResponse({ status: 201, description: 'Staff creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  async createStaff(@Body() createStaffDto: CreateStaffDto) {
    try {
      const staff = await this.staffService.createStaff(createStaffDto);
      return { message: 'Staff creado exitosamente', staff };
    } catch (error) {
      throw error;
    }
  }

  @Put(':uuid')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Actualizar un miembro del staff existente' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID del staff' })
  @ApiResponse({ status: 200, description: 'Staff actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Staff no encontrado.' })
  async updateStaff(
    @Param('uuid') uuid: string,
    @Body() updateStaffDto: UpdateStaffDto,
  ) {
    try {
      const staff = await this.staffService.updateStaff(uuid, updateStaffDto);
      return { message: 'Staff actualizado exitosamente', staff };
    } catch (error) {
      throw error;
    }
  }

  @Get(':uuid')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtener un miembro del staff por su UUID' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID del staff' })
  @ApiResponse({ status: 200, description: 'Staff obtenido exitosamente.' })
  @ApiResponse({ status: 404, description: 'Staff no encontrado.' })
  async findStaff(@Param('uuid') uuid: string) {
    try {
      const staff = await this.staffService.findOneStaff(uuid);
      return { message: 'Staff encontrado', staff };
    } catch (error) {
      throw error;
    }
  }

  @Delete(':uuid')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Eliminar un miembro del staff por su UUID' })
  @ApiParam({ name: 'uuid', type: 'string', description: 'UUID del staff' })
  @ApiResponse({ status: 200, description: 'Staff eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Staff no encontrado.' })
  async deleteStaff(@Param('uuid') uuid: string) {
    try {
      await this.staffService.deleteStaff(uuid);
      return { message: 'Staff eliminado exitosamente' };
    } catch (error) {
      throw error;
    }
  }
}
