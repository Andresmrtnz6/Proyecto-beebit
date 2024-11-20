import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProyectoEntity } from '../../../domain/entities/proyecto/proyecto.entity';
import { CreateProyectoDto } from '../../../infrastructure/controllers/proyecto/dto/create_proyecto.dto';
import { UpdateProyectoDto } from '../../../infrastructure/controllers/proyecto/dto/update_proyecto.dto';
import { EmpresaEntity } from '../../../domain/entities/empresa/empresa.entity';



@Injectable()
export class ProyectoService{


  constructor(
    @InjectRepository(ProyectoEntity)
    private readonly proyectoRepository: Repository<ProyectoEntity>,  

    @InjectRepository(EmpresaEntity)
    private readonly empresaRepository: Repository<EmpresaEntity>, 
  ) {}



  //crea un nuevo proyecto
  async createProyecto(createProyectoDto:CreateProyectoDto):Promise<ProyectoEntity>{
    // Verificar si la empresa existe antes de crear el proyecto
    const empresa=await this.empresaRepository.findOne({
      where:{uuid:createProyectoDto.empresa_id}, // Corregido el acceso a empresaId
    });

    if(!empresa){
      throw new NotFoundException(`Empresa con UUID ${createProyectoDto.empresa_id} no encontrada`);
    }

    const proyecto=this.proyectoRepository.create({
      ...createProyectoDto,
      empresa,  // Relación de empresa con el proyecto
    });

    return await this.proyectoRepository.save(proyecto);
  }




  //saca todos los proyectos
  async findAllProyectos():Promise<ProyectoEntity[]>{

    return await this.proyectoRepository.find({
      relations:['empresa'],
    });

  }



  //muestra un proyecto mediante su uuid
  async findOneProyecto(uuid:string):Promise<ProyectoEntity>{


    const proyecto=await this.proyectoRepository.findOne({
      where:{uuid},
      relations:['empresa'],
    });


    if(!proyecto){
      throw new NotFoundException(`Proyecto con UUID ${uuid} no encontrado`);
    }


    return proyecto;


  }




  //actualiza un proyecto que ya existe
  async updateProyecto(uuid:string,updateProyectoDto:UpdateProyectoDto):Promise<ProyectoEntity>{

    const proyecto=await this.findOneProyecto(uuid);
    Object.assign(proyecto,updateProyectoDto);
    return await this.proyectoRepository.save(proyecto);

  }



  //elimina un proyecto por su uuid
  async deleteProyecto(uuid: string):Promise<void>{

    const proyecto=await this.findOneProyecto(uuid);
    await this.proyectoRepository.remove(proyecto);

  }


  
}
