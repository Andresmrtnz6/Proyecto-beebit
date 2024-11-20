import { MigrationInterface, QueryRunner } from "typeorm";

export class NombreDeTuMigracion1730716366794 implements MigrationInterface {
    name = 'NombreDeTuMigracion1730716366794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "proyecto" DROP CONSTRAINT "fk_empresa_proyecto"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP CONSTRAINT "fk_proyecto"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP CONSTRAINT "fk_empleado"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "fk_empresa"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP CONSTRAINT "fk_empresa_staff"`);
        await queryRunner.query(`ALTER TABLE "proyecto" RENAME COLUMN "empresa_id" TO "empresaUuid"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP COLUMN "proyecto_id"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP COLUMN "empleado_id"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP COLUMN "empresa_id"`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD "proyectoUuid" uuid`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD "empleadoUuid" uuid`);
        await queryRunner.query(`ALTER TABLE "staff" ADD "empresaUuid" uuid`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "fechacontratacion"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "fechacontratacion" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "staff" ALTER COLUMN "puesto" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "proyecto" ADD CONSTRAINT "FK_b696db8598447db6619689bb249" FOREIGN KEY ("empresaUuid") REFERENCES "empresa"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD CONSTRAINT "FK_de171df7d9dd7ad4711a6e2a3c6" FOREIGN KEY ("proyectoUuid") REFERENCES "proyecto"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD CONSTRAINT "FK_f3f604023a3d7068f88511f9601" FOREIGN KEY ("empleadoUuid") REFERENCES "empleado"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "FK_c40582d7d83c3e0e7e240453195" FOREIGN KEY ("empresa_id") REFERENCES "empresa"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "staff" ADD CONSTRAINT "FK_78746616a86f28c2a19581f3042" FOREIGN KEY ("empresaUuid") REFERENCES "empresa"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "staff" DROP CONSTRAINT "FK_78746616a86f28c2a19581f3042"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "FK_c40582d7d83c3e0e7e240453195"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP CONSTRAINT "FK_f3f604023a3d7068f88511f9601"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP CONSTRAINT "FK_de171df7d9dd7ad4711a6e2a3c6"`);
        await queryRunner.query(`ALTER TABLE "proyecto" DROP CONSTRAINT "FK_b696db8598447db6619689bb249"`);
        await queryRunner.query(`ALTER TABLE "staff" ALTER COLUMN "puesto" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "fechacontratacion"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "fechacontratacion" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "staff" DROP COLUMN "empresaUuid"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP COLUMN "empleadoUuid"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP COLUMN "proyectoUuid"`);
        await queryRunner.query(`ALTER TABLE "staff" ADD "empresa_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD "empleado_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD "proyecto_id" uuid`);
        await queryRunner.query(`ALTER TABLE "proyecto" RENAME COLUMN "empresaUuid" TO "empresa_id"`);
        await queryRunner.query(`ALTER TABLE "staff" ADD CONSTRAINT "fk_empresa_staff" FOREIGN KEY ("empresa_id") REFERENCES "empresa"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "fk_empresa" FOREIGN KEY ("empresa_id") REFERENCES "empresa"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD CONSTRAINT "fk_empleado" FOREIGN KEY ("empleado_id") REFERENCES "empleado"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD CONSTRAINT "fk_proyecto" FOREIGN KEY ("proyecto_id") REFERENCES "proyecto"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "proyecto" ADD CONSTRAINT "fk_empresa_proyecto" FOREIGN KEY ("empresa_id") REFERENCES "empresa"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
