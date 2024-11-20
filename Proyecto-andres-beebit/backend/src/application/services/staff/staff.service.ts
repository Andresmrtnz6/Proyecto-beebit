import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StaffEntity } from '../../../domain/entities/staff/staff.entity';
import { CreateStaffDto } from '../../../infrastructure/controllers/staff/dto/create_staff.dto';
import { UpdateStaffDto } from '../../../infrastructure/controllers/staff/dto/update_staff.dto';
import { EmpresaEntity } from '../../../domain/entities/empresa/empresa.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginStaffDto } from '../../../infrastructure/controllers/staff/dto/login_staff.dto';
import { Repository } from 'typeorm';





@Injectable()
export class StaffService{


  constructor(
    @InjectRepository(StaffEntity)
    private readonly staffRepository:Repository<StaffEntity>,
    
    @InjectRepository(EmpresaEntity)
    private readonly empresaRepository:Repository<EmpresaEntity>,
    
    private readonly jwtService:JwtService,
  ) {}



  //te crea un nuevo miembro del staff
  async createStaff(createStaffDto:CreateStaffDto):Promise<StaffEntity>{

    const empresa=await this.empresaRepository.findOne({
      where:{uuid:createStaffDto.empresa_id},
    });


    if(!empresa){
      throw new NotFoundException(`Empresa con UUID ${createStaffDto.empresa_id} no encontrada`);
    }

    const hashedPassword = await bcrypt.hash(createStaffDto.password, 10); 

    const staff=this.staffRepository.create({
      ...createStaffDto,
      password:hashedPassword,
      empresa,
    });


    return this.staffRepository.save(staff);


  }

  //Te busca un miembro del staff por username o correo
  async findByUsernameOrEmail(usernameOrEmail:string):Promise<StaffEntity | undefined>{

    return this.staffRepository
      .createQueryBuilder('staff')
      .where('staff.username=:usernameOrEmail',{usernameOrEmail})
      .orWhere('staff.email=:usernameOrEmail',{usernameOrEmail})
      .getOne();
  }


  //login para elstaff
  async loginStaff(loginStaffDto:LoginStaffDto):Promise<{token:string;staff:StaffEntity}>{

    const{ usernameOrEmail,password}=loginStaffDto;
    const staff=await this.findByUsernameOrEmail(usernameOrEmail);


    if(!staff || !(await bcrypt.compare(password,staff.password))){
      throw new HttpException('Credenciales inválidas',HttpStatus.UNAUTHORIZED);
    }

    const payload={username:staff.username,sub:staff.uuid,role:'staff'};
    const token=this.jwtService.sign(payload);

    return { token,staff};

  }

  //obtiene todos los miembros del staff
  async findAllStaff():Promise<StaffEntity[]>{

    return this.staffRepository.find({
      relations:['empresa'],
    });

  }

  //obtiene un miembro dle staff por uuid
  async findOneStaff(uuid: string): Promise<StaffEntity>{

    const staff=await this.staffRepository.findOne({
      where:{uuid},
      relations:['empresa'],
    });

    
    if(!staff){
      throw new NotFoundException(`Staff con UUID ${uuid} no encontrado`);
    }

    return staff;
  }

  //actualiza un miembro del staff
  async updateStaff(uuid:string,updateStaffDto:UpdateStaffDto):Promise<StaffEntity>{
    const staff=await this.findOneStaff(uuid);

    if(updateStaffDto.empresa_id){
      const empresa=await this.empresaRepository.findOne({
        where:{uuid:updateStaffDto.empresa_id},
      });

      if(!empresa){
        throw new NotFoundException(`Empresa con UUID ${updateStaffDto.empresa_id} no encontrada`);
      }

      staff.empresa=empresa;

    }

    if(updateStaffDto.password){
      staff.password=await bcrypt.hash(updateStaffDto.password, 10);
    }


    Object.assign(staff,updateStaffDto);
    return this.staffRepository.save(staff);

  }

  //elimina un miembro del staff
  async deleteStaff(uuid:string):Promise<void>{

    const staff=await this.findOneStaff(uuid);
    await this.staffRepository.remove(staff);

  }


  
}
