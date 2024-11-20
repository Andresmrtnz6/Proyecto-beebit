import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpresaEntity } from '../../../domain/entities/empresa/empresa.entity';

@Injectable()
export class FindEmpresa {
  constructor(
    @InjectRepository(EmpresaEntity)
    private readonly empresaRepository: Repository<EmpresaEntity>,
  ) {}

  async execute(uuid: string): Promise<EmpresaEntity> {
    const empresa = await this.empresaRepository.findOne({ where: { uuid } });

    if (!empresa) {
      throw new Error('Empresa no encontrada');
    }

    return empresa;
  }
}
