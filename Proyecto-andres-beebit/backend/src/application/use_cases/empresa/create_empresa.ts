import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from '../../../infrastructure/controllers/empresa/dto/create_empresa.dto';
import { EmpresaEntity } from '../../../domain/entities/empresa/empresa.entity';
import { ApiTags } from '@nestjs/swagger';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
@ApiTags('Empresa')
export class CreateEmpresa {
  constructor(
    @InjectRepository(EmpresaEntity) 
    private readonly empresaRepository: Repository<EmpresaEntity>
  ) {}

  async execute(createEmpresaDto: CreateEmpresaDto): Promise<EmpresaEntity> {
    const empresa = this.empresaRepository.create(createEmpresaDto);
    return await this.empresaRepository.save(empresa);
  }
}
