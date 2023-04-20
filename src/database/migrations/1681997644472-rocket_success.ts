import { MigrationInterface, QueryRunner } from "typeorm";

export class RocketSuccess1681997644472 implements MigrationInterface {
    name = 'RocketSuccess1681997644472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" DROP CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68"`);
        await queryRunner.query(`ALTER TABLE "launch" ADD "success" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" ADD CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68" FOREIGN KEY ("crewManId") REFERENCES "crew_man"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" DROP CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68"`);
        await queryRunner.query(`ALTER TABLE "launch" DROP COLUMN "success"`);
        await queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" ADD CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68" FOREIGN KEY ("crewManId") REFERENCES "crew_man"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
