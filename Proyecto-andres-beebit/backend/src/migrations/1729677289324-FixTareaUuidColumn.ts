import { MigrationInterface, QueryRunner } from "typeorm";

export class FixTareaUuidColumn1729677289324 implements MigrationInterface {
    name = 'FixTareaUuidColumn1729677289324'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "proyecto" DROP CONSTRAINT "proyecto_empresa_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP CONSTRAINT "fk_proyecto"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP CONSTRAINT "fk_empleado"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "fk_empresa"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP CONSTRAINT "fk_empresa_staff"`);
        await queryRunner.query(`ALTER TABLE "proyecto" DROP CONSTRAINT "proyecto_pkey"`);
        await queryRunner.query(`ALTER TABLE "proyecto" DROP COLUMN "uuid"`);
        await queryRunner.query(`ALTER TABLE "proyecto" DROP COLUMN "fecha_inicio"`);
        await queryRunner.query(`ALTER TABLE "proyecto" DROP COLUMN "fecha_fin"`);
        await queryRunner.query(`ALTER TABLE "proyecto" DROP COLUMN "empresa_id"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP COLUMN "fechainicio"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP COLUMN "fechafin"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP COLUMN "proyecto_id"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP COLUMN "empleado_id"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "empleado_pkey"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "uuid"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "fechacontratacion"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "empresa_id"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP CONSTRAINT "staff_pkey"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP COLUMN "uuid"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP COLUMN "empresa_id"`);
        await queryRunner.query(`ALTER TABLE "empresa" DROP CONSTRAINT "empresa_pkey"`);
        await queryRunner.query(`ALTER TABLE "empresa" DROP COLUMN "uuid"`);
        await queryRunner.query(`ALTER TABLE "proyecto" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "proyecto" ADD CONSTRAINT "PK_589bf061fd654da7076e68e1699" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "proyecto" ADD "fechaInicio" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "proyecto" ADD "fechaFin" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "proyecto" ADD "empresaId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD "fechaInicio" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD "fechaFin" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD "proyectoId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD "empleadoId" uuid`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "PK_d15e7688d5ed23e9fdb570b2e5d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "fechaContratacion" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "empresaId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "staff" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "staff" ADD CONSTRAINT "PK_e4ee98bb552756c180aec1e854a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "staff" ADD "empresaId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empresa" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "empresa" ADD CONSTRAINT "PK_bee78e8f1760ccf9cff402118a6" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "proyecto" ALTER COLUMN "estado" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "staff" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "staff" ALTER COLUMN "puesto" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "staff" ALTER COLUMN "username" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "staff" ALTER COLUMN "password" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empresa" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empresa" ALTER COLUMN "telefono" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "proyecto" ADD CONSTRAINT "FK_d92091990290fec5abcf98256ba" FOREIGN KEY ("empresaId") REFERENCES "empresa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD CONSTRAINT "FK_2afa1a9f64adb52769a88b8bcf1" FOREIGN KEY ("proyectoId") REFERENCES "proyecto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD CONSTRAINT "FK_9666f8f34f904ed0c689ccbbf63" FOREIGN KEY ("empleadoId") REFERENCES "empleado"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "FK_d7ca17aadfa6ac12abaa516aebb" FOREIGN KEY ("empresaId") REFERENCES "empresa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "staff" ADD CONSTRAINT "FK_7c32234b5a54ad7a2a848a3e0d4" FOREIGN KEY ("empresaId") REFERENCES "empresa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "staff" DROP CONSTRAINT "FK_7c32234b5a54ad7a2a848a3e0d4"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "FK_d7ca17aadfa6ac12abaa516aebb"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP CONSTRAINT "FK_9666f8f34f904ed0c689ccbbf63"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP CONSTRAINT "FK_2afa1a9f64adb52769a88b8bcf1"`);
        await queryRunner.query(`ALTER TABLE "proyecto" DROP CONSTRAINT "FK_d92091990290fec5abcf98256ba"`);
        await queryRunner.query(`ALTER TABLE "empresa" ALTER COLUMN "telefono" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empresa" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "staff" ALTER COLUMN "password" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "staff" ALTER COLUMN "username" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "staff" ALTER COLUMN "puesto" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "staff" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "proyecto" ALTER COLUMN "estado" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empresa" DROP CONSTRAINT "PK_bee78e8f1760ccf9cff402118a6"`);
        await queryRunner.query(`ALTER TABLE "empresa" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP COLUMN "empresaId"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP CONSTRAINT "PK_e4ee98bb552756c180aec1e854a"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "empresaId"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "fechaContratacion"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "PK_d15e7688d5ed23e9fdb570b2e5d"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP COLUMN "empleadoId"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP COLUMN "proyectoId"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP COLUMN "fechaFin"`);
        await queryRunner.query(`ALTER TABLE "tarea" DROP COLUMN "fechaInicio"`);
        await queryRunner.query(`ALTER TABLE "proyecto" DROP COLUMN "empresaId"`);
        await queryRunner.query(`ALTER TABLE "proyecto" DROP COLUMN "fechaFin"`);
        await queryRunner.query(`ALTER TABLE "proyecto" DROP COLUMN "fechaInicio"`);
        await queryRunner.query(`ALTER TABLE "proyecto" DROP CONSTRAINT "PK_589bf061fd654da7076e68e1699"`);
        await queryRunner.query(`ALTER TABLE "proyecto" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "empresa" ADD "uuid" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empresa" ADD CONSTRAINT "empresa_pkey" PRIMARY KEY ("uuid")`);
        await queryRunner.query(`ALTER TABLE "staff" ADD "empresa_id" uuid`);
        await queryRunner.query(`ALTER TABLE "staff" ADD "uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "staff" ADD CONSTRAINT "staff_pkey" PRIMARY KEY ("uuid")`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "empresa_id" uuid`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "fechacontratacion" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "empleado_pkey" PRIMARY KEY ("uuid")`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD "empleado_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD "proyecto_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD "fechafin" date`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD "fechainicio" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "proyecto" ADD "empresa_id" uuid`);
        await queryRunner.query(`ALTER TABLE "proyecto" ADD "fecha_fin" date`);
        await queryRunner.query(`ALTER TABLE "proyecto" ADD "fecha_inicio" date`);
        await queryRunner.query(`ALTER TABLE "proyecto" ADD "uuid" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "proyecto" ADD CONSTRAINT "proyecto_pkey" PRIMARY KEY ("uuid")`);
        await queryRunner.query(`ALTER TABLE "staff" ADD CONSTRAINT "fk_empresa_staff" FOREIGN KEY ("empresa_id") REFERENCES "empresa"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "fk_empresa" FOREIGN KEY ("empresa_id") REFERENCES "empresa"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD CONSTRAINT "fk_empleado" FOREIGN KEY ("empleado_id") REFERENCES "empleado"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD CONSTRAINT "fk_proyecto" FOREIGN KEY ("proyecto_id") REFERENCES "proyecto"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "proyecto" ADD CONSTRAINT "proyecto_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "empresa"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
