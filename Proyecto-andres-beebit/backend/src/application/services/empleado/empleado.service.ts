import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadoEntity } from '../../../domain/entities/empleado/empleado.entity';
import { EmpresaEntity } from '../../../domain/entities/empresa/empresa.entity';
import { CreateEmpleadoDto } from '../../../infrastructure/controllers/empleado/dto/create_empleado.dto';
import { UpdateEmpleadoDto } from '../../../infrastructure/controllers/empleado/dto/update_empleado.dto';
import * as bcrypt from 'bcryptjs';




@Injectable()
export class EmpleadoService{


  constructor(
    @InjectRepository(EmpleadoEntity)
    private readonly empleadoRepository:Repository<EmpleadoEntity>,

    @InjectRepository(EmpresaEntity)
    private readonly empresaRepository:Repository<EmpresaEntity>,
  ) {}



  /**
   * crea un nuevo empleado
   * @param createEmpleadoDto-dto para la crear un empleado
   * @returns el empleado creado
   */

  async createEmpleado(createEmpleadoDto:CreateEmpleadoDto):Promise<EmpleadoEntity>{
    const {empresa_id}=createEmpleadoDto;

    const empresa=await this.empresaRepository.findOneBy({uuid:empresa_id});
    if(!empresa){
      throw new NotFoundException(`Empresa con UUID ${empresa_id} no encontrada`);
    }


    const salt=await bcrypt.genSalt();
    const hashedPassword=await bcrypt.hash(createEmpleadoDto.password,salt);


    const empleado=this.empleadoRepository.create({

      ...createEmpleadoDto,
      password:hashedPassword,
      empresa, // asignacion de la empresa al empleado
    });


    return await this.empleadoRepository.save(empleado);


  }



  /**
   * Buscar empleado por UUID
   * @param uuid - Identificador único del empleado
   * @returns El empleado encontrado
   */


  async findEmpleadoByUuid(uuid:string):Promise<EmpleadoEntity>{
    const empleado=await this.empleadoRepository.findOne({
      where:{uuid},
      relations: ['empresa'], // Incluir la empresa relacionada
    });


    if(!empleado){

      throw new NotFoundException(`Empleado con UUID ${uuid} no encontrado`);
    }

    return empleado;

  }



  /**
   * Buscar empleado por username o email
   * @param usernameOrEmail - Nombre de usuario o correo electrónico
   * @returns El empleado encontrado o undefined
   */


  async findByUsernameOrEmail(usernameOrEmail:string):Promise<EmpleadoEntity|undefined>{

    return this.empleadoRepository

      .createQueryBuilder('empleado')
      .where('empleado.username=:usernameOrEmail',{ usernameOrEmail })
      .orWhere('empleado.email=:usernameOrEmail',{ usernameOrEmail })
      .getOne();

  }


  /**
   * Actualizar empleado existente
   * @param uuid - Identificador único del empleado
   * @param updateEmpleadoDto - DTO con los datos a actualizar
   * @returns El empleado actualizado
   */


  async updateEmpleado(uuid:string,updateEmpleadoDto:UpdateEmpleadoDto):Promise<EmpleadoEntity>{
    const empleado=await this.findEmpleadoByUuid(uuid);

    if(updateEmpleadoDto.empresa_id){
      const empresa=await this.empresaRepository.findOneBy({uuid: updateEmpleadoDto.empresa_id});

      if(!empresa){
        throw new NotFoundException(`Empresa con UUID ${updateEmpleadoDto.empresa_id} no encontrada`);

      }

      empleado.empresa=empresa;
    }


    //actualiza los datos del empleado
    Object.assign(empleado,updateEmpleadoDto);


    //hash de la contraseña si está presente en el DTO o no
    if(updateEmpleadoDto.password){
      const salt=await bcrypt.genSalt();
      empleado.password=await bcrypt.hash(updateEmpleadoDto.password,salt);
      
    }

    return await this.empleadoRepository.save(empleado);

  }



  /**
   * Elimina un empleado por uuid
   * @param uuid-identificador unico del empleado
   */
  async deleteEmpleado(uuid: string): Promise<void> {
    const empleado = await this.findEmpleadoByUuid(uuid);

    if (!empleado) {
      throw new NotFoundException(`Empleado con UUID ${uuid} no encontrado`);
    }

    await this.empleadoRepository.remove(empleado);
  }




  /**
   * compara contraseñas
   * @param plainPassword-contraseña que se proporciona
   * @param hashedPassword-contraseña que se guarda
   * @returns devuelve true si las contraseñas coinciden y false en caso de que no coincidan
   **/


  async comparePasswords(plainPassword:string,hashedPassword:string):Promise<boolean>{
    return bcrypt.compare(plainPassword,hashedPassword);
  }


  /**
   * lista a un empleado por empresa
   * @param empresaId-identificador único de la empresa
   * @returns lista de empleados asociados a la empresa
   */

  async findEmpleadosByEmpresa(empresaId:string):Promise<EmpleadoEntity[]>{

    const empleados=await this.empleadoRepository.find({
      where:{ empresa:{uuid:empresaId} },
      relations:['empresa'],
    });

    if(!empleados || empleados.length===0){
      throw new NotFoundException(`No se encontraron empleados para la empresa con UUID ${empresaId}`);
    }

    return empleados;
  }



}
