import { DataSource } from 'typeorm';
import { EmpresaEntity } from '../../../domain/entities/empresa/empresa.entity';

export const EmpresaRepository = (dataSource: DataSource) =>
  dataSource.getRepository(EmpresaEntity).extend({
    async createEmpresa(
      empresaData: Partial<EmpresaEntity>,
    ): Promise<EmpresaEntity> {
      const empresa = this.create(empresaData);
      return await this.save(empresa);
    },

    async updateEmpresa(uuid: string, empresaData: Partial<EmpresaEntity>): Promise<EmpresaEntity> {
      const empresa = await this.findOne({ where: { uuid } }); // Cambiado de id a uuid
      if (!empresa) {
        throw new Error('Empresa no encontrada');
      }
      Object.assign(empresa, empresaData);
      return await this.save(empresa);
    },

    async findOneEmpresa(uuid: string): Promise<EmpresaEntity> {
      return await this.findOne({ where: { uuid } }); // Cambiado de id a uuid
    },

    async deleteEmpresa(uuid: string): Promise<void> {
      const empresa = await this.findOne({ where: { uuid } }); // Cambiado de id a uuid
      if (!empresa) {
        throw new Error('Empresa no encontrada');
      }
      await this.remove(empresa);
    },
  });
