import { DataSource } from 'typeorm';
import { TareaEntity } from '../../../domain/entities/tarea/tarea.entity';

export const TareaRepository = (dataSource: DataSource) => 
  dataSource.getRepository(TareaEntity).extend({
    // Crear una nueva tarea
    async createTarea(tareaData: Partial<TareaEntity>): Promise<TareaEntity> {
      const tarea = this.create(tareaData);
      return await this.save(tarea);
    },

    // Actualizar una tarea existente
    async updateTarea(
      uuid: string, // Cambiado de id a uuid
      tareaData: Partial<TareaEntity>,
    ): Promise<TareaEntity> {
      const tarea = await this.findOne({ where: { uuid } }); // Cambiado de id a uuid
      if (!tarea) {
        throw new Error('Tarea no encontrada');
      }

      Object.assign(tarea, tareaData);
      return await this.save(tarea);
    },

    // Buscar una tarea por su UUID
    async findOneTarea(uuid: string): Promise<TareaEntity> {
      return await this.findOne({ where: { uuid } }); // Cambiado de id a uuid
    },

    // Eliminar una tarea por su UUID
    async deleteTarea(uuid: string): Promise<void> {
      const tarea = await this.findOne({ where: { uuid } }); // Cambiado de id a uuid
      if (!tarea) {
        throw new Error('Tarea no encontrada');
      }
      await this.remove(tarea);
    },
  });
