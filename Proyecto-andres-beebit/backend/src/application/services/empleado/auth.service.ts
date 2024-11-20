import {Injectable,HttpException,HttpStatus} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {EmpleadoService} from './empleado.service';
import {LoginEmpleadoDto} from '../../../infrastructure/controllers/empleado/dto/login.dto';
import * as bcrypt from 'bcryptjs';



@Injectable()
export class AuthEmpleadoService{

  constructor(
    private readonly empleadoService:EmpleadoService,
    private readonly jwtService:JwtService
  ){}

  async login(loginEmpleadoDto:LoginEmpleadoDto):Promise<{access_token:string}>{
    const{usernameOrEmail,password}=loginEmpleadoDto;
    const empleado=await this.empleadoService.findByUsernameOrEmail(usernameOrEmail);



    if(!empleado){
      throw new HttpException('Usuario no encontrado',HttpStatus.UNAUTHORIZED);
    }

    const isPasswordMatching=await this.comparePasswords(password,empleado.password);

    if(!isPasswordMatching){
      throw new HttpException('Credenciales incorrectas',HttpStatus.UNAUTHORIZED);
    }


    const payload={username:empleado.username,sub:empleado.uuid};
    const token=this.jwtService.sign(payload);


    return{access_token:token}; // Devuelve el token con el formato correcto


  }

  private async comparePasswords(plainPassword:string,hashedPassword:string):Promise<boolean>{
    return bcrypt.compare(plainPassword,hashedPassword);
  }


}
