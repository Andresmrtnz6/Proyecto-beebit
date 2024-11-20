import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { StaffService } from './staff.service';
import { LoginStaffDto } from '../../../infrastructure/controllers/staff/dto/login_staff.dto';
import * as bcrypt from 'bcryptjs';
import { StaffEntity } from '../../../domain/entities/staff/staff.entity';




@Injectable()
export class AuthStaffService{

  constructor(
    private readonly staffService: StaffService,
    private readonly jwtService: JwtService,
  ) {}


  /**
   * Login para staff.
   * @param loginStaffDto-dto con el username/email y contraseña del staff.
   * @returns retorna un token JWT y los detalles del staff logueado.
   */


  async login(loginStaffDto:LoginStaffDto):Promise<{ token: string;staff:StaffEntity}>{

    const{usernameOrEmail,password}=loginStaffDto;


    //busaca al usuario por correo o username
    const staff=await this.staffService.findByUsernameOrEmail(usernameOrEmail);
    if(!staff){
      throw new HttpException('Usuario no encontrado', HttpStatus.UNAUTHORIZED);
    }


    //compara la contraseña que hay con la que esta guardada
    const isPasswordMatching=await bcrypt.compare(password, staff.password);
    if(!isPasswordMatching){
      throw new HttpException('Credenciales incorrectas', HttpStatus.UNAUTHORIZED);
    }

    //genera el payload del JsonWebToken
    const payload = { username: staff.username, sub: staff.uuid, role: 'staff' };
    const token = this.jwtService.sign(payload);


    //Devuelve el token con los datos del staff
    return { token, staff };


  }



}
