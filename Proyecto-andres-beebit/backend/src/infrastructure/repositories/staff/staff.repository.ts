import { DataSource } from 'typeorm';
import { StaffEntity } from '../../../domain/entities/staff/staff.entity';

export const StaffRepository = (dataSource: DataSource) =>
  dataSource.getRepository(StaffEntity).extend({
    findByEmail(email: string): Promise<StaffEntity | undefined> {
      return this.findOne({ where: { email } });
    },

    async findByUsernameOrEmail(usernameOrEmail: string): Promise<StaffEntity | undefined> {
      return await this.createQueryBuilder('empleado')
          .where('empleado.email = :usernameOrEmail', { usernameOrEmail })
          .orWhere('empleado.username = :usernameOrEmail', { usernameOrEmail })
          .getOne();
    },
  

    // Crear un nuevo miembro del staff
    async createStaff(
      nombre: string,
      apellidos: string,
      email: string,
      telefono: string,
      puesto: string,
    ): Promise<StaffEntity> {
      const staff = this.create({
        nombre,
        apellidos,
        email,
        telefono,
        puesto,
      });
      return await this.save(staff);
    },

    // Actualizar un miembro del staff existente
    async updateStaff(
      uuid: string, // Cambiado de id a uuid
      nombre: string,
      apellidos: string,
      email: string,
      telefono: string,
      puesto: string,
    ): Promise<StaffEntity> {
      const staff = await this.findOne({
        where: { uuid }, // Cambiado de id a uuid
      });
      if (!staff) {
        throw new Error('Staff no encontrado');
      }

      staff.nombre = nombre;
      staff.apellidos = apellidos;
      staff.email = email;
      staff.telefono = telefono;
      staff.puesto = puesto;

      return await this.save(staff);
    },

    // Buscar un miembro del staff por su UUID
    async findOneStaff(uuid: string): Promise<StaffEntity> {
      return await this.findOne({
        where: { uuid }, // Cambiado de id a uuid
      });
    },

    // Eliminar un miembro del staff por su UUID
    async deleteStaff(uuid: string): Promise<void> {
      const staff = await this.findOne({ where: { uuid } });
      if (!staff) {
        throw new Error('Staff no encontrado');
      }
      await this.remove(staff);
    },
  });
