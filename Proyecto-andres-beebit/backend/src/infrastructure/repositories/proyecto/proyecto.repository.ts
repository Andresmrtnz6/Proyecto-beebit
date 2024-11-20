import { DataSource, Repository } from 'typeorm';
import { ProyectoEntity } from '../../../domain/entities/proyecto/proyecto.entity';

export const ProyectoRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(ProyectoEntity).extend({
    async createProyecto(proyectoData: Partial<ProyectoEntity>): Promise<ProyectoEntity> {
      const proyecto = this.create(proyectoData);
      return await this.save(proyecto);
    },

    async updateProyecto(uuid: string, proyectoData: Partial<ProyectoEntity>): Promise<ProyectoEntity> {
      const proyecto = await this.findOne({ where: { uuid } }); // Cambiado de id a uuid
      if (!proyecto) {
        throw new Error('Proyecto no encontrado');
      }
      Object.assign(proyecto, proyectoData);
      return await this.save(proyecto);
    },

    async findOneProyecto(uuid: string): Promise<ProyectoEntity> {
      return await this.findOne({ where: { uuid } }); // Cambiado de id a uuid
    },

    async deleteProyecto(uuid: string): Promise<void> {
      const proyecto = await this.findOne({ where: { uuid } }); // Cambiado de id a uuid
      if (!proyecto) {
        throw new Error('Proyecto no encontrado');
      }
      await this.remove(proyecto);
    },
  });
};
