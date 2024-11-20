import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpresaEntity } from '../../../domain/entities/empresa/empresa.entity';
import { CreateEmpresaDto } from '../../../infrastructure/controllers/empresa/dto/create_empresa.dto';
import { UpdateEmpresaDto } from '../../../infrastructure/controllers/empresa/dto/update_empresa.dto';
import { Repository } from 'typeorm';



@Injectable()
export class EmpresaService{


  constructor(
    @InjectRepository(EmpresaEntity)
    private readonly empresaRepository: Repository<EmpresaEntity>,
  ) {}



  //crea una nueva empresa
  async createEmpresa(createEmpresaDto:CreateEmpresaDto):Promise<EmpresaEntity>{
    const empresa=this.empresaRepository.create(createEmpresaDto);
    return await this.empresaRepository.save(empresa);

  }



  //muestra todas las empresas 
  async findAllEmpresas():Promise<EmpresaEntity[]> {
    return await this.empresaRepository.find();
  }




  //enceuentra una empresa por su uuid
  async findOneEmpresa(uuid:string):Promise<EmpresaEntity>{
    const empresa=await this.empresaRepository.findOne({where:{uuid}});
    if(!empresa){
      throw new NotFoundException(`Empresa con UUID ${uuid} no encontrada`);

    }
    return empresa;

  }




  // actualiza una empresa que ya existe
  async updateEmpresa(uuid:string,updateEmpresaDto:UpdateEmpresaDto):Promise<EmpresaEntity>{
    const empresa=await this.findOneEmpresa(uuid);
    Object.assign(empresa,updateEmpresaDto);
    return await this.empresaRepository.save(empresa);

  }




  //elimina una empresa por su uuid
  async deleteEmpresa(uuid:string):Promise<void>{

    const empresa=await this.findOneEmpresa(uuid);

    if(!empresa){
      throw new NotFoundException(`Empresa con UUID ${uuid} no encontrada`);
    }
    await this.empresaRepository.remove(empresa);

  }




}
