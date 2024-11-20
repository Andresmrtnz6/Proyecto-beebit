import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpresaEntity } from '../../../domain/entities/empresa/empresa.entity';
import { UpdateEmpresaDto } from '../../../infrastructure/controllers/empresa/dto/update_empresa.dto';

@Injectable()
export class UpdateEmpresa {
  constructor(
    @InjectRepository(EmpresaEntity)
    private readonly empresaRepository: Repository<EmpresaEntity>,
  ) {}

  async execute(uuid: string, updateEmpresaDto: UpdateEmpresaDto): Promise<EmpresaEntity> {
    const empresa = await this.empresaRepository.findOne({ where: { uuid } });

    if (!empresa) {
      throw new Error('Empresa no encontrada');
    }

    Object.assign(empresa, updateEmpresaDto);

    return this.empresaRepository.save(empresa);
  }
}
