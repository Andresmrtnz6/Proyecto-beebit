import { Injectable } from '@nestjs/common';
import { EmpleadoService } from '../../services/empleado/empleado.service';
import { LoginEmpleadoDto } from '../../../infrastructure/controllers/empleado/dto/login.dto'; // Asegúrate de que tengas un DTO para el login
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginEmpleado {
  constructor(
    private readonly empleadoService: EmpleadoService,
    private readonly jwtService: JwtService,  // Añadimos JwtService para generar el token
  ) {}

  // Cambia el método `execute` para gestionar el login en lugar de eliminar al empleado
  async execute(loginEmpleadoDto: LoginEmpleadoDto): Promise<{ accessToken: string }> {
    const { usernameOrEmail, password } = loginEmpleadoDto;

    // Buscar al empleado por username o email
    const empleado = await this.empleadoService.findByUsernameOrEmail(usernameOrEmail);

    if (!empleado) {
      throw new Error('Usuario no encontrado');
    }

    // Verificar la contraseña
    const isPasswordMatching = await this.empleadoService.comparePasswords(password, empleado.password);
    if (!isPasswordMatching) {
      throw new Error('Credenciales incorrectas');
    }

    // Generar token JWT
    const payload = { username: empleado.username, sub: empleado.uuid };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
