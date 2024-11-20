import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TareaEntity } from '../../../domain/entities/tarea/tarea.entity';
import { CreateTareaDto } from '../../../infrastructure/controllers/tarea/dto/create_tarea.dto';
import { UpdateTareaDto } from '../../../infrastructure/controllers/tarea/dto/update_tarea.dto';
import { ProyectoEntity } from '../../../domain/entities/proyecto/proyecto.entity';
import { EmpleadoEntity } from '../../../domain/entities/empleado/empleado.entity';
import { Repository } from 'typeorm';



@Injectable()
export class TareaService{

    constructor(
        @InjectRepository(TareaEntity)
        private readonly tareaRepository: Repository<TareaEntity>, 
        
        @InjectRepository(ProyectoEntity)
        private readonly proyectoRepository: Repository<ProyectoEntity>, 
        
        @InjectRepository(EmpleadoEntity)
        private readonly empleadoRepository: Repository<EmpleadoEntity>, 
      ) {}


  //crea una nueva tarea
  async createTarea(createTareaDto:CreateTareaDto):Promise<TareaEntity>{

    const proyecto=await this.proyectoRepository.findOne({
      where:{uuid:createTareaDto.proyecto_id},
    });


    if (!proyecto) {
      throw new NotFoundException(`Proyecto con UUID ${createTareaDto.proyecto_id} no encontrado`);
    }


    const empleado=await this.empleadoRepository.findOne({
      where:{uuid:createTareaDto.empleado_id},
    });


    if(!empleado){
      throw new NotFoundException(`Empleado con UUID ${createTareaDto.empleado_id} no encontrado`);
    }

    const tarea=this.tareaRepository.create({
      ...createTareaDto,
      proyecto,
      empleado,
    });

    return await this.tareaRepository.save(tarea);


  }

  //obtener todas las tareas
  async findAllTareas():Promise<TareaEntity[]>{
    return await this.tareaRepository.find({
      relations:['proyecto','empleado'],
    });
  }

  //obtener una tarea por uuid
  async findOneTarea(uuid:string):Promise<TareaEntity>{

    const tarea=await this.tareaRepository.findOne({
      where:{uuid},
      relations:['proyecto','empleado'],
    });

    if(!tarea){
      throw new NotFoundException(`Tarea con UUID ${uuid} no encontrada`);
    }

    return tarea;

  }

  //actualizar una tarea
  async updateTarea(uuid:string,updateTareaDto:UpdateTareaDto):Promise<TareaEntity>{

    const tarea=await this.findOneTarea(uuid);

    if(updateTareaDto.proyecto_id){
      const proyecto=await this.proyectoRepository.findOne({
        where:{uuid:updateTareaDto.proyecto_id },
      });


      if(!proyecto){
        throw new NotFoundException(`Proyecto con UUID ${updateTareaDto.proyecto_id} no encontrado`);
      }
      tarea.proyecto=proyecto;
    }

    if (updateTareaDto.empleado_id){

      const empleado=await this.empleadoRepository.findOne({
        where:{uuid:updateTareaDto.empleado_id},
      });

      if(!empleado){
        throw new NotFoundException(`Empleado con UUID ${updateTareaDto.empleado_id} no encontrado`);
      }
      tarea.empleado=empleado;

    }

    Object.assign(tarea,updateTareaDto);
    return await this.tareaRepository.save(tarea);
  }

  //elimina una tarea
  async deleteTarea(uuid:string):Promise<void>{

    const tarea=await this.findOneTarea(uuid);

    if(!tarea){
      throw new NotFoundException(`Tarea con UUID ${uuid} no encontrada`);
    }

    await this.tareaRepository.remove(tarea);
  }


}
