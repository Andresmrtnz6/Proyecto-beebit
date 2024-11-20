import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EmpresaEntity } from '../../../domain/entities/empresa/empresa.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeleteEmpresa {
  constructor(
    @InjectRepository(EmpresaEntity)
    private readonly empresaRepository: Repository<EmpresaEntity>, // Usa Repository<EmpresaEntity> como tipo
  ) {}

  async execute(uuid: string): Promise<void> {
    const empresa = await this.empresaRepository.findOne({ where: { uuid } });
    if (!empresa) {
      throw new Error('Empresa no encontrada');
    }
    await this.empresaRepository.delete(uuid);
  }
}
